import { MountainIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Nav = () => {
    return (
        <div>


            <div className="fixed top-5 left-0 right-0 z-50 px-4 lg:px-6 h-16 flex items-center justify-center backdrop-blur-md bg-gray-200/80 dark:bg-gray-800/80 shadow-lg rounded-t-2xl rounded-b-2xl w-[80%] mx-auto">
                <Link href="/" className="flex items-center justify-center text-white" prefetch={false}>
                    Rybar IT Solutions
                </Link>
                <nav className="ml-auto flex gap-4 sm:gap-6 justify-center">
                    <Link
                        href="#"
                        className="text-sm font-medium hover:underline underline-offset-4 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-300"
                        prefetch={false}
                    >
                        Services
                    </Link>
                    <Link
                        href="#"
                        className="text-sm font-medium hover:underline underline-offset-4 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-300"
                        prefetch={false}
                    >
                        Portfolio
                    </Link>
                    <Link
                        href="/about"
                        className="text-sm font-medium hover:underline underline-offset-4 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-300"
                        prefetch={false}
                    >
                        About
                    </Link>
                    <Link
                        href="#"
                        className="text-sm font-medium hover:underline underline-offset-4 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-300"
                        prefetch={false}
                    >
                        Contact
                    </Link>
                </nav>
            </div>
        </div>
    )
}

export default Nav