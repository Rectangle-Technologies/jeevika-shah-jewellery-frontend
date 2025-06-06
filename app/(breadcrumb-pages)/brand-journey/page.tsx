import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
	title: "Brand Journey | Jeevika Shah Jewellery",
	description: "Discover the inspiring story behind Jeevika Shah Jewellery. Learn about our founder's passion, the brand's heritage, and our commitment to quality and craftsmanship.",
	keywords: ["Brand Journey", "Jeevika Shah", "Jewellery", "Founder Story", "Indian Jewellery", "Italian Craftsmanship", "Luxury Jewellery", "Sustainable Luxury"],
	openGraph: {
		title: "Brand Journey | Jeevika Shah Jewellery",
		description: "Discover the inspiring story behind Jeevika Shah Jewellery. Learn about our founder's passion, the brand's heritage, and our commitment to quality and craftsmanship.",
		url: `${process.env.DOMAIN}/brand-journey`,
		siteName: "Jeevika Shah Jewellery",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Brand Journey | Jeevika Shah Jewellery",
		description: "Discover the inspiring story behind Jeevika Shah Jewellery. Learn about our founder's passion, the brand's heritage, and our commitment to quality and craftsmanship.",
	},
};

function BrandJourney() {
	return (
		<div className="max-w-4xl mx-auto px-4 py-12 text-gray-800 space-y-10">
			<p className="text-3xl font-bold">Brand Journey</p>
			<section>
				<h1 className="text-2xl font-semibold mb-4">A Note from Our Founder, Jeevika Shah</h1>
				<p>
					Welcome to Jeevika Shah Jewellery! I'm delighted to share my passion and creativity with you through this brand. It reflects my lifelong love for jewellery, an ardour that was nurtured by cherished moments with my mother and inspired by the rich heritage of
					Indian-Italian craftsmanship.
				</p>
				<p className="mt-4 italic">I invite you to explore our collections and find something that resonates with your unique story.</p>
				<p className="mt-2 font-semibold">Lots of love and gratitude,</p>
				<p className="font-semibold">Jeevika Shah</p>
			</section>

			<section>
				<h2 className="text-2xl font-semibold mb-2">The Stepping-Stone / A Passionate Beginning</h2>
				<p>Founded by our visionary designer Jeevika Shah, our brand is a testament to her dedication to creating jewellery that speaks to the heart and soul. Her path to create this brand was a rather natural progression, built on countless fond memories and experiences.</p>
				<p className="mt-4">
					The seeds of our brand were sown in front of her mother’s dresser, where she adored her mum as she adorned herself. Jeevika recalls choosing jewellery with her mother from what she fondly called her mom’s “treasure chest.” That ritual and box of jewels were truly
					treasures to her.
				</p>
				<p className="mt-4">
					Fashion, jewellery, diamonds and styling were the strongest bonds between Jeevika and her mom. This shared love became the priceless inheritance that shaped Jeevika's creative direction, instilling a deep appreciation for the artistry and emotional connection jewellery
					can foster.
				</p>
				<p className="mt-4">
					Growing up in Surat, a vibrant diamond hub, amidst her business-oriented family, she was immersed in an entrepreneurial atmosphere. Her interest in fashion blossomed, especially in how jewellery transforms every fashion statement. This inspired her journey into
					jewellery designing.
				</p>
			</section>

			<section>
				<h2 className="text-2xl font-semibold mb-2">The Spirit of Our Brand</h2>
				<p>
					Jeevika Shah Jewellery celebrates the enduring tradition of Indian and Italian craftsmanship. It is a fusion of cultures, blending traditional and contemporary aesthetics. Our designs draw inspiration from nature’s vibrant colours, cultural motifs, and classical
					symmetry.
				</p>
				<p className="mt-4">We believe our creative process embodies the timeless elegance of Italian jewellery combined with modern luxury.</p>
			</section>

			<section>
				<h2 className="text-2xl font-semibold mb-2">Commitment to Quality</h2>
				<p>Quality and craftsmanship are at the core of everything we do. We use only the finest metals and meticulously selected gemstones, with each diamond handpicked and assessed for brilliance and purity.</p>
				<p className="mt-4">From the initial sketch to the final product, every piece undergoes strict quality control. Our craftsmen blend traditional and modern techniques to create beautiful, long-lasting jewellery.</p>
			</section>

			<section>
				<h2 className="text-2xl font-semibold mb-2">An Expression of Love</h2>
				<p>Each creation reflects Jeevika’s passion for design. Drawing from her family’s textile business, she plays with colours, textures, and elements. The thrill of seeing sketches come to life drives her.</p>
				<p className="mt-4">Every piece is unique, yet designed for comfort and practicality—where beauty meets functionality.</p>
			</section>

			<section>
				<h2 className="text-2xl font-semibold mb-2">Redefining Luxury</h2>
				<p>We aspire for our jewellery to personify elegance and artistic sophistication. Our aim is to build deep customer connections through pieces that express individuality.</p>
				<p className="mt-4">By blending luxurious Italian craftsmanship with cutting-edge lab-grown diamonds, we offer a new standard of sustainable luxury. Jewellery, for us, is not just adornment—it’s a symbol of creativity, joy, and self-expression.</p>
			</section>
		</div>
	);
}

export default BrandJourney;
