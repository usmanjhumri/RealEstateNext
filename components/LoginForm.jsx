import React, { useState } from 'react'

const LoginForm = () => {
    const [user, setUser] = useState({
        email: "",
        password: ""
    })
    return (
        <div>
            <input
                className="w-full shadow-inner bg-gray-100 rounded-lg placeholder-black text-2xl p-4 border-none block mt-1 w-full"
                label="Email"
                placeholder="ex: john@anymail.com"
                inputType="email"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
            <input
                className="w-full shadow-inner bg-gray-100 rounded-lg placeholder-black text-2xl p-4 border-none block mt-1 w-full"
                label="Password"
                placeholder="- - - - - -"
                inputType="password"
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
        </div>
    )
}

export default LoginForm