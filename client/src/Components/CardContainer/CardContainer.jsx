import ProjectCard from "../ProjectCard/ProjectCard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { SimpleGrid, Box } from "@chakra-ui/react";

export default function CardContainer({ currentProjects }) {
  console.log("hola");
  console.log(currentProjects);
  return (
    <div
      display="flex"
      justify-content="center"
      width="100%"
      align-items="center"
    >
      <SimpleGrid columns={[2, null, 3]} spacing="40px">
        {currentProjects.map((project) => {
          return (
            <Box>
              <ProjectCard project={project} key={project.id} />
            </Box>
          );
        })}
      </SimpleGrid>
    </div>
  );
}
