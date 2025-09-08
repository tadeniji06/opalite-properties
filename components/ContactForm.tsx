import { Icon } from "@iconify/react";

const ContactForm = () => {
	return (
		<div className='max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-8'>
			{/* Left Info */}
			<div className='bg-gradient-to-r from-black to-primary-gold text-white rounded-xl p-8 shadow-lg flex flex-col justify-between'>
				<div>
					<h3 className='text-xl font-semibold mb-4'>Get in Touch</h3>

					<p className='mb-3'>
						<span className='font-medium'>Visit Us:</span>
						<br /> Omole Phase 1, Ikeja, Lagos State
					</p>

					<p className='mb-3'>
						<span className='font-medium'>Chat Us:</span>
						<br /> support@propertyproperties.com
					</p>

					<p className='mb-3'>
						<span className='font-medium'>Call Us:</span>
						<br /> Mon - Fri, 8am - 5pm
						<br /> +234 8160000113
					</p>
				</div>

				{/* Social Icons */}
				<div className='mt-6'>
					<p className='font-medium mb-2'>Social Media</p>
					<div className='flex gap-3'>
						<Icon
							icon='mdi:facebook'
							className='text-2xl hover:text-yellow-400 cursor-pointer'
						/>
						<Icon
							icon='mdi:instagram'
							className='text-2xl hover:text-yellow-400 cursor-pointer'
						/>
						<Icon
							icon='mdi:linkedin'
							className='text-2xl hover:text-yellow-400 cursor-pointer'
						/>
						<Icon
							icon='mdi:twitter'
							className='text-2xl hover:text-yellow-400 cursor-pointer'
						/>
					</div>
				</div>
			</div>

			{/* Right Form */}
			<div className='bg-white rounded-xl p-8 shadow-lg'>
				<form className='space-y-5'>
					{/* Name */}
					<div>
						<label
							htmlFor='name'
							className='block text-sm font-medium text-gray-700 mb-1'
						>
							Name
						</label>
						<input
							type='text'
							id='name'
							placeholder='Send Us A Message'
							className='w-full border rounded-lg h-11 px-3 text-gray-700 focus:ring-2 focus:ring-yellow-500 focus:outline-none'
						/>
					</div>

					{/* Email */}
					<div>
						<label
							htmlFor='email'
							className='block text-sm font-medium text-gray-700 mb-1'
						>
							Email
						</label>
						<input
							type='email'
							id='email'
							placeholder='thebloomingdesigner@gmail.com'
							className='w-full border rounded-lg h-11 px-3 text-gray-700 focus:ring-2 focus:ring-yellow-500 focus:outline-none'
						/>
					</div>

					{/* Select Service */}
					<div>
						<label
							htmlFor='service'
							className='block text-sm font-medium text-gray-700 mb-1'
						>
							Select Service
						</label>
						<select
							id='service'
							className='w-full border rounded-lg h-11 px-3 text-gray-700 focus:ring-2 focus:ring-yellow-500 focus:outline-none'
						>
							<option>Property Buying</option>
							<option>Property Renting</option>
							<option>Commercial Leasing</option>
							<option>Consultation</option>
						</select>
					</div>

					{/* Message */}
					<div>
						<label
							htmlFor='message'
							className='block text-sm font-medium text-gray-700 mb-1'
						>
							Message
						</label>
						<textarea
							id='message'
							// rows="4"
							placeholder='Write your message here...'
							className='w-full border rounded-lg px-3 py-2 text-gray-700 focus:ring-2 focus:ring-yellow-500 focus:outline-none'
						/>
					</div>

					{/* Submit Button */}
					<button
						type='submit'
						className='w-full bg-yellow-500 text-black font-semibold py-3 rounded-lg hover:bg-yellow-600 transition focus:ring-2 focus:ring-yellow-400'
					>
						Submit
					</button>
				</form>
			</div>
		</div>
	);
};

export default ContactForm;
