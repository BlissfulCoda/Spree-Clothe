import Header from "@components/layout/Header";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <section className="container w-full h-full  sm:max-w-2xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl">
      <Header />
      <main className="container mx-auto">
        <Outlet />
      </main>
    </section>
  );
}

export default App;
