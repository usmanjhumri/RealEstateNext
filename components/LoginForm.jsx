import React, { useState } from 'react'

const LoginForm = () => {
    const [user, setUser] = useState({
        email: "",
        password: ""
    })
    return (
        <>
            <div className='flex flex-col gap-y-4 w-[450px] sm:w-[500px] mx-auto  px-10 py-16 rounded-md flex flex-col gap-y-6 border-[1px] border-primaryColor/30'>

                <div>
                    <p className="text-3xl font-semibold ">Login Form</p>

                </div>

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
        </>
    )
}

export default LoginForm