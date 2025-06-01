import { footerOptions } from "@/constants";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import React from "react";

function PolicyPage() {
	return (
		<div className="flex flex-col gap-3 p-4">
			<p className="text-2xl policy-header">Policies</p>
			<div className="text-md space-y-3 leading-[2]">
				<p>Our label Jeevika Shah offers a stunning collection of high-quality jewelry, hand-finished in India, that is sure to captivate anyone seeking elegance. One of the standout features of JS is their commitment to ethically sourced diamonds and gemstones.</p>
				<p>
					Each piece is crafted with prcious metals and adorned with beautiful gemstones,ensuring not only a luxurious look but also peace of mind knowing that the materials have been responsibly sourced and customised to adorn you. Please note that the standard of our diamonds
					is VVS-VS clarity with F/G color unless mentioned otherwise.
				</p>
				<p>
					We are dedicated to provide a seamless and enjoyable shopping experience.From the moment you browse our collection to the moment you receive your carefully packaged jewelry,you can expect nothing less than exceptional service and attention to detail.Explore our
					collection today and discover the perfect piece to add a touch of luxury to your style.
				</p>
			</div>
			<div className="leading-[2]">
				<p>For more information:</p>
				<ul className="list-disc pl-5">
					{footerOptions.map((option) => (
						<li className="hover:underline" key={option.title}>
							<Link href={option.link} className=" flex items-center gap-2 my-2" target="_blank">
								{option.title} <ExternalLink />
							</Link>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}

export default PolicyPage;
