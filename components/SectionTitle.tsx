// interface Props {
// 	title: string;
// 	titleNo: string;
// }
const SectionTitle = ({ title, titleNo }) => {
	return (
		<div>
			<h2 className="text-2xl font-semibold flex items-center">
				<span className="text-base md:text-lg text-accent mr-2">
					{titleNo}.
				</span>
				{title}
				<span className="hidden md:inline-flex md:w-60 lg:w-72 ml-3 h-[.5px] bg-primary"></span>
			</h2>
		</div>
	);
};

export default SectionTitle;
