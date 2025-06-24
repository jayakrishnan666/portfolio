import { Github, Linkedin, Mail, Heart } from "lucide-react";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return <footer className="bg-slate-950 border-t border-slate-800 py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Brand */}
          <div className="text-center md:text-left">
            
            
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6">
            <a href="mailto:jayakrishj123@gmail.com" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors duration-300">
              <Mail className="w-5 h-5 text-gray-300 hover:text-white" />
            </a>
            <a href="https://www.linkedin.com/in/jayakrishnanj007" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-300">
              <Linkedin className="w-5 h-5 text-gray-300 hover:text-white" />
            </a>
            <a href="https://github.com/jayakrishan666" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors duration-300">
              <Github className="w-5 h-5 text-gray-300 hover:text-white" />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-gray-400 flex items-center justify-center md:justify-end gap-1 text-left px-0">
              {/* © {currentYear} Made  by JAYAKRISHNAN J */}
            </p>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;