CREATE SCHEMA IF NOT EXISTS `shoes`;
USE `shoes`;

CREATE TABLE IF NOT EXISTS `users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `fullname` VARCHAR(50) NOT NULL,
  `username` VARCHAR(50) NOT NULL,
  `password` VARCHAR(50) NOT NULL,
  `email` VARCHAR(250) NOT NULL UNIQUE,
  `Adress` TEXT NOT NULL,
  `phone` INT NOT NULL,
  `image`    TEXT  NOT NULL,
  PRIMARY KEY (`id`)
);
CREATE TABLE IF NOT EXISTS `admins` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(50) NOT NULL,
  `password` VARCHAR(50) NOT NULL,
    `image`    TEXT  NOT NULL,
  PRIMARY KEY (`id`)
);
CREATE TABLE IF NOT EXISTS `categories` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(50) NOT NULL,
  `image` TEXT NOT NULL,
  PRIMARY KEY (`id`)
);
CREATE TABLE IF NOT EXISTS `styles` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(50) NOT NULL,
  `image` TEXT NOT NULL,
  PRIMARY KEY (`id`)
);
CREATE TABLE IF NOT EXISTS `brands` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(50) NOT NULL,
  `logo` TEXT NOT NULL,
  PRIMARY KEY (`id`)
);
CREATE TABLE IF NOT EXISTS `products` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(50) NOT NULL,
    `price` DECIMAL(10,2) NOT NULL,
    `description` TEXT NOT NULL,
    `image` JSON NOT NULL,
    `size` JSON NOT NULL,
    `quantity` INT NOT NULL,
    `state` VARCHAR(50) NOT NULL,
    `category_id` INT NOT NULL,
    `style_id` INT NOT NULL,
    `brand_id` INT NOT NULL,
    `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (`id`),
    FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`),
    FOREIGN KEY (`style_id`) REFERENCES `styles` (`id`),
    FOREIGN KEY (`brand_id`) REFERENCES`brands` (`id`)
);
 INSERT INTO `brands` (id, name, logo)
 VALUES
 ( 'Nike', 'https://fbi.cults3d.com/uploaders/12999226/illustration-file/433aadb8-bb64-4b2a-88fa-84ba26c55814/309342364_123949997099727_5431565022481819547_n.jpg'),
 ( 'Adidas', 'https://www.shutterstock.com/image-photo/queenstown-singapore-march-11-2024-600nw-2435834739.jpg'),
 ( 'Puma', 'https://www.shutterstock.com/image-vector/puma-icon-logo-symbol-sign-260nw-2411086895.jpg'),
 ('Under Armour', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJTAeMm3jde0vTCN5B9-GkTjBRvc_y71kjcA&s'),
 ('Reebok', 'https://kreafolk.com/cdn/shop/articles/reebok-logo-design-history-and-evolution-kreafolk_7b82f855-910c-4e4f-9353-a244667028de.jpg?v=1717725077&width=2048'),
 ('New Balance', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzIk9t4lZ2qvK525uDpH63Pcyy6KE60qCpaQ&s'),
 ('Asics', 'https://https://logos-world.net/wp-content/uploads/2020/03/ASICS-Symbol.jpg'),
 ('Skechers', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyhHRhhCB4pRIMtzAmyd9S2D5LRtqiTvO10w&s');


INSERT INTO `categories` (id, name, image)
VALUES
 (1, 'Men', 'https://www.blackstonefootwear.com/thumbnail/38/1b/3a/1715353028/ss24-category-men-general_1920x1920.jpg'),
 (2, 'Women', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi4BRAF9cITX06AkhbFklBw3r2MLtTdvTuVw&s'),
 (3, 'kids', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAYGhFlRA-JUYpA5dEH3uxZsJzNQAi2TbdiA&s');


  INSERT INTO `styles` (id, name, image)
    VALUES
    ('Sneakers', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHLLTBbrBcYYkglGYPti86DY0qk05pGmgSmQ&s'),
    ('Boots', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZVPnSYD3gKeSzpNQpU4e29T2KI7Bp_KpAkg&s'),
    ('Sandals', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyQF2JbZ-AL6Erco1pkY9thoDvQUxkl9B5WA&s'),
    ('Loafers', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4l-illDxwoy3i52ZY59jWnz5-UwKzv0ZrDQ&s'),
    ('Dress Shoes', 'https://www.shutterstock.com/image-photo/this-picture-mens-formal-dress-260nw-2318397285.jpg'),
    ('Slippers', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXGstNS5sdtIYBu7z-yPaqZodly-gmX2mfJw&s'),
    ('Cleats', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZp_09Js-fIYoIe_OHYq9so5pAMIqlEYgsXw&s'),
    ('Running', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYR8u9QxYkwYnaIfM0AifGVREri3CmBcGeiQ&s'),
    ('Basketball', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd2cwpEmHHCFaGHTwCEVbdS6Vw3ms4sMwedA&s'),
    ('Casual', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCf5bB-zUx-Omsuq727ghZ7IGw3V64Jrp1AQ&s'),
    ('Outdoor', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF4ZD1eVDR1o7n6JZxX5Gifw6aaEa_u5fpwA&s'),
    ('Training', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPmnRJWIJT8pr4BD1AD_MEeyfYtmBAWixK8A&s');



INSERT INTO `products` (name, price, description, image, size, quantity, state, category_id, style_id, brand_id, created_at)
VALUES
  ('Nike Air Zoom Pegasus', 120.00, 'A versatile running shoe with responsive cushioning.', '["https://cdn.shopify.com/s/files/1/0603/3031/1875/files/main-square_b2a91fed-f698-4281-b0e0-2171a29bee7b_x480.jpg?v=1708690856","https://cdn.shopify.com/s/files/1/0603/3031/1875/files/main-square_dbaa7b93-5ecd-43ba-a4e4-3051666890cd_x480.jpg?v=1708360774","https://cdn.shopify.com/s/files/1/0603/3031/1875/files/main-square_592de726-1a27-4b18-80e6-6d00343ce7ab_x480.jpg?v=1708683582","https://cdn.shopify.com/s/files/1/0603/3031/1875/files/main-square_05db3db7-cf39-451b-a1da-5a9917328d5b_x480.jpg?v=1708681931","https://cdn.shopify.com/s/files/1/0603/3031/1875/files/main-square_c5f0b928-e88b-4524-89c9-c6343cb8c6c0_x480.jpg?v=1708683002"]', '[40,41,42,43,44]', 50, 'Available', 1, 1, 1, '2024-06-24 00:00:00'),
  ('Nike Air Zoom Pegasus', 90.00, 'A versatile running shoe with responsive cushioning.', '["https://cdn.shopify.com/s/files/1/0603/3031/1875/files/main-square_3a3b63c3-dd8c-44e6-bfea-9fdf9a1b610e_x480.jpg?v=1708360605","https://cdn.shopify.com/s/files/1/0603/3031/1875/files/main-square_ace5221c-a726-45b4-9673-022a0534b08c_x480.jpg?v=1717484040","https://cdn.shopify.com/s/files/1/0603/3031/1875/files/main-square_491028a3-343a-455b-8de6-5b2b54d2e197_x480.jpg?v=1708784307","https://cdn.shopify.com/s/files/1/0603/3031/1875/files/main-square_73eb8d29-8161-4551-a74d-e83cb2522588_x480.jpg?v=1708784307"]', '[35,36,37,38,39,40]', 42, 'Available', 2, 1, 1, '2024-06-24 00:00:00'),
  ('Adidas Ultraboost', 180.00, 'High-performance running shoe with Boost cushioning.', '["https://cdn.shopify.com/s/files/1/0603/3031/1875/products/main-square_2a1c93a7-43be-444c-a57b-6c212c43a185_x480.jpg?v=1694130215","https://cdn.shopify.com/s/files/1/0603/3031/1875/products/main-square_8e47c1a8-c41b-454a-8ce6-1affa4ebe672_x480.jpg?v=1695117792","https://cdn.shopify.com/s/files/1/0603/3031/1875/files/main-square_a4add0bb-d2b0-4e6e-b03d-640256f2e819_x480.jpg?v=1706524984","https://cdn.shopify.com/s/files/1/0603/3031/1875/products/main-square_91d1cb9b-1267-4a95-8482-d0323c8460dd_x480.jpg?v=1695386610","https://cdn.shopify.com/s/files/1/0603/3031/1875/files/main-square_a4add0bb-d2b0-4e6e-b03d-640256f2e819_x480.jpg?v=1706524984"]', '[40,41,42,43,44]', 30, 'Available', 1, 1, 2, '2024-06-24 00:00:00'),
  ('Adidas Ultraboost', 120.00, 'High-performance running shoe with Boost cushioning.', '["https://cdn.shopify.com/s/files/1/0603/3031/1875/products/main-square_5ef3cbe7-21ff-4ab6-a8f5-d3272cc42988_x480.jpg?v=1695299980","https://cdn.shopify.com/s/files/1/0603/3031/1875/products/main-square_f594b7a9-eb64-4a2a-8e56-0655d9a679ed_x480.jpg?v=1695628855","https://cdn.shopify.com/s/files/1/0603/3031/1875/products/main-square_0231a3d8-1b17-4147-87f9-c40c1e43d467_x480.jpg?v=1695612713","https://cdn.shopify.com/s/files/1/0603/3031/1875/products/main-square_a973d1db-6a37-4122-93ba-9023979eadab_x480.jpg?v=1694133786"]', '[32,33,34,35,36]', 12, 'Available', 3, 1, 2, '2024-06-24 00:00:00'),
  ('Puma Clyde', 110.00, 'Basketball shoe inspired by classic court style.', '["https://cdn.shopify.com/s/files/1/0603/3031/1875/products/main-square_67af6508-021f-451c-9ff3-3a2c78894a62_x480.jpg?v=1695265639","https://cdn.shopify.com/s/files/1/0603/3031/1875/files/main-square_4445a9de-86bd-417b-9ae8-8a9fa8512b41_x480.jpg?v=1708082502","https://cdn.shopify.com/s/files/1/0603/3031/1875/products/main-square_991e36f5-4ae6-43c2-99e6-8e6d1bfef7ab_x480.jpg?v=1693883593","https://cdn.shopify.com/s/files/1/0603/3031/1875/products/main-square_991e36f5-4ae6-43c2-99e6-8e6d1bfef7ab_x480.jpg?v=1693883593","https://cdn.shopify.com/s/files/1/0603/3031/1875/files/main-square_2ee66d70-39d8-4e0a-bf35-94262c802a20_x480.jpg?v=1716197274"]', '[40,41,42,43,44]', 20, 'Available', 1, 1, 3, '2024-06-24 00:00:00'),
  ('Puma Clyde', 110.00, 'Basketball shoe inspired by classic court style.', '["https://cdn.shopify.com/s/files/1/0603/3031/1875/products/main-square_11f03759-f736-414d-987b-483627ac75f8_x480.jpg?v=1690362362","https://cdn.shopify.com/s/files/1/0603/3031/1875/files/main-square_d2208782-5ea4-4c11-9368-a1c8f4e97534_x480.jpg?v=1706513135","https://cdn.shopify.com/s/files/1/0603/3031/1875/files/main-square_b95a8a53-78a2-4674-bb7f-db9471004392_x480.jpg?v=1706513204"]', '[36,37,38]', 20, 'Not Available', 2, 1, 3, '2024-06-24 00:00:00'),
  ('Under Armour HOVR Phantom', 140.00, 'Comfortable and stylish running shoe with HOVR technology.', '["https://cdn.shopify.com/s/files/1/0603/3031/1875/products/main-square_2bdc0326-ddd3-40f4-bf18-2f278d733524_x480.jpg?v=1695289778","https://cdn.shopify.com/s/files/1/0603/3031/1875/products/main-square_566a127e-d404-4383-a377-08e309866192_x480.jpg?v=1693883944","https://cdn.shopify.com/s/files/1/0603/3031/1875/products/main-square_88c9c3d2-8a14-4783-a7e6-6b3b3dff7d02_x480.jpg?v=1693471565","https://cdn.shopify.com/s/files/1/0603/3031/1875/products/main-square_8ae59a9b-8a9d-4d3e-bb2a-0b1a2e0be4b4_x480.jpg?v=1693549153"]', '[40,41,42,43,44]', 12, 'Not Available', 3, 1, 4, '2024-06-24 00:00:00'),
  ('Under Armour HOVR Phantom', 110.00, 'Comfortable and stylish running shoe with HOVR technology.', '["https://cdn.shopify.com/s/files/1/0603/3031/1875/products/main-square_7f92b85c-955c-4f3e-aeab-0a6da1e799ab_x480.jpg?v=1693967359","https://cdn.shopify.com/s/files/1/0603/3031/1875/files/main-square_da11de6d-a955-4ee5-82db-6c3f62d335d6_x480.jpg?v=1708074394","https://cdn.shopify.com/s/files/1/0603/3031/1875/products/main-square_2ac7211a-6aa1-436b-9dc1-0fe6666114a1_x480.jpg?v=1695212668"]', '[36,37,38,39]', 38, 'Available', 2, 1, 4, '2024-06-24 00:00:00'),
  ('Under Armour HOVR Phantom', 90.00, 'Comfortable and stylish running shoe with HOVR technology.', '["https://cdn.shopify.com/s/files/1/0603/3031/1875/files/main-square_c907b169-dc94-4564-80e5-6b3e6f758dd3_x480.jpg?v=1706497514","https://cdn.shopify.com/s/files/1/0603/3031/1875/files/main-square_4c5be750-0954-491a-bee4-081f751067d6_x480.jpg?v=1708412097","https://cdn.shopify.com/s/files/1/0603/3031/1875/files/main-square_4b31cde9-18ba-40be-bfd0-3bc31ad8701f_x480.jpg?v=1708412058"]', '[34,35,36]', 25, 'Not Available', 3, 1, 4, '2024-06-24 00:00:00'),
  ('Reebok Classic Leather', 75.00, 'Iconic casual sneaker with a retro look.', '["https://cdn.shopify.com/s/files/1/0603/3031/1875/products/main-square_afab54b8-2ae7-4d88-a68e-8e558331a18c_x480.jpg?v=1693909613","https://cdn.shopify.com/s/files/1/0603/3031/1875/files/main-square_a95710c3-4f96-4a06-9fee-30eee69e2ea8_x480.jpg?v=1706255994","https://cdn.shopify.com/s/files/1/0603/3031/1875/products/main-square_62932abc-5775-4a9c-b61c-977e004d1dad_x480.jpg?v=1693967930","https://cdn.shopify.com/s/files/1/0603/3031/1875/files/main-square_b673260e-e041-40e0-ae47-34a55027d82d_x480.jpg?v=1708316141"]', '[40,41,42,43,44]', 60, 'Available', 1, 1, 5, '2024-06-24 00:00:00'),
  ('Reebok Classic Leather', 55.00, 'Iconic casual sneaker with a retro look.', '["https://cdn.shopify.com/s/files/1/0603/3031/1875/files/main-square_ca8afdbc-e281-4677-96fd-8153c80bb58d_x480.jpg?v=1707938222","https://cdn.shopify.com/s/files/1/0603/3031/1875/products/main-square_c45c8460-aefe-4983-9db5-42a97b5b10d1_x480.jpg?v=1688282346","https://cdn.shopify.com/s/files/1/0603/3031/1875/products/main-square_3cde5197-84c7-4909-bc00-1bdb7c46372f_x480.jpg?v=1689879208","https://cdn.shopify.com/s/files/1/0603/3031/1875/files/main-square_83b8800c-5c69-4c9c-bce4-d2d6ce8c3d48_x480.jpg?v=1706092358"]', '[32,33,34,35,35]', 60, 'Available', 3, 1, 5, '2024-06-24 00:00:00'),
  ('New Balance 990v5', 175.00, 'Premium running shoe with exceptional support and cushioning.', '["https://cdn.shopify.com/s/files/1/0603/3031/1875/files/july-2019-242_C3_83_C2_A6_C3_82_C2_8B_C3_82_C2_B7_C3_83_C2_A8_C3_82_C2_B2_C3_82_C2_9D-square_770e401b-7e54-4ff3-92af-8efb9b6d6701_x480.jpg?v=1718100939","https://cdn.shopify.com/s/files/1/0603/3031/1875/files/main-square_19bba6ab-a403-4925-8fca-81ef97d16462_x480.jpg?v=1706601155","https://cdn.shopify.com/s/files/1/0603/3031/1875/products/main-square_a6703e0d-5595-4954-ac39-0bd5492ab51e_x480.jpg?v=1695354054","https://cdn.shopify.com/s/files/1/0603/3031/1875/files/main-square_04b857b1-75a0-444a-bf10-f4ad47983472_x480.jpg?v=1706174519","https://cdn.shopify.com/s/files/1/0603/3031/1875/files/main-square_10f85856-b700-47c0-a6aa-6d228cff1938_x480.jpg?v=1708422272"]', '[40,41,42,43,44]', 40, 'Available', 1, 1, 6, '2024-06-24 00:00:00'),
  ('New Balance 990v5', 145.00, 'Premium running shoe with exceptional support and cushioning.', '["https://cdn.shopify.com/s/files/1/0603/3031/1875/products/main-square_c7d60aee-4204-4eed-a8fb-9523a31e8fb3_x480.jpg?v=1695375433","https://cdn.shopify.com/s/files/1/0603/3031/1875/products/main-square_5d9b9a6e-bb5d-4d0f-a34b-2bc08c317fe5_x480.jpg?v=1695375439","https://cdn.shopify.com/s/files/1/0603/3031/1875/products/main-square_3f4dc61a-7680-4118-ab58-b700f0259f81_x480.jpg?v=1695370645","https://cdn.shopify.com/s/files/1/0603/3031/1875/files/main-square_8675c518-9b1d-44ab-aa47-3d9f204788f8_x480.jpg?v=1708421929"]', '[35,36,37,38,39]', 40, 'Available', 2, 1, 6, '2024-06-24 00:00:00'),
  ('New Balance 990v5', 115.00, 'Premium running shoe with exceptional support and cushioning.', '["https://cdn.shopify.com/s/files/1/0603/3031/1875/products/main-square_1528fc99-7432-4b9e-8c8f-e57383fae626_x480.jpg?v=1695376416","https://cdn.shopify.com/s/files/1/0603/3031/1875/products/main-square_031b8fcc-8faa-44f5-97c2-6f079c3f45d7_x480.jpg?v=1695376422","https://cdn.shopify.com/s/files/1/0603/3031/1875/files/main-square_dcd82689-7113-44fb-9c89-4f56f9258821_x480.jpg?v=1704693043","https://cdn.shopify.com/s/files/1/0603/3031/1875/products/main-square_b0c05191-85e5-45ef-8884-00cd837d94dd_x480.jpg?v=1695216355","https://cdn.shopify.com/s/files/1/0603/3031/1875/files/main-square_8c97ea84-326b-40bf-8e08-8b0d0115d0ee_x480.jpg?v=1708403760"]', '[32,33,34,35]', 40, 'Available', 3, 1, 6, '2024-06-24 00:00:00'),
  ('Asics Gel-Kayano 27', 160.00, 'Stability running shoe with excellent cushioning.', '["https://cdn.shopify.com/s/files/1/0603/3031/1875/products/main-square_5a7b13fe-190b-439f-acfe-c6c72da0c596_x480.jpg?v=1695895615","https://cdn.shopify.com/s/files/1/0603/3031/1875/files/main-square_31983937-597c-407c-8639-9fc72559acd4_x480.jpg?v=1706599074","https://cdn.shopify.com/s/files/1/0603/3031/1875/products/main-square_a3ad44db-3468-4161-a612-42b873440578_x480.jpg?v=1695372166","https://cdn.shopify.com/s/files/1/0603/3031/1875/products/main-square_fcf64581-2e79-45a2-8b18-7ce4b6801a77_x480.jpg?v=1695352555","https://cdn.shopify.com/s/files/1/0603/3031/1875/products/main-square_1643a0eb-424b-4f03-91b5-c981967f452a_x480.jpg?v=1695353901"]', '[40,41,42,43,44]', 35, 'Available', 1, 1, 7, '2024-06-24 00:00:00'),
  ('Asics Gel-Kayano 27', 135.00, 'Stability running shoe with excellent cushioning.', '["https://cdn.shopify.com/s/files/1/0603/3031/1875/products/main-square_d6b6615e-888b-4a5f-9085-06c37d91db51_x480.jpg?v=1693986826","https://cdn.shopify.com/s/files/1/0603/3031/1875/files/main-square_4070bad8-b329-4a2f-95eb-83354200bc0e_x480.jpg?v=1706524734","https://cdn.shopify.com/s/files/1/0603/3031/1875/products/main-square_a08960ba-2213-4c2c-8377-d00259679f0c_x480.jpg?v=1695353692","https://cdn.shopify.com/s/files/1/0603/3031/1875/files/main-square_be54bb6d-bba5-4f7e-b79e-aaa8987e81f5_x480.jpg?v=1706528759","https://cdn.shopify.com/s/files/1/0603/3031/1875/products/main-square_268c7125-171f-4d57-9f36-1a77f2234a6a_x480.jpg?v=1695612692"]', '[35,36,37,38,39]', 35, 'Available', 2, 1, 7, '2024-06-24 00:00:00'),
  ('Asics Gel-Kayano 27', 120.00, 'Stability running shoe with excellent cushioning.', '["https://cdn.shopify.com/s/files/1/0603/3031/1875/files/main-square_516c2815-6ff6-4091-8d31-c0c5e15043b4_x480.jpg?v=1708420608","https://cdn.shopify.com/s/files/1/0603/3031/1875/files/main-square_8a8d74d0-b5e6-4ac7-bd11-3e31d3bb944b_x480.jpg?v=1708416268","https://cdn.shopify.com/s/files/1/0603/3031/1875/files/main-square_1bca22a9-9111-4e75-85a1-51a88e009a1c_x480.jpg?v=1707934073","https://cdn.shopify.com/s/files/1/0603/3031/1875/files/main-square_6105461e-fe35-4c8f-89b6-69a1910a3b5e_x480.jpg?v=1706527810"]', '[32,33,34,35,36]', 35, 'Available', 3, 1, 7, '2024-06-24 00:00:00'),
  ('Skechers Go Walk 5', 65.00, 'Lightweight and comfortable walking shoe.', '["https://cdn.shopify.com/s/files/1/0603/3031/1875/products/main-square_a555af81-dbd2-4722-b1a4-b1b25564b4f7_x480.jpg?v=1695133076","https://cdn.shopify.com/s/files/1/0603/3031/1875/files/main-square_5accfde8-689e-41b9-9e5d-614c5cd0b07c_x480.png?v=1700463589","https://cdn.shopify.com/s/files/1/0603/3031/1875/files/main-square_26938bb8-b25c-4904-be63-76f1125cda43_x480.jpg?v=1700463878","https://cdn.shopify.com/s/files/1/0603/3031/1875/files/main-square_45f04d45-0e70-4ee3-8307-1d2ad40be019_x480.jpg?v=1705654402"]', '[40,41,42,43,44]', 45, 'Available', 1, 1, 8, '2024-06-24 00:00:00'),
  ('Skechers Go Walk 5', 60.00, 'Lightweight and comfortable walking shoe.', '["https://cdn.shopify.com/s/files/1/0603/3031/1875/files/main-square_99246b9f-dcfd-4a77-8045-2e40803628a7_x480.jpg?v=1705654943","https://cdn.shopify.com/s/files/1/0603/3031/1875/files/main-square_8cb587b1-8423-4c6e-b42c-34e24050b2bc_x480.jpg?v=1700799886","https://cdn.shopify.com/s/files/1/0603/3031/1875/files/main-square_c0857a14-2de9-4af6-9bdf-df062f92e8e7_x480.jpg?v=1708084450","https://cdn.shopify.com/s/files/1/0603/3031/1875/products/main-square_778a574a-fa6e-4420-8a7b-253d8e1b5c72_x480.jpg?v=1693965541"]', '[35,36,37,38,39]', 45, 'Available', 2, 1, 8, '2024-06-24 00:00:00'),
  ('Skechers Go Walk 5', 55.00, 'Lightweight and comfortable walking shoe.', '["https://cdn.shopify.com/s/files/1/0603/3031/1875/products/main-square_849f59b0-64f9-4146-9b23-9c4b1a907c44_x480.jpg?v=1693976717"]', '[40,41,42,43,44]', 25, 'Available', 1, 3, 8, '2024-06-24 00:00:00'),
  ('Nike Air Force 1', 90.00, 'Classic basketball shoe with timeless style.', 
 '["https://cdn.shopify.com/s/files/1/0603/3031/1875/files/main-square_a123e2bb-1b26-4b1d-8ce7-836582a4f1eb_x480.jpg?v=1716781302","https://cdn.shopify.com/s/files/1/0603/3031/1875/files/main-square_cd149511-51d9-4d17-ba53-5ab7951be5f8_x480.jpg?v=1717667480","https://cdn.shopify.com/s/files/1/0603/3031/1875/files/main-square_59cdd5de-40f5-4b52-978c-f779764a2541_x480.jpg?v=1708780913","https://cdn.shopify.com/s/files/1/0603/3031/1875/files/main-square_08d32087-70b9-46ea-8dfa-d4def52cc49e_x480.jpg?v=1708345354","https://cdn.shopify.com/s/files/1/0603/3031/1875/files/main-square_28443762-8caf-4843-960d-c23228537e14_x480.jpg?v=1708400988"]',
 '[40,41,42,43,44]', 55, 'Available', 1, 1, 1, '2024-06-24 00:00:00'),
  ('Nike Air Force 1', 75.00, 'Classic basketball shoe with timeless style.', 
 '["https://cdn.shopify.com/s/files/1/0603/3031/1875/files/main-square_f164bb89-6086-4796-bde6-8493d3778a74_x480.jpg?v=1708781175","https://cdn.shopify.com/s/files/1/0603/3031/1875/files/main-square_14e2fc78-c0a3-4c68-abd9-38a3a54ca786_x480.jpg?v=1706609575","https://cdn.shopify.com/s/files/1/0603/3031/1875/files/main-square_1027adae-834a-42db-92a0-120f7d768d64_x480.jpg?v=1708688306","https://cdn.shopify.com/s/files/1/0603/3031/1875/files/main-square_55f1860f-cf60-4c7e-80ff-e4626027fde9_x480.jpg?v=1708688583","https://cdn.shopify.com/s/files/1/0603/3031/1875/files/main-square_80b043a0-6862-4a8b-ac05-8c09aaa16a78_x480.jpg?v=1708362294"]',
 '[35,36,37,38,39]', 45, 'Available', 2, 1, 1, '2024-06-24 00:00:00'),
  ('Nike Air Force 1', 60.00, 'Classic basketball shoe with timeless style.', 
 '["https://cdn.shopify.com/s/files/1/0603/3031/1875/files/main-square_ba526674-1a1c-47a9-8dbe-38ce03fb9ac3_x480.jpg?v=1708684259","https://cdn.shopify.com/s/files/1/0603/3031/1875/files/main-square_22cf826f-90f0-4f00-a147-f72279114250_x480.jpg?v=1708101620","https://cdn.shopify.com/s/files/1/0603/3031/1875/files/main-square_0c29f170-f09a-4665-ba9a-e97f210a4b98_x480.jpg?v=1708097837","https://cdn.shopify.com/s/files/1/0603/3031/1875/files/main-square_6a135f90-1046-4604-9bbf-38299a794874_x480.jpg?v=1708680930","https://cdn.shopify.com/s/files/1/0603/3031/1875/files/main-square_73049e96-0a03-47bf-ac7e-4314901fa48e_x480.jpg?v=1708442130"]',
 '[32,33,34,35,36]', 55, 'Available', 3, 1, 1, '2024-06-24 00:00:00'),
  ('Adidas Superstar', 85.00, 'Legendary basketball sneaker known for its shell toe.', 
 '["https://cdn.shopify.com/s/files/1/0603/3031/1875/files/main-square_2c2d386f-38f2-4c11-99c0-5f854b8fada4_x480.jpg?v=1706602972","https://cdn.shopify.com/s/files/1/0603/3031/1875/files/main-square_5e0f42b7-5709-4804-aec0-ed5bb0dda456_x480.jpg?v=1706073379","https://cdn.shopify.com/s/files/1/0603/3031/1875/files/main-square_3f307583-28a1-4250-9e63-06fdc047351a_x480.jpg?v=1697297627","https://cdn.shopify.com/s/files/1/0603/3031/1875/products/main-square_b3aab3e4-83e0-4b65-aebe-c6394533ab11_x480.jpg?v=1694136529","https://cdn.shopify.com/s/files/1/0603/3031/1875/products/main-square_ba302dca-fcb5-4c7e-988f-4e4ef856cd1b_x480.jpg?v=1696311793"]',
 '[40,41,42,43,44]', 50, 'Available', 1, 1, 2, '2024-06-24 00:00:00'),
  ('Adidas Superstar', 75.00, 'Legendary basketball sneaker known for its shell toe.', 
 '["https://cdn.shopify.com/s/files/1/0603/3031/1875/products/main-square_4a3e6683-0666-402b-8956-e4c18bccafd7_x480.jpg?v=1696325439","https://cdn.shopify.com/s/files/1/0603/3031/1875/files/main-square_e126ed2a-7ed9-4a10-9d6c-8a964f3730c4_x480.jpg?v=1706601387","https://cdn.shopify.com/s/files/1/0603/3031/1875/files/main-square_db1aaa35-dc01-4205-a551-6b8efe806d55_x480.jpg?v=1715661469","https://cdn.shopify.com/s/files/1/0603/3031/1875/files/main-square_c9439d1c-b790-454f-a6f2-918f7cf54375_x480.jpg?v=1708355897","https://cdn.shopify.com/s/files/1/0603/3031/1875/files/main-square_816184dd-c09d-4a74-b24d-1ba9a631f1e4_x480.jpg?v=1706602953"]',
 '[35,36,37,38,39]', 50, 'Available', 2, 1, 2, '2024-06-24 00:00:00'),
  ('Adidas Superstar', 65.00, 'Legendary basketball sneaker known for its shell toe.', 
 '["https://cdn.shopify.com/s/files/1/0603/3031/1875/files/main-square_977b58e5-f1bf-4486-909f-dcad78da5717_x480.jpg?v=1706085875","https://cdn.shopify.com/s/files/1/0603/3031/1875/products/main-square_681aafde-340f-4859-84ed-191de6d2f7b8_x480.jpg?v=1694110893","https://cdn.shopify.com/s/files/1/0603/3031/1875/files/main-square_01ba90fd-9299-4d00-abaa-5e0119d99c13_x480.jpg?v=1705995797","https://cdn.shopify.com/s/files/1/0603/3031/1875/products/main-square_8ba906ad-5510-44e6-830c-a04d4a350231_x480.jpg?v=1695184084","https://cdn.shopify.com/s/files/1/0603/3031/1875/files/main-square_3ed64a9b-0e5f-4255-8f0c-26bad3e3d76c_x480.jpg?v=1705995816"]',
 '[32,34,35,36,37]', 50, 'Available', 3, 1, 2, '2024-06-24 00:00:00'),
  ('Puma Suede Classic', 70.00, 'Retro-inspired casual shoe with a suede upper.', 
 '["https://cdn.shopify.com/s/files/1/0603/3031/1875/products/main-square_39f3beac-93b6-45a3-a8f7-9cf940e0ddc5_x480.jpg?v=1695269154","https://cdn.shopify.com/s/files/1/0603/3031/1875/products/main-square_c3518c7c-5a59-461a-9de5-acf02be20faa_x480.jpg?v=1695268188","https://cdn.shopify.com/s/files/1/0603/3031/1875/files/main-square_a6832170-e4d0-432e-bea5-464bd9affaa8_x480.jpg?v=1708090765","https://cdn.shopify.com/s/files/1/0603/3031/1875/files/main-square_9bf3d3ae-bfd4-49a1-92aa-43cdc1a8c688_x480.png?v=1708497603","https://cdn.shopify.com/s/files/1/0603/3031/1875/files/main-square_1ab0a79d-1956-4462-8adb-c85d32d585d2_x480.jpg?v=1706266575"]',
 '[40,41,42,43,44]', 30, 'Available', 1, 1, 3, '2024-06-24 00:00:00'),
  ('Puma Suede Classic', 60.00, 'Retro-inspired casual shoe with a suede upper.', 
 '["https://cdn.shopify.com/s/files/1/0603/3031/1875/files/main-square_61874592-3619-411a-b13b-525b7e82a192_x480.jpg?v=1708321484","https://cdn.shopify.com/s/files/1/0603/3031/1875/products/main-square_0307cc0c-fbef-4b7b-9c84-86a8cb6e1625_x480.jpg?v=1695183207","https://cdn.shopify.com/s/files/1/0603/3031/1875/files/main-square_56287e66-22cb-40c8-bdb0-100dbb7b637d_x480.jpg?v=1706526456","https://cdn.shopify.com/s/files/1/0603/3031/1875/products/main-square_96a32718-911f-46ab-983c-2839143299fe_x480.jpg?v=1695296148","https://cdn.shopify.com/s/files/1/0603/3031/1875/products/main-square_3f37e645-1a34-453a-a163-b851ad3c9177_x480.jpg?v=1695285000"]',
 '[36,37,38,39]', 30, 'Available', 2, 1, 3, '2024-06-24 00:00:00'),
  ('Puma Suede Classic', 55.00, 'Retro-inspired casual shoe with a suede upper.', 
 '["https://cdn.shopify.com/s/files/1/0603/3031/1875/files/main-square_5d3077a0-09f6-4f7a-90f0-03f7614349da_x480.jpg?v=1717062381","https://cdn.shopify.com/s/files/1/0603/3031/1875/files/main-square_c6a1e681-88b6-46e0-84ff-be70ad8adde1_x480.jpg?v=1708088093","https://cdn.shopify.com/s/files/1/0603/3031/1875/products/main-square_4923d28b-6aef-491d-9de1-e6ac1c1ccccc_x480.jpg?v=1695296193","https://cdn.shopify.com/s/files/1/0603/3031/1875/files/main-square_0ddb21e7-af60-45e4-9ccc-bdd404244d3a_x480.jpg?v=1706268283","https://cdn.shopify.com/s/files/1/0603/3031/1875/products/main-square_7f291280-20f2-4184-a8c5-25d8e6e25cf6_x480.jpg?v=1695266539"]',
 '[32,33,34,35,36]', 30, 'Available', 3, 1, 3, '2024-06-24 00:00:00'),
  ('Under Armour Curry 8', 160.00, 'High-performance basketball shoe designed for agility.', 
 '["https://cdn.shopify.com/s/files/1/0603/3031/1875/products/main-square_c5dac15b-cd87-4a89-9fc1-51fb9b5e9941_x480.jpg?v=1695200011","https://cdn.shopify.com/s/files/1/0603/3031/1875/products/main-square_908965d2-ccc1-4dfd-980f-e97370896196_x480.jpg?v=1693912337","https://cdn.shopify.com/s/files/1/0603/3031/1875/files/main-square_5d4c7ebc-9f2a-432e-a041-8d80ea63c39d_x480.jpg?v=1706099258","https://cdn.shopify.com/s/files/1/0603/3031/1875/products/main-square_050da4f6-60aa-42c6-91b9-7d3c9d8afb53_x480.jpg?v=1695145238","https://cdn.shopify.com/s/files/1/0603/3031/1875/products/main-square_b823e035-fa96-45d7-b998-1bb63d8182b3_x480.jpg?v=1693912333"]',
 '[40,41,42,43,44]', 20, 'Available', 1, 1, 4, '2024-06-24 00:00:00'),
  ('Under Armour Curry 8', 120.00, 'High-performance basketball shoe designed for agility.', 
 '["https://cdn.shopify.com/s/files/1/0603/3031/1875/files/main-square_38c7b5de-d216-4f75-a5a3-972ef3db76de_x480.jpg?v=1706256745","https://cdn.shopify.com/s/files/1/0603/3031/1875/files/main-square_ec090cc1-1e93-4907-9a7d-ad083f7205c3_x480.jpg?v=1706259292","https://cdn.shopify.com/s/files/1/0603/3031/1875/products/main-square_b6898dd8-252f-4ddd-ab72-a792a6cd3807_x480.jpg?v=1695202991","https://cdn.shopify.com/s/files/1/0603/3031/1875/files/main-square_76efb80c-7d28-4823-8b31-65f1dbb993e4_x480.jpg?v=1706494266","https://cdn.shopify.com/s/files/1/0603/3031/1875/products/main-square_4b02e1fc-9596-4384-a5a4-df8d6e36127e_x480.jpg?v=1695145249"]',
 '[32,33,34,35,36]', 20, 'Available', 3, 1, 4, '2024-06-24 00:00:00'),
  ('Reebok Nano X1', 130.00, 'Versatile training shoe for cross-training workouts.', 
 '["https://cdn.shopify.com/s/files/1/0603/3031/1875/files/main-square_226e1fe6-285e-4c2b-9c11-e9923d128f06_x480.jpg?v=1708315266","https://cdn.shopify.com/s/files/1/0603/3031/1875/products/main-square_5b2d5f9d-850a-40d2-9e6b-7897396a4d60_x480.jpg?v=1686313653","https://cdn.shopify.com/s/files/1/0603/3031/1875/files/main-square_ead3da70-3684-48c5-9070-bd66407a10ba_x480.jpg?v=1708356631","https://cdn.shopify.com/s/files/1/0603/3031/1875/products/main-square_9407e6de-ae88-4046-8169-beae34027534_x480.jpg?v=1695114097","https://cdn.shopify.com/s/files/1/0603/3031/1875/products/main-square_c79aef98-5ce9-4352-bd85-f9758242921a_x480.jpg?v=1695179548"]',
 '[40,41,42,43,44]', 35, 'Available', 1, 1, 5, '2024-06-24 00:00:00'),
  ('Reebok Nano X1', 115.00, 'Versatile training shoe for cross-training workouts.', 
 '["https://cdn.shopify.com/s/files/1/0603/3031/1875/files/main-square_7e083016-2053-41f3-a817-29df46bf9e1c_x480.jpg?v=1706255278","https://cdn.shopify.com/s/files/1/0603/3031/1875/files/main-square_ee0f6a5d-64f2-4661-96a5-6c99f71e67b7_x480.jpg?v=1706260005","https://cdn.shopify.com/s/files/1/0603/3031/1875/products/main-square_fe9c8dbe-7394-41de-b5c2-d9a2ad40363a_x480.jpg?v=1695182825","https://cdn.shopify.com/s/files/1/0603/3031/1875/files/main-square_204b2d0f-838b-4b0d-ac73-0ccc7dfbc888_x480.jpg?v=1706255284","https://cdn.shopify.com/s/files/1/0603/3031/1875/files/main-square_c8b1f5a4-37d5-4c1b-b807-6ba5ad14c73f_x480.jpg?v=1708402309"]',
 '[36,37,38,39]', 55, 'Available', 2, 1, 5, '2024-06-24 00:00:00'),
  ('New Balance Fresh Foam Hierro v6', 135.00, 'Trail running shoe with superior grip and comfort.', 
 '["https://cdn.shopify.com/s/files/1/0603/3031/1875/files/main-square_cc200484-af35-4f99-8966-eac77808487b_x480.jpg?v=1708341000","https://cdn.shopify.com/s/files/1/0603/3031/1875/files/main-square_d3eede85-c932-4496-bd47-a39eb277f5c5_x480.jpg?v=1708419493","https://cdn.shopify.com/s/files/1/0603/3031/1875/files/main-square_9deab478-8d18-464d-9526-7a7ab6d18f84_x480.jpg?v=1708406667","https://cdn.shopify.com/s/files/1/0603/3031/1875/files/main-square_f20e828c-715c-44af-9daf-4a67d24c7819_x480.jpg?v=1706494497","https://cdn.shopify.com/s/files/1/0603/3031/1875/files/main-square_6aac20bc-0065-4b7c-b78e-7b1cfb135e8b_x480.jpg?v=1706252328"]',
 '[40,41,42,43,44]', 30, 'Available', 1, 1, 6, '2024-06-24 00:00:00'),
  ('New Balance Fresh Foam Hierro v6', 135.00, 'Trail running shoe with superior grip and comfort.', 
 '["https://cdn.shopify.com/s/files/1/0603/3031/1875/products/main-square_b01a4767-abe2-4fb0-ad6a-b3c4620aaa23_x480.jpg?v=1695119955","https://cdn.shopify.com/s/files/1/0603/3031/1875/files/main-square_46a8e09d-e4d9-4056-b251-bc83843405f4_x480.jpg?v=1708345868","https://cdn.shopify.com/s/files/1/0603/3031/1875/files/main-square_a95c1937-cdf0-4b84-b711-5098c51f840c_x480.jpg?v=1706494397","https://cdn.shopify.com/s/files/1/0603/3031/1875/files/main-square_4846f71d-949c-453d-bb06-570b7cd4803a_x480.jpg?v=1708414515","https://cdn.shopify.com/s/files/1/0603/3031/1875/files/main-square_2facc8d4-0891-42a2-84d5-cd79c7ca39cf_x480.jpg?v=1706253124"]',
 '[36,37,38,39]', 35, 'Available', 2, 1, 6, '2024-06-24 00:00:00'),
  ('Asics Gel-Resolution 8', 140.00, 'Tennis shoe with excellent stability and support.', 
 '["https://cdn.shopify.com/s/files/1/0603/3031/1875/files/main-square_b45f8a87-c525-4218-a045-104248095f65_x480.jpg?v=1708339794","https://cdn.shopify.com/s/files/1/0603/3031/1875/products/main-square_fc4fa7c1-bd65-44f3-a42c-74accf7729c3_x480.jpg?v=1695376619","https://cdn.shopify.com/s/files/1/0603/3031/1875/files/main-square_8fa7645d-8803-42f4-a0a3-8143260ad57d_x480.jpg?v=1708334256","https://cdn.shopify.com/s/files/1/0603/3031/1875/files/main-square_ca3889d2-54f5-4b7f-89a3-cf19f102f354_x480.jpg?v=1708332802","https://cdn.shopify.com/s/files/1/0603/3031/1875/files/main-square_1a26a9d4-065c-4a9c-9a32-37a0ed9e0393_x480.jpg?v=1708334258"]',
 '[40,41,42,43,44]', 45, 'Available', 1, 1, 7, '2024-06-24 00:00:00'),
  ('Asics Gel-Resolution 8', 120.00, 'Tennis shoe with excellent stability and support.', 
 '["https://cdn.shopify.com/s/files/1/0603/3031/1875/files/main-square_d66b528b-f660-4728-acb7-7ef416f80f35_x480.jpg?v=1708342779","https://cdn.shopify.com/s/files/1/0603/3031/1875/files/main-square_eccde3fa-919b-4bcd-9334-75452ae03595_x480.jpg?v=1708417864","https://cdn.shopify.com/s/files/1/0603/3031/1875/files/main-square_14eeb912-c940-425b-adba-090e3475a8ce_x480.jpg?v=1708420784","https://cdn.shopify.com/s/files/1/0603/3031/1875/products/main-square_e3bd748c-7f5d-45a9-9026-89e44dfdfced_x480.jpg?v=1693987626","https://cdn.shopify.com/s/files/1/0603/3031/1875/files/main-square_c9e7e414-ea58-437e-afdc-634f6cf545b1_x480.jpg?v=1708339797"]',
 '[36,37,38,39]', 25, 'Available', 2, 1, 7, '2024-06-24 00:00:00'),
  ('Asics Gel-Resolution 8', 90.00, 'Tennis shoe with excellent stability and support.', 
 '["https://cdn.shopify.com/s/files/1/0603/3031/1875/products/main-square_ac16c17b-7c09-4ded-9fb0-8bb9393f6252_x480.jpg?v=1695200009","https://cdn.shopify.com/s/files/1/0603/3031/1875/products/main-square_18626f49-b5ab-404c-b7f7-7383d0f7abda_x480.jpg?v=1693984920","https://cdn.shopify.com/s/files/1/0603/3031/1875/files/main-square_5fe0b0fd-6dd7-4b8f-b874-2d1530a374c9_x480.jpg?v=1706514987","https://cdn.shopify.com/s/files/1/0603/3031/1875/files/main-square_c7152cbe-cc19-46c6-981d-ce56b6e60328_x480.jpg?v=1708421020","https://cdn.shopify.com/s/files/1/0603/3031/1875/files/main-square_29537a28-528d-4bf9-b118-36fffd69fe13_x480.jpg?v=1706514987"]',
 '[32,33,34,35,36]', 55, 'Available', 3, 1, 7, '2024-06-24 00:00:00'),
  ('Skechers D ''Lites', 60.00, 'Comfortable and stylish casual shoe with a chunky sole.', 
 '["https://cdn.shopify.com/s/files/1/0603/3031/1875/products/main-square_60f4bd2a-e4e9-4080-b23d-94c4604609ab_x480.jpg?v=1695205039","https://cdn.shopify.com/s/files/1/0603/3031/1875/files/main-square_84658e84-e46e-43c2-9dd1-d6e1d74778fa_x480.jpg?v=1706071613","https://cdn.shopify.com/s/files/1/0603/3031/1875/files/main-square_1cb6a2eb-6e4d-4dbb-992e-551189a1f4fe_x480.jpg?v=1706086659","https://cdn.shopify.com/s/files/1/0603/3031/1875/products/main-square_5610f2c9-da05-4315-8180-4584c44879c7_x480.jpg?v=1694767113","https://cdn.shopify.com/s/files/1/0603/3031/1875/products/main-square_b8189757-b361-455e-96dc-543eb2585793_x480.jpg?v=1695204919"]',
 '[40,41,42,43,44]', 40, 'Available', 1, 1, 8, '2024-06-24 00:00:00'),
  ('Skechers D ''Lites', 55.00, 'Comfortable and stylish casual shoe with a chunky sole.', 
 '["https://cdn.shopify.com/s/files/1/0603/3031/1875/files/main-square_1438a3de-4957-4344-9384-3a987f2ead41_x480.jpg?v=1706253743","https://cdn.shopify.com/s/files/1/0603/3031/1875/products/main-square_bc0ec3dd-0300-4383-bbf8-6342d7f4264d_x480.jpg?v=1695292131","https://cdn.shopify.com/s/files/1/0603/3031/1875/files/main-square_1b01fd63-549c-4e64-a1af-bd5eeeb6bd76_x480.jpg?v=1706497801","https://cdn.shopify.com/s/files/1/0603/3031/1875/products/main-square_bc0ec3dd-0300-4383-bbf8-6342d7f4264d_x480.jpg?v=1695292131","https://cdn.shopify.com/s/files/1/0603/3031/1875/files/main-square_ee9743cf-4a06-453c-b381-6d2f7cc95300_x480.jpg?v=1708329576"]',
 '[36,37,38,39]', 30, 'Available', 2, 1, 8, '2024-06-24 00:00:00'),
  ('Skechers D ''Lites', 45.00, 'Comfortable and stylish casual shoe with a chunky sole.', 
 '["https://cdn.shopify.com/s/files/1/0603/3031/1875/files/main-square_bed9f49d-369c-4223-9b86-04fd2d5c195b_x480.jpg?v=1705652269","https://cdn.shopify.com/s/files/1/0603/3031/1875/files/main-square_60d0eabf-9212-4fbf-ac7f-91d7ce16e6d7_x480.jpg?v=1705654582","https://cdn.shopify.com/s/files/1/0603/3031/1875/files/main-square_2bfe94f2-0296-4153-a528-60eba973090c_x480.jpg?v=1705652155","https://cdn.shopify.com/s/files/1/0603/3031/1875/files/main-square_813b6611-1f62-4672-8240-f486867bd1d9_x480.jpg?v=1708082734","https://cdn.shopify.com/s/files/1/0603/3031/1875/files/main-square_94a0290c-a285-49bc-a99e-2c7a69b1b901_x480.jpg?v=1705652157"]',
 '[32,33,34,35,36]', 45, 'Available', 3, 1, 8, '2024-06-24 00:00:00');
