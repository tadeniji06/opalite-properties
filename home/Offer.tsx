import { offer } from "@/assets";
import Image from "next/image";

const Offer = () => {
	return (
		<div className='p-4 sm:p-6 mt-4 max-w-7xl mx-auto'>
			<div className='flex flex-col lg:flex-row gap-6 lg:gap-8 items-center'>
				<div className='flex flex-col w-full lg:w-1/2 order-2 lg:order-1'>
					<h2 className='text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 mb-4 sm:mb-6 text-center lg:text-left leading-tight'>
						At Opalite properties, we offer you the opportunity to
						invest in the tomorrow you desire
					</h2>
					<p className='text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed text-center lg:text-left'>
						At Opalite Properties, we believe real estate is more than
						just buying or selling homes—it's about building the
						future you envision. We provide trusted opportunities for
						individuals and businesses to invest in properties that
						deliver lasting value. Whether you're looking to own your
						dream home, grow your portfolio, or secure a profitable
						investment, we're here to guide you every step of the way.
						With integrity, expertise, and a commitment to excellence,
						we help you invest in the tomorrow you desire.
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
export default Offer;
