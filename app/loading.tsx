import Image from "next/image";

export default function Loading() {
	return (
		<div className="h-screen w-screen fixed z-50 flex items-center justify-center">
			<Image src="/assets/logo-secondary.png" alt="loading" width={100} height={100} />
		</div>
	);
}
