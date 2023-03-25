import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginUsersSchema } from "./LoginErrors";
import { Link } from 'react-router-dom'
import  SignUp  from "../../Components/GoogleLogIn/LogIn"
import { userLogIn } from "../../Redux/Slicers/LogInSlicer"; 
import { useDispatch, useSelector } from "react-redux";
//import { confgCookie } from "../../Redux/Slicers/LogInSlicer";
import { useEffect } from "react";
import Cookie from "js-cookie";
import { useNavigate } from "react-router-dom";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Button,
  Input,
  Container,
  VStack,
  Box,
  Flex,
  Spacer,
  Heading,
  Divider,
  Center,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import SignUp from "../../Components/GoogleLogIn/LogIn";

export default function LogIn() {
 
    const navigate = useNavigate();

    const LogInStatus = useSelector (state => state.login.status)

    console.log(LogInStatus)

    const dispatch = useDispatch();

    console.log(Cookie.get("value"));
    

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(loginUsersSchema)
    })

    const Submit = (data) => {
        dispatch(userLogIn(data));

    }

    useEffect(() => {
        LogInStatus && navigate('/home');
     }, [LogInStatus]);
    

    return (
        <Container mt= "100px">
            <Heading>Log in</Heading>
            <form onSubmit={handleSubmit(Submit)}>
                <VStack spacing="24px">
                    <FormControl isInvalid={errors.name ? true : false}>
                        <FormLabel>User name</FormLabel>
                        <Input type="text" placeholder="Enter the user name" {...register('name')} />
                        {!errors.name ? null : <FormErrorMessage>{errors.name?.message}</FormErrorMessage>}
                    </FormControl>

                    <FormControl isInvalid={errors.password ? true : false}>
                        <FormLabel>Password</FormLabel>
                        <Input type='text' placeholder="Enter your password" {...register('password')} />
                        {!errors.password ? null : <FormErrorMessage>{errors.password?.message}</FormErrorMessage>}
                    </FormControl>
                    <Flex w="100%">
                        <Link to={"/create-user"} style={{color:"blue"}}>Create an Account</Link> 
                        <Spacer></Spacer>
                        <Button type="submit" colorScheme="blue"> send </Button>
                        
                        {/* <SignUp/> */}
                    </Flex>

                </VStack>

            </form>
        </Container>
    )
}

//Solo el achivo index de Pages recibe este export
