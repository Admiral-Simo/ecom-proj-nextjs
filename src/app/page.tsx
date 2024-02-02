import Navbar from "@/components/Navbar";
import TopBanner from "@/components/TopBanner";
import HeroSection from "@/components/HeroSection";

const routes = [
  { title: "home", link: "/" },
  { title: "connect & faq's", link: "/contact" },
];

const shopRoute: string = "/shop";

export default function Home() {
  return (
    <main>
      <TopBanner />
      <Navbar routes={routes} />
      <HeroSection shopRoute={shopRoute} />
    </main>
  );
}
