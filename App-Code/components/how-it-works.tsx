"use client"

import { motion } from "framer-motion"
import { CheckCircle, Users, Target, TrendingUp, BookOpen, MessageCircle, BarChart } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function HowItWorks() {
  const { t, isRTL } = useLanguage()

  const steps = [
    {
      icon: <Users className="h-8 w-8" />,
      title: t("identifySkills") || "Identify Skills",
      description: t("identifySkillsDesc") || "Assess your current technical skills and identify areas for improvement",
      color: "bg-blue-500",
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: t("accessContent") || "Access Content",
      description: t("accessContentDesc") || "Get personalized learning paths and course recommendations",
      color: "bg-green-500",
    },
    {
      icon: <MessageCircle className="h-8 w-8" />,
      title: t("engageMentor") || "Engage with AI Mentor",
      description: t("engageMentorDesc") || "Get personalized guidance and career advice from our AI mentor",
      color: "bg-purple-500",
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: t("trackGrowth") || "Track Growth",
      description: t("trackGrowthDesc") || "Monitor your progress and see measurable improvements over time",
      color: "bg-orange-500",
    },
  ]

  return (
    <section id="how-it-works" className="py-24 bg-white" dir={isRTL ? "rtl" : "ltr"}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-20">
            {t("howItWorksTitle") || "How It Works"}
          </h2>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <motion.div
                  className={`w-16 h-16 rounded-full flex items-center justify-center text-white mx-auto mb-4 ${step.color}`}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  {step.icon}
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Ready to Start Your Assessment?
              </h3>
              <p className="text-gray-600 mb-6">
                Join thousands of professionals who have transformed their careers with our AI-powered platform.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Start Assessment
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

