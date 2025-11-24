import { School, Award,  GraduationCap } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface GraduateProfileProps {
  name: string;
  school: string;
  quote?: string;
}

export function GraduateProfile({ name, school, quote }: GraduateProfileProps) {
  return (
    <div className="px-4 flex flex-col items-center gap-8">
      <h1 className="flex items-center text-5xl">
          <GraduationCap className="mr-2 h-5 w-5 text-primary animate-bounce" />
        Invitación
        </h1>
        <p className="max-w-[650px] text-muted-foreground text-lg md:text-xl leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300 px-4">
          Con gran alegría y orgullo, te invitamos a celebrar la graduación de:
        </p>  
    <section className="px-4 flex justify-center">
      <Card className="w-full max-w-xl overflow-hidden border border-slate-700/20 shadow-lg hover:shadow-xl transition-all duration-300">
        {/* Banner superior compacto */}
        <div className="h-24 bg-gradient-to-r from-slate-700 to-cyan-800 relative">
          {/* Foto de perfil */}
          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 z-10">
            <div className="w-20 h-20 rounded-full bg-background p-1 shadow-lg">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center">
                <Award className="w-8 h-8 text-slate-700" />
              </div>
            </div>
          </div>
        </div>
        
        <CardHeader className="pt-14 pb-3 text-center">
          <CardTitle className="text-2xl font-bold">{name}</CardTitle>
          <CardDescription className="flex items-center justify-center gap-2 mt-2">
            <School className="w-4 h-4" />
            {school}
          </CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-4 pb-6">
          <div className="flex justify-center">
            <Badge 
              variant="outline" 
              className="py-1.5 px-4 border-slate-700/30 font-medium"
            >
              Bachiller en Humanidades / Ciencias
            </Badge>
          </div>
          
          {quote && (
            <div className="mt-4">
              <blockquote className="border-l-2 border-slate-700/40 pl-4 italic text-muted-foreground text-sm">
                "{quote}"
              </blockquote>
            </div>
          )}
        </CardContent>
      </Card>
    </section>
    </div>
  );
}