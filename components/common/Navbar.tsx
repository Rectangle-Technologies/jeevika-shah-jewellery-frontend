"use client";
import { RulerDimensionLine, ShoppingBagIcon, UserCircleIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import NavbarSheet from "./NavbarSheet";
import NavigationMenuDemo from "./NavigationMenuDemo";
// import CartSheet from "../cart/CartSheet";
import { useCounterStore } from "@/providers/cart-store-providers";
import { Skeleton } from "../ui/skeleton";

interface NavbarProps {
	navbarLinks: { title: string; link?: string; subLinks?: { title: string; link: string }[] }[];
}

function Navbar({ navbarLinks }: NavbarProps) {
	const { getCartLength } = useCounterStore((state) => state);
	const path = usePathname();
	const [scrolled, setScrolled] = React.useState(false);
	const [hovered, setHovered] = React.useState(false);
	const [mounted, setMounted] = React.useState(false);
	const [isModalOpen, setIsModalOpen] = React.useState(false);
	const [activeTab, setActiveTab] = React.useState("rings");

	React.useEffect(() => {
		setMounted(true);
		const handleScroll = () => {
			setScrolled(window.scrollY > 100);
		};
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
			setMounted(false);
		};
	}, []);

	return (
		<nav onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} className={` ${scrolled || hovered || path !== "/" ? "bg-white text-black shadow-md" : "bg-transparent text-white"} z-50 fixed w-full  top-0 transition-colors duration-300`}>
			{path !== "/login" && path !== "/sign-up" ? (
				<div className="flex items-center justify-between py-2 px-4 md:w-[90%] mx-auto">
					<div className="flex md:hidden">
						<NavbarSheet navbarLinks={navbarLinks} />
					</div>
					<div className="hidden md:flex items-center gap-4 md:w-1/4">
						<NavigationMenuDemo navbarLinks={navbarLinks} />
					</div>
					<Link href="/" className="relative  h-[80px] w-[120px] md:h-[100px]">
						<Image src={`${"/assets/logo-secondary.png"}`} alt="Jeevika Shah Jewellery logo" fill className="object-contain" />
					</Link>
					<div className="flex items-center justify-end gap-2 md:gap-3 md:w-1/4">
						<button
							onClick={() => setIsModalOpen(true)}
							className="flex items-center justify-center"
							type="button"
						>
							<RulerDimensionLine className="cursor-pointer" strokeWidth={1} />
						</button>

						{isModalOpen && (
							<div className="fixed inset-0 z-[60] flex items-center justify-center bg-grey bg-opacity-100">
								<div className="relative p-4 w-full max-w-3xl max-h-full">
									<div className="relative bg-white shadow-xl dark:bg-gray-700">
										<div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200">
											<h3 className="text-xl font-semibold text-gray-900 dark:text-white">
												Size Chart
											</h3>
											<button
												type="button"
												onClick={() => setIsModalOpen(false)}
												className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
											>
												<svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
													<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
												</svg>
												<span className="sr-only">Close modal</span>
											</button>
										</div>
										<div className="p-4 md:p-5 space-y-4">
											<div className="mb-4 border-b border-gray-200 dark:border-gray-700">
												<ul className="flex flex-wrap -mb-px text-sm font-medium text-center">
													<li className="me-2">
														<button
															onClick={() => setActiveTab("rings")}
															className={`inline-block p-4 border-b-2 rounded-t-lg ${activeTab === "rings"
																? "text-black-900 border-black-600"
																: "border-transparent text-gray-500 hover:text-gray-600 hover:border-gray-300"
																}`}
														>
															Rings
														</button>
													</li>
													<li className="me-2">
														<button
															onClick={() => setActiveTab("bracelets")}
															className={`inline-block p-4 border-b-2 rounded-t-lg ${activeTab === "bracelets"
																? "text-black-900 border-black-600"
																: "border-transparent text-gray-500 hover:text-gray-600 hover:border-gray-300"
																}`}
														>
															Bracelets
														</button>
													</li>
												</ul>
											</div>
											<div>
												{activeTab === "rings" && (
													<div className="p-4">
														<p className="text-sm">
															Ring sizing guide: Measure your finger circumference or use our printable ring sizer.
														</p>
													</div>
												)}
												{activeTab === "bracelets" && (
													<div className="p-4">
														<p className="text-sm font-bold">
															It's all in the wrist
														</p>
														<div className="flex flex-col md:flex-row mt-5">
															<div className="w-full md:w-1/2 mt-4">
																<Image
																	src="/assets/bracelet-size.jpeg"
																	alt="Bracelet Size Chart"
																	width={500}
																	height={500}
																	className="object-contain"
																/>
															</div>
															<div className="w-full md:w-1/2 mt-4 flex flex-col justify-between">
																<p className="text-sm">
																	1. Grab a tape measure, length of string or a strip of paper.
																</p>
																<p className="text-sm mt-3 md:mt-0">
																	2. Wrap it around your wrist where you would normally wear a bracelet. Mark the point where it joins. Creating a stack? Measure where on your arm you'll wear each bracelet.
																</p>
																<p className="text-sm mt-3 md:mt-0">
																	3. Use a ruler to measure the length of the string or paper. This is your wrist size.
																</p>
															</div>
														</div>
													</div>
												)}
											</div>
										</div>
									</div>
								</div>
							</div>
						)}
						<Link href={"/profile"} className="hidden md:flex">
							<UserCircleIcon className="cursor-pointer" strokeWidth={1} />
						</Link>
						{/* <CartSheet /> */}
						<Link href={"/cart"} className="flex items-center justify-center relative">
							<ShoppingBagIcon className="cursor-pointer" strokeWidth={1} />
							<span className="flex items-center justify-center absolute -top-2 -right-2 text-sm">
								{mounted ? <span>{getCartLength()}</span> : <Skeleton className="w-7 h-7 rounded-full" />}
							</span>
						</Link>
					</div>
				</div>
			) : (
				<div className="flex items-center justify-between px-4 md:w-[90%] mx-auto  py-2">
					<Link href="/" className="relative  h-[80px] w-[120px] md:h-[100px] mx-auto">
						<Image src="/assets/logo-secondary.png" alt="Jeevika Shah Jewellery logo" fill className="object-contain" />
					</Link>
				</div>
			)}
		</nav>
	);
}

export default Navbar;
