import Image from "next/image";

export default function Loading() {
	return (
		<div className="w-screen h-screen fixed top-0 left-0 z-50 flex items-center justify-center bg-white">
			<Image src="/assets/logo-secondary.png" alt="loading" width={100} height={100} />
		</div>
	);
}
