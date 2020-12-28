import React from "react"
import "./Header.css"

import {
  Breadcrumb,
  Col,
  Layout,
  Row,
  Avatar,
  Typography,
  Badge,
  Button,
} from "antd"
import { BellOutlined, MoreOutlined } from "@ant-design/icons"

import { Link, useLocation } from "react-router-dom"

const { Text } = Typography
const { Header } = Layout

export const HeaderComponent: React.FC = (): React.ReactElement => {
  const location = useLocation()
  const data = location.pathname.split("/")
  data.shift()
  console.log(data)
  return (
    <Header className="header">
      <Row justify="space-between" align="middle">
        <Col span={12}>
          <Breadcrumb separator=">">
            <Breadcrumb.Item>
              <Link to="/">/</Link>
            </Breadcrumb.Item>
            {data.map((item) => (
              <Breadcrumb.Item key={item}>
                <Link to={`/${item}`}>{item}</Link>
              </Breadcrumb.Item>
            ))}
          </Breadcrumb>
        </Col>
        <Col span={7}>
          <div className="user-info">
            <Badge dot>
              <Button type="text" shape="circle">
                <BellOutlined style={{ fontSize: 24 }} />
              </Button>
            </Badge>
            <Text>User name</Text>
            <Avatar
              src="https://images.unsplash.com/photo-1608739307777-04053d3871d2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
              size={40}
            />
            <MoreOutlined />
          </div>
        </Col>
      </Row>
    </Header>
  )
}
