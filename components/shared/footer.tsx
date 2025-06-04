import { footer } from "@/app/data/footer";
import Image from "next/image";

export const Footer = () => (
  <footer className="w-full bg-black text-gray-300 border-t-4 border-main p-8 flex flex-col md:flex-row gap-8 text-lg">
    {/* Contenedor principal con fondo negro */}
    <section id="about" className="flex-1">
      <h2 className="text-2xl font-bold mb-4 text-white">Sobre nosotros</h2>
      <div
        className="text-gray"
        dangerouslySetInnerHTML={{ __html: footer.about }}
      />
    </section>
    <section className="flex-1 flex flex-col gap-8">
      <div>
        <h2 className="text-2xl font-bold mb-4 text-white">Contacto</h2>
        <p className="text-gray">Email: {footer.contact.email}</p>
        <p className="text-gray">Teléfono: {footer.contact.phone}</p>
        <p className="text-gray">Dirección: {footer.contact.address}</p>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4 text-white">Redes Sociales</h2>
        <div className="flex gap-6">
          <a
            href={footer.socials.facebook}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/icons/facebook/facebook-24.svg"
              width={24}
              height={24}
              alt="facebook"
              className="w-6 h-6 bg-white rounded-full"
            />
          </a>
          <a
            href={footer.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/icons/instagram/instagram-24.svg"
              width={24}
              height={24}
              alt="instagram"
              className="w-6 h-6 bg-white rounded"
            />
          </a>
          <a
            href={footer.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/icons/linkedin/linkedin-24.svg"
              width={24}
              height={24}
              alt="linkedin"
              className="w-6 h-6 bg-white rounded"
            />
          </a>
          <a
            href={footer.socials.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/icons/whatsapp.svg"
              width={24}
              height={24}
              alt="whatsapp logo"
              className="w-6 h-6 bg-white rounded"
            />
          </a>
        </div>
      </div>
    </section>
  </footer>
);
