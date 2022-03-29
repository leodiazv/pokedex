import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import pokedex_logo from "../assets/images/pokedex_logo.png";
import pokeball from "../assets/images/pokeball.png";

import "../assets/styles/Login.css";

const Login = () => {
  const [userName, setUserName] = useState("");
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    console.log(userName);

    dispatch({
      type: "GET_USERNAME",
      payload: userName,
    });

    setUserName("");
    navigate("/pokedex");
  };

  return (
    <div className="login-container">
      <img src={pokedex_logo} alt="pokedex logo" />
      <h1>¡Hola Entrenador! </h1>
      <form action="" onSubmit={submit} className="form-container">
        <p>Para poder comenzar, dame tu nombre.</p>
        <input
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          required
          placeholder="Tu nombre.."
        />
        <button>COMENZAR</button>
      </form>
      <footer>
        <img src={pokeball} />
      </footer>
    </div>
  );
};

export default Login;
