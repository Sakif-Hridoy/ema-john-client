import React from 'react';
import fakeData from '../../fakeData';
const Inventory = () => {
    const handleAddProduct = ()=>{
        fetch('http://localhost:6060/addProduct',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(fakeData[0])
        })
    }
    return (
        <div>
            <h3>This Is Inventory</h3>
            <button onClick={handleAddProduct} className='btn btn-primary'>Add Product</button>
        </div>
    );
};

export default Inventory;