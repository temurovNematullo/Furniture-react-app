import { useForm } from "react-hook-form";
import { LoginFormInputs } from "../../types/Auth";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { fetchUsersData } from "../../reduxTK/slices/authSlice";

const LoginForm = () => {
  const dispatch = useAppDispatch();
  const { token } = useAppSelector((state) => state.userAuthData);
  console.log(token);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LoginFormInputs>();

  const onSubmit = async (data: LoginFormInputs) => {
    try {
      dispatch(fetchUsersData(data));
      reset();
      alert("Вы вошли в систему!");
    } catch (error) {
      console.error("Ошибка входа", error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="email"
        {...register("email", { required: "Email обязателен" })}
        placeholder="Email"
      />
      {errors.email && <span>{errors.email.message}</span>}

      <input
        {...register("password", { required: true })}
        type="password"
        placeholder="Пароль"
      />
      {errors.password && <span>Пароль обязателен</span>}

      <button type="submit">Войти</button>
    </form>
  );
};

export default LoginForm;
