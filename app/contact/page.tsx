import ContactForm from "@/components/ContactForm";
import ContactHero from "@/components/ContactHero";

const page = () => {
	return (
		<div className='min-h-screen'>
			<ContactHero />
			<ContactForm />
		</div>
	);
};
export default page;
