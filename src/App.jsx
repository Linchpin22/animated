import bg from "./assets/bg.png";
import Navbar from "./Navbar";
import Hero from "./Hero";

export default function App() {
  return (
    <div className="relative bg-cover bg-center h-screen" style={{ backgroundImage: `url(${bg})` }}>
      <Navbar />
      <Hero />
    </div>
  );
}