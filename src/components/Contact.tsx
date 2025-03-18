import { Phone, Mail, Github, Linkedin, Waves } from "lucide-react";

export default function Contact() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-xl font-bold mb-2 text-white">Contact</h2>
          <div className="flex justify-center">
            <Waves className="text-[#00ADB5] w-16" />
          </div>
        </div>
        <div className="space-y-6">
          <a
            href="tel:+91XXXXXXXXXX"
            className="flex items-center gap-4 text-gray-400 hover:text-[#00ADB5] transition-colors duration-300"
          >
            <Phone className="h-6 w-6" />
            <span>+91-6375326205</span>
          </a>
          <a
            href="mailto:deepanshu.gupta@example.com"
            className="flex items-center gap-4 text-gray-400 hover:text-[#00ADB5] transition-colors duration-300"
          >
            <Mail className="h-6 w-6" />
            <span>deepanshu08gupta@gmail.com</span>
          </a>
          {/* <a
            href="https://github.com/deepanshu-gupta"
            className="flex items-center gap-4 text-gray-400 hover:text-[#00ADB5] transition-colors duration-300"
          >
            <Github className="h-6 w-6" />
            <span>github.com/deepanshu-gupta</span>
          </a> */}
          <a
            href="https://www.linkedin.com/in/deepanshu-gupta-067350152/"
            className="flex items-center gap-4 text-gray-400 hover:text-[#00ADB5] transition-colors duration-300"
          >
            <Linkedin className="h-6 w-6" />
            <span>Deepanshu Gupta</span>
          </a>
        </div>
      </div>
    </section>
  );
}
