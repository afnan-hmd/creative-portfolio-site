import HeroSect from '../components/hero.js';
import Service from '../components/services.js';
import Project from '../components/projects.js';

export default function Home() {
  return (
    <div>
      <HeroSect />
      <Service />
      <Project />
    </div>
  );
}
