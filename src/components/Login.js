import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState('');
    const navigate = useNavigate();

    const Auth = async(e) =>{
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/login', {
                email: email,
                password: password,
            });
            navigate("/dashboard");
        } catch (error) {
            if(error.response){
                setMsg(error.response.data.msg);
            }
        }
    }

    return (
        <section className="hero is-fullheight" style={{ background: '#0094FF', minHeight: '100vh' }}>
            <div className="hero-body">
                <div className="container">
                    <div className="columns is-centered">
                        <div className="column is-5-tablet is-4-desktop is-3-widescreen">
                            <form onSubmit={Auth} className="box" style={{ background: 'white', padding: '20px', borderRadius: '10px' }}>
                                <p className="has-text-centered">{msg}</p>
                                <div className="field">
                                    <label className="label" style={{ color: 'black' }}>Email or Username</label>
                                    <div className="control">
                                        <input type="text" className="input" placeholder="Username" value={email} onChange={(e) => setEmail(e.target.value)} style={{ background: 'white', borderColor: 'black', color: 'black' }}/>
                                    </div>
                                </div>
                                <div className="field">
                                    <label className="label" style={{ color: 'black' }}>Password</label>
                                    <div className="control">
                                        <input type="password" className="input" placeholder="******" value={password} onChange={(e) => setPassword(e.target.value)} style={{ background: 'white', borderColor: 'black', color: 'black', }}/>
                                    </div>
                                </div>
                                <div className="field">
                                    <button className="button is-success is-fullwidth" style={{ background: '#0094FF', color: 'white'}}>Login</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login;
