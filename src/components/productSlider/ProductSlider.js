import React from 'react';
import { products } from '../../dummyData/products';

const ProductSlider = () => {

      let productCopy = [...products];

      const productList = productCopy.map(el => (
        <div key={el.position}>
          <img
          className='product-slider__product--img'
          src={el.img}
          alt={el.name} />
          <div className='product-slider__product--bottom'>
            <div className='product-slider__product--bottom--title'>{el.title}</div>
            <div className='product-slider__product--bottom--author'>
              by: {el.author}
            </div>
            <div className='product-slider__product--bottom--price'>{el.price}</div>
          </div>
        </div>
      ));
    return (
    <div className='product-slider'>
        <div className='product-slider__title'>Featured Products</div>
        <div className='product-slider__underline' />
        <div className='product-slider__container'>
          <div className='product-slider__product--back'>Back</div>
          <dvi className='product-slider__products'>{productList}</dvi>          
         <div className='product-slider__product--forword'>Forword</div>
        </div>    
       </div>
  );
};

export default ProductSlider;
