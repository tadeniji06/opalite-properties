import { logo } from "@/assets";
import { headerLinks } from "@/utils/data";
import Link from "next/link";
import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";

const Footer = () => {
	return (
		<footer className='bg-primary-dark text-white p-4 sm:p-6 lg:p-8 mt-8 rounded-t-3xl'>
			<div className='max-w-7xl mx-auto'>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12'>
					{/* Company Info Section */}
					<div className='lg:col-span-2'>
						<div className='flex justify-center md:justify-start mb-4'>
							<Image
								src={logo}
								alt='Opalite Properties'
								width={120}
								height={40}
								className='sm:w-[150px] sm:h-[80px]'
							/>
						</div>
						<p className='text-gray-300 text-sm sm:text-base leading-relaxed text-center md:text-left max-w-md'>
							At Opalite Properties, we believe real estate is more
							than just buying or selling homes—it's about building
							the future you envision. We provide trusted
							opportunities for individuals and businesses to invest
							in properties that deliver lasting value.
						</p>
					</div>

					{/* Quick Links Section */}
					<div className='text-center md:text-left'>
						<h3 className='text-white font-semibold text-lg mb-4'>
							Quick Links
						</h3>
						<ul className='space-y-2'>
							<li>
								<Link
									href='/'
									className='text-gray-300 hover:text-primary-gold transition-colors duration-200 text-sm'
								>
									Home
								</Link>
							</li>
							<li>
								<Link
									href='/about'
									className='text-gray-300 hover:text-primary-gold transition-colors duration-200 text-sm'
								>
									About
								</Link>
							</li>
							<li>
								<Link
									href='/properties'
									className='text-gray-300 hover:text-primary-gold transition-colors duration-200 text-sm'
								>
									Properties
								</Link>
							</li>
							<li>
								<Link
									href='/consultation'
									className='text-gray-300 hover:text-primary-gold transition-colors duration-200 text-sm'
								>
									Schedule Consultation
								</Link>
							</li>
						</ul>
					</div>

					{/* Contact & Newsletter Section */}
					<div className='text-center md:text-left'>
						<h3 className='text-white font-semibold text-lg mb-4'>
							Got more questions?
						</h3>

						{/* Email Signup */}
						<div className='mb-4'>
							<div className='flex flex-col sm:flex-row gap-2'>
								<input
									type='email'
									placeholder='Email Address'
									className='flex-1 px-3 py-2 bg-gray-700 text-white placeholder-gray-400 rounded text-sm focus:outline-none focus:ring-2 focus:ring-primary-gold'
								/>
								<button className='bg-primary-gold text-black px-4 py-2 rounded hover:bg-yellow-400 transition-colors duration-200'>
									<Icon
										icon='material-symbols:arrow-forward'
										className='text-lg'
									/>
								</button>
							</div>
						</div>

						{/* Social Media Icons */}
						<div className='flex justify-center md:justify-start gap-3 mb-4'>
							<a
								href='#'
								className='bg-gray-700 p-2 rounded hover:bg-primary-gold hover:text-black transition-colors duration-200'
							>
								<Icon icon='mdi:instagram' className='text-xl' />
							</a>
							<a
								href='#'
								className='bg-gray-700 p-2 rounded hover:bg-primary-gold hover:text-black transition-colors duration-200'
							>
								<Icon icon='mdi:facebook' className='text-xl' />
							</a>
							<a
								href='#'
								className='bg-gray-700 p-2 rounded hover:bg-primary-gold hover:text-black transition-colors duration-200'
							>
								<Icon icon='mdi:twitter' className='text-xl' />
							</a>
							<a
								href='#'
								className='bg-gray-700 p-2 rounded hover:bg-primary-gold hover:text-black transition-colors duration-200'
							>
								<Icon icon='mdi:linkedin' className='text-xl' />
							</a>
						</div>
					</div>
				</div>

				{/* Bottom Footer */}
				<div className='mt-8 pt-6 border-t border-gray-700'>
					<div className='flex flex-col md:flex-row justify-between items-center gap-4'>
						{/* Copyright */}
						<div className='text-center md:text-left'>
							<p className='text-gray-400 text-xs sm:text-sm'>
								© 2023 B360 Development. All rights reserved.
							</p>
						</div>

						{/* Legal Links */}
						<div className='flex items-center gap-4 text-xs sm:text-sm'>
							<Link
								href='/terms'
								className='text-gray-400 hover:text-primary-gold transition-colors duration-200'
							>
								Terms of Service
							</Link>
							<span className='text-gray-600'>|</span>
							<Link
								href='/privacy'
								className='text-gray-400 hover:text-primary-gold transition-colors duration-200'
							>
								Privacy Policy
							</Link>
						</div>

						{/* Developer Credit */}
						<div className='text-center md:text-right'>
							<p className='text-gray-400 text-xs sm:text-sm'>
								Developed by{" "}
								<a
									href='https://olutunmise.vercel.app'
									className='text-primary-gold font-semibold hover:text-yellow-400 transition-colors duration-200'
									target='_blank'
									rel='noreferrer'
								>
									Olutunmise
								</a>
							</p>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};
export default Footer;
