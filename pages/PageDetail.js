/*
 * @Author: your name
 * @Date: 2019-11-05 23:33:19
 * @LastEditTime: 2019-12-07 19:59:27
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \博客\blog\pages\PageDetail.js
 */
import React,{useState , useEffect} from 'react';
import Head from 'next/head';
import axios from 'axios';
import {Row, Col, List, Avatar,Icon} from 'antd';
import ReactMarkdown from 'react-markdown';
import '../static/style/pages/home.css';
import PhoneMenu from '../components/phone';
import PC from '../components/pc';

const PageDetail = (props) => {
  
  const [data,setData] = useState({markdown:''});  
  function fetchData(){
    axios('http://panhonghang.varbee.com:4000/blog/detail').then((result)=>{
      setData(result.data.data[props.url.query.page])
    })
  }

  useEffect(()=>{
    fetchData();
  },[]);

  return(
    <>
      <Head>
        <title>pageDetail</title>
      </Head>
      <PhoneMenu/>
      <Row>
        <PC/>
        <Col style={{height:'100vh', overflow:'scroll', paddingLeft:30,paddingRight:30}}>
          <ReactMarkdown 
            source={data.markdown} 
            escapeHtml={false}  
          />
        </Col>
      </Row>
  </>
  )
}
export default PageDetail;