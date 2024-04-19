import './ProductForm.css';
import { useState } from 'react';

function ProductForm(props)
{

    const[newTitle,setTitle] = useState('');
    
    const [newDate,setDate] = useState('');

    function titleChandleHandler(event)
    {
        setTitle(event.target.value);
    }

    function dateChangeHandler(event)
    {
        setDate(event.target.value);
    }

    // handling mutliple states by using object in useState -
    

    function submitHandler(event){
        event.preventDefault();

        const productData = {
            title: newTitle,
            date: newDate
        };

        // console.log(productData);
        props.onSaveProduct(productData);

        setTitle('');
        setDate('');
    }

    return (
        <form onSubmit={submitHandler}>
            <div className='new-product-title'>
            <label>Title</label>
            <input type='text' value={newTitle} onChange={titleChandleHandler}></input>
            </div>
            <div className='new-product-date'>
                <label>Date</label>
                <input value={newDate} type='date' min='2024-01-01' max='2024-12-12' onChange={dateChangeHandler}></input>
            </div>
            <div className='new-product-btn'>
            <button type='submit'>Add Product</button>
            </div>
        </form>
    )
}

export default ProductForm;