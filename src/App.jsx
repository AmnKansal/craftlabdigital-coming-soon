import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const ComingSoon = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date("2025-02-01").getTime();
    const totalSeconds = (targetDate - new Date().getTime()) / 1000;

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });

      if (difference < 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const TimeBox = ({ value, label }) => (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="flex flex-col items-center justify-center bg-card p-6 rounded-xl shadow-lg min-w-[120px] backdrop-blur-sm bg-opacity-90 border border-primary/20"
    >
      <span className="text-4xl font-bold text-blue-600 mb-2">{value}</span>
      <span className="text-lg font-medium text-accent-foreground">{label}</span>
    </motion.div>
  );

  const totalSeconds = (new Date("2025-02-01").getTime() - new Date().getTime()) / 1000;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background to-secondary relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
          alt="Background"
          className="w-full h-full object-cover opacity-10"
        />
      </div>

      <div className="relative z-10 max-w-4xl w-full space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-foreground mb-6 tracking-tight">
            <span className="text-black">CraftLab</span>
            <span className="text-blue-600">Digital</span>
          </h1>
          <p className="text-2xl text-accent-foreground max-w-2xl mx-auto font-light">
            Transforming ideas into digital reality
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16"
        >
          <h2 className="text-3xl font-bold text-center text-foreground mb-10">
            Launching In
          </h2>
          <div className="countdown">
            <TimeBox value={timeLeft.days} label="Days" />
            <TimeBox value={timeLeft.hours} label="Hours" />
            <TimeBox value={timeLeft.minutes} label="Minutes" />
            <TimeBox value={timeLeft.seconds} label="Seconds" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-xl text-muted-foreground font-medium">
            Something extraordinary is in the making. Stay tuned for the revolution!
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default ComingSoon;