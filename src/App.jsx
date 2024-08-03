import ButtonGradient from "./assets/svg/ButtonGradient";
import Button from "./compontents/Button";
import Header from "./compontents/Header";
import Hero from "./compontents/Hero";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
      </div>

      <ButtonGradient />
    </>
  );
};

export default App;
