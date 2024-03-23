import { getProjectById } from "@/data";

import { Header } from "./components/header";
import { Body } from "./components/body";
import { CommentModal } from "@/components/modals/comment-modal";

export default async function Project({ params }: { params: { id: any } }) {
  const project = await getProjectById(params.id);

  if (!project) {
    return (
      <div className="flex justify-center items-center mt-10 h-[150px]">
        <p className="text-muted-foreground">Not Found</p>
      </div>
    );
  }

  return (
    <>
      <CommentModal id={project.id} />
      <Header
        id={project.id}
        title={project.title}
        description={project.description}
        technologies={project.technologies}
        functionality={project.functionality}
        tools={project.tools}
        likes={project.likes}
        comments={project.comments}
        hrefLive={"/"}
      />

      <Body
        about={project.about}
        images={project.images}
        advantages={project.advantages}
        comments={project.comments}
        links={project.links}
        id={project.id}
      />
    </>
  );
}
