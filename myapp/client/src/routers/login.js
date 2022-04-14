import { useEffect, useState } from "react";
import Inputform from "./input";
import axios from "axios";
const PORT = 5005;

function Login() {
  const [userInfo, setUserInfo] = useState({
    id: "",
    pw: "",
  });

  useEffect(() => {
    (async () => {})();

    return () => {};
  }, []);
  const webToken = localStorage.getItem("webToken");

  // const Submit = (Account) => {
  //   setUserInfo({ id: Account.id, pw: Account.pw });
  // };

  const handleJoin = async (Account) => {
    const response = await axios.post(
      `http://localhost:${PORT}/auth/join`,
      Account
    );

    console.log(response);
  };

  const handleSubmit = (Account) => {
    axios
      .post(`http://localhost:${PORT}/auth/login`, Account)
      .then((response) => {
        if (response.data.accessToken) {
          console.log(response.data.accessToken);
          localStorage.setItem("webToken", response.data.accessToken);
        }
      });
  };

  return (
    <div className="App">
      {" "}
      <Inputform onSubmit={handleSubmit} Join={handleJoin} />
      <p>id: {userInfo.id}</p>
      <p>pw: {userInfo.pw}</p>
    </div>
  );
}

export default Login;
