import React from 'react';
import { Github, Linkedin, Mail, Sparkles, Code, Heart } from 'lucide-react';

export function Hero() {
  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-br from-primary-100 via-secondary-100 to-accent-100">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTYiIGhlaWdodD0iMjgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48ZyBmaWxsPSIjZjBmMGYwIj48cGF0aCBkPSJNNTYgMjZWMmgtMnYyNGgyem0tMiAyVjRoLTJ2MjRoMnptLTIgMFY2aC0ydjIyaDJ6bS0yIDBoLTJWOGgydjIwem0tMiAwVjEwaC0ydjE4aDJ6bS0yIDBoLTJWMTJoMnYxNnptLTIgMFYxNGgtMnYxNGgyem0tMiAwaC0yVjE2aDJ2MTJ6bS0yIDBoLTJWMThoMnYxMHptLTIgMGgtMlYyMGgydjh6bS0yIDBoLTJWMjJoMnY2em0tMiAwaC0yVjI0aDJ2NHptLTIgMGgtMlYyNmgydjJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-5"></div>
      <div className="max-w-6xl mx-auto px-6 py-20 pt-32 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-left space-y-6">
            <div className="inline-flex items-center gap-2 bg-white/30 backdrop-blur-sm px-4 py-2 rounded-full text-primary-600 font-medium">
              <Sparkles className="w-4 h-4" />
              <span>Software Engineering Student</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold">
              <span className="bg-gradient-to-r from-primary-600 via-secondary-500 to-accent-500 text-transparent bg-clip-text">
                Creating Digital Magic
              </span>
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              Passionate about crafting beautiful web experiences and turning ideas into reality through code ✨
            </p>
            <div className="flex gap-4">
              <a href="mailto:camivinci7@gmail.com" 
                 className="inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-full font-medium transition-all hover:shadow-lg hover:-translate-y-0.5">
                <Mail className="w-5 h-5" />
                Get in Touch
              </a>
              <div className="flex gap-3">
                <a href="https://github.com/camivinciguerra" target="_blank" rel="noopener noreferrer" 
                   className="p-3 bg-white hover:bg-gray-50 rounded-full shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5">
                  <Github className="w-5 h-5 text-gray-700" />
                </a>
                <a href="https://www.linkedin.com/in/camila-vinciguerra/" target="_blank" rel="noopener noreferrer"
                   className="p-3 bg-white hover:bg-gray-50 rounded-full shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5">
                  <Linkedin className="w-5 h-5 text-gray-700" />
                </a>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-gradient-to-r from-primary-300 via-secondary-300 to-accent-300 rounded-full blur-3xl opacity-30 animate-pulse"></div>
            <img
              src="/fotocami.jpg"
              alt="Profile"
              className="relative w-[300px] h-[300px] mx-auto object-cover rounded-[3rem] rotate-3 shadow-2xl animate-float"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-xl animate-bounce-slow">
              <Code className="w-6 h-6 text-primary-500" />
            </div>
            <div className="absolute -top-6 -left-6 bg-white p-4 rounded-2xl shadow-xl animate-bounce-slow delay-1000">
              <Heart className="w-6 h-6 text-primary-500" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}