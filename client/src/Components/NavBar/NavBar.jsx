import { Link, useLocation } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import { Box, Flex, Grid, GridItem, Spacer } from "@chakra-ui/react";
import ToggleColorMode from "../../modeColor/toggleColorMode";
import image from "../../Utils/image/2.jpg";
import style from "./NavBar.module.css";

export default function NavBar() {
  const location = useLocation();

  return (
    <div className={style.navBar}>
      <Grid templateColumns="repeat(12, 1fr)" gap={2}>
        <GridItem as="aside" colSpan={3} p="30px">
          <img src={image} width="70" height="70" alt=""/>
        </GridItem>

        <GridItem colSpan={9} p="20px">
          <GridItem mt="10px" mb="50px">
            <Flex alignItems="center">
              <Spacer></Spacer>
              <SearchBar />

              <Box px="20px">
                <span>Idioms</span>
              </Box>

              <ToggleColorMode />
            </Flex>
          </GridItem>

          <GridItem>
            <Flex justify="space-around">
              {location.pathname !== "/home" && (
                <Link to={"/home"}><span>HOME</span> </Link>
              )}
              {location.pathname !== "/login" && (
                <Link to={"/login"}>{" "}<span>Login</span>{" "}</Link>
              )}
              {location.pathname !== "/projects" && (
                <Link to={"/projects"}>{" "}<span>Projects</span>{" "}</Link>
              )}
              {location.pathname !== "/create" && (
                <Link to={"/create"}>{" "}<span>Create Project</span>{" "}</Link>
              )}
              {location.pathname !== "/home/aboutUs" && (
                <Link to={"/home/aboutUs"}>{" "}<span>About Us</span>{" "}</Link>
              )}                       
            </Flex>
          </GridItem>
        </GridItem>
      </Grid>
    </div>
  );
}
