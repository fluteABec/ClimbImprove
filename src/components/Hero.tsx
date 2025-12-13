import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback 
          src="https://images.unsplash.com/photo-1517599652-86163851f0de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2NrJTIwY2xpbWJpbmclMjB3YWxsfGVufDF8fHx8MTc2MzU3MzY1MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Climbing wall"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a] via-[#1a1a1a]/90 to-[#1a1a1a]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#2a2a2a] rounded-full mb-8">
          <div className="w-2 h-2 rounded-full bg-[#4ade80]" />
          <span className="text-gray-300 text-sm">Innovative Climbing Technology</span>
        </div>

        <h1 className="text-6xl md:text-8xl text-white mb-6 tracking-tight">
          Climb<span className="text-[#4ade80]">Improve</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          Transform your climbing experience with AI-powered video analysis, connected holds, 
          and personalized training programs designed for progression.
        </p>

        {/* Problem Statement */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          <div className="bg-[#2a2a2a] p-6 rounded-2xl border border-gray-800 hover:border-[#ef4444] transition-colors">
            <div className="w-12 h-12 rounded-xl bg-[#ef4444]/10 flex items-center justify-center mb-4 mx-auto">
              <div className="w-6 h-6 rounded-lg bg-[#ef4444]" />
            </div>
            <h3 className="text-white mb-2">Technical Plateau</h3>
            <p className="text-gray-400 text-sm">
              Breaking through stagnation with precise movement analysis
            </p>
          </div>

          <div className="bg-[#2a2a2a] p-6 rounded-2xl border border-gray-800 hover:border-[#3b82f6] transition-colors">
            <div className="w-12 h-12 rounded-xl bg-[#3b82f6]/10 flex items-center justify-center mb-4 mx-auto">
              <div className="w-6 h-6 rounded-lg bg-[#3b82f6]" />
            </div>
            <h3 className="text-white mb-2">Limited Feedback</h3>
            <p className="text-gray-400 text-sm">
              Get detailed insights on every movement and technique
            </p>
          </div>

          <div className="bg-[#2a2a2a] p-6 rounded-2xl border border-gray-800 hover:border-[#eab308] transition-colors">
            <div className="w-12 h-12 rounded-xl bg-[#eab308]/10 flex items-center justify-center mb-4 mx-auto">
              <div className="w-6 h-6 rounded-lg bg-[#eab308]" />
            </div>
            <h3 className="text-white mb-2">Traditional Route Setting</h3>
            <p className="text-gray-400 text-sm">
              Revolutionize route creation with smart technology
            </p>
          </div>
        </div>

        <button className="bg-[#4ade80] text-[#1a1a1a] px-8 py-4 rounded-full hover:bg-[#22c55e] transition-colors flex items-center gap-2 mx-auto">
          Discover ClimbImprove
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-32 h-32 rounded-full bg-[#4ade80]/5 blur-3xl" />
      <div className="absolute bottom-40 left-20 w-40 h-40 rounded-full bg-[#3b82f6]/5 blur-3xl" />
    </section>
  );
}
