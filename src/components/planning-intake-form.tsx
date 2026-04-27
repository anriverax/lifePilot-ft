"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Card, Input, TextArea } from "@heroui/react";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { planningIntakeSchema, type PlanningIntakeFormValues } from "@/lib/planning-intake-schema";

type FieldErrorMessageProps = {
  message?: string;
};

function FieldErrorMessage({ message }: FieldErrorMessageProps): React.ReactElement | null {
  if (!message) {
    return null;
  }

  return <p className="text-sm text-warning-foreground">{message}</p>;
}

export function PlanningIntakeForm(): React.ReactElement {
  const [submittedData, setSubmittedData] = useState<PlanningIntakeFormValues | null>(null);
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isValid }
  } = useForm<PlanningIntakeFormValues>({
    resolver: zodResolver(planningIntakeSchema),
    mode: "onChange",
    defaultValues: {
      fullName: "",
      email: "",
      mainGoal: "",
      weeklyHours: "",
      blockers: "",
      successDefinition: ""
    }
  });

  const onSubmit = (values: PlanningIntakeFormValues): void => {
    setSubmittedData(values);
    reset();
  };

  return (
    <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
      <Card className="border border-[color-mix(in_srgb,var(--foreground)_10%,transparent)] bg-overlay shadow-[0_24px_80px_rgba(120,82,63,0.12)]">
        <Card.Content className="px-6 py-6">
          <form noValidate className="grid gap-5" onSubmit={handleSubmit(onSubmit)}>
            <div className="grid gap-5 md:grid-cols-2">
              <div className="grid gap-2">
                <label className="text-sm font-medium text-(--foreground)" htmlFor="fullName">
                  Nombre completo
                </label>
                <Controller
                  control={control}
                  name="fullName"
                  render={({ field }): React.ReactElement => (
                    <Input
                      {...field}
                      id="fullName"
                      autoComplete="name"
                      placeholder="Ana Rivera"
                      className="bg-(--field-background)"
                    />
                  )}
                />
                <FieldErrorMessage message={errors.fullName?.message} />
              </div>

              <div className="grid gap-2">
                <label className="text-sm font-medium text-(--foreground)" htmlFor="email">
                  Correo
                </label>
                <Controller
                  control={control}
                  name="email"
                  render={({ field }): React.ReactElement => (
                    <Input
                      {...field}
                      id="email"
                      type="email"
                      autoComplete="email"
                      placeholder="ana@lifepilot.dev"
                      className="bg-(--field-background)"
                    />
                  )}
                />
                <FieldErrorMessage message={errors.email?.message} />
              </div>
            </div>

            <div className="grid gap-2">
              <label className="text-sm font-medium text-(--foreground)" htmlFor="mainGoal">
                Objetivo principal de los proximos 30 dias
              </label>
              <Controller
                control={control}
                name="mainGoal"
                render={({ field }): React.ReactElement => (
                  <Input
                    {...field}
                    id="mainGoal"
                    placeholder="Lanzar una rutina semanal y sostenerla 4 semanas"
                    className="bg-(--field-background)"
                  />
                )}
              />
              <FieldErrorMessage message={errors.mainGoal?.message} />
            </div>

            <div className="grid gap-2 md:max-w-xs">
              <label className="text-sm font-medium text-(--foreground)" htmlFor="weeklyHours">
                Horas disponibles por semana
              </label>
              <Controller
                control={control}
                name="weeklyHours"
                render={({ field }): React.ReactElement => (
                  <Input
                    {...field}
                    id="weeklyHours"
                    inputMode="numeric"
                    placeholder="6"
                    className="bg-(--field-background)"
                  />
                )}
              />
              <FieldErrorMessage message={errors.weeklyHours?.message} />
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <div className="grid gap-2">
                <label className="text-sm font-medium text-(--foreground)" htmlFor="blockers">
                  Bloqueos actuales
                </label>
                <Controller
                  control={control}
                  name="blockers"
                  render={({ field }): React.ReactElement => (
                    <TextArea
                      {...field}
                      id="blockers"
                      rows={5}
                      placeholder="Me cuesta mantener foco despues del trabajo y no tengo un plan claro."
                      className="bg-(--field-background)"
                    />
                  )}
                />
                <FieldErrorMessage message={errors.blockers?.message} />
              </div>

              <div className="grid gap-2">
                <label className="text-sm font-medium text-(--foreground)" htmlFor="successDefinition">
                  Como se vera el exito
                </label>
                <Controller
                  control={control}
                  name="successDefinition"
                  render={({ field }): React.ReactElement => (
                    <TextArea
                      {...field}
                      id="successDefinition"
                      rows={5}
                      placeholder="Tendre una rutina simple, medible y repetible al menos 4 semanas."
                      className="bg-(--field-background)"
                    />
                  )}
                />
                <FieldErrorMessage message={errors.successDefinition?.message} />
              </div>
            </div>

            <Card.Footer className="mt-2 flex flex-col items-start justify-between gap-4 border-t border-[color-mix(in_srgb,var(--foreground)_10%,transparent)] px-0 pt-6 md:flex-row md:items-center">
              <div className="space-y-2">
                <p className="max-w-xl text-sm leading-6 text-[color-mix(in_srgb,var(--foreground)_78%,white)]">
                  La validacion ocurre en tiempo real con Zod. Si este flujo luego crece, puedes
                  reutilizar el mismo esquema en una Server Action.
                </p>
                <p className="text-xs font-medium uppercase tracking-[0.22em] text-[color-mix(in_srgb,var(--foreground)_62%,white)]">
                  Estado: {isValid ? "listo para enviar" : "faltan campos por validar"}
                </p>
              </div>
              <Button
                type="submit"
                className="min-w-44 bg-(--accent) px-6 py-3 text-accent-foreground hover:opacity-90"
                isDisabled={isSubmitting}
              >
                {isSubmitting ? "Validando..." : "Guardar briefing"}
              </Button>
            </Card.Footer>
          </form>
        </Card.Content>
      </Card>

      <div className="grid gap-6">
        <Card className="border border-[color-mix(in_srgb,var(--foreground)_10%,transparent)] bg-surface shadow-[0_20px_50px_rgba(138,110,99,0.12)]">
          <Card.Header className="flex flex-col gap-2 px-6 py-6">
            <Card.Title className="text-xl font-semibold text-surface-foreground">
              Por que esta combinacion funciona bien
            </Card.Title>
            <Card.Description className="text-sm leading-6 text-[color-mix(in_srgb,var(--surface-foreground)_80%,white)]">
              El estado del formulario queda aislado, el tipado sale del esquema y HeroUI se encarga del
              acabado visual.
            </Card.Description>
          </Card.Header>
          <Card.Content className="grid gap-3 px-6 pb-6 text-sm leading-6 text-surface-foreground">
            <div className="rounded-2xl bg-overlay px-4 py-3">
              Zod define reglas y mensajes en un solo lugar.
            </div>
            <div className="rounded-2xl bg-overlay px-4 py-3">
              React Hook Form evita cableado repetitivo y re-renders innecesarios.
            </div>
            <div className="rounded-2xl bg-overlay px-4 py-3">
              HeroUI deja el formulario listo para evolucionar a un flujo productivo.
            </div>
          </Card.Content>
        </Card>

        <Card className="border border-[color-mix(in_srgb,var(--foreground)_10%,transparent)] bg-(--secondary-background)">
          <Card.Header className="flex flex-col gap-2 px-6 py-6">
            <Card.Title className="text-xl font-semibold text-(--foreground)">
              Resultado validado
            </Card.Title>
            <Card.Description className="text-sm leading-6 text-[color-mix(in_srgb,var(--foreground)_78%,white)]">
              Cuando envias el formulario, aqui ves la estructura ya validada por Zod.
            </Card.Description>
          </Card.Header>
          <Card.Content className="px-6 pb-6">
            <pre className="overflow-x-auto rounded-3xl bg-overlay p-4 text-sm leading-6 text-(--foreground)">
              {`${submittedData ? JSON.stringify(submittedData, null, 2) : '{\n  "status": "Aun no hay envio valido"\n}'}`}
            </pre>
          </Card.Content>
        </Card>
      </div>
    </section>
  );
}
