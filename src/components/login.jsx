import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login({ setIsLoggedIn }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoggedIn(true);
        navigate("/");
    }

    function validateForm() {
        return username.length > 0 && password.length > 0;
    }

   
    return (
        <div className='bg-yellow-100'>
            <div className="container mx-auto px-4 h-screen items-center grid ">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                    <div className="text-[#D8035E] font-bold text-6xl md:text-left">SpaceVue</div>
                    <div className="bg-gray-100 rounded-lg shadow border-white-100 p-8">
                        <form className="flex flex-col justify-center">
                            <p className="text-base font-medium">
                                Your username
                            </p>
                            <input className='text-sm font-normal p-2' placeholder='username' onChange={(e) => setUsername(e.target.value)} value={username}></input>
                            <p className="text-base font-medium mt-4">
                                Your password
                            </p>
                            <input className='text-sm font-normal p-2' placeholder='password' onChange={(e) => setPassword(e.target.value)} value={password}></input>
                            <button className="text-sm p-2 font-bold w-min items-center bg-primary-100 text-white-100 mt-8 transition-opacity duration-200 ease-in-out disabled:opacity-50 cursor-not-allowed enabled:opacity-100 cursor-pointer" onClick={handleSubmit} type="submit" disabled={!validateForm()}>Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;   