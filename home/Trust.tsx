import { clientTrust } from "@/utils/data";
import { Icon } from "@iconify/react/dist/iconify.js";

const Trust = () => {
	return (
		<div className='bg-gradient-to-r from-black to-primary-gold p-4 sm:p-6 lg:p-8'>
			<div className='max-w-7xl mx-auto'>
				<h2 className='text-white text-xl sm:text-2xl lg:text-3xl font-bold text-center mb-6 sm:mb-8'>
					Why Clients Trust Us
				</h2>

				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6'>
					{clientTrust.map((item, index) => (
						<div
							key={index}
							className='bg-white p-4 sm:p-5 lg:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 text-center sm:text-left'
						>
							<div className='flex justify-center sm:justify-start mb-3 sm:mb-4'>
								<Icon
									icon={item.icon}
									className='text-2xl sm:text-3xl lg:text-4xl text-primary-gold'
								/>
							</div>
							<h3 className='text-base sm:text-lg font-semibold mb-2 sm:mb-3 text-gray-800'>
								{item.title}
							</h3>
							<p className='text-xs sm:text-sm text-gray-600 leading-relaxed'>
								{item.desc}
							</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};
export default Trust;
