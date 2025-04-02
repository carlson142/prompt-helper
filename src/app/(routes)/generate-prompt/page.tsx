import { BackToHome } from "@/app/components/AddNewPromptPage/Buttons/BackToHome";

export default function Generate() {
  return (
    <div className="flex flex-col w-screen h-screen p-5">
      <div className="self-center">
        <BackToHome />
      </div>

      <div className="text-center mt-6">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-[var(--main-heading-green)] to-[var(--main-heading-teal)] text-transparent bg-clip-text mb-1">
          Згенеруй свій власний промпт!
        </h1>
      </div>

      <div className="w-full h-full bg-red-500 flex">
        {/* Left Side */}
        <div className="flex-1 bg-green-400"></div>

        {/* Right Side */}
        <div className="flex-1 bg-blue-400"></div>
      </div>
    </div>
  );
}
