import {
	AiFillGithub,
	AiFillLinkedin,
	AiOutlineTwitter,
	AiOutlineInstagram,
} from "react-icons/ai";

const LeftSide = () => {
	return (
		<div className="w-full h-full flex flex-col items-center justify-end gap-4 text-primary">
			<div className="flex flex-col gap-4">
				<a href="https://github.com/JoshuaOzorji" target="_blank">
					<span className="w-12 h-10 text-xl rounded-full inline-flex items-center justify-center hover:text-accent cursor-pointer hover:-translate-y-2 transition-all duration-300">
						<AiFillGithub />
					</span>
				</a>

				<span className="w-12 h-10 text-xl rounded-full inline-flex items-center justify-center hover:text-accent cursor-pointer hover:-translate-y-2 transition-all duration-300">
					<AiFillLinkedin />
				</span>

				<span className="w-12 h-10 text-xl rounded-full inline-flex items-center justify-center hover:text-accent cursor-pointer hover:-translate-y-2 transition-all duration-300">
					<AiOutlineTwitter />
				</span>
				<a href="https://www.instagram.com" target="_blank">
					<span className="w-12 h-10 text-xl rounded-full inline-flex items-center justify-center hover:text-accent cursor-pointer hover:-translate-y-2 transition-all duration-300">
						<AiOutlineInstagram />
					</span>
				</a>
			</div>

			<div className="w-[2px] h-32 bg-primary1"></div>
		</div>
	);
};

export default LeftSide;
