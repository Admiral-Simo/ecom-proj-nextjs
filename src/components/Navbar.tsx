import { ShoppingCart, User2, Search } from "lucide-react";

interface INavbar {
  routes: { title: string; link: string }[];
}

function Navbar({ routes }: INavbar) {
  return (
    <div className="flex items-center justify-between px-3 py-5 max-w-screen-xl mx-auto">
      <div className="flex items-center gap-20">
        <h1 className="text-4xl font-bold">
          simo<span className="text-blue-500">shop</span>
        </h1>
        <div className="space-x-10 hidden md:block">
          {routes.map((item) => (
            <a
              className="relative tracking-widest hover:after:absolute  hover:after:top-6 hover:after:left-0 hover:after:w-full hover:after:h-0.5 hover:after:bg-blue-500 hover:after:content-'' hover:after:transition-all hover:after:duration-300"
              key={item.title}
              href={item.link}
            >
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
