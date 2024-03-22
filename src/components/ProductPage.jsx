import React, {useEffect, useState} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from "axios";
import { LuDog } from "react-icons/lu";
import { API_URL } from '../config/constants';

const ProductPage = () => {
    const {id}= useParams();
    const navigate=useNavigate();
    const [product, setProduct]=useState(null);

    useEffect(()=>{
        axios.get(`${API_URL}/products/${id}`)
        .then(function(result){
            setProduct(result.data.product)
        })
        
        .catch(function(error){
            console.error(error)})
    },[])
    console.log(product)
    if(product===null){
        return <h1>상품 정보를 받고 있습니다....</h1>
        }
        
    return(
    <div className='productpageWrap'>
        <h1>상세페이지</h1>
        <button onClick={()=>navigate(-1)} id='back-btn'>이전화면</button>
        <div id="image-box">
            <img src={`/${product.imageUrl}`} alt="" />
        </div>
        <div id="profile-box">
            <LuDog className='product-avata'/>
            <span className='product-seller'>{product.seller}</span>
        </div>
        <div className="contents-box">
            <div  id="name">{product.name}</div>
            <div  id="price">{product.price}</div>
            <div  id="createAt">2024.03.19</div>
            <div  id="description">{product.description}</div>
        </div>
    </div>
);


};

export default ProductPage;