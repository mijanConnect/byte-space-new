import { AuthContainer } from "@/components/layout/AuthContainer";
import { Input } from "@/components/ui/Input";
import Link from "next/link";

export default function RegisterPage() {
  return (
    <AuthContainer
      title="Sign up and come in"
      subtitle="The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost"
    >
      <div className="mb-8">
        <p className="text-primary-600 font-semibold mb-2 label-m">Create an Account</p>
        <h2 className="heading-s md:heading-m text-neutral-900">Welcome to<br/>ByteSpace</h2>
      </div>

      <form className="flex flex-col gap-6">
        <Input label="Full Name" type="text" placeholder="Jamie Davis" />
        <Input label="Email" type="email" placeholder="designer@example.com" />
        <Input label="Password" type="password" placeholder="********" />

        <div className="flex justify-end mt-2">
          <button type="submit" className="bg-secondary-500 hover:bg-secondary-600 text-neutral-900 font-bold py-3.5 px-10 rounded-full transition-colors label-m shadow-lg shadow-secondary-500/20">
            Continue
          </button>
        </div>
      </form>

      <div className="mt-12 text-center">
        <p className="body-s text-neutral-500">
          Already have an account? <Link href="/login" className="text-primary-600 font-medium hover:underline">Login</Link>
        </p>
      </div>
    </AuthContainer>
  );
}
