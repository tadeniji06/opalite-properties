import { Icon } from "@iconify/react/dist/iconify.js";

const Vision = () => {
	const visionMissionData = [
		{
			title: "Our Vision",
			icon: "mdi:eye",
			content:
				"Our vision is to be Africa's most trusted partner in real estate investment and property ownership, creating sustainable value for communities and investors alike.",
		},
		{
			title: "Our Mission",
			icon: "mdi:target",
			content:
				"Our mission is to connect people with opportunities that create wealth, security, and comfort through real estate, while maintaining the highest standards of integrity and excellence.",
		},
	];

	return (
		<div className='p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto'>
			<h2 className='text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 text-center mb-8 sm:mb-10 lg:mb-12'>
				Our Vision and Mission
			</h2>

			<div className='grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10'>
				{visionMissionData.map((item, index) => (
					<div
						key={index}
						className='border border-gray-200 p-6 sm:p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 bg-white'
					>
						<div className='flex items-center gap-4 mb-4 sm:mb-6'>
							<div className='bg-primary-gold bg-opacity-10 p-3 rounded-full'>
								<Icon
									className='text-white text-2xl sm:text-3xl'
									icon={item.icon}
								/>
							</div>
							<h3 className='text-lg sm:text-xl font-semibold text-gray-800'>
								{item.title}
							</h3>
						</div>

						<p className='text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed'>
							{item.content}
						</p>
					</div>
				))}
			</div>
		</div>
	);
};
export default Vision;
