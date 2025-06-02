import axios from "axios";
import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

export default function Login() {
  const email = useRef();
  const password = useRef();

  const handleClick = async (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <div className="headerBar">
        <h1>TripList</h1>
      </div>

      <div
        className="loginBackground"
        style={{ backgroundImage: 'url("/sample2.png")' }}
      >
        <div className="loginForm">
          <div className="loginLeft"></div>

          <div className="loginRight">
            <form className="loginBox" onSubmit={(e) => handleClick(e)}>
              <p className="loginTitle">ログイン</p>
              <p className="loginMsg">
                メールアドレスとパスワードを入力してください
              </p>
              メールアドレス
              <input
                type="email"
                className="loginInput"
                placeholder="example@mail.com"
                required
                ref={email}
              />
              パスワード
              <input
                type="password"
                className="loginInput"
                placeholder="●●●●●●"
                required
                minLength="6"
                ref={password}
              />
              <button className="loginButton" type="submit">
                ログインする
              </button>
              <div className="divider" />
              会員未登録の方はこちらから
              <button className="go2registerButton" type="submit">
                <Link
                  to={`/register`}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <span className="sidebarListItemText">新期会員登録</span>
                </Link>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
