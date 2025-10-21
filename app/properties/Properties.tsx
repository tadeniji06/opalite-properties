"use client";

import {
	veduraGrove,
	greyStoneResidence,
	iluAje,
} from "@/utils/properties";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const propertyGroups = [
	...iluAje.map((p) => ({ ...p, id: "ilu-aje" })),
	...veduraGrove.map((p) => ({ ...p, id: "vedura-grove" })),
	...greyStoneResidence.map((p) => ({
		...p,
		id: "grey-stone-residence",
	})),
];

const Properties = () => {
	return (
		<section className='py-16 px-6 md:px-12 lg:px-20 bg-gray-50'>
			<div className='max-w-6xl mx-auto'>
				<div className='text-center mb-10'>
					<h2 className='text-3xl md:text-4xl font-semibold text-gray-800'>
						Explore Our Exclusive Properties
					</h2>
					<p className='text-gray-600 mt-2'>
						Handpicked developments designed for comfort, growth, and
						smart investment.
					</p>
				</div>

				<div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-8'>
					{propertyGroups.map((property, idx) => (
						<motion.div
							key={idx}
							initial={{ opacity: 0, y: 40 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: idx * 0.1 }}
							className='bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col justify-between'
						>
							<div>
								<div className='relative h-56 w-full'>
									<Image
										src={property.image || property.images?.[0]}
										alt={property.title}
										fill
										className='object-cover'
									/>
								</div>
								<div className='p-6'>
									<h3 className='text-xl font-semibold text-gray-800'>
										{property.title}
									</h3>
									<p className='text-gray-600 text-sm mt-2 line-clamp-3'>
										{property.desc || property.about}
									</p>
									<p className='mt-3 text-sm font-medium text-gray-700'>
										{property.location}
									</p>
									<p className='text-yellow-600 font-semibold mt-1'>
										{property.pricing}
									</p>

									<Link
										href={`/properties/${property.id}`}
										className='inline-block mt-5 bg-yellow-500 text-black font-semibold py-2 px-4 rounded-lg hover:bg-yellow-600 transition'
									>
										View Details
									</Link>
								</div>
							</div>

							{/* CTA Section */}
							<div className='px-6 pb-6'>
								<Link
									href='/contact'
									className='block text-center w-full bg-gray-800 text-white font-semibold py-2 rounded-lg hover:bg-gray-900 transition-all duration-300'
								>
									Interested? Contact Us
								</Link>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Properties;
