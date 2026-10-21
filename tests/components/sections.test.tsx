import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import AboutSection from '../../src/components/sections/AboutSection';
import HeroSection from '../../src/components/sections/HeroSection';
import { profile } from '../../src/data/profile';
import { skillGroups } from '../../src/data/skills';
import { socialLinks } from '../../src/data/socialLinks';

describe('portfolio sections', () => {
  it('renders the professional identity and fallback avatar', () => {
    render(<HeroSection profile={profile} socialLinks={socialLinks} />);

    expect(screen.getByRole('heading', { name: profile.name })).toBeInTheDocument();
    expect(screen.getByText(profile.headline)).toBeInTheDocument();
    expect(screen.getByText('DS')).toBeInTheDocument();
  });

  it('renders the biography and skill groups', () => {
    render(<AboutSection profile={profile} skillGroups={skillGroups} />);

    expect(screen.getByRole('heading', { name: /sobre/i })).toBeInTheDocument();
    expect(screen.getByText(profile.bio)).toBeInTheDocument();
    expect(screen.getByText(skillGroups[0].skills[0])).toBeInTheDocument();
  });
});