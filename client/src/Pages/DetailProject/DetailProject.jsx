import { useParams, Link } from "react-router-dom";
import { getProjectById, provGetId, cleanId } from "../../Redux/Slicers/projectSlicer";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Text, Button, Image, Center, VStack, Heading, Card } from '@chakra-ui/react'

export default function DetailProject() {
  const dispatch = useDispatch();
  const { id } = useParams();
  let projectById = useSelector((state) => state.project.projectId);

  useEffect(() => {
    dispatch(provGetId(id));
    return ()=>{
      dispatch(cleanId());
    }
  }, []);

  return (
    <Box maxH='1.5'>
      {Object.keys(projectById).length > 0 ? (
        <Box textAlign='justify'>
          <VStack spacing={3}>
            <Heading as='b' fontSize='4rem' margin='1rem 3rem'>{projectById.name.toUpperCase()}</Heading>
            <Center>
              <Image boxSize='700px' objectFit='cover' borderRadius='full' align='center' src={projectById.images} alt={projectById.name} />
            </Center>
            <Card bg='#F6F8FA' variant='outline' borderColor='#D8DEE4' maxW='70rem'>
              <Text fontSize='20px' padding='15px' >{projectById.description}</Text>
            </Card>
            <Card bg='#F6F8FA' variant='outline' borderColor='#D8DEE4' maxW='20rem' padding='0.5rem'>
              <Text>{projectById.location}</Text>
            </Card>
          </VStack>
        </Box>
      ) : (
        <Text>Loading..</Text>
      )}
      <Box>
        <Link to='/projects'>
            <Button margin='1rem 3rem' _hover={{background:'#C9EEFF'}}>Back</Button>
        </Link>
      </Box>
    </Box>
  );
}
