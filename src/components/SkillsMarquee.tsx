import { Code2, Palette, Globe, Blocks, Boxes, FileCode, Router, Layers, Wind, Bot as Bootstrap, Newspaper, WholeWord as Wordpress, TestTube, Github as Git, Code, Package, Zap, Figma, Chrome, Brain, Network, Projector as Vector, Layout, Smartphone, Waves } from 'lucide-react';

const skills = [
  { name: 'JavaScript', icon: Code2 },
  { name: 'CSS', icon: Palette },
  { name: 'HTML', icon: Globe },
  { name: 'React', icon: Blocks },
  { name: 'Next.js', icon: Boxes },
  { name: 'Handlebars.js', icon: FileCode },
  { name: 'React Router', icon: Router },
  { name: 'Shadcn UI', icon: Layers },
  { name: 'Tailwind CSS', icon: Wind },
  { name: 'Bootstrap', icon: Bootstrap },
  { name: 'AMP', icon: Zap },
  { name: 'WordPress', icon: Wordpress },
  { name: 'Jest', icon: TestTube },
  { name: 'Git', icon: Git },
  { name: 'VS Code', icon: Code },
  { name: 'NPM', icon: Package },
  { name: 'Vite', icon: Zap },
  { name: 'Figma', icon: Figma },
  { name: 'Chrome DevTools', icon: Chrome },
  { name: 'RAG', icon: Brain },
  { name: 'LangChain', icon: Network },
  { name: 'Vectors', icon: Vector },
  { name: 'UI/UX', icon: Layout },
  { name: 'Responsive Design', icon: Smartphone }
];

export default function SkillsMarquee() {
  return (
    <div className="py-12 overflow-hidden">
      <div className="text-center mb-8">
        <h2 className="text-xl font-bold mb-2 text-white">Tools I Have Used</h2>
        <div className="flex justify-center">
          <Waves className="text-[#00ADB5] w-16" />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="animate-marquee whitespace-nowrap">
          {[...skills.slice(0, skills.length / 2), ...skills.slice(0, skills.length / 2)].map((skill, index) => {
            const Icon = skill.icon;
            return (
              <span
                key={index}
                className="inline-flex items-center gap-2 px-3 py-1.5 m-1.5 rounded-full bg-[#171717] text-white text-sm border border-[#00ADB5]/20"
              >
                <Icon className="h-3.5 w-3.5" />
                {skill.name}
              </span>
            );
          })}
        </div>
        <div className="animate-marquee-reverse whitespace-nowrap">
          {[...skills.slice(skills.length / 2), ...skills.slice(skills.length / 2)].map((skill, index) => {
            const Icon = skill.icon;
            return (
              <span
                key={index}
                className="inline-flex items-center gap-2 px-3 py-1.5 m-1.5 rounded-full bg-[#171717] text-white text-sm border border-[#00ADB5]/20"
              >
                <Icon className="h-3.5 w-3.5" />
                {skill.name}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}