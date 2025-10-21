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
			</div>
		</div>
	);
};

export default PropsClient;
