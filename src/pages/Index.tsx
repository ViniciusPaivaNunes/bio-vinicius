import flyer01 from "@/assets/flyer-01.png";
import flyer02 from "@/assets/flyer-02.png";
import flyer03 from "@/assets/flyer-03.png";

const cards = [
  {
    href: "https://wa.me/5545991129960?text=Oi,%20Vinicius!%20Quero%20saber%20mais%20sobre%20seus%20servicos%20de%20marketing.",
    img: flyer02,
    alt: "Serviços de Marketing",
  },
  {
    href: "https://wa.me/5545991129960?text=Oi,%20Vinicius!%20Quero%20saber%20mais%20sobre%20sua%20mentoria!",
    img: flyer01,
    alt: "Mentoria Método PN",
  },
  {
    href: "https://wa.me/5545991129960?text=Oi,%20Vinicius!%20Quero%20fazer%20minha%20primeira%20venda%20no%20digital!",
    img: flyer03,
    alt: "Primeiros R$1.000 no Digital",
  },
];

const Index = () => {
  return (
    <div className="flex flex-col items-center gap-6 bg-background px-4 py-6">
      {cards.map((card) => (
        <a
          key={card.href}
          href={card.href}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full max-w-3xl aspect-video overflow-hidden animate-pulse-subtle rounded-2xl shadow-[0_0_25px_rgba(0,200,255,0.2)] transition-transform active:scale-95 hover:scale-[1.02]"
        >
          <img src={card.img} alt={card.alt} className="w-full h-full object-cover" />
        </a>
      ))}
    </div>
  );
};

export default Index;
