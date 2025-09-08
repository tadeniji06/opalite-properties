import { featuredProps } from "@/utils/data";
import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";

const Featured = () => {
	return (
		<div className='p-4 sm:p-6 mt-4 max-w-7xl mx-auto'>
			<div className='flex justify-between items-center mb-4 sm:mb-6'>
				<span className='text-lg sm:text-xl lg:text-2xl font-semibold'>
					Featured Properties
				</span>
				<Icon
					icon={"ic:sharp-chevron-right"}
					className='text-xl sm:text-2xl cursor-pointer hover:text-primary-gold transition-colors'
				/>
			</div>

			<div className='mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6'>
				{featuredProps.map((feature, index) => (
					<div
						key={index}
						className='flex flex-col bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200 border border-gray-400'
					>
						<div className='relative aspect-video'>
							<Image
								alt={feature.title}
								src={feature.image}
								fill
								className='object-cover'
							/>
						</div>

						<div className='p-4 flex flex-col flex-grow'>
							<span className='text-lg sm:text-xl font-bold mb-2 line-clamp-2'>
								{feature.title}
							</span>
							<p className='text-gray-600 text-sm sm:text-base mb-3 line-clamp-2 flex-grow'>
								{feature.desc}
							</p>

							<div className='flex items-center gap-2 mb-4 text-gray-500'>
								<Icon
									icon={"mdi:location"}
									className='text-primary-gold flex-shrink-0'
								/>
								<p className='text-sm sm:text-base truncate'>
									{feature.location}
								</p>
							</div>

							<div className='flex justify-between items-center mt-auto'>
								<p className='text-lg sm:text-xl font-semibold text-primary-gold'>
									₦{feature.price.toLocaleString()}
								</p>
								<button className='px-3 py-2 sm:px-4 sm:py-2 bg-black text-primary-gold rounded hover:bg-gray-800 cursor-pointer transition-colors duration-200 text-sm sm:text-base whitespace-nowrap'>
									Buy
								</button>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};
export default Featured;
