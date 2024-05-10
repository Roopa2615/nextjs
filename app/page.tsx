import Image from "next/image";
import Home from './pages/Home';

export default function App() {
  return (
    <main className="bg-white flex justify-center items-center h-screen">
      <div className="bg-white w-full h-screen">
        <Home />
      </div>
    </main>
  );
}
