import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { ThreeDots } from 'react-loader-spinner'
import { ToastContainer, toast } from 'react-toastify'
import { useRouter } from 'next/navigation'
const SingupForm = () => {

    const Router = useRouter()
    const [loading, setLoading] = useState(false)
    const [buttonDisabled, setButtonDisabled] = useState(true)
    const [user, setUser] = useState({
        fullname: "",
        email: "",
        password: "",
    })

    const handleRegistration = (e) => {
        e.preventDefault()
        setButtonDisabled(false)
        toast.success('button succesfully')
        // alert('button click huwa')
    }
    useEffect(() => {
        if (
            user.email.length > 0 && user.password.length > 0 && user.username.length > 0
        ) {
            setButtonDisabled(false)
        } else {
            setButtonDisabled(true)
        }
    }, [user])
    return (
        <>
            <div>
                <div className="w-[450px] sm:w-[500px] mx-auto bg-black px-10 py-16 rounded-md flex flex-col gap-y-6 border-[1px] border-primaryColor/30">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-3xl font-semibold text-white">Sign up Form</p>
                            <p className="mt-2">Create your account</p>
                        </div>
                        {loading && (
                            <ThreeDots
                                height="80"
                                width="80"
                                radius="9"
                                color="#CDF683"
                                ariaLabel="three-dots-loading"
                                wrapperStyle={{}}
                                visible={true}
                            />
                        )}
                    </div>
                    <div className="flex flex-col gap-y-4">
                        <input
                            label="Full Name"
                            placeholder="ex: John Doe"
                            inputType="text"
                            value={user.username}
                            onChange={(e) => setUser({ ...user, username: e.target.value })}
                        />
                        <input
                            label="Email"
                            placeholder="ex: john@anymail.com"
                            inputType="email"
                            value={user.email}
                            onChange={(e) => setUser({ ...user, email: e.target.value })}
                        />
                        <input
                            label="Password"
                            placeholder="- - - - - -"
                            inputType="password"
                            value={user.password}
                            onChange={(e) => setUser({ ...user, password: e.target.value })}
                        />
                    </div>
                    {buttonDisabled ? (
                        <button
                            onClick={(e) => e.preventDefault()}
                            className="bg-zinc-900 w-full py-2 text-primaryColor/60 cursor-not-allowed rounded-md mt-2 duration-200"
                        >
                            Fill the fields
                        </button>
                    ) : (
                        <button
                            onClick={handleRegistration}
                            className="w-full py-2 rounded-md mt-2 border-[1px] bg-zinc-950 text-primaryColor border-primaryColor hover:bg-zinc-800 duration-200"
                        >
                            Crate an Account
                        </button>
                    )}
                    <p>
                        Have an account{" "}
                        <Link href={"/login"}>
                            <span className="text-primaryColor/60 hover:text-primaryColor cursor-pointer font-semibold duration-200">
                                Login
                            </span>
                        </Link>
                    </p>
                    <ToastContainer
                        position="top-right"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="light"
                    />
                </div>
            </div>

            {/* <!-- component --> */}
            <div class="bg-grey-lighter min-h-screen flex flex-col">
                <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                    <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                        <h1 class="mb-8 text-3xl text-center">Sign up</h1>
                        <input
                            type="text"
                            class="block border border-grey-light w-full p-3 rounded mb-4"
                            name="fullname"
                            placeholder="Full Name"
                            value={user.fullname}
                            onChange={(e) => setUser({ ...user, fullname: e.target.value })}
                        />

                        <input
                            type="text"
                            class="block border border-grey-light w-full p-3 rounded mb-4"
                            name="email"
                            placeholder="Email" />
                        value={user.email}
                        onChange={(e) => setUser({ ...user, email: e.target.value })}

                        <input
                            type="password"
                            class="block border border-grey-light w-full p-3 rounded mb-4"
                            name="password"
                            placeholder="Password"
                            value={user.password}
                            onChange={(e) => setUser({ ...user, password: e.target.value })}

                        />
                        <input
                            type="password"
                            class="block border border-grey-light w-full p-3 rounded mb-4"
                            name="confirm_password"
                            placeholder="Confirm Password" />

                        {
                            buttonDisabled ? (
                                <button
                                    onClick={(e) => e.preventDefault()}
                                    type="submit"
                                    class="w-full text-center py-3 rounded bg-green text-white hover:bg-green-dark focus:outline-none my-1"
                                >fill All Feild</button>
                            ) : (
                                <button
                                    onClick={handleRegistration}
                                    type="submit"
                                    class="w-full text-center py-3 rounded bg-green text-white hover:bg-green-dark focus:outline-none my-1"
                                >Create Account</button>
                            )
                        }

                        <div class="text-center text-sm text-grey-dark mt-4">
                            By signing up, you agree to the
                            <a class="no-underline border-b border-grey-dark text-grey-dark" href="#">
                                Terms of Service
                            </a> and
                            <a class="no-underline border-b border-grey-dark text-grey-dark" href="#">
                                Privacy Policy
                            </a>
                        </div>
                    </div>

                    <div class="text-grey-dark mt-6">
                        Already have an account?
                        <a class="no-underline border-b border-blue text-blue" href="../login/">
                            Log in
                        </a>.
                    </div>
                </div>
            </div>

            {/* <section className="bg-gray-50 dark:bg-gray-900">
                <div className="flex flex-col items-center justify-center px-6 py-8  md:h-screen lg:py-0">

                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Create and account
                            </h1>
                            <form className="space-y-4 md:space-y-6" action="#">
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                    <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required />
                                </div>
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                    <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                </div>
                                <div>
                                    <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
                                    <input type="confirm-password" name="confirm-password" id="confirm-password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                </div>
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required />
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label htmlFor="terms" className="font-light text-gray-500 dark:text-gray-300">I accept the <a className="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terms and Conditions</a></label>
                                    </div>
                                </div>
                                <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Create an account</button>
                                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                    Already have an account? <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</a>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section> */}
        </>
    )
}

export default SingupForm