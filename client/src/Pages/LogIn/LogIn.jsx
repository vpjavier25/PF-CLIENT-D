import * as yup from "yup";
import {useForm} from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginUsersSchema } from "./LoginErrors";
import { FormControl, FormLabel, FormErrorMessage, FormHelperText, Button, Input, Container, VStack, Textarea, Center } from "@chakra-ui/react";


export default function LogIn (){
    
    const {register, handleSubmit, formState:{errors}} = useForm({
        resolver: yupResolver(loginUsersSchema)
    })

    const Submit = (data) =>{
        console.log(data)
    } 

    return(
        <Container>
      <form onSubmit={handleSubmit(Submit)}>
        <VStack spacing="24px">
          <FormControl isInvalid={errors.userName ? true : false}>
            <FormLabel>User name</FormLabel>
            <Input type="text" placeholder="Enter the user name" {...register('userName')} />
            {!errors.userName ? null :<FormErrorMessage>{errors.userName?.message}</FormErrorMessage>}
          </FormControl>

          <FormControl isInvalid={errors.password? true : false}>
            <FormLabel>Password</FormLabel>
            <Input type='text' placeholder="Enter your password" {...register('password')} />
            {!errors.password ? null :<FormErrorMessage>{errors.password?.message}</FormErrorMessage>}
          </FormControl>

          <Button type="submit" colorScheme="blue"> send </Button>
        </VStack>

      </form>
    </Container>
    )
}

//Solo el achivo index de Pages recibe este export 