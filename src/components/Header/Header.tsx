import React, { useContext } from "react"
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
import { BellOutlined } from "@ant-design/icons"

import { Link, useLocation } from "react-router-dom"
import { StoreContext } from "../../App"
import { observer } from "mobx-react-lite"
import { RootStore } from "../../store/RootStore"

const { Text } = Typography
const { Header } = Layout

export const HeaderComponent: React.FC = observer(
  (): React.ReactElement => {
    const { userStore } = useContext<RootStore>(StoreContext)
    const location = useLocation()
    const data = location.pathname.split("/")
    data.shift()

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

          <Col span={6}>
            <div className="user-info">
              <Badge offset={[-6, 7]} dot>
                <Button type="text" shape="circle">
                  <BellOutlined style={{ fontSize: 24 }} />
                </Button>
              </Badge>
              <Text>{userStore.userData.name}</Text>
              <Avatar src={userStore.userData.avatar} size={40} />
            </div>
          </Col>
        </Row>
      </Header>
    )
  }
)
