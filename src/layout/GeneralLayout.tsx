import React from 'react';
import { Link } from 'umi';
import { Col, Row } from 'antd';

export default props => {
  return (
    <Row>
      <Col>
        <h1>Main Page</h1>
        <Link to='/general/about'>About</Link>
        <Link to='/general/info'>Info</Link>
        <div>
          {props.children}
        </div>
      </Col>
    </Row>
  )
}
