import Navbar from "./Sections/Navbar";
import Firstsection from "./Sections/Firstsection";
import Secondsetion from "./Sections/Secondsection";
import Footer from "./Sections/Footer";
import Thirdsection from "./Sections/Thirdsection";
import Fourthsection from "./Sections/Fourthsection";

export default function Home() {
  return (
    <main className="max-sm:max-w-[394px]">
      <Navbar />
      <Firstsection />
      <Secondsetion />
      <Thirdsection />
      <Fourthsection />
      <Footer />
    </main>
  );
}
