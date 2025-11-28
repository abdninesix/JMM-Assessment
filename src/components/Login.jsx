import React from 'react'
import { HiOutlineMail } from 'react-icons/hi'

const Login = () => {
    return (
        <div className='h-screen flex p-4'>
            {/* Right section */}
            <section className='w-1/2 flex flex-col p-4 justify-between'>
                {/* Logo */}
                <header className='text-center'>
                    <img src='/logo2.svg' alt='logo' />
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
            <section className='w-1/2 flex items-center p-20 justify-center bg-linear-to-br from-sky-400 to-sky-950 bg- rounded-2xl'>
                <div className='space-y-4 text-center text-white'>
                    <h2 className='text-3xl font-semibold'>Transforming the Future of Resource Planning</h2>
                    <p className='text-xl'>Empowering businesses with smarter resource management and real-time insights. HYSABAT ERP helps you optimize every resource, minimize waste, and drive operational efficiency. Gain full visibility into projects, anticipate resource needs, and respond swiftly to market changes.</p>
                </div>
            </section>
        </div>
    )
}

export default Login