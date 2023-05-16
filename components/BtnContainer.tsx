import React from "react";

const BtnContainer = ({ jobs, currentItem, setCurrentItem }) => {
	return (
		<div className="flex sm:flex-row gap-6 sm:justify-evenly md:flex-col md:justify-start ">
			{jobs.map((item, index) => {
				return (
					<button
						key={item.id}
						onClick={() => setCurrentItem(index)}
						className={
							index === currentItem ? "job-btn active-btn" : "job-btn"
						}>
						{item.company}
					</button>
				);
			})}
		</div>
	);
};

export default BtnContainer;
