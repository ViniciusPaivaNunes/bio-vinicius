import flyer01 from "@/assets/flyer-01.png";
import flyer02 from "@/assets/flyer-02.png";
import flyer03 from "@/assets/flyer-03.png";

const Index = () => {
  return (
    <div className="flex flex-col items-center gap-6 bg-background px-3 py-6">
      {/* Cards com proporção fixa para tamanho uniforme e área de clique grande */}
      <a
        href="https://wa.me/5545991129960?text=Oi,%20Vinicius!%20Quero%20saber%20mais%20sobre%20seus%20servicos%20de%20marketing."
        target="_blank"
        rel="noopener noreferrer"
        className="w-full max-w-2xl animate-pulse-subtle rounded-xl shadow-[0_0_20px_rgba(0,200,255,0.15)] transition-transform active:scale-95 hover:scale-[1.02]"
      >
        <img src={flyer02} alt="Serviços de Marketing" className="w-full rounded-xl" />
      </a>
      <a
        href="https://wa.me/5545991129960?text=Oi,%20Vinicius!%20Quero%20saber%20mais%20sobre%20sua%20mentoria!"
        target="_blank"
        rel="noopener noreferrer"
        className="w-full max-w-2xl animate-pulse-subtle rounded-xl shadow-[0_0_20px_rgba(0,200,255,0.15)] transition-transform active:scale-95 hover:scale-[1.02]"
      >
        <img src={flyer01} alt="Mentoria Método PN" className="w-full rounded-xl" />
      </a>
      <a
        href="https://wa.me/5545991129960?text=Oi,%20Vinicius!%20Quero%20fazer%20minha%20primeira%20venda%20no%20digital!"
        target="_blank"
        rel="noopener noreferrer"
        className="w-full max-w-2xl animate-pulse-subtle rounded-xl shadow-[0_0_20px_rgba(0,200,255,0.15)] transition-transform active:scale-95 hover:scale-[1.02]"
      >
        <img src={flyer03} alt="Primeiros R$1.000 no Digital" className="w-full rounded-xl" />
      </a>
    </div>
  );
};

export default Index;
