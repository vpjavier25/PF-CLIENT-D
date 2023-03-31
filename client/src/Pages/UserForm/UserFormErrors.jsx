import * as yup from "yup";

export const usersFormSchema = yup.object({
    user_name: yup.string().matches(/^[^0-9()]+$/, { message: "not numbers allowed", excludeEmptyString: true }).required("enter the user name"),
    user_email: yup.string().email().required(),
    user_password: yup.string().required("enter your password")
})