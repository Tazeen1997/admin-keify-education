import React from 'react';
import { useHistory } from 'react-router-dom';

function Login(){

    let history = useHistory();


    return(
        <div>
            {/* <input type="text" placeholder="username" />
            <button onClick={() => {history.push("/admin");
            }}>Login</button> */}
            login
        </div>
    );
}

export default Login;