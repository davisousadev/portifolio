import type { ContactFormState, ContactFormValues } from '../../types/portfolio';

interface ContactFormProps {
  state: ContactFormState;
  onChange: (field: keyof ContactFormValues, value: string) => void;
  onSubmit: () => void;
  onResetStatus: () => void;
}

function ContactForm({ state, onChange, onSubmit, onResetStatus }: ContactFormProps) {
  const { values, errors } = state;
  const isSubmitting = state.status === 'submitting';
  const feedback = state.status === 'success' || state.status === 'error' ? state.message : state.status === 'invalid' ? 'Revise os campos destacados.' : '';

  return (
    <form className="grid gap-5" onSubmit={(event) => { event.preventDefault(); onSubmit(); }} noValidate>
      <div>
        <label className="text-sm font-semibold tracking-wide text-ink" htmlFor="contact-name">Nome</label>
        <input className="mt-2 block min-h-11 w-full rounded-md border border-border bg-surface px-3 py-2 text-ink" id="contact-name" name="name" value={values.name} onChange={(event) => onChange('name', event.target.value)} aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? 'contact-name-error' : undefined} />
        {errors.name ? <p className="mt-1 text-sm text-danger" id="contact-name-error">{errors.name}</p> : null}
      </div>
      <div>
        <label className="text-sm font-semibold tracking-wide text-ink" htmlFor="contact-email">E-mail</label>
        <input className="mt-2 block min-h-11 w-full rounded-md border border-border bg-surface px-3 py-2 text-ink" id="contact-email" name="email" type="email" value={values.email} onChange={(event) => onChange('email', event.target.value)} aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? 'contact-email-error' : undefined} />
        {errors.email ? <p className="mt-1 text-sm text-danger" id="contact-email-error">{errors.email}</p> : null}
      </div>
      <div>
        <label className="text-sm font-semibold tracking-wide text-ink" htmlFor="contact-message">Mensagem</label>
        <textarea className="mt-2 block min-h-36 w-full rounded-md border border-border bg-surface px-3 py-2 text-ink" id="contact-message" name="message" value={values.message} onChange={(event) => onChange('message', event.target.value)} aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? 'contact-message-error' : undefined} />
        {errors.message ? <p className="mt-1 text-sm text-danger" id="contact-message-error">{errors.message}</p> : null}
      </div>
      <div className="flex flex-wrap items-center gap-4">
        <button className="min-h-11 rounded-md bg-accent px-5 py-3 font-semibold text-surface transition-colors hover:bg-accent-strong disabled:cursor-wait disabled:opacity-70" type="submit" disabled={isSubmitting}>{isSubmitting ? 'Abrindo...' : 'Enviar mensagem'}</button>
        {state.status === 'success' || state.status === 'error' ? <button className="text-link font-semibold text-accent-strong" type="button" onClick={onResetStatus}>Editar mensagem</button> : null}
      </div>
      {errors.form ? <p className="text-sm text-danger">{errors.form}</p> : null}
      <p aria-live="polite" className="min-h-6 text-sm text-muted">{feedback}</p>
    </form>
  );
}

export default ContactForm;