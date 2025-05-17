import LoginForm from "@/components/auth/LoginForm";
import Link from "next/link";

function LoginPage() {
	return (
		<div className="h-[calc(100vh-64px)] pt-40 w-full px-2 md:w-[95%] mx-auto flex flex-col items-center">
			<LoginForm />
			<div className="flex items-center gap-2">
				<p>Don&apos;t have an account? Register</p>
				<Link href="/sign-up" className="underline cursor-pointer">here</Link>
			</div>
		</div>
	);
}

export default LoginPage;
