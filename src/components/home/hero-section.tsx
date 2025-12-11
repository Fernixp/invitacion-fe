import { GraduationCap, ChevronDown } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useEffect, useState } from "react";

interface HeroSectionProps {
  graduateName: string;
  classYear: string;
}

interface Confetti {
  id: number;
  left: number;
  delay: number;
  duration: number;
  rotation: number;
  color: string;
}

export function HeroSection({ graduateName, classYear }: HeroSectionProps) {
  const [confetti, setConfetti] = useState<Confetti[]>([]);

  // Generar confeti al montar el componente
  useEffect(() => {
    const colors = ['#1e40af', '#0f172a', '#64748b', '#0891b2', '#374151', '#0c4a6e'];
    const newConfetti = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 3,
      duration: 3 + Math.random() * 2,
      rotation: Math.random() * 360,
      color: colors[Math.floor(Math.random() * colors.length)]
    }));
    setConfetti(newConfetti);
  }, []);

  // Efecto de explosión de confeti al hacer clic
  const triggerConfetti = () => {
    const colors = ['#1e40af', '#0f172a', '#64748b', '#0891b2', '#374151', '#0c4a6e'];
    const timestamp = Date.now();
    const burstConfetti = Array.from({ length: 30 }, (_, i) => ({
      id: timestamp + i,
      left: Math.random() * 100, // Distribuir por todo el ancho
      delay: Math.random() * 0.3,
      duration: 2 + Math.random() * 1,
      rotation: Math.random() * 720,
      color: colors[Math.floor(Math.random() * colors.length)]
    }));
    
    setConfetti(prev => [...prev, ...burstConfetti]);
    
    // Limpiar confeti viejo después de que termine su animación
    setTimeout(() => {
      setConfetti(prev => prev.filter(c => c.id > timestamp - 3000));
    }, 3000);
  };

  // --- CORRECCIÓN AQUÍ ---
  // Función para bajar suavemente considerando la altura del navbar
  const scrollToDetails = () => {
    const element = document.getElementById('event-details');
    if (element) {
      // Altura aproximada del navbar (80px) + un poco de espacio extra (20px) = 100px
      const headerOffset = 100; 
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section className="relative flex flex-col items-center justify-center text-center min-h-[90vh] w-full overflow-hidden pt-20 pb-10">
      
      {/* Confeti animado */}
      {confetti.map((piece) => (
        <div
          key={piece.id}
          className="absolute w-3 h-3 pointer-events-none"
          style={{
            left: `${piece.left}%`,
            top: '-20px',
            backgroundColor: piece.color,
            animation: `fall ${piece.duration}s linear ${piece.delay}s forwards`,
            transform: `rotate(${piece.rotation}deg)`,
            opacity: 0.8,
            borderRadius: piece.id % 2 === 0 ? '50%' : '0'
          }}
        />
      ))}
      
      <style>{`
        @keyframes fall {
          to {
            transform: translateY(100vh) rotate(720deg);
            opacity: 0;
          }
        }
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s ease infinite;
        }
      `}</style>
      
      {/* Fondo decorativo mejorado con múltiples capas */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-700/20 via-slate-900/10 to-background opacity-60" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-cyan-900/15 via-transparent to-transparent" />
      </div>
      
      {/* Elementos flotantes decorativos mejorados */}
      <div className="absolute top-1/4 left-10 w-32 h-32 bg-slate-600/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-10 w-40 h-40 bg-cyan-800/10 rounded-full blur-3xl animate-pulse delay-700" />
      <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-slate-700/10 rounded-full blur-2xl animate-pulse delay-300" />

      <div className="container px-4 flex flex-col items-center gap-8 z-10 flex-1 justify-center">
        
        {/* Badge de la clase con animación mejorada */}
        <div 
          className="animate-in fade-in slide-in-from-top-4 duration-700 hover:scale-110 transition-transform cursor-pointer"
          onClick={triggerConfetti}
        >
          <Badge 
            variant="secondary" 
            className="py-2.5 px-7 text-base font-medium rounded-full border-2 border-primary/30 bg-background/60 backdrop-blur-lg shadow-lg hover:shadow-xl hover:border-primary/50 transition-all"
          >
            <GraduationCap className="mr-2 h-5 w-5 text-primary animate-bounce" />
            Clase de {classYear}
          </Badge>
        </div>

        {/* Títulos principales con efectos mejorados */}
        <div 
          className="space-y-4 max-w-4xl animate-in zoom-in-95 duration-1000 delay-200 cursor-pointer group"
          onClick={triggerConfetti}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-tight transition-transform group-hover:scale-105">
            ¡Lo <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-600 via-cyan-700 to-slate-800 animate-gradient">Logré</span>!
          </h1>
          <h2 className="text-2xl md:text-4xl font-light text-muted-foreground mt-4 group-hover:text-foreground transition-colors">
            {graduateName}
          </h2>
        </div>

        {/* Texto descriptivo con mejor tipografía */}
        <p className="max-w-[650px] text-muted-foreground text-lg md:text-xl leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300 px-4">
          El esfuerzo, la dedicación y las noches de estudio han dado sus frutos.
          <br />
          <span className="font-semibold text-foreground/80">Acompáñame a celebrar el comienzo de mi vida profesional.</span>
        </p>        
      </div>

      {/* Indicador de Deslizamiento (Scroll Down) */}
      <div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer animate-in fade-in slide-in-from-top-4 duration-1000 delay-1000 z-20"
        onClick={scrollToDetails}
      >
        <span className="text-xs md:text-sm font-medium text-muted-foreground/80 uppercase tracking-widest animate-pulse">
          Desliza para ver más
        </span>
        <div className="bg-background/20 backdrop-blur-sm p-2 rounded-full border border-primary/20 hover:bg-background/40 transition-colors animate-bounce shadow-lg">
          <ChevronDown className="w-6 h-6 text-primary" />
        </div>
      </div>

    </section>
  );
}