import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Linkedin, Github, Twitter, MessageCircle } from "lucide-react";
const Contact = () => {
  const contactInfo = [{
    icon: Mail,
    label: "Email",
    value: "jayakrishj123@gmail.com",
    href: "mailto:jayakrishj123@gmail.com"
  }, {
    icon: Phone,
    label: "Phone",
    value: "+91 8086853909",
    href: "tel:+919876543210"
  }, {
    icon: MapPin,
    label: "Location",
    value: "Kerala, India",
    href: "#"
  }];
  const socialLinks = [{
    icon: Linkedin,
    href: "#",
    label: "LinkedIn",
    color: "hover:text-blue-400"
  }, {
    icon: Github,
    href: "#",
    label: "GitHub",
    color: "hover:text-gray-300"
  }, {
    icon: Twitter,
    href: "#",
    label: "Twitter",
    color: "hover:text-sky-400"
  }];
  return <section id="contact" className="py-20 bg-gradient-to-b from-slate-950 to-black relative overflow-hidden">
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0">
        <motion.div animate={{
        scale: [1, 1.4, 1],
        rotate: [0, 180, 360],
        opacity: [0.1, 0.4, 0.1]
      }} transition={{
        duration: 15,
        repeat: Infinity,
        ease: "easeInOut"
      }} className="absolute top-20 left-20 w-48 h-48 border-2 border-purple-500/30 rounded-full" />
        <motion.div animate={{
        x: [-40, 40, -40],
        y: [-30, 30, -30],
        rotate: [0, 90, 180, 270, 360]
      }} transition={{
        duration: 18,
        repeat: Infinity,
        ease: "linear"
      }} className="absolute bottom-20 right-20 w-32 h-32 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-lg" />
        <motion.div animate={{
        scale: [0.8, 1.2, 0.8],
        opacity: [0.2, 0.6, 0.2]
      }} transition={{
        duration: 12,
        repeat: Infinity,
        ease: "easeInOut"
      }} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-36 h-36 border-2 border-cyan-500/30 rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8
      }} className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <motion.div animate={{
            rotate: [0, 360]
          }} transition={{
            duration: 6,
            repeat: Infinity,
            ease: "linear"
          }}>
              <MessageCircle className="w-8 h-8 text-purple-400" />
            </motion.div>
            <h2 className="text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Let's Connect
            </h2>
          </div>
          <p className="text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to bring your vision to life? Get in touch with JAYAKRISHNAN J and let's create something extraordinary together.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Information Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((item, index) => <motion.a key={item.label} href={item.href} initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} whileHover={{
            scale: 1.05,
            y: -10
          }} transition={{
            duration: 0.6,
            delay: index * 0.2
          }} className="block group">
                <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-700/50 backdrop-blur-sm hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  <CardContent className="p-8 text-center relative z-10">
                    <motion.div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg" whileHover={{
                  rotate: 360
                }} transition={{
                  duration: 0.6
                }}>
                      <item.icon className="w-10 h-10 text-white" />
                    </motion.div>
                    <h3 className="text-xl font-bold text-white mb-2">{item.label}</h3>
                    <p className="text-gray-300 text-lg">{item.value}</p>
                  </CardContent>
                </Card>
              </motion.a>)}
          </div>

          {/* Social Media Links */}
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }} className="text-center">
            
            <div className="flex justify-center gap-8">
              {socialLinks.map((social, index) => {})}
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.4
        }} className="text-center mt-16">
            <Card className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border-purple-700/50 backdrop-blur-sm">
              <CardContent className="p-12 bg-gray-950">
                <h4 className="text-3xl font-bold text-white mb-4">Ready to Start Your Project?</h4>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Whether it's a stunning design or a powerful web application, let's turn your ideas into reality.
                </p>
                <motion.div whileHover={{
                scale: 1.05
              }} whileTap={{
                scale: 0.95
              }} className="inline-block">
                  <a href="mailto:jayakrishj123@gmail.com" className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-full transition-all duration-300 text-lg shadow-lg hover:shadow-2xl">
                    <Mail className="w-6 h-6" />
                    Start a Conversation
                  </a>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>;
};
export default Contact;