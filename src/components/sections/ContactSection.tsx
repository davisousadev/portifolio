import type { ContactDetails, ContactFormState, ContactFormValues, SocialLink } from '../../types/portfolio';
import Section from '../layout/Section';
import ContactForm from '../ui/ContactForm';
import SocialLinks from '../ui/SocialLinks';

interface ContactSectionProps {
  contact: ContactDetails;
  socialLinks: SocialLink[];
  formState: ContactFormState;
  onChange: (field: keyof ContactFormValues, value: string) => void;
  onSubmit: () => void;
  onResetStatus: () => void;
}

function ContactSection({ contact, socialLinks, formState, onChange, onSubmit, onResetStatus }: ContactSectionProps) {
  return (
    <Section id="contato" title="Vamos conversar">
      <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="text-lg leading-8 text-muted">Tem um projeto em mente ou quer trocar uma ideia?</p>
          <a className="text-link mt-5 inline-block font-semibold text-accent-strong" href={`mailto:${contact.email}`}>{contact.email}</a>
          {contact.location ? <p className="mt-3 text-muted">{contact.location}</p> : null}
          <div className="mt-8"><SocialLinks links={socialLinks} /></div>
        </div>
        <ContactForm state={formState} onChange={onChange} onSubmit={onSubmit} onResetStatus={onResetStatus} />
      </div>
    </Section>
  );
}

export default ContactSection;