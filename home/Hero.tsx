"use client";
import { hero } from "@/assets";
import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";

const Hero = () => {
	return (
		<div className='p-4 sm:p-6 bg-gradient-to-r from-black to-primary-gold'>
			<div className='flex flex-col lg:flex-row justify-between px-4 sm:px-8 items-center max-w-7xl mx-auto gap-6 lg:gap-0'>
				<div className='text-white w-full lg:w-1/2 flex flex-col gap-5 order-2 lg:order-1'>
					<span className='text-primary-gold flex items-center justify-center lg:justify-start text-sm sm:text-base'>
						<Icon icon={"material-symbols:star-rounded"} />
						<Icon icon={"material-symbols:star-rounded"} />
						<Icon icon={"material-symbols:star-rounded"} />
						<Icon icon={"material-symbols:star-rounded"} />
						<Icon icon={"material-symbols:star-rounded"} />
						Trusted by 3k+ people
					</span>
					<h2 className='text-2xl sm:text-3xl lg:text-4xl font-bold text-white text-center lg:text-left'>
						Find Your Dream Home With Ease
					</h2>
					<p className='text-white text-center lg:text-left text-sm sm:text-base'>
						Discover apartments, houses, and commercial spaces
						tailored to your lifestyle
					</p>

					<div className='mt-4 border border-gray-300 rounded-xl p-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3'>
						<input
							type='text'
							placeholder='Search for properties...'
							className='p-2 rounded w-full outline-none text-white'
						/>
						<button className='bg-white text-black px-4 py-2 rounded-lg font-medium hover:bg-yellow-400 transition-colors duration-200 whitespace-nowrap'>
							Search
						</button>
					</div>
				</div>

				<div className='hidden md:flex w-1/2 order-1 lg:order-2'>
					<Image
						src={hero}
						alt='Hero Image'
						className='w-full h-auto object-cover rounded-lg'
					/>
				</div>
			</div>
		</div>
	);
};
export default Hero;
