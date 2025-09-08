const Ready = () => {
	return (
		<div className='bg-primary-gold p-6 sm:p-8 lg:p-10 rounded-lg max-w-7xl mx-auto mt-10 text-black shadow-lg'>
			<div className='flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8'>
				{/* Text Content */}
				<div className='flex flex-col text-center lg:text-left lg:flex-1'>
					<h2 className='text-3xl font-bold mb-3 sm:mb-4'>
						Ready to Get Started?
					</h2>
					<p className='text-base leading-relaxed max-w-2xl'>
						Join thousands of satisfied homeowners who found their
						perfect property with Opalite Properties. Let us help you
						find your dream home today.
					</p>
				</div>

				{/* CTA Button */}
				<div className='flex-shrink-0'>
					<button className='bg-black text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-gray-800 transition-colors duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5  whitespace-nowrap'>
						Schedule Consultation
					</button>
				</div>
			</div>
		</div>
	);
};
export default Ready;
