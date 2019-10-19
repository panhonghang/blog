import React from 'react';
import '../static/style/components/header.css';
import Link from 'next/link';
import {Row,Col, Menu, Icon} from 'antd';

const Header = () => (
  <div className="header">
    <Row type="flex" justify="center">
        <Col  xs={24} sm={24} md={10} lg={10} xl={10}>
            <span className="header-logo">技术胖</span>
            <span className="header-txt">专注前端开发,每年100集免费视频。</span>
        </Col>
       
        <Col className="memu-div" xs={0} sm={0} md={14} lg={8} xl={6}>
            <Menu  mode="horizontal">
                <Menu.Item xs={0} sm={0} md={14} lg={8} xl={6} key="home">
                    <Icon xs={24} sm={24} md={10} lg={15} xl={12} type="home" />
                        首页
                    <Link href="/">
                        <a>首页</a>
                    </Link> 
                </Menu.Item>
                <Menu.Item xs={0} sm={0} md={14} lg={8} xl={6} key="video">
                    <Icon xs={24} sm={24} md={10} lg={15} xl={12} type="youtube" />
                        列表
                    <Link href="/list">
                        <a>列表</a>
                    </Link>     
                </Menu.Item>
                <Menu.Item xs={0} sm={0} md={14} lg={8} xl={6} key="life">
                    <Icon xs={24} sm={24} md={10} lg={15} xl={12} type="smile" />
                        详情
                    <Link href="/detailed">
                        <a>详情</a>
                    </Link> 
                </Menu.Item>
            </Menu>
        </Col>
    </Row>
 </div>
)

export default Header