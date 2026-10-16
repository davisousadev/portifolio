import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import AboutSection from './components/sections/AboutSection';
import ContactSection from './components/sections/ContactSection';
import HeroSection from './components/sections/HeroSection';
import ProjectsSection from './components/sections/ProjectsSection';
import { navigationItems } from './data/navigation';
import { profile } from './data/profile';
import { contactDetails } from './data/profile';
import { projects } from './data/projects';
import { skillGroups } from './data/skills';
import { socialLinks } from './data/socialLinks';
import useTheme from './hooks/useTheme';
import useContactForm from './hooks/useContactForm';

function App() {
  const { theme, toggleTheme } = useTheme();
  const { state: formState, updateField, submit, resetStatus } = useContactForm(contactDetails.email);

  return (
    <>
      <Header items={navigationItems} theme={theme} onThemeChange={toggleTheme} />
      <main>
        <HeroSection profile={profile} socialLinks={socialLinks} />
        <AboutSection profile={profile} skillGroups={skillGroups} />
        <ProjectsSection projects={projects} />
        <ContactSection contact={contactDetails} socialLinks={socialLinks} formState={formState} onChange={updateField} onSubmit={submit} onResetStatus={resetStatus} />
      </main>
      <Footer profileName={profile.name} email={profile.email} socialLinks={socialLinks} />
    </>
  );
}

export default App;