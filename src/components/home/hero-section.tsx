import { GraduationCap, CalendarDays, MapPin, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface HeroSectionProps {
  graduateName: string;
  classYear: string;
}

export function HeroSection({ graduateName, classYear }: HeroSectionProps) {
  
  const scrollToDetails = () => {
    const element = document.getElementById('event-details');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative flex flex-col items-center justify-center text-center min-h-[85vh] w-full overflow-hidden pt-20 pb-10">
      
      {/* Fondo decorativo con gradiente sutil */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background opacity-60" />
      
      {/* Elementos flotantes decorativos (opcional) */}
      <div className="absolute top-1/4 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-700" />

      <div className="container px-4 flex flex-col items-center gap-8 z-10">
        
        {/* Badge de la clase */}
        <div className="animate-in fade-in slide-in-from-top-4 duration-700">
          <Badge 
            variant="secondary" 
            className="py-2 px-6 text-base font-medium rounded-full border border-primary/20 bg-background/50 backdrop-blur-md shadow-sm"
          >
            <GraduationCap className="mr-2 h-5 w-5 text-primary" />
            Clase de {classYear}
          </Badge>
        </div>

        {/* Títulos principales */}
        <div className="space-y-4 max-w-4xl animate-in zoom-in-95 duration-1000 delay-200">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-tight">
            ¡Lo <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Logré</span>!
          </h1>
          <h2 className="text-2xl md:text-4xl font-light text-muted-foreground mt-4">
            {graduateName}
          </h2>
        </div>

        {/* Texto descriptivo */}
        <p className="max-w-[600px] text-muted-foreground text-lg md:text-xl leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
          El esfuerzo, la dedicación y las noches de estudio han dado sus frutos.
          Acompáñame a celebrar el comienzo de mi vida profesional.
        </p>

        {/* Botones de acción (sin rutas, solo scroll o links externos) */}
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500 pt-4">
          <Button 
            size="lg" 
            className="rounded-full h-14 px-8 text-lg shadow-lg shadow-primary/25 hover:scale-105 transition-all"
            onClick={scrollToDetails}
          >
            <CalendarDays className="mr-2 h-5 w-5" />
            Ver Detalles
          </Button>
          
          {/* Este botón podría llevar al mapa directamente si prefieres */}
          <Button 
            size="lg" 
            variant="outline" 
            className="rounded-full h-14 px-8 text-lg hover:bg-secondary/50 hover:scale-105 transition-all"
            onClick={() => document.getElementById('location-map')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <MapPin className="mr-2 h-5 w-5" />
            Ubicación
          </Button>
        </div>
      </div>

    </section>
  );
}