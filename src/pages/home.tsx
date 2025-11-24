import { Countdown } from "@/components/home/contdown";
import { EventLocation } from "@/components/home/event.location";
import { GraduateProfile } from "@/components/home/graduate-profile";
import { HeroSection } from "@/components/home/hero-section";
import { PhotoUpload } from "@/components/home/photo-upload";
import { Separator } from "@/components/ui/separator";

export const HomePage = () => {
  // CONFIGURACIÓN DE DATOS (Puedes mover esto a un archivo de config después)
  const GRADUATION_DATE = new Date("2025-12-13T19:00:00"); // Fecha objetivo
  const GRADUATE_NAME = "Aaron Josue Lluta Patiño";
  const SCHOOL_NAME = "Colegio San Francisco";
  const QUOTE =
    "Lo que sueñas hoy, será tu realidad mañana si trabajas por ello.";

  // Datos del evento
  const EVENT_PLACE = "En su domicilio";
  const EVENT_ADDRESS = "Calle Julio Mendez #, Zona El Alto";
  const EVENT_TIME = "Ceremonia: 19:00 hrs | Recepción: 20:30 hrs";
  // URL de embed de Google Maps (ejemplo genérico)
  const MAP_LINK = "https://maps.app.goo.gl/SQHBo2mE56xCdPXdA";
  const DRIVE_LINK =
    "https://drive.google.com/drive/folders/1IHEwcKxax-QbzRdrCmwXOuxyWwLhWeJR?usp=sharing";
  return (
    <div className="flex flex-col min-h-screen pb-20 bg-background">
      {/* 1. Hero Section */}
      <HeroSection graduateName={GRADUATE_NAME} classYear="2025" />

      <div
        id="event-details"
        className="container max-w-5xl mx-auto px-4 space-y-12 -mt-8 relative z-10"
      >
        {/* 3. Perfil del Graduado */}
        <GraduateProfile
          name={GRADUATE_NAME}
          school={SCHOOL_NAME}
          quote={QUOTE}
        />
        <Separator className="my-8" />
        {/* 2. Contador */}
        <Countdown targetDate={GRADUATION_DATE} />

        <Separator className="my-8" />

        {/* 4. Ubicación y Mapa */}
        <EventLocation
          date={GRADUATION_DATE.toLocaleDateString("es-ES", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
          placeName={EVENT_PLACE}
          address={EVENT_ADDRESS}
          time={EVENT_TIME}
          googleMapsLink={MAP_LINK}
        />
        <PhotoUpload uploadLink={DRIVE_LINK} />
      </div>
    </div>
  );
};
