import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";

interface CountdownProps {
  targetDate: Date;
}

export function Countdown({ targetDate }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const difference = +targetDate - +new Date();
    let timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  });

  const TimeBox = ({ value, label }: { value: number; label: string }) => (
    // Reduje el min-w en móvil para asegurar que entren los 4 bloques
    <div className="flex flex-col items-center min-w-[2.5rem] md:min-w-[5rem]">
      <span className="text-2xl md:text-5xl font-bold text-foreground tabular-nums leading-none">
        {value < 10 ? `0${value}` : value}
      </span>
      <span className="text-[8px] md:text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground mt-1 md:mt-2">
        {label}
      </span>
    </div>
  );

  const Separator = () => (
    <div className="text-xl md:text-4xl text-muted-foreground/30 font-light -mt-3 md:-mt-4 select-none pb-2">
      :
    </div>
  );

  return (
    <section className="flex flex-col items-center justify-center gap-8 py-6 animate-in fade-in zoom-in duration-700">

      <h1 className="flex items-center text-3xl md:text-5xl font-bold tracking-tight">
          Llega el día:
      </h1>

      {/* CAMBIOS REALIZADOS:
         1. 'flex-nowrap': Obliga a no bajar de línea.
         2. 'gap-2': Reducido el espacio en móvil para que quepa mejor.
         3. 'px-4': Reducido el padding lateral en móvil.
      */}
      <Card className="flex flex-row flex-nowrap items-center justify-center gap-2 md:gap-6 py-6 px-4 md:px-12 bg-card/80 backdrop-blur-md shadow-2xl border-primary/5 rounded-2xl md:rounded-full w-full max-w-fit mx-auto">
        <TimeBox value={timeLeft.days} label="Días" />
        <Separator />
        <TimeBox value={timeLeft.hours} label="Hs" />
        <Separator />
        <TimeBox value={timeLeft.minutes} label="Min" />
        <Separator />
        <TimeBox value={timeLeft.seconds} label="Seg" />
      </Card>
    </section>
  );
}