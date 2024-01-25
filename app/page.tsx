import Navbar from "./Sections/Navbar";
import Firstsection from "./Sections/Firstsection";
import Secondsetion from "./Sections/Secondsection";
import Footer from "./Sections/Footer";
import Thirdsection from "./Sections/Thirdsection";
import Fourthsection from "./Sections/Fourthsection";

export default function Home() {
  return (
    <main className="max-sm:flex max-sm:flex-col max-sm:items-center">
      <Navbar />
      <Firstsection />
      <Secondsetion />
      <Thirdsection />
      <Fourthsection />
      <Footer />
    </main>
  );
}
