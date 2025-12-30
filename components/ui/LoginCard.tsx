import LoginForm from "../../app/login/LoginForm";
import LoginProviders from "../../app/login/LoginProviders";

export default function LoginCard() {
  return (
    <div className="w-full max-w-md mx-auto flex flex-col gap-6 items">
      {/* Logo */}
      <div className="ml-18 flex items-right ">
        {/* Logo Section */}
        <div className="flex items-center ">
          <div className=" text-red-600 font-black px-2 py-1 text-4xl">GK</div>
          <div className="block leading-tight">
            <p className="font-normal text-gray-800 text-lg">GraceKennedy</p>
            <p className="text-lg text-gray-800 font-normal">
              General Insurance
            </p>
          </div>
        </div>
      </div>
      <div className="text-left">
        <h1 className="text-3xl font-bold">Sign in to your account</h1>
        <p className="text-gray-500 text-sm">
          Your insurance journey simplified,all in one place
        </p>
      </div>

      {/* Providers */}
      {/* <LoginProviders /> */}

      {/* OR */}

      {/* Email Form */}
      <LoginForm />

      {/* Footer */}
      <div className="text-center text-sm mt-2">
        Don’t have an account?{" "}
        <a href="#" className="text-blue-600 font-medium block">
          Create one
        </a>
      </div>
    </div>
  );
}
