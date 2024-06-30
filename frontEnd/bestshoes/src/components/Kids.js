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
  if (!filtredBy || filtredBy.length===0) {
    setProductFiltred(products);
  } else {
    const RecFilter = function(filters, i = 0, data = products) {
      if (i === filters.length) {
        return data;
      }
    
      let key = Object.keys(filters[i])[0];
      let value = filters[i][key];
      if(key==="size"){
        let filteredProducts = data.filter(product => {
          return product[key].includes(+value);
        });
        data = filteredProducts;
        return RecFilter(filters, i + 1, data);
      }
      else{
        let filteredProducts = data.filter(product => {
          return product[key]===(+value);
        });
        data = filteredProducts;
        return RecFilter(filters, i + 1, data);
      }
    };
    
    setProductFiltred(RecFilter(filtredBy))
    

  }
}, [filtredBy, products]);

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
        <Sidebar filtred={setFilterTrigger}/>
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
