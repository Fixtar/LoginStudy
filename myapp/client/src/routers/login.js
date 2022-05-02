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
          localStorage.setItem("accessToken", response.data.accessToken);
        }
      });
  };

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
  };

  function RenderLog(props) {
    const accessToken = localStorage.getItem("accessToken");
    if (!accessToken) {
      return <Inputform onSubmit={handleSubmit} Join={handleJoin} />;
    } else {
      return <button onClick={handleLogout}>로그아웃</button>;
    }
  }

  return (
    <div className="App">
      {" "}
      <RenderLog></RenderLog>
    </div>
  );
}

export default Login;
