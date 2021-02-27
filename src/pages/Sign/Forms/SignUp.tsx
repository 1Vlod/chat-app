import React, { useContext, useEffect } from "react"
import { Form, Input, Button, Alert } from "antd"
import { observer } from "mobx-react-lite"
import { RootStore } from "../../../store/RootStore"
import { StoreContext } from "../../.."

export const SignUp: React.FC = observer(() => {
  const { userStore } = useContext<RootStore>(StoreContext)
  const [form] = Form.useForm()

  const onFinish = (values: {
    email: string
    fullname: string
    password: string
    password2?: string
  }) => {
    const data = values
    delete data.password2
    userStore.registerUser(data)
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo)
  }

  useEffect(() => {
    if(userStore.registerStatus === "LOADED") {
      form.resetFields()
    }
  }, [userStore.registerStatus])

  return (
    <Form
      form={form}
      name="signUp"
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
        label="Fullname"
        name="fullname"
        rules={[
          { required: true, message: "Please input your fullname!" },
          { min: 2, message: "Min length is 2 symbols" },
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

      <Form.Item
        label="Repeat your password"
        name="password2"
        rules={[
          {
            required: true,
            message: "Please confirm your password!",
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve()
              }
              return Promise.reject(
                "The two passwords that you entered do not match!"
              )
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          disabled={userStore.registerStatus === "LOADING"}
        >
          Submit
        </Button>
      </Form.Item>
      {userStore.registerStatus === "ERROR" && (
        <Alert
          message="It looks like this mail is already in use"
          type="error"
        />
      )}
      {userStore.registerStatus === "LOADED" && (
        <Alert
          message="Registration was successful"
          type="success"
        />
      )}
    </Form>
  )
})
