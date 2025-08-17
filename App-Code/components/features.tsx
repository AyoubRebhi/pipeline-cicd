"use client"

import { motion } from "framer-motion"
import { Brain, Target, MessageSquare, BarChart3, BookOpen, Users } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function Features() {
  const { t, isRTL } = useLanguage()

  const features = [
    {
      icon: <Brain className="h-10 w-10 text-blue-600" />,
      title: "AI-Powered Assessment",
      description: "Advanced machine learning algorithms provide accurate skill evaluations and personalized insights",
      color: "bg-blue-50",
      iconColor: "text-blue-600",
    },
    {
      icon: <Target className="h-10 w-10 text-green-600" />,
      title: "Skill Gap Analysis",
      description: "Identify your strengths and weaknesses with detailed skill gap analysis and recommendations",
      color: "bg-green-50",
      iconColor: "text-green-600",
    },
    {
      icon: <BookOpen className="h-10 w-10 text-purple-600" />,
      title: "Personalized Learning",
      description: "Get customized learning paths and course recommendations based on your assessment results",
      color: "bg-purple-50",
      iconColor: "text-purple-600",
    },
    {
      icon: <MessageSquare className="h-10 w-10 text-pink-600" />,
      title: "AI Career Mentor",
      description: "Receive personalized career guidance and advice from our intelligent AI mentor system",
      color: "bg-pink-50",
      iconColor: "text-pink-600",
    },
    {
      icon: <BarChart3 className="h-10 w-10 text-orange-600" />,
      title: "Progress Tracking",
      description: "Monitor your skill development with comprehensive analytics and progress reports",
      color: "bg-orange-50",
      iconColor: "text-orange-600",
    },
    {
      icon: <Users className="h-10 w-10 text-indigo-600" />,
      title: "Team Assessment",
      description: "Assess team capabilities and identify collective skill gaps for organizational development",
      color: "bg-indigo-50",
      iconColor: "text-indigo-600",
    },
  ]

  return (
    <section className="py-24 bg-white" dir={isRTL ? "rtl" : "ltr"}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            {t("keyFeatures") || "Key Features"}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t("featuresSubtitle") || "Everything you need to assess, develop, and advance your technical skills"}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className={`p-6 rounded-xl ${feature.color} h-full transition-all duration-300 group-hover:shadow-lg`}>
                <div className="mb-4">
                  <div className={`w-16 h-16 rounded-lg ${feature.color} flex items-center justify-center mb-4`}>
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Career?
            </h3>
            <p className="text-gray-600 mb-6">
              Start your journey with a comprehensive skills assessment and personalized development plan.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Get Started Today
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

