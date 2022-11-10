import React, { useEffect, useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../context/Auth';

export default function PrivateRoute() {
    const { user } = useAuth();
    const [isLogin, setIsLogin] = useState(false)
    useEffect(() => {
        console.log(user)
        setIsLogin(true)
    }, [])

    if(!isLogin) return null

    return <Outlet />;
}