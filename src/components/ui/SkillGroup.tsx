import type { SkillGroup as SkillGroupData } from '../../types/portfolio';

interface SkillGroupProps {
  group: SkillGroupData;
}

function SkillGroup({ group }: SkillGroupProps) {
  return (
    <div className="border-t border-border pt-4">
      <h3 className="text-lg font-bold text-ink">{group.name}</h3>
      <ul className="mt-3 flex flex-wrap gap-2">
        {group.skills.map((skill) => <li className="rounded-full border border-border bg-surface px-3 py-1 text-sm text-muted  transition-colors hover:bg-accent hover:text-surface" key={skill}>{skill}</li>)}
      </ul>
    </div>
  );
}

export default SkillGroup;