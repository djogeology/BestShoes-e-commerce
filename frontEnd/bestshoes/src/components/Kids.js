// Kids.js
import React, { useEffect , useState} from 'react';
import ProductCard from './ProductCard';
import Sidebar from './Sidebar';
import ProductDetails from './ProductDetails';
import './CategoryPage.css';
import axios from 'axios';

const Kids = ({onAddToCart}) => {
  const [products,setProducts]=useState([]);
  const [productFiltred,setProductFiltred]=useState([]);
  const [filtredBy,setFiltredBy]=useState([]);
  const [filterTrigger,setFilterTrigger]=useState();
  const [selectedProduct, setSelectedProduct] = useState(null);
  useEffect(()=>{
  axios.get('http://localhost:3000/api/products/category/Kids')
  .then(response=>{
  setProducts(response.data)
  setProductFiltred(response.data)
  })
  .catch(err=>{
    console.log(err);
  })
},[])
  useEffect(() => {
    if (filterTrigger) {
      setFiltredBy((prevFilters) => [...prevFilters, filterTrigger]);
    }
  }, [filterTrigger]);

  useEffect(() => {
    if (filtredBy.length === 0) {
      setProductFiltred(products);
    } else {
      const RecFilter = function (filters, i = 0, data = products) {
        if (i === filters.length) {
          return data;
        }

        let key = Object.keys(filters[i])[0];
        let value = filters[i][key];
        if (key === "size") {

          data = data.filter(product => product[key].includes(+value));
        } 
        else if(key === "price"){
          data = data.filter(product => extractNumbers(value)[0] <= parseFloat(product[key].replace(/[^0-9.-]+/g,"")) && parseFloat(product[key].replace(/[^0-9.-]+/g,"")) <= extractNumbers(value)[1] );
        }
        else {
          data = data.filter(product => product[key] === +value);
          console.log(data)
        }
        return RecFilter(filters, i + 1, data);
      };

      setProductFiltred(RecFilter(filtredBy));
    }
  }, [filtredBy, products]);
  function extractNumbers(range) {
    // Use a regular expression to find all numeric values in the string
    const numbers = range.match(/\d+/g);
    // Convert the array of strings to an array of numbers
    return numbers ? numbers.map(Number) : [];
  }

const handleProductClick = (product) => {
  setSelectedProduct(product);
};

const handleBack = () => {
  setSelectedProduct(null);
};
const handleAddToCart = (product) => {
  onAddToCart(product);
};
return (
  <div className="category-page">
    {selectedProduct ? (
      <ProductDetails product={selectedProduct} onBack={handleBack} onAddToCart={handleAddToCart} />
    ) : (
      <>
      <h1>Kids' Shoes</h1>
      <div className="category-content">
        <Sidebar filtred={setFilterTrigger} allFilters={filtredBy} setAll={setFiltredBy}/>
        <div className="product-grid">
            {productFiltred.map(product => (
            <ProductCard key={product.id} product={product} onProductClick={handleProductClick}  />
        ))}
      </div>
      </div>
      </>
      )}
    </div>
  );
};

export default Kids;
