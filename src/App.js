import "antd/dist/antd.css";
import { Switch, Route, Link, useHistory } from "react-router-dom";
import "./App.css";
import MainPageComponent from "./main/index.js";
import UploadPage from "./upload/index.js";
import ProductPage from "./product/index.js";
import { Button } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import LoginPage from "./login";
import SigninPage from "./signin";

function App() {
  const history = useHistory();
  return (
    <div>
      <div id="header">
        <div id="header-area">
          <Link to="/">
            <img src="/images/icons/logo.png" />
          </Link>
          <Button
            size="large"
            onClick={function () {
              history.push("/upload");
            }}
            icon={<DownloadOutlined />}
          >
            상품 업로드
          </Button>
          <Button
            size="large"
            onClick={function () {
              history.push("/signin");
            }}
          >
            회원가입
          </Button>
          <Button
            size="large"
            onClick={function () {
              history.push("/login");
            }}
          >
            로그인
          </Button>
        </div>
      </div>
      <div id="body">
        <Switch>
          <Route exact={true} path="/">
            <MainPageComponent />
          </Route>
          <Route exact={true} path="/product/:id">
            <ProductPage />
          </Route>
          <Route exact={true} path="/upload">
            <UploadPage />
          </Route>
          <Route exact={true} path="/login">
            <LoginPage />
          </Route>
          <Route exact={true} path="/signin">
            <SigninPage />
          </Route>
        </Switch>
      </div>
      <div id="footer"></div>
    </div>
  );
}

export default App;
