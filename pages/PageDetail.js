import React,{useState , useEffect} from 'react';
import Head from 'next/head';
import axios from 'axios';
import {Row, Col, List, Avatar,Icon} from 'antd';
import ReactMarkdown from 'react-markdown';
import '../static/style/pages/home.css';

const PageDetail = (props) => {
  
  const [data,setData] = useState('# P01:课程介绍和环境搭建\n');
  
  async function fetchData(){
    const result = await axios('http://localhost:4000/blog/detail');
    let index = props.url.query.page;
    setData(result.data.data[index]);
  }

  useEffect(()=>{
    fetchData();
  },[]);
  
  return(
    <>
      <Head>
        <title>pageDetail</title>
      </Head>
      <Row>
        <Col xs={24} sm={24} md={0} lg={0} xl={0}>
          <div className='menu'>
            <Avatar style={{marginTop:80}} src='../static/1.jpg' size={80}></Avatar>
            <h1>黎曦的博客</h1>
            <h3>人生如逆旅，我亦是行人。</h3>
            <Row style={{width:100,height:60}}>
              <Col xs={8} sm={8} md={8} lg={0} xl={0}>
                <Icon onClick={()=>window.location.href = ""} type="home" />
              </Col>
              <Col xs={8} sm={8} md={8} lg={0} xl={0}>
                  <Icon onClick={()=>window.location.href = "https://github.com/panhonghang"} type="github" />
              </Col>
              <Col xs={8} sm={8} md={8} lg={0} xl={0}>
                <Icon type="message" />
              </Col>
            </Row>
            <Row style={{width:220, color: 'rgba(255,255,255,0.7)' }}>
              <q>个人学习博客项目,前端使用 Next+Ant Desgin，管理端使用 Ant Desgin Pro,后端 Mysql+koa</q>
            </Row>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={0} sm={0} md={8} lg={8} xl={8}>
          <div className='menu'>
            <Avatar style={{marginTop:80}} src='../static/1.jpg' size={80}></Avatar>
            <h1>黎曦的博客</h1>
            <h3>人生如逆旅，我亦是行人。</h3>
            <Row style={{width:100}}>
              <Col xs={0} sm={0} md={8} lg={8} xl={8}>
                <Icon onClick={()=>window.location.href = '/'} type="home" />
              </Col>
              <Col xs={0} sm={0} md={8} lg={8} xl={8}>
                <Icon onClick={()=>window.location.href = 'https://github.com/panhonghang'} type="github" />
              </Col>
              <Col xs={0} sm={0} md={8} lg={8} xl={8}>
                <Icon type="message" />
              </Col>
            </Row>
            <Row style={{width:300, marginTop:20,marginBottom: 140, color: 'rgba(255,255,255,0.7)' }}>
              <q>个人学习博客项目,前端使用 Next+Ant Desgin，管理端使用 Ant Desgin Pro,后端 Mysql+koa</q>
            </Row>
            <h4>系统由 React+Node+Ant Desgin驱动</h4>
            <h4>panhonghang.top</h4>
          </div>
        </Col>
        <Col style={{height:'100vh', overflow:'scroll', paddingLeft:30,paddingRight:30}} xs={24} sm={24} md={16} lg={16} xl={16}>
          <ReactMarkdown 
            source={data} 
            escapeHtml={false}  
          />
        </Col>
      </Row>
  </>
  )
}
export default PageDetail;