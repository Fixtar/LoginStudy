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
    axios
      .get(`http://localhost:${PORT}/auth/login`, Account)
      .then((response) => {
        console.log(response.data);
      });
  };

  return (
    <div className="App">
      <Inputform onSubmit={handleSubmit} Join={handleJoin} />
      <p>id: {userInfo.id}</p>
      <p>pw: {userInfo.pw}</p>
    </div>
  );
}

export default App;
