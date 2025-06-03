"Use client";

import Link from "next/link";
import { Card } from "../ui/card";
import Image from "next/image";

export const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <Card>
      <Link href={`/proyectos/${project.id}`}>
        <Image
          src={project.image}
          alt={project.title}
          width={400}
          height={200}
          className="w-full h-48 object-cover rounded-t-lg"
        />
        <div className="p-4">
          <h2 className="text-xl font-semibold">{project.title}</h2>
          <h3 className="text-gray-600 mt-2">{project.description}</h3>
        </div>
      </Link>
    </Card>
  );
};
