import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";
import Header from "../../components/Header/Header";

const Login = () => {
  return (
    <section className="login">
      <Header />
      <div className="login__form">
        <h1>Acesse com seu login ou cadastre-se</h1>
        <h2>você pode entrar com o seu CPF</h2>
      </div>
      <div className="login__input-wrapper">
        <label htmlFor="name">Digite seu CPF:</label>
        <input
          type="text"
          name="Nome completo"
          id="name"
          placeholder="Nome completo"
          className="login__input-name"
        />
        <label htmlFor="password">Senha:</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="********"
          className="login__input-password"
        />
      </div>
      <button>
        <Link to={"/home"}>Entrar</Link>
      </button>
    </section>
  );
};

export default Login;
