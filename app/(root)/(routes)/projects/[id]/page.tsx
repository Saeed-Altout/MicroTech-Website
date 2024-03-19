import axios from "axios";
import { BsCheckCircleFill } from "react-icons/bs";
import { Heading } from "./components/heading";
import { Gallery } from "./components/gallery";
import { Comments } from "./components/comments";

export default async function Project({ params }: { params: { id: any } }) {
  const res = await axios.get(
    `http://127.0.0.1:8000/user/get_home_projects?id=${params.id}`
  );
  const project = await res.data.data;
  console.log(project);

  if (!project) {
    return (
      <div className="flex justify-center items-center mt-10 h-[150px]">
        <p className="text-muted-foreground">Not Found</p>
      </div>
    );
  }

  return (
    <div>
      <Heading
        title={project.title}
        functionality={project.functionality}
        description={project.description}
        technologies={project.technologies}
        tools={project.tools}
      />

      <div className="w-full container mx-auto py-20 space-y-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="space-y-2">
            <h3 className="text-3xl">About project</h3>
            <p>{project.about}</p>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-3xl">Features</h3>
            {project.advantages.map((item: any) => (
              <div key={item} className="flex items-center justify-start">
                <BsCheckCircleFill className="h-4 w-4 mr-2 text-green-500" />
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
        <h3 className="text-3xl">Gallery</h3>
        <div className="flex justify-center items-center">
          <Gallery images={project?.images} />
        </div>
      </div>

      <div className="py-20 container mx-auto">
        <Comments />
      </div>
    </div>
  );
}
