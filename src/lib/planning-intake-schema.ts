import { z } from "zod";

export const planningIntakeSchema = z.object({
  fullName: z.string().min(2, "Tu nombre debe tener al menos 2 caracteres.").trim(),
  email: z.email("Ingresa un correo valido.").trim(),
  mainGoal: z
    .string()
    .min(10, "Describe un objetivo con al menos 10 caracteres.")
    .max(120, "Manten el objetivo debajo de 120 caracteres.")
    .trim(),
  weeklyHours: z
    .string()
    .min(1, "Indica cuantas horas puedes dedicar por semana.")
    .refine((value: string) => /^\d+$/.test(value), "Usa solo numeros.")
    .refine((value: string) => {
      const hours = Number(value);
      return hours >= 1 && hours <= 40;
    }, "El rango recomendado es entre 1 y 40 horas por semana."),
  blockers: z
    .string()
    .min(12, "Comparte al menos un bloqueo concreto.")
    .max(300, "Resume tus bloqueos en menos de 300 caracteres.")
    .trim(),
  successDefinition: z
    .string()
    .min(12, "Define como se vera el exito para ti.")
    .max(240, "Manten la definicion de exito debajo de 240 caracteres.")
    .trim()
});

export type PlanningIntakeFormValues = z.infer<typeof planningIntakeSchema>;
