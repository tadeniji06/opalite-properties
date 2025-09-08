import Categories from "@/home/Categories";
import Featured from "@/home/Featured";
import Hero from "@/home/Hero";
import Offer from "@/home/Offer";
import Ready from "@/home/Ready";
import Trust from "@/home/Trust";

const page = () => {
	return (
		<>
		<Hero />
		<Featured />
		<Offer />
		<Trust />
		<Categories />
		<Ready />
		</>
	);
};
export default page;
