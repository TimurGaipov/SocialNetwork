import React from "react";
import { AppButton } from "../../components/UI/AppButton/AppButton";
import { AppInput } from "../../components/UI/AppInput/AppInput";
import { Heading } from "../../components/UI/Heading/Heading";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { RegestrationPageWrapper } from "./RegistrationPageWrapper";
import { useRegisterUserMutation } from "../../store/api/loginApi";

interface LoginPageFrom {
  userName: string;
  userPhone?: string;
  userPassword?: string;
  userCity: string;
  userEmail?: string;
}

const uzbekPhoneNumberRegex = /^(\+998)?(9\d{8}|[12]\d{11})$/;
const emailRegex = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;

const registrationFormSchema = yup.object({
  userPhone: yup
    .string()
    .matches(uzbekPhoneNumberRegex, "Неверный формат номера телефона"),
  userPassword: yup
    .string()
    .min(8, "Пароль должен состовлять 8 символов и более"),
  userName: yup.string().required('Это обязательное поле'),
  userCity: yup.string().required('Это обеязательное поле'),
  userEmail: yup.string().matches(emailRegex, 'Неверный формат email')
});

export const RegistrationPage = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginPageFrom>({
    defaultValues: {
      userPhone: "",
      userPassword: "",
      userName: "",
      userCity: "",
      userEmail: "",
    },
    resolver: yupResolver(registrationFormSchema),
  });

  const [registerUser] = useRegisterUserMutation()

  const onRegistrationSubmit = (data: LoginPageFrom) => {
    console.log("data", data);
  };

  return (
    <RegestrationPageWrapper>
      <Heading headingText="Регистрация" />
      <form onSubmit={handleSubmit(onRegistrationSubmit)}>
        <Controller
          name="userName"
          control={control}
          render={({ field }) => (
            <AppInput
              type="text"
              placeholder="Имя и Фамилия"
              errorText={errors.userName?.message}
              {...field}
            />
          )}
        />
        <Controller
          name="userPhone"
          control={control}
          render={({ field }) => (
            <AppInput
              type="tel"
              placeholder="Номер телефона"
              errorText={errors.userPhone?.message}
              {...field}
            />
          )}
        />
        <Controller
          name="userEmail"
          control={control}
          render={({ field }) => (
            <AppInput
              type="text"
              placeholder="Email"
              errorText={errors.userEmail?.message}
              {...field}
            />
          )}
        />
        <Controller
          name="userCity"
          control={control}
          render={({ field }) => (
            <AppInput
              type="text"
              placeholder="Город"
              errorText={errors.userCity?.message}
              {...field}
            />
          )}
        />
        <Controller
          name="userPassword"
          control={control}
          render={({ field }) => (
            <AppInput
              type="password"
              placeholder="Придумайте Пароль"
              errorText={errors.userPassword?.message}
              {...field}
            />
          )}
        />
        <AppButton type="submit" buttonLabel="Зарегистрироваться" isPrimary />
      </form>
    </RegestrationPageWrapper>
  );
};
