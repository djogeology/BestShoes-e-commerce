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
