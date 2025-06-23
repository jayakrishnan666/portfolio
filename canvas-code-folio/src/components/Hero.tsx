
import { Button } from "@/components/ui/button";
import { Code, Palette } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950">
      {/* Static background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl"></div>
        
        {/* Static geometric shapes */}
        <div className="absolute top-32 right-32 w-16 h-16 border-2 border-purple-400/30 rotate-45" />
        <div className="absolute bottom-32 left-32 w-12 h-12 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center">
          <div className="mb-6">
            <h1 className="text-4xl md:text-6xl font-bold mb-2 text-white">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                JAYAKRISHNAN J
              </span>
            </h1>
            <div className="flex items-center justify-center gap-4 text-2xl md:text-4xl font-bold">
              <div className="flex items-center gap-2 text-purple-400">
                <Palette className="w-8 h-8" />
                <span>Graphic Designer</span>
              </div>
              <span className="text-gray-500">+</span>
              <div className="flex items-center gap-2 text-pink-400">
                <Code className="w-8 h-8" />
                <span>Web Developer</span>
              </div>
            </div>
          </div>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Crafting stunning visual experiences through graphic design and web development. 
            Where creativity meets code to bring ideas to life.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <div>
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 text-lg">
                <a href="#projects" className="flex items-center gap-2">
                  View My Work
                  →
                </a>
              </Button>
            </div>
            <div>
              <Button size="lg" variant="outline" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 text-lg">
                <a href="#contact">Get In Touch</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
