import type { Profile, SocialLink } from '../../types/portfolio';
import ButtonLink from '../ui/ButtonLink';
import SocialLinks from '../ui/SocialLinks';

interface HeroSectionProps {
  profile: Profile;
  socialLinks: SocialLink[];
}

function HeroSection({ profile, socialLinks }: HeroSectionProps) {
  const initials = profile.name
    .split(' ')
    .slice(0, 2)
    .map((namePart) => namePart[0])
    .join('');

  return (
    <section id="inicio" className="border-b border-border py-16 md:py-24" aria-labelledby="hero-title">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-[1fr_auto] md:items-center md:px-8">
        <div className="max-w-3xl">
          <p className="mb-4 font-semibold uppercase tracking-wide text-accent-strong">Portfólio pessoal</p>
          <h1 id="hero-title" className="text-4xl font-bold tracking-tight text-ink md:text-6xl">{profile.name}</h1>
          <p className="mt-4 text-xl font-semibold text-muted md:text-2xl">{profile.headline}</p>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">{profile.summary}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <ButtonLink href="#contato">Vamos conversar</ButtonLink>
            <ButtonLink href="#projetos" variant="secondary">Ver projetos</ButtonLink>
          </div>
          <div className="mt-8"><SocialLinks links={socialLinks} /></div>
        </div>
        <div
          className="flex h-40 w-40 items-center justify-center overflow-hidden rounded-full border-4 border-accent bg-surface text-4xl font-bold text-accent-strong md:h-56 md:w-56"
          {...(!profile.avatarUrl ? { role: 'img', 'aria-label': `Avatar de ${profile.name}` } : {})}
        >
          {profile.avatarUrl ? <img className="h-full w-full object-cover" src={profile.avatarUrl} alt={profile.avatarAlt ?? ''} /> : <span aria-hidden="true">{initials}</span>}
        </div>
      </div>
    </section>
  );
}

export default HeroSection;