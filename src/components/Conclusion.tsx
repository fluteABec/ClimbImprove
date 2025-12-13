import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowRight, Users, TrendingUp, Lightbulb } from 'lucide-react';

export function Conclusion() {
  const benefits = [
    {
      icon: TrendingUp,
      title: 'Accelerated Progression',
      description: 'Data-driven insights to break through plateaus faster',
      color: '#4ade80',
    },
    {
      icon: Lightbulb,
      title: 'Enhanced Creativity',
      description: 'Revolutionary tools for route setters and gym owners',
      color: '#eab308',
    },
    {
      icon: Users,
      title: 'Community Driven',
      description: 'Join climbers worldwide improving together',
      color: '#3b82f6',
    },
  ];

  return (
    <section className="relative py-32 bg-[#0f0f0f]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="text-center p-8 bg-[#1a1a1a] rounded-3xl border border-gray-800 hover:border-gray-700 transition-all group"
            >
              <div 
                className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform"
                style={{ backgroundColor: `${benefit.color}15` }}
              >
                <benefit.icon 
                  className="w-8 h-8" 
                  style={{ color: benefit.color }}
                />
              </div>
              <h3 className="text-2xl text-white mb-4">{benefit.title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="relative rounded-3xl overflow-hidden">
          <div className="absolute inset-0 z-0">
            <ImageWithFallback 
              src="https://images.unsplash.com/photo-1617557519147-07f60ab41e76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGltYmVyJTIwdHJhaW5pbmd8ZW58MXx8fHwxNzYzNjI2MjcwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Climber training"
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a1a] via-[#1a1a1a]/95 to-[#1a1a1a]/90" />
          </div>

          <div className="relative z-10 px-12 py-20 text-center">
            <h2 className="text-5xl md:text-6xl text-white mb-6">
              Ready to Transform Your <span className="text-[#4ade80]">Climbing?</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
              Whether you're a climber looking to progress, a route setter seeking innovation, 
              or a gym owner wanting to enhance your facility, ClimbImprove is your partner 
              in achieving climbing excellence.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <button className="bg-[#4ade80] text-[#1a1a1a] px-8 py-4 rounded-full hover:bg-[#22c55e] transition-colors flex items-center gap-2">
                Start Your Free Trial
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="bg-transparent text-white px-8 py-4 rounded-full border-2 border-gray-700 hover:border-[#4ade80] transition-colors">
                Watch Demo
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto pt-12 border-t border-gray-800">
              <div>
                <div className="text-4xl text-[#4ade80] mb-2">10K+</div>
                <p className="text-gray-400 text-sm">Active Climbers</p>
              </div>
              <div>
                <div className="text-4xl text-[#3b82f6] mb-2">500+</div>
                <p className="text-gray-400 text-sm">Partner Gyms</p>
              </div>
              <div>
                <div className="text-4xl text-[#eab308] mb-2">1M+</div>
                <p className="text-gray-400 text-sm">Routes Analyzed</p>
              </div>
              <div>
                <div className="text-4xl text-[#ef4444] mb-2">95%</div>
                <p className="text-gray-400 text-sm">Satisfaction Rate</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-12 border-t border-gray-800 text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <h3 className="text-3xl text-white">
              Climb<span className="text-[#4ade80]">Improve</span>
            </h3>
          </div>
          <p className="text-gray-400 mb-8">
            Innovating climbing performance through technology, sustainability, and community.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-[#4ade80] transition-colors">About</a>
            <a href="#" className="hover:text-[#4ade80] transition-colors">Features</a>
            <a href="#" className="hover:text-[#4ade80] transition-colors">Sustainability</a>
            <a href="#" className="hover:text-[#4ade80] transition-colors">Community</a>
            <a href="#" className="hover:text-[#4ade80] transition-colors">Support</a>
            <a href="#" className="hover:text-[#4ade80] transition-colors">Contact</a>
          </div>
          <p className="text-gray-600 text-sm mt-8">
            © 2025 ClimbImprove. All rights reserved.
          </p>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-[#4ade80]/5 blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-[#3b82f6]/5 blur-3xl" />
    </section>
  );
}
