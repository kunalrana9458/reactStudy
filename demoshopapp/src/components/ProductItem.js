import { useState } from 'react';

import ProductDate from './ProductDate';
import Card from './Card';
import './ProductItem.css';

const ProductItem = (props) => {

  // why constant data type here ?
  const [title,setTitle] = useState(props.title);
  
  function clickHandler()
  {
    // when we call setTitle Function it calls instantly or takes time ?
    setTitle('Popcorn');
    console.log("button clicked");
  }
  

  return (
    <Card className='product-item'>
      <ProductDate date={props.date} />
      <div className='product-item__description'>
        <h2>{title}</h2>
      </div>
      <button className='btn' onClick={clickHandler}>Add to Cart</button>
    </Card>
  );
}

export default ProductItem;