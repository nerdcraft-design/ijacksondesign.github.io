import Header from "./components/Header";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <>
      <div className="page-wrapper position-relative">
        <Header />
        <main>
          <Home />
          <Portfolio />
        </main>
      </div>
    </>
  );
}

export default App;
