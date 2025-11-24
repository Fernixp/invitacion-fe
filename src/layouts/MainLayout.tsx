import { Navbar01 } from "../components/ui/shadc-io/navbar-01";
import { ScrollToTop } from "../components/home/scroll-to-top";
import { Footer } from "../components/footer"; // <--- 1. Importar Footer
import { Outlet } from "react-router-dom";

export const MainLayout = () => {
    return (
      // 2. Agregamos 'flex flex-col' al contenedor principal para manejar la altura
      <div className="min-h-svh bg-background text-foreground transition-colors duration-300 relative flex flex-col">
        
        <header className="border-b sticky top-0 z-50 backdrop-blur-md">
          <div className="container mx-auto px-4">
            <Navbar01
              navigationLinks={[
                { label: "Home", href: "/" },
              ]}
            />
          </div>
        </header>
  
        {/* 3. 'flex-1' hace que el contenido principal ocupe el espacio disponible empujando el footer */}
        <main className="container mx-auto px-4 flex-1">
          {/* Outlet renderiza la ruta hija seleccionada (Home, Chat, etc.) */}
          <Outlet />
        </main>
  
        {/* 4. Agregamos el componente Footer al final */}
        <Footer />
        
        <ScrollToTop />
      </div>
    );
  };