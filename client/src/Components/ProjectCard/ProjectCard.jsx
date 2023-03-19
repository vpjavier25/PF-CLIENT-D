import { Link } from "react-router-dom";
import { Card, CardHeader, CardBody, CardFooter, Flex, Avatar, Box, Heading, Text,
  Image, Button,} from '@chakra-ui/react'

export default function ProjectCard(props) {
  const { name, abstrac, images, location, id } = props.project;

  return (
    <Card maxW='md' maxWidth='300px' maxHeight='450px' minWidth='300px' minHeight='450px' >
      <Link to={`/projects/${id}` } key={id} >      
        <CardHeader maxHeight='80px'>
          <Flex spacing='4'>
            <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
              <Avatar name= {name} src='https://bit.ly/sage-adebayo' />
              <Box>
                <Heading size='sm'>{name}</Heading>
                <Text>{location}</Text>
              </Box>
            </Flex>
          </Flex>
        </CardHeader>
        <CardBody maxHeight='80px'>
          <Text >
            {abstrac}
          </Text>
        </CardBody>
        <Image
          objectFit='cover'
          src={images}
          alt={name}
          margin = '5px'
          maxHeight='200px'
          minHeight='200px'
        />
      </Link>
      <CardFooter
        justify='space-between'
        flexWrap='wrap'
        maxHeight='50px'
        sx={{
          '& > button': {
            minW: '50px',
          },
        }}
        margin = '5px'
      >
        <Button flex='1' variant='ghost' >
          Donar
        </Button>
      </CardFooter>
    </Card>
  );
}
