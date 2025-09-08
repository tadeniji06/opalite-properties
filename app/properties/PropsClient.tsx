import { propsHero } from "@/assets";
import Image from "next/image";

const PropsClient = () => {
	return (
		<div className='relative w-full h-[600px] md:h-[500px] rounded-xl overflow-hidden'>
			{/* Background Hero Image */}
			<Image
				src={propsHero}
				alt='Properties Hero'
				fill
				className='object-cover'
				priority
			/>

			{/* Overlay */}
			<div className='absolute inset-0 bg-black/50' />

			{/* Content */}
			<div className='absolute inset-0 flex flex-col md:flex-row items-center justify-center gap-8 px-6 md:px-16'>
				{/* Left Text */}
				<div className='text-white max-w-md text-center md:text-left'>
					<h2 className='text-2xl sm:text-3xl md:text-4xl font-semibold leading-snug'>
						Find apartments, houses, and commercial spaces that match
						your needs
					</h2>
					<p className='mt-3 text-sm md:text-base text-gray-200'>
						Discover curated listings in prime locations across
						Nigeria.
					</p>
				</div>

				{/* Right Search Form */}
				<div className='bg-white/95 backdrop-blur-md rounded-xl p-6 w-full max-w-sm shadow-xl'>
					<form className='space-y-4'>
						{/* Location */}
						<div>
							<label
								htmlFor='location'
								className='block text-sm font-medium text-gray-700 mb-1'
							>
								Location
							</label>
							<select
								id='location'
								className='w-full border rounded-lg h-11 px-3 text-gray-700 focus:ring-2 focus:ring-yellow-400 focus:outline-none'
							>
								<option>Select Location</option>
								<option>Lagos</option>
								<option>Abuja</option>
								<option>Port Harcourt</option>
							</select>
						</div>

						{/* Property Type */}
						<div>
							<label
								htmlFor='type'
								className='block text-sm font-medium text-gray-700 mb-1'
							>
								Property Type
							</label>
							<select
								id='type'
								className='w-full border rounded-lg h-11 px-3 text-gray-700 focus:ring-2 focus:ring-yellow-400 focus:outline-none'
							>
								<option>Select Type</option>
								<option>Apartment</option>
								<option>House</option>
								<option>Commercial</option>
							</select>
						</div>

						{/* Price Range */}
						<div>
							<label className='block text-sm font-medium text-gray-700 mb-1'>
								Select price range (₦)
							</label>
							<div className='flex gap-2'>
								<select className='flex-1 border rounded-lg h-11 px-3 text-gray-700 focus:ring-2 focus:ring-yellow-400 focus:outline-none'>
									<option>Min Price</option>
									<option>₦100k</option>
									<option>₦500k</option>
									<option>₦1M</option>
								</select>
								<select className='flex-1 border rounded-lg h-11 px-3 text-gray-700 focus:ring-2 focus:ring-yellow-400 focus:outline-none'>
									<option>Max Price</option>
									<option>₦2M</option>
									<option>₦5M</option>
									<option>₦10M</option>
								</select>
							</div>
						</div>

						{/* Search Button */}
						<button
							type='submit'
							className='w-full bg-yellow-500 text-black font-semibold py-2.5 rounded-lg hover:bg-yellow-600 transition focus:ring-2 focus:ring-yellow-400'
						>
							Search
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default PropsClient;
