import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./compontents/Benefits";
import Button from "./compontents/Button";
import Collaboration from "./compontents/Collaboration";
import Header from "./compontents/Header";
import Hero from "./compontents/Hero";
import Pricing from "./compontents/Pricing";
import Services from "./compontents/Services";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Benefits />
        <Collaboration />
        <Services />
        <Pricing />
      </div>

      <ButtonGradient />
    </>
  );
};

export default App;
