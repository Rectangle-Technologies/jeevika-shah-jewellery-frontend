import { Breadcrumbs } from "@/components/common/BreadCrumbs";
import { Analytics } from '@vercel/analytics/next';

export default function BreadcrumbLayout({ children }: { children: React.ReactNode }) {
	return (
		<section className="min-h-[calc(100vh-64px)] pt-28 md:pt-36 w-full px-2 md:w-[95%] mx-auto">
			<Breadcrumbs />
			{children}
			<Analytics />
		</section>
	);
}
