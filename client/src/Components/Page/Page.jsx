import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Grid, GridItem } from "@chakra-ui/react";

//import de componentes
import CardContainer from "../CardContainer/CardContainer";
import Pagination from "../Pagination/Pagination";
import NoResult from "../NoResult/NoResult";
import Filters from "../Filters/Filters";
import LargeWithNewsletter from "../Footer/Footer";

//import objeto de prueba

export default function Page({ projects }) {
  //logica paginado
  const [currentPage, setcurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(3);
  const final = currentPage * perPage;
  const first = final - perPage;
  const currentProjects = projects.slice(first, final);
  const page = (pagNum) => {
    setcurrentPage(pagNum);
  };

  //logica ordenamiento para pasarle al componente filter en que orden filtrar todo;
  const [order, setOrder] = useState("none");
  const ord = (order) => {
    setOrder(order);
  };

  return (
    <Box>
      <Grid
        templateAreas={`"header header"
                            "nav main"
                            "nav footer"`}
        gridTemplateRows={"50px 1fr 30px"}
        gridTemplateColumns={"150px 1fr"}
        h="200px"
        gap="1"
        color="blackAlpha.700"
      >
        <GridItem pl="2" area={"header"}>
          <Pagination
            projectsPerPage={perPage}
            projects={projects.length}
            page={page}
            currentPage={currentPage}
          />
        </GridItem>
        <GridItem pl="2" area={"nav"}>
          <Filters page={page} ord={ord} />
        </GridItem>
        <GridItem
          pl="2"
          area={"main"}
          justify-content="center"
          align-items="center"
          margin="10px"
        >
          <div>
            {projects.length ? (
              <CardContainer currentProjects={currentProjects} />
            ) : (
              <NoResult />
            )}
          </div>
        </GridItem>
        <GridItem pl="2" area={"footer"}>
          <LargeWithNewsletter />
        </GridItem>
      </Grid>
    </Box>
  );
}
