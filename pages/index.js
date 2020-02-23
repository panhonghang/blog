/*
 * @Author: your name
 * @Date: 2019-11-05 20:43:32
 * @LastEditTime: 2019-12-07 20:21:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \博客\blog\pages\index.js
 */
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

const Home = (props) =>{
  
  const [listData,setData] = useState([]);
  
  async function fetchData(){
    const result = await axios('http://panhonghang.varbee.com:4000/blog/index');
    setData(result.data.data);
    localStorage.setItem('PageIndexArray', JSON.stringify(result.data.data))
  }

  useEffect(()=>{
    localStorage.getItem('PageIndexArray')?setData(
      JSON.parse(localStorage.getItem('PageIndexArray'))
      ):fetchData();
  },[]);

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <PhoneMenu/>
      <Row>
        <PC/>
        <Col style={{height:'100vh', overflow:'scroll', paddingLeft:30,paddingRight:30}} >
          <List
            itemLayout="vertical"
            size="large"
  
            pagination={{
              onChange: page => {
                console.log(page);
              },
              pageSize: 4,
              hideOnSinglePag: true,
              total:12,
              showLessItems: true
            }}
  
            dataSource={listData}
  
            renderItem={item => (
             <List.Item
                key={item.title}
                // actions={[
                //   // <IconText type="like-o" text={item.stars} key="list-vertical-like-o" />,
                //   // <IconText type="message" text="2" key="list-vertical-message" />,
                // ]}
                extra={
                  <img
                    width={200}
                    alt="logo"
                    src={item.src}
                  />
                }
               >
                <List.Item.Meta
                  title={<Link href={ {pathname: '/PageDetail', query: { page: item.href }}}><a className='pageName'>{item.title}</a></Link>}
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