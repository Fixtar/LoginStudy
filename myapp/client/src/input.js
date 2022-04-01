import { useState } from "react";

function Forminput(props) {
  const onSubmit = props.onSubmit;
  const join = props.Join;
  const [Account, setAccount] = useState({
    id: "",
    pw: "",
  });

  const onChangeAccount = (e) => {
    setAccount({
      ...Account,
      [e.target.name]: e.target.value,
    });
  };

  const SubmitInfo = () => {
    onSubmit(Account);
  };
  const joinBtn = () => {
    join(Account);
  };

  return (
    <div>
      <form>
        <input
          placeholder="id"
          name="id"
          onChange={onChangeAccount}
          type="text"
        ></input>
        <input
          placeholder="password"
          name="pw"
          type="text"
          onChange={onChangeAccount}
        ></input>
      </form>
      <button onClick={SubmitInfo}>로그인</button>
      <button onClick={joinBtn}>회원가입</button>
    </div>
  );
}

export default Forminput;
