import React ,{useEffect , useState} from 'react';
import Head from 'next/head';
import Link from 'next/link';
import {Row, Col, List, Avatar,Icon} from 'antd';
import '../static/style/pages/home.css';
import axios from 'axios';
import PhoneMenu from '../components/phone';
import PC from '../components/pc';

const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);

const Home = () =>{
  const [listData,setData] = useState([]);
  
  async function fetchData(){
    // const result = await axios('http://localhost:4000/blog/index');
    const result = await axios('http://localhost:4000/blog/index');
    setData(result.data.data);
  }

  useEffect(()=>{
    fetchData();
  },[]);

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <PhoneMenu/>
      <Row>
        <PC/>
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
              total:5,
              showLessItems: true
            }}
  
            dataSource={listData}
  
            renderItem={item => (
             <List.Item
                key={item.title}
                actions={[
                  <IconText type="like-o" text={item.stars} key="list-vertical-like-o" />,
                  <IconText type="message" text="2" key="list-vertical-message" />,
                ]}
                extra={
                  <img
                    width={260}
                    alt="logo"
                    src={item.src}
                  />
                }
               >
                <List.Item.Meta
                  title={<Link href={`PageDetail?page=${item.href}`}><a>{item.title}</a></Link>}
                />
                {item.description}
              </List.Item>
             )}
          />
        </Col>
      </Row>
   </>
  )
}

export default Home;