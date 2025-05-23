import { Breadcrumbs } from "@/components/common/BreadCrumbs";

export default function BreadcrumbLayout({ children }: { children: React.ReactNode }) {
	return (
		<section className="min-h-[calc(100vh-64px)] py-24 md:py-36 w-full px-2 md:w-[95%] mx-auto">
			<Breadcrumbs />
			{children}
		</section>
	);
}
