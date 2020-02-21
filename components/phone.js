import React,{useState , useEffect} from 'react';
import {Row, Col, List, Avatar,Icon} from 'antd';
import '../static/style/pages/home.css';

const Phone = () => {
  return(
    <>
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
              <q>个人学习博客项目,前端使用 Next+Ant Desgin,后端 Mysql+koa</q>
            </Row>
          </div>
        </Col>
      </Row>
  </>
  )
}
export default Phone;