import { useForm } from "react-hook-form";
import * as yup from 'yup';

export const Form = () => {
  const { register, handleSubmit } = useForm();

  const schema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    password: yup.string().password().required(),
    confirmPassword: yup.string().confirmPassword().required()
  })

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="first name" {...register("firstName")}/>
      <input type="text" placeholder="last name" {...register("lastName")}/>
      <input type="text" placeholder="password" {...register("password")}/>
      <input type="text" placeholder="confirm password" {...register("confirmPassword")}/>
      <input type="submit" />
    </form>
  )
}
