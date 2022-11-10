import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    let navigate = useNavigate()
    const [data, setData] = useState({username: '', password: ''})
    const [errors, setErrors] = useState(null)

    const apiURL = 'http://94.74.86.174:8080/api/login'

    const login = async(e) => {
        e.preventDefault();

        const formReq = {username: data.username, password: data.password}
        const response = await axios.post(apiURL, formReq)
            .then((res) => {
                const response = res.data
                localStorage.setItem('token-bts', response.data.token)
                navigate('/dashboard')
            })
            .catch(err => err.response)
    } 

    const onChange = (e) => {  
        e.persist();  
        setData({ ...data, [e.target.name]: e.target.value });  
    } 
    return (
        <>
            <section className='login bg-red-500 min-h-screen pt-28'>
                <div className='rounded-lg w-2/5 bg-white mx-auto p-6'>
                    <h3 className='text-xl mb-2'>Login Page</h3>
                    <hr/>
                    <form onSubmit={login}>
                        <div className='flex flex-col'>
                            <label htmlFor='username' className='my-2'>Username</label>
                            <input type="text" name='username' className='border-2 px-2 py-2' required onChange={onChange} value={data.username} placeholder='Username' />
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor='username' className='my-2'>Password</label>
                            <input type="password" name='password' className='border-2 px-2 py-2' required onChange={onChange} value={data.password} placeholder='Username' />
                        </div>
                        <button type='submit' className='px-6 rounded-md text-white text-base my-4 w-full hover:bg-slate-800 py-2 bg-slate-900'>Login</button>
                    </form>
                    <hr />
                    <Link to='/register' className='text-sm mt-3'>Belum punya akun?</Link>
                </div>
            </section>
        </>
    )
}

export default Login;