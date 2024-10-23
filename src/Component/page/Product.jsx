import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import { useParams } from 'react-router-dom';
import ProductDisplay from '../ProductDisplay/ProductDisplay';
import Breadcrums from '../Breadcrums/Breadcrums';
import DescriptonBox from '../Descripton/DescriptonBox';
import ReltedProducts from '../ReltedProducts/ReltedProducts';

const Product = () => {
  const { all_product } = useContext(ShopContext); // Getting all products from the context
  const { productId } = useParams(); // Getting the product ID from URL params
  const product = all_product.find((e) => e.id === Number(productId)); // Finding the product by its ID

  if (!product) {
    return <div>Product not found!</div>; // Handle product not found case
  }

  return (
    <div>
      <Breadcrums product={product} />
      <ProductDisplay product={product} />
      <DescriptonBox/>
      <ReltedProducts/>
    </div>
  );
};

export default Product;
