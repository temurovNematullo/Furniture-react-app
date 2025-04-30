import { number, z } from "zod";

export const userFormSchema = z.object({
  fullName: z.string().min(2, "Имя должно быть не меньше двух символов"),
  email: z.string().email("Некорректный email"),
  // age: z
  //   .string()
  //   .transform((val) => Number(val))
  //   .pipe(z.number().min(18, "Вы должны быть совершенно летним 18")),
});

export type UserFormType = z.infer<typeof userFormSchema>;
