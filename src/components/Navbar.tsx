import { ShoppingCart, User2, Search } from "lucide-react";

interface INavbar {
  routes: { title: string; link: string }[];
}

function Navbar({ routes }: INavbar) {
  return (
    <div className="flex items-center justify-between py-5 max-w-screen-xl mx-auto">
      <div className="flex items-center gap-20">
        <h1 className="text-4xl font-bold">
          simo<span className="text-red-500">shop</span>
        </h1>
        <div className="space-x-10">
          {routes.map((item) => (
            <a className="tracking-widest" key={item.title} href={item.link}>
              {item.title}
            </a>
          ))}
        </div>
      </div>
      <div className="flex items-center gap-3">
        <Search />
        <User2 />
        <ShoppingCart />
      </div>
    </div>
  );
}

export default Navbar;
