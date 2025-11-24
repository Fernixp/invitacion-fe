import { MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface EventLocationProps {
  placeName: string;
  address: string;
  time: string;
  mapUrl: string; // URL de embed de Google Maps
  googleMapsLink: string; // Link directo para "Cómo llegar"
}

export function EventLocation({ placeName, address, time, mapUrl, googleMapsLink }: EventLocationProps) {
  return (
    <section className="py-8 px-4">
      <div className="text-center mb-8 space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Celebración</h2>
        <p className="text-muted-foreground">Te espero para compartir este momento especial</p>
      </div>

      <div className="grid md:grid-cols-5 gap-6 max-w-5xl mx-auto">
        {/* Tarjeta de Información */}
        <Card className="md:col-span-2 flex flex-col justify-center h-full border-l-4 border-l-primary">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-xl">
              <MapPin className="w-5 h-5 text-primary" />
              Ubicación
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold text-lg">{placeName}</h3>
              <p className="text-muted-foreground">{address}</p>
            </div>
            <div className="flex items-center gap-2 text-foreground/80">
              <Clock className="w-4 h-4 text-primary" />
              <span className="font-medium">{time}</span>
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
        <Card className="md:col-span-3 overflow-hidden h-[300px] md:h-auto min-h-[300px]">
          <iframe
            src={mapUrl}
            width="100%"
            height="100%"
            style={{ border: 0, minHeight: "300px" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full grayscale hover:grayscale-0 transition-all duration-500"
          />
        </Card>
      </div>
    </section>
  );
}