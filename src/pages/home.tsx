import { Countdown } from "@/components/home/contdown";
import { EventLocation } from "@/components/home/event.location";
import { GraduateProfile } from "@/components/home/graduate-profile";
import { HeroSection } from "@/components/home/hero-section";
import { Separator } from "@/components/ui/separator";

export const HomePage = () => {
  // CONFIGURACIÓN DE DATOS (Puedes mover esto a un archivo de config después)
  const GRADUATION_DATE = new Date("2025-12-13T19:00:00"); // Fecha objetivo
  const GRADUATE_NAME = "Aaron Josue Lluta Patiño";
  const SCHOOL_NAME = "Colegio San Francisco";
  const QUOTE = "Lo que sueñas hoy, será tu realidad mañana si trabajas por ello.";
  
  // Datos del evento
  const EVENT_PLACE = "En su domicilio";
  const EVENT_ADDRESS = "Av. Jaimes Freyre #1234, Zona Sopocachi";
  const EVENT_TIME = "Ceremonia: 19:00 hrs | Recepción: 20:30 hrs";
  // URL de embed de Google Maps (ejemplo genérico)
  const MAP_EMBED_URL = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.593634930966!2d-68.1324374253726!3d-16.49605433803436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915f2073467766c3%3A0x79555766c3236662!2sPlaza%20Murillo!5e0!3m2!1ses!2sbo!4v1709666666666!5m2!1ses!2sbo";
  const MAP_LINK = "https://maps.app.goo.gl/SQHBo2mE56xCdPXdA";

  return (
    <div className="flex flex-col min-h-screen pb-20 bg-background">
      {/* 1. Hero Section (Portada) */}
      <HeroSection graduateName={GRADUATE_NAME} classYear="2025" />

      <div className="container max-w-5xl mx-auto px-4 space-y-12 -mt-8 relative z-10">
        
        {/* 2. Contador (Flotando sobre el hero ligeramente) */}
        <Countdown targetDate={GRADUATION_DATE} />

        {/* 3. Perfil del Graduado */}
        <GraduateProfile 
          name={GRADUATE_NAME} 
          school={SCHOOL_NAME} 
          quote={QUOTE}
        />

        <Separator className="my-8" />

        {/* 4. Ubicación y Mapa */}
        <EventLocation 
          placeName={EVENT_PLACE}
          address={EVENT_ADDRESS}
          time={EVENT_TIME}
          mapUrl={MAP_EMBED_URL}
          googleMapsLink={MAP_LINK}
        />
        
      </div>
    </div>
  );
};