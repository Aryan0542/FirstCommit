import NavBar from "./components/NavBar";
import Home from "./pages/Home";

function App() {
  return (
    <>
      {/* Floating Navigation */}
      <NavBar />

      {/* Application Content */}
      <main className="pt-24">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <Home />
        </div>
      </main>
    </>
  );
}

export default App;
