import ProjectCard from "../ProjectCard/ProjectCard";
import { SimpleGrid, Box } from "@chakra-ui/react";

export default function CardContainer({ currentProjects }) {
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
            <Box key={project.id}>
              <ProjectCard project={project} key={project.id} />
            </Box>
          );
        })}
      </SimpleGrid>
    </div>
  );
}
