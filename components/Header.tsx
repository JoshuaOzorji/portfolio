"use client";
import React from "react";
import Image from "next/image";
import logoBlack from "../src/assets/mj-josh-short-white1.png";
import Link from "next/link";
import { motion } from "framer-motion";
import { RiMenu3Line } from "react-icons/ri";

const Header = () => {
	return (
		<nav
			id="#home"
			className="bg-primary1 w-full h-20 lg:h-[12vh] top-0 z-50 px-4">
			<div className="max-w-container h-full mx-auto py-1 font-abel flex items-center justify-between">
				<div>
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.5 }}>
						<Image
							src={logoBlack}
							alt="logo"
							width={40}
							height={40}
							color={"white"}
							className="cursor-pointer"
						/>
					</motion.div>
				</div>

				<div className="hidden md:inline-flex items-center gap-x-6">
					<ul className="flex items-center gap-1 font-abel duration-300 gap-x-6">
						<Link
							href="#home"
							className="hover:text-accent cursor-pointer duration-300 nav-link text-white">
							<motion.li
								initial={{ y: -10, opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
								transition={{ duration: 0.1, delay: 0.1 }}>
								<span className="text-accent">01.</span>
								Home
							</motion.li>
						</Link>

						<Link
							href="#home"
							className="hover:text-accent cursor-pointer duration-300 nav-link text-white">
							<motion.li
								initial={{ y: -10, opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
								transition={{ duration: 0.1, delay: 0.2 }}>
								<span className="text-accent">02.</span>
								Careers
							</motion.li>
						</Link>

						<Link
							href="#home"
							className="hover:text-accent cursor-pointer duration-300 nav-link text-white">
							<motion.li
								initial={{ y: -10, opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
								transition={{ duration: 0.2, delay: 0.3 }}>
								<span className="text-accent">03.</span>
								About
							</motion.li>
						</Link>

						<Link
							href="#home"
							className="hover:text-accent cursor-pointer duration-300 nav-link text-white">
							<motion.li
								initial={{ y: -10, opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
								transition={{ duration: 0.3, delay: 0.4 }}>
								<span className="text-accent">04.</span>
								Contact Us
							</motion.li>
						</Link>
					</ul>
					<a href="../../PPA_Letter.PDF" target="_blank">
						<motion.button
							initial={{ y: -10, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							transition={{ duration: 0.3, delay: 0.4 }}
							className="px-4 py-2 rounded-md text-accent border border-accent hover:bg-hover hover:bg-primary hover:text-white duration-300">
							Resume
						</motion.button>
					</a>
				</div>

				<div className="md:hidden w-6 h-5 flex flex-col justify-between items-center text-4xl text-white cursor-pointer overflow-hidden group">
					<span className="w-full h-[2px] bg-white inline-flex transform group-hover:translate-x-2 transition-all ease-in-out duration-300"></span>
					<span className="w-full h-[2px] bg-white inline-flex transform group-hover:translate-x-3 transition-all ease-in-out duration-300"></span>
					<span className="w-full h-[2px] bg-white inline-flex transform group-hover:translate-x-1 transition-all ease-in-out duration-300"></span>
				</div>
			</div>
		</nav>
	);
};

export default Header;
