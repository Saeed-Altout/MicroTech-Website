"use client";
import { Filter } from "@/components/filter";
import { Projects } from "@/components/projects";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { getProjects } from "@/data";
import { onError } from "@/lib/error";
import axios from "axios";
import { useEffect, useState } from "react";

export const ProjectsClient = () => {
  const [projects, setProjects] = useState<any[]>([]);
  const [category, setCategory] = useState<string>("all");
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    let url =
      category && category !== "all"
        ? `${process.env.NEXT_PUBLIC_BASE_URL}/${process.env.NEXT_PUBLIC_PROJECTS}?category=${category}`
        : `${process.env.NEXT_PUBLIC_BASE_URL}/${process.env.NEXT_PUBLIC_PROJECTS}`;
    try {
      fetch(url, {
        method: "GET",
      })
        .then((res) => res.json())
        .then((data) => setProjects(data.data));
    } catch (error) {
      setProjects([]);
    }
    const isPending = setTimeout(() => {
      setIsMounted(true);
    }, 250);

    return () => clearTimeout(isPending);
  }, [category]);

  return (
    <div>
      <div className="flex flex-center justify-start flex-wrap mt-12 gap-2 md:gap-5">
        {["all", "frontend", "backend", "fullstack"]?.map((cat, key) => (
          <Button
            key={key}
            className="capitalize text-xs md:text-sm"
            size="sm"
            onClick={() => setCategory(cat)}
            variant={category === cat ? "default" : "outline"}
          >
            {cat}
          </Button>
        ))}
      </div>
      <div>
        {isMounted ? (
          <>
            {projects?.length > 0 ? (
              <Projects data={projects} />
            ) : (
              <div className="flex justify-center items-center py-20">
                <p>Not found</p>
              </div>
            )}
          </>
        ) : (
          <>
            <div className="flex justify-center items-center py-20">
              <Spinner size="lg" className="text-muted-foreground" />
            </div>
          </>
        )}
      </div>
    </div>
  );
};
