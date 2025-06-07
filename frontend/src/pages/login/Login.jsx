import axios from "axios";
import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

//ログインページ
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
          <div className="loginLeft">
            <div className="welcomeMsg">
              <h1 className="mainTitle">忘れ物ゼロの旅へ</h1>
              <h2 className="subTitle">あなただけのチェックリストで、もっと自由な旅行を</h2>

              <section>
                <p>
                  <strong>TripList</strong> は、旅行前の「持ち物チェック」をもっと簡単・便利にする、あなただけの旅行準備アプリです。<br></br>
                  ログイン・会員登録をすると、自分専用のチェックリストを保存・編集・カスタマイズできるようになります。<br></br>
                  国内旅行でも、海外旅行でも、「あれ持ったっけ？」の不安をこのアプリが解決します。
                </p>
              </section>
            </div>
            <div className="divider_ver"></div>
          </div>

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
