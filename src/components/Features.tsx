import { ImageWithFallback } from './figma/ImageWithFallback';
import { Video, Target, Dumbbell, Route } from 'lucide-react';

export function Features() {
  const features = [
    {
      icon: Video,
      title: 'Movement Analysis',
      description: 'Comprehensive movement tracking using camera and connected holds to correct your technique and improve your climbing form in real-time.',
      color: '#4ade80',
      bgColor: 'bg-[#4ade80]/10',
    },
    {
      icon: Target,
      title: 'Smart Guidance',
      description: 'Film your route and receive step-by-step guidance on what to do and when. ClimbImprove becomes your personal climbing coach.',
      color: '#3b82f6',
      bgColor: 'bg-[#3b82f6]/10',
    },
    {
      icon: Dumbbell,
      title: 'Personalized Training',
      description: 'Generate custom workouts adapted to your weaknesses, whether for climbing techniques or targeted muscle strengthening.',
      color: '#eab308',
      bgColor: 'bg-[#eab308]/10',
    },
    {
      icon: Route,
      title: 'Route Creation',
      description: 'Create routes by filming existing paths or selecting available holds. Specify style, difficulty, and movements for a complete route-setting tool.',
      color: '#ef4444',
      bgColor: 'bg-[#ef4444]/10',
    },
  ];

  return (
    <section className="relative py-32 bg-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#2a2a2a] rounded-full mb-6">
            <div className="w-2 h-2 rounded-full bg-[#3b82f6]" />
            <span className="text-gray-300 text-sm">Core Features</span>
          </div>
          <h2 className="text-5xl md:text-6xl text-white mb-6">
            Everything You Need to <span className="text-[#4ade80]">Progress</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            ClimbImprove combines cutting-edge technology with intuitive design to deliver 
            a complete training and route-setting solution for climbers and gyms.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-[#2a2a2a] p-8 rounded-3xl border border-gray-800 hover:border-gray-700 transition-all group"
            >
              <div 
                className={`w-16 h-16 rounded-2xl ${feature.bgColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                style={{ backgroundColor: `${feature.color}15` }}
              >
                <feature.icon 
                  className="w-8 h-8" 
                  style={{ color: feature.color }}
                />
              </div>
              <h3 className="text-2xl text-white mb-4">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Feature Showcase */}
        <div className="grid md:grid-cols-2 gap-12 items-center mt-20">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-[#4ade80]/20 via-[#3b82f6]/20 to-[#eab308]/20 rounded-3xl blur-2xl" />
            <div className="relative rounded-3xl overflow-hidden border border-gray-800">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1730659071194-4c833ac5da4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRvb3IlMjBjbGltYmluZyUyMGd5bXxlbnwxfHx8fDE3NjM1OTIwMjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Indoor climbing gym"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div>
            <h3 className="text-4xl text-white mb-6">
              Works Standalone or with <span className="text-[#4ade80]">Connected Holds</span>
            </h3>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              ClimbImprove adapts to your setup. Use it independently with just your camera for powerful 
              video analysis, or integrate connected holds for even more detailed feedback on force, 
              pressure distribution, and hold sequences.
            </p>
            <div className="space-y-4">
              {[
                { label: 'Camera-only mode', color: '#4ade80' },
                { label: 'Connected holds integration', color: '#3b82f6' },
                { label: 'Hybrid tracking system', color: '#eab308' },
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div 
                    className="w-6 h-6 rounded-lg flex-shrink-0"
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="text-gray-300">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
