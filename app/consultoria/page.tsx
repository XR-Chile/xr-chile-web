import { footer } from "@/lib/data/footer";
import Image from "next/image";

const titles = "text-6xl font-bold text-center p-4 ";
const background = "shadow-md bg-white ";
const image = "images/consultoria/post1.png";

export default function Consultoria() {
    return (
        <main>
            <h1 className={titles + background + "mb-20 mt-16"}>Consultoría</h1>
            <div className={background + "w-full max-w-7xl mx-auto gap-6 mb-20 p-8 grid grid-cols-2"}>
                {/* GRACIAS NEXTJS POR HACER UNA CLASE ASI DE AWEONA QUE NECESITE TENER UN OBJ PADRE CON POSITION ASIGNADO */}
                <div className="relative">
                <Image 
                    src={image}
                    alt="Nosotros"
                    fill
                    objectFit="cover"
                    />
                </div>
                <div>
                    <h2 className="text-2xl font-bold mb-4 text-stone-950">Sobre nosotros</h2>
                          <div
                            className="text-stone-950"
                            dangerouslySetInnerHTML={{ __html: footer.about }}
                          />
                </div>
            </div>
        </main>
    );
}
