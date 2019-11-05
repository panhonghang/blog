import React from 'react'
import Head from 'next/head'
import {Row, Col, List, Avatar,Icon} from 'antd'
import '../static/style/pages/home.css'

const listData = [];
for (let i = 0; i < 23; i++) {
  listData.push({
    href: 'http://ant.design',
    title: `ant design part ${i}`,
    description:
      'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    content:
      'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
  });
}

const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);

const Home = () => (
  <>
    <Head>
      <title>Home</title>
    </Head>
    <Row>
      <Col xs={24} sm={24} md={0} lg={0} xl={0}>
        <div className='menu'>
          <Avatar style={{marginTop:80}} src='https://v7.res.dandyweng.com/images/me.jpg' size={80}></Avatar>
          <h1>黎曦的博客</h1>
          <h3>人生如逆旅，我亦是行人。</h3>
          <Row style={{width:100,height:60}}>
            <Col xs={8} sm={8} md={8} lg={0} xl={0}>
              <Icon type="home" />
            </Col>
            <Col xs={8} sm={8} md={8} lg={0} xl={0}>
              <Icon type="github" />
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
              <Icon type="home" />
            </Col>
            <Col xs={0} sm={0} md={8} lg={8} xl={8}>
              <Icon type="github" />
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
        <List
          itemLayout="vertical"
          size="large"

          pagination={{
            onChange: page => {
              console.log(page);
            },
            pageSize: 5,
            hideOnSinglePag: true,
            total:50,
            showLessItems: true
          }}

          dataSource={listData}

          renderItem={item => (
           <List.Item
              key={item.title}
              actions={[
                <IconText type="star-o" text="156" key="list-vertical-star-o" />,
                <IconText type="like-o" text="156" key="list-vertical-like-o" />,
                <IconText type="message" text="2" key="list-vertical-message" />,
              ]}
              extra={
                <img
                  width={260}
                  alt="logo"
                  src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                />
              }
             >
              <List.Item.Meta
                title={<a href={item.href}>{item.title}</a>}
              />
              {item.content}
            </List.Item>
           )}
        />
      </Col>
    </Row>
 </>
)

export default Home;