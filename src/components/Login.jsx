import React from 'react'
import { HiOutlineMail } from 'react-icons/hi'

const Login = () => {
    return (
        <div className='h-screen flex gap-4 p-4'>
            {/* Right section */}
            <section className='flex flex-col flex-1 justify-between'>
                {/* Logo */}
                <header className='text-center'>
                    <img src='/logo2.svg' alt='logo' className='p-2' />
                </header>
                {/* Login form */}
                <form className='border'>
                    sometging
                </form>
                {/* Footer */}
                <footer className='flex justify-between text-sm text-gray-500 font-semibold'>
                    <p>&copy; Hysabat Solutions {new Date().getFullYear()}</p>
                    <p><HiOutlineMail /> sales@hysabat.com</p>
                </footer>
            </section>

            {/* Left section */}
            <section className='flex-1 bg-blue-500 rounded-xl'></section>
        </div>
    )
}

export default Login