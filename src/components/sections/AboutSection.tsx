import type { Profile, SkillGroup as SkillGroupData } from '../../types/portfolio';
import Section from '../layout/Section';
import SkillGroup from '../ui/SkillGroup';

interface AboutSectionProps {
  profile: Profile;
  skillGroups: SkillGroupData[];
}

function AboutSection({ profile, skillGroups }: AboutSectionProps) {
  return (
    <Section id="sobre" title="Sobre mim">
      <div className="grid gap-10 md:grid-cols-[1fr_1.2fr]">
        <p className="text-lg leading-8 text-muted">{profile.bio}</p>
        <div className="grid gap-8 sm:grid-cols-2">
          {skillGroups.map((group) => <SkillGroup key={group.id} group={group} />)}
        </div>
      </div>
    </Section>
  );
}

export default AboutSection;