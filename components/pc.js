import React,{useState} from 'react';
import {Row, Col, List, Avatar,Icon} from 'antd';
import '../static/style/pages/home.css';

const PC = () => {
  const [Number,setNumber] = useState(8);  

  const menu = Number==8?(
    <div className='menu'>
    <img className='icon' src='../static/menu.png' size={80}/>
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
):(
  <div onClick={()=>setNumber(8)}>aaaa</div>
)

  return(
    <>
      <Col xs={0} sm={0} md={Number} lg={Number} xl={Number}>
        {menu}
      </Col>
    </>
  )
}
export default PC;
