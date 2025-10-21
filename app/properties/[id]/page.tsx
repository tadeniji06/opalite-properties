"use client";

import { useParams } from "next/navigation";
import {
	iluAje,
	veduraGrove,
	greyStoneResidence,
} from "@/utils/properties";
import Image from "next/image";
import { motion } from "framer-motion";

// map id to property data safely
const getProperty = (id: string) => {
	switch (id) {
		case "ilu-aje":
			return iluAje[0];
		case "vedura-grove":
			return veduraGrove[0];
		case "grey-stone-residence":
			return greyStoneResidence[0];
		default:
			return null;
	}
};

const PropertyPage = () => {
	const { id } = useParams();
	const property = getProperty(id as string);

	if (!property) {
		return (
			<div className='h-screen flex items-center justify-center text-gray-600'>
				Property not found
			</div>
		);
	}

	return (
		<div className='min-h-screen bg-gray-50'>
			{/* Hero Section */}
			<div className='relative h-[500px] w-full'>
				<Image
					src={property.image || property.images?.[0]}
					alt={property.title}
					fill
					className='object-cover'
					priority
				/>
				<div className='absolute inset-0 bg-black/50 flex items-center justify-center'>
					<motion.h1
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						className='text-4xl md:text-5xl font-bold text-white text-center'
					>
						{property.title}
					</motion.h1>
				</div>
			</div>

			{/* Content */}
			<div className='max-w-5xl mx-auto px-6 py-12 space-y-8'>
				<div>
					<h2 className='text-2xl font-semibold text-gray-800'>
						About the Property
					</h2>
					<p className='mt-3 text-gray-700 leading-relaxed'>
						{property.about || property.desc}
					</p>
				</div>

				{/* If GreyStone, show subtypes */}
				{"propertyTypes" in property && (
					<div className='space-y-12 mt-10'>
						{property.propertyTypes.map((unit, index) => (
							<div
								key={index}
								className='bg-white rounded-xl p-6 shadow-sm'
							>
								<div className='relative w-full h-64 rounded-lg overflow-hidden mb-6'>
									<Image
										src={unit.image}
										alt={unit.id}
										fill
										className='object-cover'
									/>
								</div>
								<h3 className='text-xl font-semibold text-gray-800 mb-2'>
									{unit.id.replace("-", " ").toUpperCase()}
								</h3>
								<p className='text-gray-700 mb-4'>{unit.desc}</p>
								<p className='text-yellow-600 font-semibold'>
									{unit.pricing}
								</p>
								<ul className='list-disc ml-5 mt-3 text-gray-700 space-y-1'>
									{unit.features.map((f, i) => (
										<li key={i}>{f}</li>
									))}
								</ul>
							</div>
						))}
					</div>
				)}

				{/* Generic property details */}
				<div className='grid md:grid-cols-2 gap-10'>
					{/* Left Details */}
					<div>
						<h3 className='text-xl font-semibold text-gray-800'>
							Location
						</h3>
						<p className='text-gray-700 mt-1'>{property.location}</p>

						{property.pricing && (
							<>
								<h3 className='text-xl font-semibold text-gray-800 mt-6'>
									Pricing
								</h3>
								<p className='text-yellow-600 font-semibold text-lg'>
									{property.pricing}
								</p>
							</>
						)}

						<h3 className='text-xl font-semibold text-gray-800 mt-6'>
							Features
						</h3>
						<ul className='list-disc ml-5 mt-2 text-gray-700 space-y-1'>
							{(
								property.features ||
								property.proposedFacilities ||
								property.benfits ||
								[]
							).map((f, i) => (
								<li key={i}>{f}</li>
							))}
						</ul>
					</div>

					{/* Right Gallery */}
					<div className='grid grid-cols-2 gap-3'>
						{property.images?.map((img, idx) => (
							<div
								key={idx}
								className='relative w-full h-48 rounded-xl overflow-hidden'
							>
								<Image
									src={img}
									alt={`${property.title} ${idx}`}
									fill
									className='object-cover hover:scale-105 transition-transform duration-300'
								/>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default PropertyPage;
