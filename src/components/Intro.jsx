import React from 'react'

export default function Intro() {
    return (
        <div className="w-full h-full mx-auto text-green-500 mt-5">
            <h1 className="font-semibold text-2xl lg:text-3xl tracking-widest text-center">Hello There!🙋‍♂️</h1>
            <h1 className="mt-4 text-xl lg:text-2xl font-medium text-blue-500">I'm Siam</h1>
            <p className="mt-1 lg:text-lg w-1/2">Web Designer and Developer</p>
            <p className="mt-1 lg:text-lg w-11/12 lg:w-10/12">To know more about me, please type one of the commands below:</p>
            <ul className="w-10/12 flex space-x-5 lg:space-x-10 mt-2 text-blue-500">
                <li className="hover:underline cursor-pointer">About</li>
                <li className="hover:underline cursor-pointer">Skills</li>
                <li className="hover:underline cursor-pointer">Projects</li>
                <li className="hover:underline cursor-pointer">Contact</li>
                <li className="hover:underline cursor-pointer">Help</li>
            </ul>
        </div>
    )
}
