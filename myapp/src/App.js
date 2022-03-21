import { useEffect, useState } from "react";
import Inputform from "./input";

function App() {

  const [userInfo, setUserInfo] = useState({
    id: '',
    pw: ''
  });

  useEffect(() => {

  }, [])

  const Submit = (Account) => {
    setUserInfo({ id: Account.id, pw: Account.pw });
  }


  return (
    <div className="App">
      <Inputform onSubmit={Submit} />
      <p>id: {userInfo.id}</p>
      <p>pw: {userInfo.pw}</p>
    </div>
  );
}

export default App;
