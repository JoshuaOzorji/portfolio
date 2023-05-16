import SectionTitle from "./SectionTitle";
import { AiFillThunderbolt } from "react-icons/ai";
import Image from "next/image";
import profileImg from "../src/assets/Josh4.jpeg";

const About = () => {
	return (
		<section
			id="about"
			className="max-w-containerSmall mx-auto py-10 lg:py-32 flex flex-col gap-8 text-accent">
			<SectionTitle title="About Me" titleNo="01" />
			<div className="flex flex-col lg:flex-row gap-16">
				<div className="w-full lg:w-2/3 text-base text-accent font-medium flex flex-col gap-4">
					<p>
						I have a 1+ years of experience with React. I have a strong
						foundation in front-end development and am skilled in creating
						user-friendly and responsive web applications using React and its
						ecosystem.
					</p>
					<ul className="max-w-[450px] text-sm grid grid-cols-2">
						<li className="flex items-center gap-2">
							<span className="text-primary">
								<AiFillThunderbolt />
							</span>{" "}
							React
						</li>

						<li className="flex items-center gap-2">
							<span className="text-primary">
								<AiFillThunderbolt />
							</span>{" "}
							Tailwind CSS
						</li>

						<li className="flex items-center gap-2">
							<span className="text-primary">
								<AiFillThunderbolt />
							</span>{" "}
							Next JS
						</li>

						<li className="flex items-center gap-2">
							<span className="text-primary">
								<AiFillThunderbolt />
							</span>{" "}
							Javascript
						</li>

						<li className="flex items-center gap-2">
							<span className="text-primary">
								<AiFillThunderbolt />
							</span>{" "}
							TypeScript
						</li>

						<li className="flex items-center gap-2">
							<span className="text-primary">
								<AiFillThunderbolt />
							</span>{" "}
							HTML & CSS
						</li>

						<li className="flex items-center gap-2">
							<span className="text-primary">
								<AiFillThunderbolt />
							</span>{" "}
							Sanity
						</li>

						<li className="flex items-center gap-2">
							<span className="text-primary">
								<AiFillThunderbolt />
							</span>{" "}
							GitHub
						</li>
					</ul>
				</div>

				<div className="w-full lg:w-1/3 h-80 relative group">
					<div className="absolute w-full h-80 -left-6 -top-6 rounded-lg">
						<div className="w-full h-full relative z-20 flex pl-6 lg:pl-0">
							<Image
								src={profileImg}
								alt="person"
								width={500}
								height={500}
								className="w-full h-full"
							/>
							<div className="hidden lg:inline-block absolute w-full h-80 bg-accent/20 rounded-md top-0 left-0 group-hover:bg-transparent duration-300"></div>
						</div>
					</div>
					<div className="hidden lg:inline-flex w-full h-80 border-2 border-accent rounded-md group-hover:-translate-x-2 group-hover:translate-y-2 transition-transform duration-300"></div>
				</div>
			</div>
		</section>
	);
};

export default About;
