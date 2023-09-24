import hero from "./assets/images/illustration-hero.svg";
import music from "./assets/images/icon-music.svg";
import background from "./assets/images/pattern-background-desktop.svg";

function App() {
  return (
    <>
      <section className="bg-[#E0E8FF]">
        <div className="flex items-center flex-col justify-center h-screen">
          <div className="flex items-center flex-col justify-center bg-white w-80 rounded-xl">
            <img src={hero} alt="" className="w-80 rounded-t-xl" />
            <h2 className="text-2xl font-extrabold pt-4">Order Summary</h2>
            <p className="text-[#717FA6] text-center py-4 px-4">
              You can now listen to millions of songs, audiobooks, and podcasts
              on any device anywhere you like!
            </p>
            <div className="flex bg-[#F7F9FF] w-72 h-auto rounded-xl items-center">
              <img src={music} alt="" className="p-5" />
              <div className="flex flex-col pr-8">
                <h3 className="font-bold">Annual Plan</h3>
                <span className="text-[#717FA6]">£59.99/year</span>
              </div>
              <a href="/">Change</a>
            </div>
            <button className="bg-[#382AE1] w-72 py-4 rounded-xl text-white font-bold mt-5">Proceed to Payment </button>
            <a href="/" className="font-bold text-[#717FA6] py-5 ">Cancel Order</a>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
