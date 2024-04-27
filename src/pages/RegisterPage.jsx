import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export function RegisterPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    async function registerUser(e) {
        e.preventDefault();
        try {
            const res = await axios.post('/user/register', {
                name,
                email,
                password,
            });
            navigate('/');
            alert('Registration successful. Now you can log in');
        } catch (e) {
            alert('Registration failed. Please try again later');
        }
    }

    return (
        <div className="mt-4 grow flex justify-around items-center">
            <div className="mb-40">
                <h1 className="mt-3 text-4xl text-center font-bold">Register</h1>
                <form className="mt-4 max-w-md mx-auto" onSubmit={registerUser}>
                    <label className="text-md text-black font-semibold py-2">Name</label>
                    <input type="text"
                        placeholder="John Doe"
                        value={name}
                        onChange={(e) => {
                            setName(e.target.value);
                        }}
                    />
                    <label className="text-md text-black font-semibold py-2">Email</label>
                    <input type="email"
                        placeholder="johndoe@example.com"
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                    />
                    <label className="text-md text-black font-semibold py-2">Password</label>
                    <input type="password"
                        placeholder="password"
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                    />
                    <button className="primary">Register</button>
                    <div className="text-center py-2">
                        Already have a account yet? <Link to={'/login'} className=" text-black underline">Login</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}