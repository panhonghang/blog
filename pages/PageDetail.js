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
    axios('http://localhost:4000/blog/detail').then((result)=>{
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
        <Col style={{height:'100vh', overflow:'scroll', paddingLeft:30,paddingRight:30}} xs={24} sm={24} md={16} lg={16} xl={16}>
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