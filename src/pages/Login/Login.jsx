import React, { useState } from 'react';
import axios from 'axios';
import BASE_API_URL from '../../config';
import { useAuth } from '../../components/Auth/AuthContext';
import { useNavigate } from 'react-router-dom';
// logo import
import logo from '../../assets/logo.svg';

const Login = () => {
    const { login } = useAuth(); // Utiliser le hook pour obtenir la fonction de connexion
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post(`${BASE_API_URL}/api/login_check`, { username, password });
            const token = response.data.token;
            console.log(response);
            login(token); // Utiliser la fonction de connexion du contexte
            navigate('/');
        } catch (error) {
            setError('Login failed. Please try again.');
        }
    };
    const handleRegisterRedirect = () => {
        navigate('/register');
    };

    return (
        <div className="w-full flex flex-wrap ">
            {/* Image Section */}
            <div className="w-1/2 shadow-2xl bg-blue-800">
                <div className="object-cover w-full h-screen hidden md:block" />
            </div>
            {/* Login Section */}
            <main className='w-full md:w-1/2 flex flex-col min-h-[calc(100vh-376px)] md:min-h-[calc(100vh-256px)] xl:min-h-[calc(100vh-208px)]'>
                <div className="flex justify-center md:justify-start pt-2 md:pl-12 md:-mb-12">
                    <a href="/" className=" m-auto text-white font-bold text-xl mt-10" alt="Logo"><img src={logo} alt="" className='rounded-xl max-w-96'/></a>
                </div>
                <section className="flex justify-center items-center h-full">
                    <div className="flex flex-col gap-8 justify-center items-center py-10">
                        <h1 className="text-3xl">Se connecter</h1>
                        {error && <p className="text-red-500 text-center">{error}</p>}
                        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                            <input
                                type="text"
                                placeholder="Adresse email"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                                className="bg-transparent px-6 py-4 border-b border-b-blue-800 outline-none text-lg"
                            />
                            <input
                                type="password"
                                placeholder="Mot de passe"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className="bg-transparent px-6 py-4 border-b border-b-blue-800 outline-none text-lg"
                            />
                            <div className="flex gap-4">
                                <button
                                    type="button"
                                    onClick={handleRegisterRedirect}
                                    className="flex items-center justify-center text-black font-bold text-lg hover:bg-green-600 p-4 mt-8 rounded w-2/4"
                                >
                                    Créer un compte
                                </button>
                                <input type="submit" value="C'est parti 🚀" className="flex items-center justify-center bg-green-500 text-white font-bold text-lg hover:bg-green-700 p-4 mt-8 rounded w-2/4" /></div>
                        </form>
                    </div>
                </section>
            </main>

        </div>
    );
};

export default Login;
