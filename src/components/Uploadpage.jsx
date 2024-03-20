import React, { useState, } from 'react';
// 
// import { useNavigate } from 'react-router-dom';
import {  Button, /* Checkbox, */  Form, Input, Divider, InputNumber, Upload,message } from 'antd';
import { FaCameraRetro } from "react-icons/fa"; 
// import axios from 'axios';

const Uploadpage = () => {
    // const [imageUrl, setImageUrl]=useState(null);
    // const navigate=useNavigate();
    const { TextArea } = Input;

    const onFinish = (val) => {
        console.log("Succces:", val);
    };
        /*
      
      const onChangeImage=(info) =>{
        if(info.file.status==='uploading'){
            return;
        }
        if(info.file.status==='done'){
           const response=info.file.response;
           const imageUrl=response.imageUrl;
           setImageUrl(imageUrl)
        }
    } 
        */
      

    return (
        <div className='upload-container'>
            <Form name='uploadForm' onFinish={onFinish} >
                <Form.Item name="files" valuePropName='image'>
                    <div id="upload-img">
                    <FaCameraRetro className='cameraIcon'/>
                    <span>이미지를 업로드 해주세요</span>
                </div>
                </Form.Item>
                <Divider />

                <Form.Item
                    label={<span className='upload-label'>상품명</span>}
                    name="product-name"
                    rules={[
                        {
                        required: true,
                        message: '이름을 입력해주세요',
                        },
                    ]}
                    >
                <Input  className='upload-name'/>
                </Form.Item>
                
                <Form.Item
                    label={<span className='upload-label'>판매자명</span>}
                    name="seller"
                    rules={[
                        {
                        required: true,
                        message: '판매자명을 입력해주세요',
                        },
                    ]}
                    >
                <Input className='upload-seller' />
                </Form.Item>
                <Divider />

                <Form.Item
                    label={<span className='upload-label'>판매가격</span>}
                    name="price"
                    rules={[
                        {
                        required: true,
                        message: '판매가',
                        },
                    ]}
                    >
                <InputNumber className='upload-price' min={0} />
                </Form.Item>
                <Divider />

                <Form.Item
                    label={<span className='upload-label'>상품설명</span>}
                    name="description"
                    rules={[
                        {
                        required: true,
                        message: '상품명을 입력해주세요',
                        },
                    ]}
                    >
                        <TextArea id='product-description' rows={5}></TextArea>
                </Form.Item>
                <Divider />
                <Form.Item >
                    <Button id='submit-button' htmlType='submit'>상품등록하기</Button>
                </Form.Item>
                

            </Form>
        </div>
            );
};

export default Uploadpage;