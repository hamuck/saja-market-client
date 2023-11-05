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
import FormItem from "antd/lib/form/FormItem";

function SigninPage() {
  const history = useHistory();
  const [isUsernameAvailable, setIsUsernameAvailable] = useState(true);
  const [userID, setUserID] = useState("");

  const SignInonSubmit = (values) => {
    axios
      .post(`${API_URL}/signin`, {
        userID: values.userID,
        userPW: values.userPW,
        username: values.username,
        usermail: values.usermail,
      })
      .then((result) => {
        console.log(result);
        history.replace("/");
      })
      .catch((error) => {
        console.error(error);
        message.error(`에러가 발생했습니다.${error.message}`);
      });
  };
  const checkUsernameAvailability = (values) => {
    axios
      .get(`${API_URL}/check-username?username=${values.userID}`)
      .then((response) => {
        if (response.data.isDuplicate) {
          setIsUsernameAvailable(false);
          message.error("아이디가 사용 중입니다.");
        } else {
          setIsUsernameAvailable(true);
          message.success("사용 가능한 아이디입니다.");
        }
      })
      .catch((error) => {
        console.error(error);
        message.error(`에러가 발생했습니다.${error.message}`);
      });
  };
  

  return (
    <div id="signin-conteiner">
      <Form name="회원가입" onFinish={SignInonSubmit}>
        <Form.Item
          name="userID"
          label={<div className="id-label">아이디</div>}
          rules={[{ required: true, message: "아이디를 입력해주세요" }]}
        >
          <Input
            className="id-name"
            size="large"
            placeholder="아이디를 입력해주세요"
          />
        </Form.Item>
        <Button onClick={checkUsernameAvailability}>아이디 중복 확인</Button>
        {isUsernameAvailable ? <p></p> : <p>아이디가 이미 사용 중입니다.</p>}
        <Divider />
        <Form.Item
          name="userPW"
          label={<div className="pw-label">비밀번호</div>}
          rules={[{ required: true, message: "비밀번호를 입력해주세요" }]}
        >
          <Input
            className="pw-name"
            size="large"
            placeholder="비밀번호를 입력해주세요"
          />
        </Form.Item>
        <Divider />
        <Form.Item
          name="username"
          label={<div className="username-label">이름</div>}
          rules={[{ required: true, message: "이름을 입력해주세요" }]}
        >
          <Input
            className="username-name"
            size="large"
            placeholder="이름을 입력해주세요"
          />
        </Form.Item>
        <Divider />
        <Form.Item
          name="usermail"
          label={<div className="username-label">이메일</div>}
          rules={[{ required: true, message: "이메일을 입력해주세요" }]}
        >
          <Input
            className="username-name"
            size="large"
            placeholder="이메일을 입력해주세요"
          />
        </Form.Item>
        <Form.Item>
          <Button id="submit-button" size="large" htmlType="submit">
            회원가입하기
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default SigninPage;
