import { MapPin, Clock, CalendarDays } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface EventLocationProps {
  date: string; // Prop agregada (faltaba en tu snippet)
  placeName: string;
  address: string;
  time: string;
  googleMapsLink: string; // Link directo para "Cómo llegar"
}

export function EventLocation({ date, placeName, address, time, googleMapsLink }: EventLocationProps) {
  return (
    <section className="py-8 px-4">
      <div className="text-center mb-8 space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Celebración</h2>
        <p className="text-muted-foreground">Te espero para compartir este momento especial</p>
      </div>

      <div className="grid md:grid-cols-5 gap-6 max-w-5xl mx-auto">
        {/* Tarjeta de Información */}
        <Card className="md:col-span-2 flex flex-col justify-center h-full border-l-4 border-l-primary shadow-sm">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-foreground">
              Detalles del evento
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-5">
            
            {/* Fecha (Agregado) */}
            <div className="flex items-start gap-3 border p-3 rounded-lg bg-muted/10">
               <CalendarDays className="w-5 h-5 text-primary shrink-0 mt-0.5" />
               <div>
                 <h4 className="font-bold text-sm">Fecha:</h4>
                 <p className="text-muted-foreground text-sm leading-snug">{date}</p>
               </div>
            </div>

            {/* Hora */}
            <div className="flex items-start gap-3 border p-3 rounded-lg bg-muted/10">
              <Clock className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <div>
                 <h4 className="font-bold text-sm">Hora:</h4>
                 <p className="text-muted-foreground text-sm leading-snug">{time}</p>
              </div>
            </div>

            {/* Ubicación */}
            <div className="flex items-start gap-3 border p-3 rounded-lg bg-muted/10">
               <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
               <div>
                  <h4 className="font-bold text-sm">Ubicación:</h4>
                  <p className="text-foreground text-sm font-medium">{placeName}</p>
                  <p className="text-muted-foreground text-xs mt-0.5">{address}</p>
               </div>
            </div>

          </CardContent>
          <CardFooter>
            <Button className="w-full" asChild>
              <a href={googleMapsLink} target="_blank" rel="noopener noreferrer">
                Cómo llegar
              </a>
            </Button>
          </CardFooter>
        </Card>

        {/* Mapa Embed */}
        <Card className="md:col-span-3 overflow-hidden h-[300px] md:h-auto min-h-[300px] shadow-sm">
        <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3825.8514479360156!2d-68.237534!3d-16.483058!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTbCsDI4JzU5LjAiUyA2OMKwMTQnMTUuMSJX!5e0!3m2!1ses-419!2sbo!4v1763952530418!5m2!1ses-419!2sbo" width="600" height="450" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </Card>
      </div>
    </section>
  );
}