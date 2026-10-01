import { AuthContainer } from "@/components/layout/AuthContainer";
import { Input } from "@/components/ui/Input";
import Link from "next/link";

export default function LoginPage() {
  return (
    <AuthContainer
      title="Sign in with ease"
      subtitle="Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge."
    >
      <div className="mb-8">
        <p className="text-primary-600 font-semibold mb-2 label-m">Sign In</p>
        <h2 className="heading-s md:heading-m text-neutral-900">Welcome Back</h2>
      </div>

      <form className="flex flex-col gap-6">
        <Input label="Email" type="email" placeholder="designer@example.com" />
        <Input label="Password" type="password" placeholder="********" />

        <div className="flex justify-end mt-2">
          <button type="submit" className="bg-secondary-500 hover:bg-secondary-600 text-neutral-900 font-bold py-3.5 px-10 rounded-full transition-colors label-m shadow-lg shadow-secondary-500/20">
            Sign In
          </button>
        </div>
      </form>

      <div className="my-10 flex items-center justify-center">
        <div className="border-t border-neutral-100 flex-grow"></div>
        <span className="px-4 text-neutral-400 body-s">or</span>
        <div className="border-t border-neutral-100 flex-grow"></div>
      </div>

      <div className="flex justify-center gap-4 mb-10">
        {/* Social Buttons */}
        <button className="w-[60px] h-[60px] rounded-full border border-neutral-200 flex items-center justify-center hover:bg-neutral-50 transition-colors">
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M22.675 0h-21.35C.597 0 0 .597 0 1.325v21.351C0 23.403.597 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.597 1.323-1.325V1.325C24 .597 23.403 0 22.675 0z"/></svg>
        </button>
        <button className="w-[60px] h-[60px] rounded-full border border-neutral-200 flex items-center justify-center hover:bg-neutral-50 transition-colors">
          <svg className="w-6 h-6" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
        </button>
      </div>

      <div className="text-center">
        <p className="body-s text-neutral-500">
          New user? <Link href="/register" className="text-primary-600 font-medium hover:underline">Create an account</Link>
        </p>
      </div>
    </AuthContainer>
  );
}
