import Properties from "./Properties";
import PropsClient from "./PropsClient";

const page = () => {
	return (
		<div className='min-h-screen'>
			<PropsClient />
			<Properties />
		</div>
	);
};
export default page;
