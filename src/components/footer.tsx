import { Github, Send, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  // Datos de contacto
  const whatsappNumber = "59163228524";
  const whatsappMessage = encodeURIComponent(
    "Hola, me gustó la pagina web que desarrollaste."
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <footer className="w-full bg-background/60 backdrop-blur-xl border-t border-border/40 mt-auto relative">
      {/* Línea decorativa superior con degradado */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Créditos - Lado Izquierdo */}
          <div className="flex flex-col items-center md:items-start gap-2 text-center md:text-left">
            <div className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground">
              <span>Desarrollado con</span>
              <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" />
              <span>por</span>
            </div>
            
            <span className="text-lg font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 bg-clip-text text-transparent hover:scale-105 transition-transform cursor-default inline-block">
              Luis Fernando Patiño Nina
            </span>
            
            <p className="text-xs text-muted-foreground/60">
              &copy; {new Date().getFullYear()} Todos los derechos reservados.
            </p>
          </div>

          {/* Botones de Redes Sociales - Más Vistosos */}
          <div className="flex flex-wrap justify-center gap-4">
            
            {/* Botón GitHub - Estilo 'Outline' elegante */}
            <Button 
              variant="outline" 
              size="lg" 
              className="rounded-full group border-foreground/10 hover:border-foreground/30 hover:bg-foreground hover:text-background transition-all duration-300"
              asChild
            >
              <a
                href="https://github.com/Fernixp"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                <span>GitHub</span>
              </a>
            </Button>

            {/* Botón WhatsApp - Estilo Sólido y Vibrante (Brand Color) */}
            <Button 
              size="lg" 
              className="rounded-full bg-[#25D366] hover:bg-[#128C7E] text-white border-none shadow-lg shadow-green-500/25 hover:shadow-green-500/50 hover:-translate-y-0.5 transition-all duration-300 font-bold"
              asChild
            >
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <Send className="w-5 h-5 mr-2 fill-white" />
                <span>Contactar</span>
              </a>
            </Button>

          </div>
        </div>
      </div>
    </footer>
  );
}