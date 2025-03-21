import {z} from "zod";



export const validationSchema = z.object({
    name: z
      .string()
      .nonempty("名前は必須です")
      .min(4, "名前は4文字以上で入力してください").optional(),
    email: z
      .string()
      .nonempty("メールアドレスは必須です")
      .email("正しいメールアドレスを入力してください"),
    password: z
      .string()
      .nonempty("パスワードは必須です")
      .min(5, "パスワードは6文字以上で入力してください"),
  });
  export type ValidationSchema = z.infer<typeof validationSchema>;