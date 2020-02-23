import {Alert} from 'antd';
import React from 'react';

const ALERT = (props) => {
    switch(props.alert) {
        case 'OK':
          return (<Alert message="留言上传成功，审核过后即可显示" type="success" showIcon />);
          break;
        case 'ERROR':
          return (<Alert message="留言上传失败，检查网络" type="error" showIcon />);
          break;
        case 'WARNING':
          return (<Alert message="输入不能为空" type="warning" showIcon />);
          break;
        default:
          return (<></>);
          break;
      }
}

export default ALERT;
