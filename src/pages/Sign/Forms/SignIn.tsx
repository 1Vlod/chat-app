import React, { useContext, useEffect } from "react"

import { Form, Input, Button, Alert } from "antd"

import { observer } from "mobx-react-lite"
import { RootStore } from "../../../store/RootStore"
import { StoreContext } from "../../.."

export const SignIn: React.FC = observer(() => {
  const { userStore } = useContext<RootStore>(StoreContext)

  const onFinish = (values: { email: string; password: string }) => {
    userStore.loginUser({
      username: values.email,
      password: values.password,
    })
  }

  console.log(userStore.loginStatus)
  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo)
  }

  return (
    <Form
      name="signIn"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="E-Mail"
        name="email"
        rules={[
          {
            type: "email",
            message: "The input is not valid E-mail!",
          },
          {
            required: true,
            message: "Please input your E-mail!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          { required: true, message: "Please input your password!" },
          { min: 6, message: "Min length is 6 symbols" },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          disabled={userStore.loginStatus === "LOADING"}
        >
          Submit
        </Button>
      </Form.Item>
      {userStore.loginStatus === "ERROR" && (
        <Alert
          message="Sorry, error"
          type="error"
        />
      )}
      {userStore.loginStatus === "LOADED" && (
        <Alert
          message="SignIn was successful"
          type="success"
        />
      )}
    </Form>
  )
})
