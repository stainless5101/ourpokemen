import React from 'react';
import { motion } from 'framer-motion';
import { Pickaxe, Gamepad2, Zap } from 'lucide-react';
import { GlassCard } from './ui/GlassCard';

export const Features: React.FC = () => {
  const features = [
    {
      title: "原版生存",
      description: "Experience the purest form of survival gameplay. No pay-to-win, strictly balanced economy, and a grief-prevention system that respects your creativity.",
      icon: Pickaxe,
      color: "from-green-400 to-emerald-600",
      delay: 0.2
    },
    {
      title: "更多玩法",
      description: "Carefully curated plugins that enhance quality of life without breaking immersion. Custom enchantments, daily quests, and community events.",
      icon: Gamepad2,
      color: "from-blue-400 to-indigo-600",
      delay: 0.4
    },
    {
      title: "宝可梦世界",
      description: "A fully integrated Cobblemon adventure. Catch, train, and battle in a world generated specifically for exploration and discovery.",
      icon: Zap,
      color: "from-yellow-400 to-orange-600",
      delay: 0.6
    }
  ];

  return (
    <section className="relative py-24 px-6 bg-stone-900 overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-500/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
        >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">About us</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-pink-500 to-orange-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: feature.delay, duration: 0.5 }}
            >
              <GlassCard className="h-full p-8 group relative overflow-hidden" hoverEffect={true}>
                {/* Hover Gradient Bloom */}
                <div className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br ${feature.color} opacity-20 blur-2xl group-hover:opacity-40 transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 shadow-lg transform group-hover:-translate-y-1 transition-transform duration-300`}>
                    <feature.icon className="text-white w-7 h-7" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                    {feature.description}
                  </p>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};