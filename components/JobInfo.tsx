import Duties from "./Duties";

const JobInfo = ({ jobs, currentItem }) => {
	const { dates, duties, title, company } = jobs[currentItem];
	return (
		<article>
			<h2 className="font-bold text-4xl text-primary">{title}</h2>
			<p className="active-company-title">{company}</p>
			<p>{dates}</p>
			<Duties duties={duties} />
		</article>
	);
};

export default JobInfo;
