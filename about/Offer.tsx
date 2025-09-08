import { Icon } from "@iconify/react/dist/iconify.js";

const Offer = () => {
	const stand = [
		{
			title: "Property Buying",
			icon: "streamline-freehand:e-commerce-click-buy",
			description:
				"We provide expert assistance in finding and acquiring your perfect property, from residential homes to commercial spaces.",
		},
		{
			title: "Property Selling",
			icon: "material-symbols:sell",
			description:
				"We offer strategic marketing and professional support to ensure you get your property's value in the market.",
		},
		{
			title: "Investment Advisory",
			icon: "hugeicons:legal-02",
			description:
				"We provide professional guidance on real estate investments to help you build wealth and secure your financial future",
		},
		{
			title: "Property Management",
			icon: "ix:user-management-filled",
			description:
				"We offer comprehensive management services to maintain and optimize your property investments.",
		},
	];
	return (
		<div className='p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto mt-5'>
			<h2 className='text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 text-center mb-8 sm:mb-10 lg:mb-12'>
				What We Offer
			</h2>

			<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8'>
				{stand.map((item, index) => (
					<div
						key={index}
						className='bg-white border border-gray-200 p-6 sm:p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 text-center group hover:-translate-y-1'
					>
						{/* Icon Container */}
						<div className='flex justify-center mb-4 sm:mb-6'>
							<div className='bg-primary-gold bg-opacity-10 p-4 sm:p-5 rounded-full group-hover:bg-primary-gold group-hover:bg-opacity-20 transition-colors duration-200'>
								<Icon
									icon={item.icon}
									className='text-white text-3xl sm:text-4xl lg:text-5xl'
								/>
							</div>
						</div>

						{/* Title */}
						<h3 className='text-lg sm:text-xl font-semibold text-gray-800 mb-3 sm:mb-4'>
							{item.title}
						</h3>

						{/* Description */}
						<p className='text-sm sm:text-base text-gray-600 leading-relaxed'>
							{item.description}
						</p>
					</div>
				))}
			</div>
		</div>
	);
};
export default Offer;
