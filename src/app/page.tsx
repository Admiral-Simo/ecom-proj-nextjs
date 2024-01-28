import Navbar from "@/components/Navbar";
import TopBanner from "@/components/TopBanner";

const routes = [
  { title: "home", link: "/" },
  { title: "connect & faq's", link: "/contact" },
];

export default function Home() {
  return (
    <main>
      <TopBanner />
      <Navbar routes={routes} />
    </main>
  );
}
