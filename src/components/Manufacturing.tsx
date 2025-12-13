import { ImageWithFallback } from './figma/ImageWithFallback';
import { Leaf, Shield, Zap, Package } from 'lucide-react';

export function Manufacturing() {
  const specs = [
    {
      icon: Package,
      title: 'Premium Materials',
      description: 'Connected holds crafted from sustainable wood and high-grade polyester for optimal durability and grip.',
      color: '#4ade80',
    },
    {
      icon: Shield,
      title: 'Safety First',
      description: 'Rigorously tested components ensuring climber safety and long-lasting resistance under intensive use.',
      color: '#3b82f6',
    },
    {
      icon: Leaf,
      title: 'Eco-Responsible',
      description: 'Committed to reducing environmental impact through sustainable sourcing and manufacturing processes.',
      color: '#22c55e',
    },
    {
      icon: Zap,
      title: 'Smart Technology',
      description: 'Integrated sensors and electronics designed for precision tracking while maintaining hold integrity.',
      color: '#eab308',
    },
  ];

  return (
    <section className="relative py-32 bg-gradient-to-b from-[#1a1a1a] to-[#0f0f0f]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#2a2a2a] rounded-full mb-6">
            <div className="w-2 h-2 rounded-full bg-[#22c55e]" />
            <span className="text-gray-300 text-sm">Sustainable Innovation</span>
          </div>
          <h2 className="text-5xl md:text-6xl text-white mb-6">
            Crafted with <span className="text-[#22c55e]">Care</span> for the Planet
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Our connected holds and wooden volumes combine cutting-edge technology with 
            environmental responsibility, delivering performance without compromise.
          </p>
        </div>

        {/* Manufacturing Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="order-2 md:order-1">
            <h3 className="text-4xl text-white mb-8">
              Built to Last, Designed to Sustain
            </h3>
            <div className="space-y-6">
              {specs.map((spec, index) => (
                <div 
                  key={index}
                  className="flex gap-4 p-5 bg-[#2a2a2a] rounded-2xl border border-gray-800 hover:border-gray-700 transition-colors"
                >
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${spec.color}15` }}
                  >
                    <spec.icon 
                      className="w-6 h-6" 
                      style={{ color: spec.color }}
                    />
                  </div>
                  <div>
                    <h4 className="text-white mb-2">{spec.title}</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {spec.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 md:order-2 relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-[#22c55e]/20 via-[#3b82f6]/20 to-[#eab308]/20 rounded-3xl blur-2xl" />
            <div className="relative rounded-3xl overflow-hidden border border-gray-800">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1659666287295-7da26c3f80d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGltYmluZyUyMGhvbGRzJTIwY29sb3JmdWx8ZW58MXx8fHwxNzYzNjI2MjcwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Colorful climbing holds"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Environmental Commitment */}
        <div className="bg-gradient-to-r from-[#22c55e]/10 to-[#3b82f6]/10 rounded-3xl p-12 border border-gray-800">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl text-[#22c55e] mb-4">100%</div>
              <p className="text-gray-300">Sustainable Wood Sources</p>
            </div>
            <div className="text-center">
              <div className="text-5xl text-[#3b82f6] mb-4">-40%</div>
              <p className="text-gray-300">Carbon Footprint Reduction</p>
            </div>
            <div className="text-center">
              <div className="text-5xl text-[#eab308] mb-4">5yr</div>
              <p className="text-gray-300">Minimum Hold Lifespan</p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-40 right-10 w-64 h-64 rounded-full bg-[#22c55e]/5 blur-3xl" />
      <div className="absolute bottom-20 left-10 w-48 h-48 rounded-full bg-[#3b82f6]/5 blur-3xl" />
    </section>
  );
}
