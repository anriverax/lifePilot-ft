"use client";

import { Apple, Calendar, Dumbbell, Leaf } from "lucide-react";
import { motion } from "motion/react";

const AuthPage = (): React.JSX.Element => {
  const features = [
    { icon: Calendar, label: "Plan your day" },
    { icon: Apple, label: "Eat well" },
    { icon: Dumbbell, label: "Move your body" },
    { icon: Leaf, label: "Build habits" }
  ];

  return (
    <main className="min-h-screen">
      {/* Desktop Split Layout */}
      <div className="lg:grid lg:grid-cols-2 lg:min-h-screen">
        {/* Left Side - Branding (Desktop only) */}
        <motion.div
          className="hidden lg:flex lg:flex-col lg:justify-center lg:items-center"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Logo */}
          <motion.div
            className="w-20 h-20 rounded-2xl bg-accent flex items-center justify-center mb-4 shadow-lg"
            whileHover={{ scale: 1.05, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <Leaf className="w-10 h-10 text-white" strokeWidth={2.5} />
          </motion.div>

          {/* Title */}
          <h1 className="text-4xl font-bold text-foreground mb-2">LifePilot</h1>

          {/* Tagline */}
          <p className="text-surface font-black text-center tracking-wide leading-relaxed mb-4 max-w-md text-lg">
            You pilot. We organize. You live better.
          </p>
          <div className="flex items-center gap-3 mb-8">
            <span className="h-px w-16 bg-accent/40" />
            <Leaf className="h-4 w-4 text-surface" aria-hidden="true" />
            <span className="h-px w-16 bg-accent/40" />
          </div>
          {/* Feature Grid */}
          <div className="flex gap-8 justify-center mb-16">
            {features.map((feature, index) => (
              <motion.div
                key={feature.label}
                className="flex flex-col items-center justify-center rounded-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                whileHover={{ y: -4 }}
              >
                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-surface/20">
                  <feature.icon className="w-6 h-6 text-surface font-black" strokeWidth={2} />
                </div>
                <span className="text-sm text-foreground/80 text-center font-medium">
                  {feature.label}
                </span>
              </motion.div>
            ))}
          </div>
          <p className="italic text-surface font-black">
            Life in harmony, every day. <span className="text-accent">♡</span>
          </p>
        </motion.div>
      </div>
    </main>
  );
};

export default AuthPage;
