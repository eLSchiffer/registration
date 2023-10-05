import React, { useState } from "react";
import './style.css'

const Registration = () => {
    const [user, setUser] = useState({
        username: '',
        email: '',
        password: '',
        passwordConfirm: '',
    });


    const handleSubmit = (e) => {
        e.preventDefault();
        if (user.username === '') {
            const at = user.email.indexOf('@');
            const newUsername = user.email.slice(0, at);
            setUser({ ...user, username: newUsername });
            console.log(user)
        }
        else {
            setUser({
                ...user,
                username: '',
                email: '',
                password: '',
                passwordConfirm: '',
            })
            console.log(user);
        }
    };

    return (

        <div className="background">
            < form className="nice" onSubmit={handleSubmit}>
                <input className="field" id="email" type='text' placeholder="Email Address" value={user.email} onChange={(e) => { setUser({ ...user, email: e.target.value }) }}></input>
                <input className="field" id='username' type='text' placeholder="User Name" value={user.username} onChange={(e) => { setUser({ ...user, username: e.target.value }) }}></input>
                <input className="field" id='password' type='text' placeholder="Password" value={user.password} onChange={(e) => { setUser({ ...user, password: e.target.value }) }}></input>
                <input className="field" id='passwordConfirm' type='text' placeholder="Confirm Password" value={user.passwordConfirm} onChange={(e) => { setUser({ ...user, passwordConfirm: e.target.value }) }}></input>
                <button type="submit" className="caps button">register</button>
            </form >
        </div>
    )

};

export default Registration;