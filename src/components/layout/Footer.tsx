import type { SocialLink } from '../../types/portfolio';
import SocialLinks from '../ui/SocialLinks';

interface FooterProps {
  profileName: string;
  email: string;
  socialLinks: SocialLink[];
}

function Footer({ profileName, email, socialLinks }: FooterProps) {
  return (
    <footer className="border-t border-border py-10" role="contentinfo">
      <div className="mx-auto flex max-w-6xl flex-col gap-5 px-5 md:flex-row md:items-center md:justify-between md:px-8">
        <div>
          <p className="font-bold text-ink">{profileName}</p>
          <a className="text-link mt-1 inline-block text-muted" href={`mailto:${email}`}>{email}</a>
        </div>
        <SocialLinks links={socialLinks} />
      </div>
    </footer>
  );
}

export default Footer;