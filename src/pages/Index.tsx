import flyer01 from "@/assets/flyer-01.png";
import flyer02 from "@/assets/flyer-02.png";

const Index = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-background p-4">
      <a
        href="https://wa.me/5545991129960?text=Oi,%20Vinicius!%20Quero%20saber%20mais%20sobre%20sua%20mentoria!"
        target="_blank"
        rel="noopener noreferrer"
        className="w-full max-w-2xl transition-transform hover:scale-[1.02]"
      >
        <img src={flyer01} alt="Mentoria Método PN" className="w-full rounded-lg" />
      </a>
      <a
        href="https://wa.me/5545991129960?text=Oi,%20Vinicius!%20Quero%20saber%20mais%20sobre%20seus%20servicos%20de%20marketing."
        target="_blank"
        rel="noopener noreferrer"
        className="w-full max-w-2xl transition-transform hover:scale-[1.02]"
      >
        <img src={flyer02} alt="Serviços de Marketing" className="w-full rounded-lg" />
      </a>
    </div>
  );
};

export default Index;
