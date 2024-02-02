interface IHero {
  shopRoute: string;
}

function HeroSection({ shopRoute }: IHero) {
  return <div>{shopRoute}</div>;
}

export default HeroSection;
