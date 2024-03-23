import { ProjectCard } from "@/components/card/project-card";

export interface ProjectProps {
  cover_url: string;
  description: string | undefined;
  title: string;
  id: string;
  likes: number;
  comments: number;
  category: string;
}

export interface ProjectsProps extends React.HTMLAttributes<HTMLElement> {
  data: ProjectProps[];
}

export const Projects = ({ data }: ProjectsProps) => {
  return (
    <>
      <div className="columns-1 md:columns-2 lg:columns-3 space-y-4 mt-10">
        {data.map((project, index) => (
          <ProjectCard
            key={index}
            id={project.id}
            title={project.title}
            description={project.description}
            cover={project.cover_url}
            likes={project.likes}
            comments={project.comments}
            category={project.category}
          />
        ))}
      </div>
    </>
  );
};
