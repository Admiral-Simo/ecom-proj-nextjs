import { Instagram, Youtube, Twitter, Facebook } from "lucide-react";

function TopBanner() {
  return (
    <div className="bg-gray-900">
      <div className="flex items-center mx-auto max-w-screen-xl justify-between">
        <p className="uppercase flex-1 text-center">
          exclusive cartel collection <span>🇲🇽</span>
        </p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/*socials right here*/}
            <Instagram />
            <Youtube />
            <Twitter />
            <Facebook />
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
