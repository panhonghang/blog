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
import Link from 'next/link';
import axios from 'axios';
import {Row, Col, List, Avatar,Icon,Input,Button} from 'antd';
import ReactMarkdown from 'react-markdown';
import ALERT from './Alert';
import '../static/style/pages/home.css';
import PhoneMenu from '../components/phone';
import PC from '../components/pc';
import { withRouter } from 'next/router'

const PageDetail = (props) => {
  const { TextArea } = Input;
  const [data,setData] = useState({markdown:''});  
  const [message,setMessage] = useState('');  
  const [alert,setAlert] = useState('gggg');  

  function fetchData(){
    axios('http://panhonghang.varbee.com:4000/blog/detail').then((result)=>{
      setData(result.data.data[props.router.query.page]);
      localStorage.setItem('PageDetailArray', JSON.stringify(result.data.data))
      localStorage.setItem('PageDetailPage', props.router.query.page)
    })
  }

  useEffect(()=>{
    localStorage.getItem('PageDetailArray')&&!props.router.query.page?setData(
      JSON.parse(localStorage.getItem('PageDetailArray'))[localStorage.getItem('PageDetailPage')]
      ):fetchData();
  },[]);

  
  let onSubmit = ()=>{
    if(message=='') {
      setAlert('WARNING')
      return
    }
    
    axios(
      {
        method: 'post',
        url: 'http://localhost:4000/blog/message',
        data: {
          message: message
        }
      }).then((result)=>{
        if(result.statusText == 'OK'){
          setMessage('')
          setAlert('OK')
        } else {
          setMessage('')
          setAlert('ERROR')
        }
    })
  }

  let onChange = ({ target: { value } }) => {
    setMessage(value)
  }

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
          <ALERT alert={alert}/>
          <TextArea 
            maxLength={100}  
            size='small' 
            value={message}
            onChange={onChange}
            rows={6} />
          <Button type="primary" onClick={onSubmit}>提交</Button>
          <Link href='./'><a className='return'>返回</a></Link>
        </Col>
      </Row>
  </>
  )
}
export default withRouter(PageDetail);