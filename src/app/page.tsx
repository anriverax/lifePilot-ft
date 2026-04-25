import { PlanningIntakeForm } from "@/components/planning-intake-form";

export default function Home(): React.ReactElement {
  return (
    <main className="relative flex-1 overflow-hidden px-6 py-10 sm:px-10 lg:px-12">
      <div className="absolute inset-x-0 top-0 -z-10 h-56 bg-[radial-gradient(circle_at_top_left,rgba(217,140,106,0.24),transparent_52%),radial-gradient(circle_at_top_right,rgba(201,216,197,0.4),transparent_46%)]" />

      <div className="mx-auto flex w-full max-w-7xl flex-col gap-10">
        <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div className="space-y-5">
            <p className="w-fit rounded-full bg-(--notification) px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-warning-foreground">
              HeroUI + React Hook Form + Zod
            </p>
            <div className="space-y-4">
              <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-(--foreground) sm:text-5xl lg:text-6xl">
                Un formulario realista para iniciar el plan de trabajo de un usuario.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-[color-mix(in_srgb,var(--foreground)_82%,white)]">
                La pantalla ya no es el starter de Next. Ahora tienes un ejemplo listo para extender a
                onboarding, discovery o captura de brief con validacion tipada y una interfaz alineada
                con tu paleta.
              </p>
            </div>
          </div>

          <div className="grid gap-3 rounded-[2rem] border border-[color-mix(in_srgb,var(--foreground)_10%,transparent)] bg-overlay p-5 text-sm text-(--foreground) shadow-[0_18px_40px_rgba(138,110,99,0.08)]">
            <div className="flex items-center justify-between rounded-2xl bg-surface px-4 py-3">
              <span>Estado del formulario</span>
              <strong>Cliente</strong>
            </div>
            <div className="flex items-center justify-between rounded-2xl bg-(--secondary-background) px-4 py-3">
              <span>Validacion</span>
              <strong>Zod</strong>
            </div>
            <div className="flex items-center justify-between rounded-2xl bg-(--secondary-background) px-4 py-3">
              <span>UI</span>
              <strong>HeroUI</strong>
            </div>
          </div>
        </section>

        <PlanningIntakeForm />
      </div>
    </main>
  );
}
