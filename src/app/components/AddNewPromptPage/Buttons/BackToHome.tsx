import { useRouter } from "next/navigation";

export const BackToHome = () => {
  const router = useRouter();

  const handleBackToHome = () => {
    router.push("/");
  };
  return (
    <button
      onClick={handleBackToHome}
      className="p-2 cursor-pointer border border-[var(--dotted-border)] w-max rounded-2xl flex items-center justify-center hover:bg-[var(--primary-green)] transition-all bg-[var(--primary-fadeGreen)]"
    >
      Back to Home Page
    </button>
  );
};
