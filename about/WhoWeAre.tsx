import { offer } from "@/assets";
import Image from "next/image";

const WhoWeAre = () => {
	return (
		<div className='p-4 sm:p-6 mt-4 max-w-7xl mx-auto'>
			<div className='flex flex-col lg:flex-row gap-6 lg:gap-8 items-center'>
				<div className='flex flex-col w-full lg:w-1/2 order-2 lg:order-1'>
					<h2 className='text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 mb-4 sm:mb-6 text-center lg:text-left leading-tight'>
						Who We Are
					</h2>
					<p className='text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed text-center lg:text-left'>
						Founded with a vision to make real estate accessible and
						trustworthy, Opalite Properties is committed to helping
						individuals and businesses secure homes and investments
						that last a lifetime. We believe that everyone deserves
						the opportunity to build wealth, create security, and find
						comfort through smart property decisions.
						<br />
						Since our inception, we have facilitated over 1,000
						successful property transactions, built lasting
						relationships with clients across Nigeria, and established
						ourselves as a beacon of trust in the real estate
						industry.
					</p>
				</div>

				<div className='w-full sm:w-3/4 lg:w-1/2 order-1 lg:order-2'>
					<div className='relative aspect-square sm:aspect-video lg:aspect-square'>
						<Image
							src={offer}
							alt='Opalite Properties Investment Opportunity'
							fill
							className='object-cover rounded-lg shadow-lg'
						/>
					</div>
				</div>
			</div>
		</div>
	);
};
export default WhoWeAre;
