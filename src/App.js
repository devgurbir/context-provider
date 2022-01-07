import { useState, useContext } from "react";
import { AuthContext } from "./Context/AuthContextProvider";
import "./styles.css";
import axios from "axios";

export default function App() {
  const { isAuth, setIsAuth, token, setToken } = useContext(AuthContext);

  const handleLogin = async () => {
    return await axios
      .post("https://reqres.in/api/login", {
        email: "eve.holt@reqres.in",
        password: "cityslicka"
      })
      .then((res) => {
        setToken(res.data.token);
        setIsAuth(true);
      })
      .catch((err) => {
        setToken(null);
        setIsAuth(false);
      });
  };

  return (
    <div className="App">
      <h3>{isAuth ? token : "Not Logged In"}</h3>
      <button onClick={handleLogin}>Log In</button>
    </div>
  );
}
