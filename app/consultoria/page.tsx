import { footer } from "@/lib/data/footer";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import ContactForm from "@/components/modules/contact-form";

const titles = "text-6xl font-bold text-center p-4 ";
const background = "shadow-md bg-white ";
const image = "images/consultoria/nosotros.png";

export default function Consultoria() {
  return (
    <main>
      <h1 className={titles + background + "mb-20 mt-16"}>Consultoría</h1>
      <div className={background + "w-full max-w-7xl mx-auto p-8 mb-20"}>
        <div className="grid grid-cols-2 gap-6 mb-6">
          {/* Tiene un div padre para manejar de buena manera el fill */}
          <div className="relative">
            <Image src={image} alt="Nosotros" fill objectFit="cover" />
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4 text-stone-950">
              Sobre nosotros
            </h2>
            <div
              className="text-stone-950"
              dangerouslySetInnerHTML={{ __html: footer.about }}
            />
          </div>
        </div>
        <Popover>
          <PopoverTrigger asChild>
            <Button className="text-2xl font-bold mb-4 text-stone-950 relative w-full">
              Contáctanos
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-80 text-main-foreground">
            <ContactForm></ContactForm>
          </PopoverContent>
        </Popover>
      </div>
      <div className="flex w-full"></div>
    </main>
  );
}
