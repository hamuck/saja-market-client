import {
  Form,
  Divider,
  Input,
  InputNumber,
  Button,
  Upload,
  message,
} from "antd";
import "./index.css";
import { Forkoutlined } from "@ant-design/icons";
import { useState } from "react";
import { API_URL } from "../config/constants";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios";

function LoginPage() {
  const history = useHistory();
  const onSubmit = (values) => {
    axios
      .post(`${API_URL}/login`, {
        userID: values.userID,
        userPW: values.userPW,
      })
      .then((response) => {
        console.log("로그인 성공");
        history.replace("/");
      })
      .catch((error) => {
        console.error(error);
        message.error(`에러가 발생했습니다.${error.message}`);
      });
  };
  return (
    <div id="login-container">
      <Form name="로그인" onFinish={onSubmit}>
        <Form.Item
          label={<div className="id-label"></div>}
          name="id"
          rules={[{ required: true, message: "아이디를 입력해주세요" }]}
        >
          <Input
            className="id-name"
            size="large"
            placeholder="아이디를 입력해주세요."
          />
        </Form.Item>
        <Divider />
        <Form.Item
          label={<div className="pw-label"></div>}
          name="pw"
          rules={[{ required: true, message: "비밀번호를 입력해주세요." }]}
        >
          <Input
            className="pw-name"
            size="large"
            placeholder="비밀번호를 입력해주세요."
          />
        </Form.Item>
        <Form.Item>
          <Button id="login-submit-button" size="large" htmlType="submit">
            로그인
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default LoginPage;
