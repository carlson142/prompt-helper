import Footer from "./components/Footer";
import LeftSide from "./components/LeftSide";
import MainComponent from "./components/MainComponent/MainComponent";
import { PromptPopup } from "./components/MainComponent/PromptPopup";

import Navigation from "./components/Navigation";
import { usePopupStore } from "./store/store";

export default function Home() {
  // const { openPopup, isOpen } = usePopupStore();

  return (
    <div className="flex flex-col w-screen h-screen p-5 relative">
      <Navigation />

      <div className="flex flex-1">
        <LeftSide />

        <MainComponent />
      </div>

      <Footer />

      {/* Відображається тільки якщо відповідний дів активований */}
      <PromptPopup />
    </div>
  );
}
