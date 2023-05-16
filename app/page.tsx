"use client";
import Experience from "@/components/Experience";
import Header from "@/components/Header";
import About from "@/components/About";
import LeftSide from "@/components/LeftSide";
import RightSide from "@/components/RightSide";
import { motion } from "framer-motion";
import Banner from "@/components/Banner";

const HomePage = () => {
	return (
		<main className="w-full h-screen font-abel  text-accent overflow-x-hidden overflow-y-scroll">
			<Header />
			{/* <div className="w-full h-[88vh] md:flex items-center gap-20 justify-between"> */}
			{/* <div className="hidden md:inline-flex w-32 h-full fixed left-0 top-0">
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 1.5 }}>
						<LeftSide />
					</motion.div>
				</div> */}

			<div className="mx-auto-4 h-[88vh] w-full">
				<Banner />
				<About />
				<Experience />
				{/* <Projects/> */}
				{/* <Archive/> */}
				{/* <Contact/> */}
				{/* <Footer/> */}
			</div>

			{/* <div className="hidden md:inline-flex w-32 h-full fixed right-0 bottom-0">
					<RightSide />
				</div> */}
			{/* </div> */}
		</main>
	);
};

export default HomePage;
