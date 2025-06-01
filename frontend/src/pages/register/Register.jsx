import axios from "axios";
import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";

export default function Register() {
  const email = useRef();
  const password = useRef();
  const passwordConfirmation = useRef();

  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();
    //パスワードと確認用パスワードが合っているかどうか確認
    if (password.current.value !== passwordConfirmation.current.value) {
      passwordConfirmation.current.setCustomValidity("パスワード違います");
    } else {
      try {
        const user = {
          email: email.current.value,
          password: password.current.value,
        };
        //registerAPIを叩く
        // await axios.post("/auth/register", user);
        navigate("/login"); // 会員登録完了後、ログイン画面へ
      } catch (err) {
        console.log(err);
      }
    }
  };
  return (
    <div>
      
      <div className="headerBar">
        <h1>TripList</h1>
      </div>

      <div className="registerBackground"style={{ backgroundImage: 'url("/sample2.png")' }}>

        <div className="registerForm">
          <div className="registerLeft"></div>

          <div className="registerRight">
            <form className="registerBox" onSubmit={(e) => handleClick(e)}>
              <p className="registerTitle">新規会員登録はこちら</p>
              <p className="registerMsg">登録するメールアドレスとパスワードを入力してください</p>
              メールアドレス
              <input
                type="email"
                className="registerInput"
                placeholder="example@mail.com"
                required
                ref={email}
              />
              パスワード
              <input
                type="password"
                className="registerInput"
                placeholder="●●●●●●"
                required
                minLength="6"
                ref={password}
              />
              確認用パスワード
              <input
                type="password"
                className="registerInput"
                placeholder="●●●●●●"
                required
                minLength="6"
                ref={passwordConfirmation}
              />
              <button className="registerButton" type="submit">会員登録する</button>
            </form>
          </div>
        </div>
      </div>


      
    </div>
  );
}
