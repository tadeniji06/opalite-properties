const AboutHero = () => {
	return (
		<div className='bg-gradient-to-r from-black to-primary-gold p-6 sm:p-8 lg:p-12 text-white'>
			<div className='max-w-4xl mx-auto text-center flex flex-col items-center gap-6 sm:gap-8'>
				<h1 className='text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight'>
					About Opalite Properties
				</h1>

				<p className='text-base sm:text-lg lg:text-xl leading-relaxed max-w-3xl px-4 sm:px-0'>
					At Opalite Properties, we do more than sell houses—we create
					opportunities for lasting investments. With a commitment to
					integrity, innovation, and excellence, we connect you to
					verified properties that fit your lifestyle and financial
					goals.
				</p>

				<button className='bg-white cursor-pointer text-black px-6 py-3 sm:px-8 sm:py-4 lg:px-10 lg:py-5 rounded-lg font-semibold text-base sm:text-lg hover:bg-gray-100 hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 mt-4'>
					Explore Properties
				</button>
			</div>
		</div>
	);
};
export default AboutHero;
