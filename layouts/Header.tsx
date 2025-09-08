"use client";

import { logo } from "@/assets";
import { headerLinks } from "@/utils/data";
import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen);
	};

	const closeMobileMenu = () => {
		setIsMobileMenuOpen(false);
	};

	return (
		<header className='sticky top-0 z-50 border-b border-gray-200 shadow-md bg-white'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<nav className='flex items-center justify-between md:h-[100px] h-24'>
					<Link href={"/"} className=''>
						<Image
							className='md:h-[120px] md:w-[250px] h-[100px] w-[180px]'
							alt='Opalite Properties Logo'
							src={logo}
						/>
					</Link>

					{/* Desktop Navigation */}
					<ul className='hidden lg:flex items-center space-x-8'>
						{headerLinks.map((link) => (
							<li key={link.title}>
								<Link
									href={link.link}
									className='text-black hover:text-primary-gold font-medium transition-colors duration-200 relative group'
								>
									{link.title}
									<span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-200 group-hover:w-full'></span>
								</Link>
							</li>
						))}
					</ul>

					{/* Desktop Action Buttons */}
					<div className='hidden md:flex items-center justify-center gap-3 lg:gap-4'>
						<button className='bg-black text-white rounded-lg shadow-md px-3 py-2 lg:px-5 lg:py-3 text-sm lg:text-base font-medium hover:bg-primary-gold transition-colors duration-200'>
							Buy A Home
						</button>
					</div>

					{/* Mobile menu button */}
					<button
						onClick={toggleMobileMenu}
						className='md:hidden inline-flex items-center justify-center p-2 rounded-md hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white/20 transition-colors duration-200'
						aria-expanded={isMobileMenuOpen}
						aria-label='Toggle navigation menu'
					>
						<Icon
							icon={isMobileMenuOpen ? "mdi:close" : "mdi:menu"}
							className='h-6 w-6 text-black'
						/>
					</button>
				</nav>

				{/* Mobile Navigation Menu */}
				<div
					className={`md:hidden transition-all duration-300 ease-in-out ${
						isMobileMenuOpen
							? "max-h-96 opacity-100 visible"
							: "max-h-0 opacity-0 invisible overflow-hidden"
					}`}
				>
					<div className='px-2 pt-2 pb-4 space-y-1 border-t border-white/20'>
						{/* Mobile Navigation Links */}
						{headerLinks.map((link) => (
							<Link
								key={link.title}
								href={link.link}
								onClick={closeMobileMenu}
								className='block px-3 py-3 text-base font-medium text-black hover:bg-white/10 rounded-md transition-colors duration-200'
							>
								{link.title}
							</Link>
						))}

						{/* Mobile Action Buttons */}
						<div className='pt-3 border-t border-white/20 mt-3'>
							<div className='flex items-center gap-3 px-3'>
								<button
									className='flex-1 bg-black text-white rounded-lg px-4 py-3 text-sm font-medium hover:bg-gray-50 transition-colors duration-200'
									onClick={closeMobileMenu}
								>
									Buy A Home
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
