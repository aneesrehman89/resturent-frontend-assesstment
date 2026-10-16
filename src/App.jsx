import Header from "./components/header";
import Hero from "./components/hero";
import Footer from "./components/footer";
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
