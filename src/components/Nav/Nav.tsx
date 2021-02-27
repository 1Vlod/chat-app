import React from "react"
import "./Nav.css"

import { Menu, Layout, Typography } from "antd"
import {
  HomeOutlined,
  FileTextOutlined,
  MessageOutlined,
  CalendarOutlined,
  QuestionCircleOutlined,
  SettingOutlined,
  LogoutOutlined,
} from "@ant-design/icons"
import { NavLink } from "react-router-dom"
import { observer } from "mobx-react-lite"

const { Sider } = Layout
const { Title } = Typography

export const Nav = observer(() => {
  //TODO: сделать выделение активной ссылки
  //TODO: стили в классы
  //TODO: переделать на лист

  return (
    <Sider width={260} className="nav-wrapper">
      <Title level={2} style={{ color: "white" }}>
        Chat App
      </Title>

      <Menu
        mode="vertical"
        style={{
          border: "none",
          color: "white",
          background: "#779dfe",
          fontSize: 20,
          padding: "0 30px",
        }}
        selectable={false}
      >
        <Menu.Item key="1" icon={<HomeOutlined style={{ fontSize: 20 }} />}>
          <NavLink to="/home" className="nav__item" activeStyle={{color: "red"}}>Главная</NavLink>
        </Menu.Item>
        <Menu.Item key="2" icon={<FileTextOutlined style={{ fontSize: 20 }} />}>
          <NavLink activeStyle={{color: "red"}} to="/info" className="nav__item">Информация</NavLink>
        </Menu.Item>
        <Menu.Item key="3" icon={<MessageOutlined style={{ fontSize: 20 }} />}>
          <NavLink activeStyle={{color: "red"}} to="/chats" className="nav__item">Чаты</NavLink>
        </Menu.Item>
        <Menu.Item key="4" icon={<CalendarOutlined style={{ fontSize: 20 }} />}>
          <NavLink activeStyle={{color: "red"}} to="/calendar" className="nav__item">Календарь</NavLink>
        </Menu.Item>
        <Menu.Item
          key="5"
          icon={<QuestionCircleOutlined style={{ fontSize: 20 }} />}
          className="nav__item"
        >
          <NavLink activeStyle={{color: "red"}} to="/about" className="nav__item">О приложении</NavLink>
        </Menu.Item>
      </Menu>

      <Menu
        mode="vertical"
        style={{
          padding: "0 20px",
          border: "none",
          color: "white",
          background: "none",
          fontSize: 20,
        }}
        selectable={false}
      >
        <Menu.Item key="1" icon={<SettingOutlined style={{ fontSize: 20 }} />}>
          <NavLink to="/settings" className="nav__item">Настройки</NavLink>
        </Menu.Item>
        <Menu.Item key="2" icon={<LogoutOutlined style={{ fontSize: 20 }} />}>
          <NavLink to="/" className="nav__item">Выйти</NavLink>
        </Menu.Item>
      </Menu>
    </Sider>
  )
}
)