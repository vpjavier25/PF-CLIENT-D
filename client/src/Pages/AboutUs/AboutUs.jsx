import { Card, CardHeader, CardBody, CardFooter, Box, Image, Center, Heading, Container, Text, Flex, VStack, Link } from '@chakra-ui/react';
import {ArrowForwardIcon} from "@chakra-ui/icons";
import { Link as LinkReact} from 'react-router-dom';
import initImage from "../../Utils/pexels-quang-nguyen-vinh-2163950.jpg";
import fowardImage from "../../Utils/pexels-sathyaprabha-rakkimuthu-2315614.jpg";

export default function AboutUs() {
    return (
        <>
            <Box width="100%">
                <Image objectFit="fit" w="100%" height="500px" src={initImage}></Image>
            </Box>

            <Container maxW="70%" mb="30px">
                <Heading my="30px" color="blue.300">We connect people for a better future</Heading>
                <Text textAlign="justify">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce et venenatis neque. Integer sit amet varius velit. Aliquam maximus congue condimentum. Pellentesque non neque leo. Morbi et sapien laoreet, posuere arcu eu, posuere metus. Etiam neque leo, placerat ut risus malesuada, consectetur feugiat nisi. Vivamus a ipsum quis libero mattis facilisis. Nullam tempor hendrerit porttitor. Duis efficitur elit quis quam suscipit scelerisque. Integer in turpis vulputate, fringilla nisi non, laoreet ex. Quisque varius dui tortor, in aliquam dui varius eu. Aliquam mattis faucibus est, et vulputate libero dapibus et. Aenean lacinia facilisis magna a fermentum. Donec sollicitudin enim nibh, eget commodo augue facilisis in. Nullam ut mauris eu metus luctus volutpat. Fusce purus elit, convallis non molestie nec, pellentesque ut arcu.
                </Text>
            </Container>

            <Flex w="100%" justify="space-around" mt="100px">

                <Box w="35%">
                    <Image objectFit="none" w="100%" src={fowardImage} borderRadius="10%"></Image>
                </Box>

                <Box w="35%">
                    <Heading as="h4" alignContent="left" color="blue.300">Who we are?</Heading>
                    <Text w="100%" textAlign="justify">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras enim ante, fermentum ut neque ac, dignissim blandit ex. Etiam quis bibendum nunc. Quisque nec urna pharetra, varius nulla vel, lacinia ipsum. Vestibulum mi urna, vestibulum in massa at, consequat aliquet est. Phasellus elit mauris, consectetur in dui non, accumsan porta tellus. Ut commodo euismod elit sit amet dapibus. Aenean libero orci, semper sed bibendum a, vulputate in quam. Etiam in auctor sapien. Suspendisse ultrices vel magna in malesuada.
                    </Text>
                </Box>


                <Box w="20%">
                <Heading as="h4" alignContent="left" color="blue.300">Let know us</Heading>

                    <VStack spacing="30px" maxW="100%" alignContent={"left"}>
                        <Box w="100%">
                            <Link as={LinkReact} to="/home" color={"blue.700"}>To home<ArrowForwardIcon mx="10px"/></Link>  
                        </Box>

                        <Box w="100%">
                            <Link as={LinkReact} to="/projects" color={"blue.700"}>To projects<ArrowForwardIcon mx="10px"/></Link>  
                        </Box>

                        <Box w="100%" color={"blue.600"}>
                            <Link as={LinkReact} to="/login" color={"blue.700"}>To Log in<ArrowForwardIcon mx="10px"/></Link>  
                        </Box>

                        <Box w="100%">
                            <Link as={LinkReact} to="/create" color={"blue.700"}>to Create yur own project<ArrowForwardIcon mx="10px"/></Link>  
                        </Box>
                      
                    </VStack>

                </Box>


            </Flex>

        </>



    )
}

//Solo el achivo index de Pages recibe este export 