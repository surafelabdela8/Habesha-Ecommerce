import React from 'react'
import {BsCloudUpload} from "react-icons/bs"
import { ImagetoBase64 } from '../utility/ImagetoBase64'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const Newproduct = () => {
const navigator=useNavigate;
  const [data ,setdata]=useState({
    name:'',
    category:'',
    image:'',
    price:'',
    description:''
  })



  const handleOnChange=(e)=>{
    const {name,value}=e.target
    setdata((preve)=>{
    
      return {
        ...preve,
        [name]:value
      }
 
    })
  }
  const uploadImage=async (e)=>{
    const data = await ImagetoBase64(e.target.files[0])
setdata((preve)=>{
  return {
    ...preve,
   image : data
  }
})

  }
 


const handelSubmit=async (e)=>{
  e.preventDefault()
console.log(data)

const {name,category,image,price}=data
if(name&&category&&image&&price){
  const fetchdata=await axios.post('http://127.0.0.1:5000/uploadproduct',{method:'post',
headers : {
  "content-type" : "application/json"
},
body : JSON.stringify(data),

})
const fetchRes =  await fetchdata.json(data)


console.log(fetchRes)
  alert('successfull product uploaded ')
 
  navigator('/')
  setdata(()=>{
    return{
      name : "",
      category : "",
      image : "",
      price : "",
      description : ""
    }
  })
}
else{
alert('fill the required fields')
}
}

  return (
    <div>
    <div className="p-4">
    <form className='m-auto w-full max-w-md  shadow flex flex-col p-3 bg-white' onSubmit={handelSubmit} >
     <label htmlFor='name'>Name</label>
     <input type={"text"}  name="name" className='bg-slate-200 p-1 my-1'   value={data.name} onChange={handleOnChange}/>

     <label htmlFor='category'>Category</label>
     <select className='bg-slate-200 p-1 my-1' id='category' name='category' value={data.category}  onChange={handleOnChange}>
       <option value={"other"}>select category</option>
       <option value={'Cloth'}>Cloth</option>
      <optgroup value={'Electronics'} label='Electronics '>
      <option value={'Mobile'}>Mobile</option>
      <option value={'Labtops'}>Labtops</option>
      <option value={'Tablets'}>Tablets</option>
       
      </optgroup>
      <optgroup value={'Furniture'} label='Furniture '>
       <option value={'wood chair'}>wood chair </option>
       <option value={'sofa'}>sofa</option>
       <option value={'table'}>table</option>
       </optgroup>

      <option value={'pan'}>pan</option>
     </select>

     <label htmlFor='image'>Image
     <div  className='h-40 w-full bg-slate-200  rounded flex items-center justify-center cursor-pointer'>
   
      {
        data.image ?  <img src={data.image} className='h-full' alt='productpic'/> :<span className='text-5xl'><BsCloudUpload/> </span>
       
      }
       <input type={'file'}   accept='image/*'   id='image' onChange={uploadImage} className='hidden' />
        
         
       
     </div>
     </label>
     

     <label htmlFor='price' className='my-1'>Price</label>
     <input type={"text"} className='bg-slate-200 p-1 my-1' name='price' value={data.price}  onChange={handleOnChange}/>

     <label htmlFor='description'>Description</label>
     <textarea rows={2}  className='bg-slate-200 p-1 my-1 resize-none' name='description' value={data.description}  onChange={handleOnChange}></textarea>

     <button className='bg-red-500 hover:bg-red-600 text-white text-lg font-medium my-2 drop-shadow'>Save</button>
    </form>
 </div>
 </div>
)

}

 
export default Newproduct