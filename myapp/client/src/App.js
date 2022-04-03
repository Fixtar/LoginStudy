import { useEffect, useState } from "react";
import Inputform from "./input";
import axios from "axios";
const PORT = 5005;

function App() {
  const [userInfo, setUserInfo] = useState({
    id: "",
    pw: "",
  });

  useEffect(() => {}, []);

  const Submit = (Account) => {
    setUserInfo({ id: Account.id, pw: Account.pw });
  };

  const handleJoin = (Account) => {
    axios
      .post(`http://localhost:${PORT}/auth/join`, Account)
      .then((response) => {
        console.log(response.data);
      });
  };

  const handleSubmit = (Account) => {
    const webtoken = localStorage.getItem("webtoken");

    axios
      .post(`http://localhost:${PORT}/auth/login`, Account, {
        headers: {
          Auth: webtoken,
        },
      })
      .then((response) => {
        console.log(response.data);
        if (response.webtoken) {
          localStorage.setItem("webtoken", response.token);
          console.log("success");
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

export default App;
