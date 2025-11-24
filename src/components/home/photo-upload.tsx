import { ImageUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

interface PhotoUploadProps {
  uploadLink: string;
}

export function PhotoUpload({ uploadLink }: PhotoUploadProps) {
  return (
    <section className="flex flex-col items-center justify-center py-12 px-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="w-full max-w-3xl flex flex-col items-center gap-8">
        
        {/* Línea superior */}
        <Separator className="w-[80%] md:w-[60%] bg-border/60" />
        
        <div className="flex flex-col items-center gap-6 text-center">
          <div className="space-y-3">
            <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">
              ¿Tienes fotos del evento?
            </h3>
            <p className="text-muted-foreground text-lg">
              ¡Súbelas aquí para compartir esos momentos especiales!
            </p>
          </div>

          <Button 
            size="lg" 
            variant="outline" 
            className="rounded-full gap-2 h-12 px-8 text-base shadow-sm hover:bg-accent transition-transform hover:scale-105"
            asChild
          >
            <a 
              href={uploadLink} 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Subir imágenes a Google Drive"
            >
              <ImageUp className="w-5 h-5" />
              Subir imágenes
            </a>
          </Button>
        </div>

        {/* Línea inferior */}
        <Separator className="w-[80%] md:w-[60%] bg-border/60" />

      </div>
    </section>
  );
}