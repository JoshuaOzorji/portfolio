import { motion } from "framer-motion";

const Banner = () => {
	return (
		<section
			id="#home"
			className="max-w-contentContainer mx-auto py-auto py-10 md:py-24 flex flex-col gap-4 lg:gap-8 md:px-10 ">
			<motion.h3
				initial={{ y: 10, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.5, delay: 0.6 }}
				className="text-lg font-abel tracking-wide ">
				<p>Hi, my name is</p>
			</motion.h3>

			<motion.h1
				initial={{ y: 10, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.5, delay: 0.7 }}
				className="text-4xl lg:text-6xl font-abel font-semibold flex flex-col text-primary">
				Mr. Josh.{" "}
				<span className="mt-2 lg:mt-4">I build things for the web</span>
			</motion.h1>

			<motion.p
				initial={{ y: 10, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.5, delay: 0.8 }}
				className="text-base md:max-w-[650px] text-accent font-medium">
				I have a 1+ years of experience with React. I have a strong foundation
				in front-end development and am skilled in creating user-friendly and
				responsive web applications using React and its ecosystem.{" "}
				<a href="">
					<span className="text-primary inline-flex relative cursor-pointer h-7 overflow-x-hidden group">
						Learn More{" "}
						<span className="absolute w-full h-[1px] bg-primary1 left-0 bottom-1 -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-500"></span>
					</span>
				</a>
			</motion.p>

			<motion.button
				initial={{ y: 10, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.5, delay: 0.9 }}
				className="w-52 h-14 text-sm border border-primary1 rounded-md tracking-wide hover:bg-primary duration-300 hover:text-white">
				Check out my project
			</motion.button>
		</section>
	);
};

export default Banner;
