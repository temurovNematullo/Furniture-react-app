import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { userFormSchema, UserFormType } from "../../types/userFormSchema";

const UserForm = () => {
  const skillsOptions = ["React", "TypeScript", "Node.js", "Figma", "Docker"];

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<UserFormType>({
    resolver: zodResolver(userFormSchema),
  });

  const onSubmit = (data: UserFormType) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Полное имя</label>
      <input type="text" {...register("fullName")} />
      {errors.fullName && <p>{errors.fullName.message}</p>}

      <label>Полное Email</label>
      <input type="email" {...register("email")} />
      {errors.email && <p>{errors.email.message}</p>}

      {/* <label>Возраст</label>
      <input type="number" {...register("age")} />
      {errors.age && <p>{errors.age.message}</p>} */}

      {/* <fieldset>
        <legend>Пол</legend>
        <label>
          <input type="radio" value="male" {...register("gender")} />
          Мужской
        </label>
        <label>
          <input type="radio" value="female" {...register("gender")} />
          Женский
        </label>
        {errors.gender && <p>{errors.gender.message}</p>}
      </fieldset>

      <label>
        <input type="checkbox" {...register("isAdmin")} />
        Администратор?
      </label>
      {errors.isAdmin && <p>{errors.isAdmin.message}</p>}

      <label>Роль</label>
      <select {...register("role")}>
        <option value="">Выберите роль</option>
        <option value="manager">Менеджер</option>
        <option value="developer">Разработчик</option>
        <option value="designer">Дизайнер</option>
      </select>
      {errors.role && <p>{errors.role.message}</p>}

      <Controller
        name="skills"
        control={control}
        render={({ field }) => (
          <>
            <label>Навыки</label>
            <select multiple {...field}>
              {skillsOptions.map((skill) => (
                <option key={skill} value={skill}>
                  {skill}
                </option>
              ))}
            </select>
            {errors.skills && <p>{errors.skills.message}</p>}
          </>
        )}
      /> */}

      <button type="submit">Сохранить</button>
    </form>
  );
};

export default UserForm;
