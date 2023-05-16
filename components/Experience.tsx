"use client";

import { fields } from "./data.js";
import JobInfo from "./JobInfo";
import BtnContainer from "./BtnContainer";
import { useState, useEffect } from "react";

const HomePage = () => {
	const [jobs, setJobs] = useState(fields);
	const [currentItem, setCurrentItem] = useState(1);

	return (
		<section className="grid md:grid-cols-5 gap-5 mx-6 ">
			<span className="sm:col-span-5 md:col-span-1 ">
				<BtnContainer
					jobs={jobs}
					currentItem={currentItem}
					setCurrentItem={setCurrentItem}
				/>
			</span>
			<span className="sm:col-span-5 md:col-span-4">
				<JobInfo jobs={jobs} currentItem={currentItem} />
			</span>
		</section>
	);
};

export default HomePage;
