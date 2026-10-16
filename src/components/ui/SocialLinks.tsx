import type { SocialLink } from '../../types/portfolio';

interface SocialLinksProps {
  links: SocialLink[];
}

function SocialLinks({ links }: SocialLinksProps) {
  return (
    <ul className="flex flex-wrap gap-4" aria-label="Redes sociais">
      {links.map((link) => (
        <li key={link.id}>
          <a
            className="font-semibold text-accent-strong underline decoration-2 underline-offset-4 hover:text-accent"
            href={link.url}
            target={link.newTab ? '_blank' : undefined}
            rel={link.newTab ? link.rel ?? 'noreferrer' : undefined}
          >
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default SocialLinks;