import React from 'react'
import Head from 'next/head'
import {Row, Col, List, Avatar,Icon} from 'antd'
import ReactMarkdown from 'react-markdown'
import '../static/style/pages/home.css'

let markdown='# P01:课程介绍和环境搭建\n'  +
   '**这是加粗的文字**\n\n' +
  '*这是倾斜的文字*`\n\n' +
  '***这是斜体加粗的文字***\n\n' +
  '~~这是加删除线的文字~~ \n\n'+
  '\`console.log(111)\` \n\n'+
  '## p02:来个Hello World 初始Vue3.0\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n'+
  '***\n\n\n' +
  '## p03:Vue3.0基础知识讲解\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n'+
  '## p04:Vue3.0基础知识讲解\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n'+
  '##5 p05:Vue3.0基础知识讲解\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n'+
  '## p06:Vue3.0基础知识讲解\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n'+
  '## p07:Vue3.0基础知识讲解\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n'+
  '``` var a=11; ```'

const PageDetail = () => (
  <>
    <Head>
      <title>pageDetail</title>
    </Head>
    <Row>
      <Col xs={24} sm={24} md={0} lg={0} xl={0}>
        <div className='menu'>
          <Avatar style={{marginTop:80}} src='https://v7.res.dandyweng.com/images/me.jpg' size={80}></Avatar>
          <h1>黎曦的博客</h1>
          <h3>人生如逆旅，我亦是行人。</h3>
          <Row style={{width:100,height:60}}>
            <Col xs={8} sm={8} md={8} lg={0} xl={0}>
              <Icon onClick={()=>window.location.href = "/home"} type="home" />
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
          <Avatar style={{marginTop:80}} src='https://v7.res.dandyweng.com/images/me.jpg' size={80}></Avatar>
          <h1>黎曦的博客</h1>
          <h3>人生如逆旅，我亦是行人。</h3>
          <Row style={{width:100}}>
            <Col xs={0} sm={0} md={8} lg={8} xl={8}>
              <Icon onClick={()=>window.location.href = '/home'} type="home" />
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
          source={markdown} 
          escapeHtml={false}  
        />
      </Col>
    </Row>
 </>
)

export default PageDetail;