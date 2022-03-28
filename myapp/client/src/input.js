import { useState } from "react";


function Forminput(props) {
    const onSubmit = props.onSubmit;

    const [Account, setAccount] = useState({
        id: '',
        pw: ''
    });

    const onChangeAccount = (e) => {
        setAccount({
            ...Account,
            [e.target.name]: e.target.value,
        });
    }


    const SubmitInfo = () => {
        onSubmit(Account);
    }

    return (
        <div>
            <form>
                <input
                    placeholder="id"
                    name="id"
                    onChange={onChangeAccount}
                    type='text'
                ></input>
                <input
                    placeholder="password"
                    name="pw"
                    type='text'
                    onChange={onChangeAccount}
                ></input>
            </form>
            <button onClick={SubmitInfo}>로그인</button>
        </div>

    );
}

export default Forminput;