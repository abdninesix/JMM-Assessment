import React from 'react'
import { HiOutlineMail } from 'react-icons/hi'

const Login = () => {
    return (
        <div className='h-screen flex p-4'>
            {/* Right section */}
            <section className='flex flex-col flex-1 p-4 justify-between'>
                {/* Logo */}
                <header className='text-center'>
                    <img src='/logo2.svg' alt='logo'/>
                </header>
                {/* Login form */}
                <form className='border'>
                    sometging
                </form>
                {/* Footer */}
                <footer className='flex justify-between text-sm text-gray-500 font-semibold'>
                    <p>&copy; Hysabat Solutions {new Date().getFullYear()}</p>
                    <p className='flex items-center gap-2'><HiOutlineMail className='text-xl' /> sales@hysabat.com</p>
                </footer>
            </section>

            {/* Left section */}
            <section className='flex-1 flex items-center justify-center bg-linear-to-br from-blue-400 to-blue-900 rounded-xl'>
                <div className=''>
                    Hewlo
                </div>
            </section>
        </div>
    )
}

export default Login