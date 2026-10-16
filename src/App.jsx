import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Menu from "./components/menu";

function App() {
  return (
    <div className="min-h-screen bg-cream text-stone-800">
      <Header />
      <main>
        <Hero />
        <Menu />
      </main>
      <Footer />
    </div>
  );
}

export default App;
