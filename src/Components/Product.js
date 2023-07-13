import React ,{useState}from "react";

const Product=()=>{

  const [productID,setProductID]=useState('');
  const [sellingPrice,setSellingPrice]=useState('');
  const [productName,setProductName]=useState('');
  const [DataList,setDataList]=useState([]);

  const submitHandler=((event)=>{
       event.preventDefault();
  
     
  const Data={productID,sellingPrice,productName};
  console.log(Data);
   setDataList((prevList)=>[...prevList,Data]);

   setProductID('');
   setSellingPrice('');
   setProductName('')
  });
  const productIDHandler=(event)=>{
    setProductID(event.target.value);
  }
  const sellingPriceHandler=(event)=>{
    setSellingPrice(event.target.value);
  }
  const productNameHandler=(event)=>{
    setProductName(event.target.value);
  }
//  const onDelete=()=>{
//     DataList.map((Data)=>{
//         Data.filter=(e)=>{
//             console.log(e);
//             return e!=Data;
//         }
//        })
//  }
const handleDelete = (index) => {
    setDataList((prevList) => {
      const updatedList = [...prevList];
      updatedList.splice(index, 1);
      return updatedList;
    });
  };
  var val=0;
   const amount= DataList.map((item)=>{
    val+= parseInt(item.sellingPrice) 
     console.log(val)
     return  val
    })
    
   
  
    return(
        <div>
        <form onSubmit={submitHandler}>
        <div>
            <label>Product ID</label>
            <input type="number"
               value={productID}
               onChange={productIDHandler}
            />

            <label>Selling Price</label>
            <input type="number" 
               value={sellingPrice}
               onChange={sellingPriceHandler}
            />

            <label>Product Name</label>
            <input type="text"
               value={productName}
               onChange={productNameHandler}
            />
            <button type="submit" >Add Product</button>
        </div>
        </form>
        

 <h3>Products:</h3>
 <ul>
   { DataList.map(( Data, index) => (
    <li key={index}>
      
      <p>  { Data.sellingPrice }  { Data.productName}</p>
     <button onClick={handleDelete}>Delete Product</button>
    </li>
  ))}
</ul>
<h4>Total Value Worth of Products:{amount}</h4>
</div>
    );
}
export default Product;