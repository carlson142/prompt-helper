import Footer from "./components/Footer";
import LeftSide from "./components/LeftSide";
import MainComponent from "./components/MainComponent/MainComponent";

import Navigation from "./components/Navigation";

export default function Home() {
  return (
    <div className="flex flex-col w-screen h-screen p-5">
      <Navigation />

      <div className="flex flex-1">
        <LeftSide />

        <MainComponent />
      </div>

      <Footer />
    </div>
  );
}
