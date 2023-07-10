import Image from "next/image";
import SignUpForm from "./components/SignUpForm";
import SigninForm from "./components/SigninForm";

export default function Home() {
  return (
    <>
      <div className="flex justify-center items-center min-h-screen p-6">
        <div className="p-[3px] max-w-xl w-full bg-gradient-to-br from-purple-600 via-gray-400 to-gray-200 rounded-lg">
          <div className="p-6 bg-transparent rounded-lg">
            <h1 className="text-center font-bold">SignUp Form</h1>
            <div>
              <SignUpForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
