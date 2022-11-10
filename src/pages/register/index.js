import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'

const Register = () => {
    let navigate = useNavigate()
    const [data, setData] = useState({email: '', username: '', password: ''})
    const [errors, setErrors] = useState(null)

    const apiURL = 'http://94.74.86.174:8080/api/register'

    const register = async(e) => {
        e.preventDefault();

        const formReq = {email: data.email, username: data.username, password: data.password}
        const response = await axios.post(apiURL, formReq)
            .then((res) => {
                navigate('/login')
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
                    <h3 className='text-xl mb-2'>Register Page</h3>
                    <hr/>
                    <form onSubmit={register}>
                        <div className='flex flex-col'>
                            <label htmlFor='email' className='my-2'>Email</label>
                            <input type="email" name='email' className='border-2 px-2 py-2' required onChange={onChange} value={data.email} placeholder='Email' />
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor='username' className='my-2'>Username</label>
                            <input type="text" name='username' className='border-2 px-2 py-2' required onChange={onChange} value={data.username} placeholder='Username' />
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor='password' className='my-2'>Password</label>
                            <input type="password" name='password' className='border-2 px-2 py-2' required onChange={onChange} value={data.password} placeholder='Password' />
                        </div>
                        <button type='submit' className='px-6 rounded-md text-white text-base my-4 w-full hover:bg-slate-800 py-2 bg-slate-900'>Login</button>
                    </form>
                    <hr/>
                    <Link to='/login' className='text-sm mt-3'>sudah punya akun?</Link>
                </div>
            </section>
        </>
    )
}

export default Register;