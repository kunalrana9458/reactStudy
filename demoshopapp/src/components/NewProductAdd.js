import './NewProductAdd.css';
import ProductForm from './ProductForm';

function NewProductAdd(props)
{
    function saveProduct(product){
        console.log("i am inside new Product");
        console.log(product);
        //calling parent function
        props.pranay(product);
    }

    return (
        <div className='new-product'>
        <ProductForm onSaveProduct={saveProduct} />
        </div>
    );
} 

export default NewProductAdd;