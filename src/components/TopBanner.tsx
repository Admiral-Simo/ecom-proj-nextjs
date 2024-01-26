import { Instagram, Youtube, Twitter, Facebook } from "lucide-react";

function TopBanner() {
  return (
    <div className="bg-gray-900">
      <div className="flex items-center mx-auto max-w-screen-xl justify-between">
        <p className="uppercase flex-1 text-center">
          exclusive cartel collection <span>🇲🇽</span>
        </p>
        <div className="hidden md:flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/*socials right here*/}
            <Instagram size={19} />
            <Youtube size={19} />
            <Twitter size={19} />
            <Facebook size={19} />
          </div>
          <div className="flex items-center gap-1 ml-10">
            <p className="text-2xl">🇲🇦</p>
            <p className="font-thin">Morocco (MAD)</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopBanner;
