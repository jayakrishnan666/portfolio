import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Zap, Star, Code, Palette, Trophy, Target } from "lucide-react";
const Skills = () => {
  // Removed skillCategories and related code for Design Mastery and Development Power
  // const skillCategories = [...];
  // const achievements = [{
  //   icon: Trophy,
  //   title: "50+ Projects",
  //   subtitle: "Successfully delivered"
  // }, {
  //   icon: Target,
  //   title: "98% Satisfaction",
  //   subtitle: "Client happiness rate"
  // }, {
  //   icon: Star,
  //   title: "5+ Years",
  //   subtitle: "Professional experience"
  // }];
  const tools =  [ "Adobe Photoshop", "VS Code", "Git", "HTML", "CSS", "Python", "Django", "MySQL", "Canva","Figma  (beginner)", "logo design", "web designing", "graphic designing", "UI"];
  return <section id="about" className="py-20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
      {/* Enhanced animated background */}
      <div className="absolute inset-0">
        <motion.div animate={{
        scale: [1, 1.2, 1],
        rotate: [0, 180, 360],
        opacity: [0.1, 0.3, 0.1]
      }} transition={{
        duration: 20,
        repeat: Infinity,
        ease: "linear"
      }} className="absolute top-20 right-20 w-40 h-40 border-2 border-purple-500/20 rounded-full" />
        <motion.div animate={{
        y: [-40, 40, -40],
        x: [-30, 30, -30],
        rotate: [0, 45, 90, 135, 180]
      }} transition={{
        duration: 15,
        repeat: Infinity,
        ease: "easeInOut"
      }} className="absolute bottom-20 left-20 w-32 h-32 bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-lg" />
        <motion.div animate={{
        scale: [0.8, 1.1, 0.8],
        rotate: [360, 0, 360]
      }} transition={{
        duration: 12,
        repeat: Infinity,
        ease: "easeInOut"
      }} className="absolute top-1/2 right-1/4 w-24 h-24 border border-cyan-500/20 rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8
      }} className="text-center mb-20">
          <div className="flex items-center justify-center gap-3 mb-6">
            <motion.div animate={{
            rotate: [0, 360]
          }} transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}>
              <Star className="w-8 h-8 text-yellow-400" />
            </motion.div>
            
            <motion.div animate={{
            rotate: [360, 0]
          }} transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
            delay: 4
          }}>
              <Sparkles className="w-8 h-8 text-pink-400" />
            </motion.div>
          </div>
          <p className="text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Self-taught developer and graphic designer passionate about building intuitive, scalable web apps and visually impactful designs. Currently pursuing MCA at Marian College, I blend code and creativity to craft seamless digital experiences.
          </p>
        </motion.div>

        {/* Removed Skills Categories grid

        {/* Tools & Technologies */}
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8
      }} className="text-center">
          <h3 className="text-4xl font-bold text-white mb-12">Skills, Tools & Technologies I'm familiar with</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {tools.map((tool, index) => <motion.div key={tool} initial={{
            opacity: 0,
            scale: 0.8,
            rotateY: 180
          }} whileInView={{
            opacity: 1,
            scale: 1,
            rotateY: 0
          }} whileHover={{
            scale: 1.1,
            y: -10,
            rotateX: 15,
            boxShadow: "0 20px 40px rgba(168, 85, 247, 0.4)"
          }} transition={{
            duration: 0.6,
            delay: index * 0.1
          }} className="group relative p-6 bg-gradient-to-br from-slate-800/60 to-slate-900/60 border border-slate-600/50 rounded-2xl text-gray-300 hover:bg-gradient-to-r hover:from-purple-900/40 hover:to-pink-900/40 hover:border-purple-500/60 hover:text-white transition-all duration-500 cursor-pointer backdrop-blur-sm">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 via-purple-600/10 to-pink-600/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <span className="relative z-10 font-medium">{tool}</span>
              </motion.div>)}
          </div>
        </motion.div>
      </div>
    </section>;
};
export default Skills;