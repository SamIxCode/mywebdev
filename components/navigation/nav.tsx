
import Link from 'next/link'
import React from 'react'
import { CustomLink } from "./CustomNavLink"



const Nav = () => {
    return (
        <div>


            <div className="fixed top-5 left-0 right-0 z-50 px-4 lg:px-6 h-16 flex items-center justify-center backdrop-blur-md bg-gray-900/80 dark:bg-gray-800/80 shadow-lg rounded-t-2xl rounded-b-2xl w-[80%] mx-auto">
                <Link href="/" className="flex items-center justify-center text-white" prefetch={false}>
                    Rybar IT Solutions
                </Link>
                <nav className="ml-auto flex gap-4 sm:gap-6 justify-center">
                {/* <CustomLink href="#">Services</CustomLink> */}
      <CustomLink href="/#portfolioHomePage" >Portfólio</CustomLink>
      <CustomLink href="/about">O nás</CustomLink>
      <CustomLink href="/#contactForm">Kontakt</CustomLink>
                </nav>
            </div>
        </div>
    )
}

export default Nav