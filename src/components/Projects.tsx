import { ExternalLink, Waves } from 'lucide-react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'AskTheDoc',
    description: 'A medical insights application providing instant access to healthcare information and professional advice.',
    link: 'https://askthedoc.vercel.app/'
  },
  {
    title: 'TalentLink',
    description: 'A modern recruitment platform connecting talented professionals with leading companies.',
    link: 'https://talent-link-taupe.vercel.app/'
  }
];

export default function Projects() {
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-xl font-bold mb-2 text-white">Projects</h2>
        <div className="flex justify-center">
          <Waves className="text-[#00ADB5] w-16" />
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="bg-[#171717] p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <h3 className="text-2xl font-bold mb-3 text-white">{project.title}</h3>
            <p className="text-gray-400 mb-4">{project.description}</p>
            <a
              href={project.link}
              className="inline-flex items-center text-[#00ADB5] hover:text-[#00ADB5]/80 transition-colors duration-300"
            >
              View Project <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}