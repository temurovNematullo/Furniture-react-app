import { useForm, Controller } from "react-hook-form";
import { FormInputs } from "../../types/UserFormType";

const UserFormWithoutZod = () => {
  const ListNavik = ["typeScript", "C#", "Git"];
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormInputs>();

  const onSubmit = (data: FormInputs) => {
    const transformed = {
      ...data,
      startDate: new Date(data.startDate).toISOString(),
    };
    console.log(transformed);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="skills"
        control={control} // Связывает Controller с useForm()
        defaultValue={[]}
        rules={{
          validate: (val) => val.length > 0 || "Выберите хотя бы 1 навык",
        }}
        render={({ field }) => (
          <>
            <select
              multiple
              title="Выберите навыки"
              value={field.value}
              onChange={(e) =>
                field.onChange(
                  Array.from(e.target.selectedOptions, (o) => o.value)
                )
              }
            >
              {ListNavik.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
            {errors.skills && <p>{errors.skills.message}</p>}
          </>
        )}
      />
      <label htmlFor="bio">About you</label>
      <textarea
        id="bio"
        {...register("bio", {
          required: "Поле обязательно",
          maxLength: { value: 500, message: "Не больше 500 символов" },
        })}
      />
      {errors.bio && <p>{errors.bio.message}</p>}

      <label htmlFor="date">Корректная дата</label>
      <input
        type="date"
        {...register("startDate", { required: "Введите дату" })}
      />
      {errors.startDate && <p>errors.startDate.message</p>}
      <button type="submit">Submit</button>

      <label htmlFor="fileList">Загрузите файл</label>
      <input
        type="file"
        {...register("uploadCv", {
          required: "Файл обязателен",
          validate: {
            isPdf: (files) =>
              (files && files[0]?.type === "application/pdf") ||
              "Файл должен быть в формате PDF",
            maxSize: (files) =>
              (files && files[0].size <= 5_000_000) || "Максимум 5 МБ",
          },
        })}
      />
      {errors.uploadCv && <p>{errors.uploadCv.message}</p>}
    </form>
  );
};

export default UserFormWithoutZod;
