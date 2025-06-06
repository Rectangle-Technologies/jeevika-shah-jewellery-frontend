import SignUpForm from "@/components/auth/SignUpForm";
import Link from "next/link";

function SignUpPage() {
	return (
		<div className="min-h-[calc(100vh-64px)] pt-28 lg:pt-32 pb-24 w-full px-2 md:w-[95%] mx-auto flex flex-col items-center">
			<SignUpForm />
			<div className="flex items-center gap-1">
				<p>Already have an account? Login</p>
				<Link href="/login" className="underline cursor-pointer">
					here
				</Link>
			</div>
		</div>
	);
}

export default SignUpPage;
