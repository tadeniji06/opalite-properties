"use client";
import {
	apartmentCategory,
	luxuryHomes,
	commercialProperties,
	housesForRent,
} from "@/utils/data";
import { useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";

const Categories = () => {
	const categories = [
		{ name: "Apartments for sale", data: apartmentCategory },
		{ name: "Luxury homes", data: luxuryHomes },
		{ name: "Commercial properties", data: commercialProperties },
		{ name: "Houses for rent", data: housesForRent },
	];

	const [activeCategory, setActiveCategory] = useState(0);

	return (
		<div className='mt-5 p-4 sm:p-6 max-w-7xl mx-auto'>
			<div className='flex flex-col sm:flex-row justify-between items-center gap-4 mb-6'>
				<h1 className='text-xl sm:text-2xl font-bold text-gray-800'>
					Categories
				</h1>
				<p className='text-primary-gold cursor-pointer hover:text-yellow-600 transition-colors duration-200 font-medium'>
					See All
				</p>
			</div>

			{/* Category Buttons */}
			<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-8'>
				{categories.map((category, index) => (
					<button
						key={index}
						onClick={() => setActiveCategory(index)}
						className={`border rounded-xl p-3 sm:p-4 text-sm sm:text-base font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-gold focus:ring-opacity-50 text-center ${
							activeCategory === index
								? "bg-primary-gold text-black border-primary-gold"
								: "border-primary-gold text-gray-700 hover:bg-primary-gold hover:text-black"
						}`}
					>
						{category.name}
					</button>
				))}
			</div>

			{/* Properties Display */}
			<div className='mb-4'>
				<h2 className='text-lg sm:text-xl font-semibold text-gray-800 mb-6'>
					{categories[activeCategory].name}
				</h2>

				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6'>
					{categories[activeCategory].data.map((property, index) => (
						<div
							key={index}
							className='bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200'
						>
							<div className='relative aspect-video'>
								<Image
									alt={property.title}
									src={property.image}
									fill
									className='object-cover'
								/>
							</div>

							<div className='p-4 flex flex-col'>
								<h3 className='text-lg sm:text-xl font-bold mb-2 line-clamp-2'>
									{property.title}
								</h3>
								<p className='text-gray-600 text-sm sm:text-base mb-3 line-clamp-2 flex-grow'>
									{property.desc}
								</p>

								<div className='flex items-center gap-2 mb-4 text-gray-500'>
									<Icon
										icon={"mdi:location"}
										className='text-primary-gold flex-shrink-0'
									/>
									<p className='text-sm sm:text-base truncate'>
										{property.location}
									</p>
								</div>

								<div className='flex justify-between items-center mt-auto'>
									<p className='text-lg sm:text-xl font-semibold text-primary-gold'>
										₦{property.price}
									</p>
									<button className='px-3 py-2 sm:px-4 sm:py-2 bg-black text-primary-gold rounded hover:bg-gray-800 transition-colors duration-200 text-sm sm:text-base whitespace-nowrap'>
										{categories[activeCategory].name.includes("rent")
											? "Rent"
											: "Buy"}
									</button>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};
export default Categories;
