import { School, Award } from "lucide-react";
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
    <section className="py-8 px-4 flex justify-center">
      <Card className="w-full max-w-2xl text-center overflow-hidden border-primary/20 shadow-xl">
        <div className="h-32 bg-gradient-to-r from-blue-600 to-purple-600 relative">
          <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 p-1 bg-background rounded-full">
             {/* Placeholder para foto, puedes poner un <img> real aquí */}
            <div className="w-24 h-24 rounded-full bg-muted flex items-center justify-center border-2 border-border shadow-sm">
              <Award className="w-10 h-10 text-muted-foreground" />
            </div>
          </div>
        </div>
        
        <CardHeader className="pt-16 pb-2">
          <CardTitle className="text-3xl font-bold">{name}</CardTitle>
          <CardDescription className="text-lg flex items-center justify-center gap-2 mt-2">
            <School className="w-4 h-4" />
            {school}
          </CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-4" >
          <Badge variant="outline" className="text-sm py-1 px-4 border-primary/40">
            Bachiller en Humanidades / Ciencias
          </Badge>
          
          {quote && (
            <blockquote className="mt-6 border-l-2 pl-6 italic text-muted-foreground text-left mx-auto max-w-md">
              "{quote}"
            </blockquote>
          )}
        </CardContent>
      </Card>
    </section>
  );
}