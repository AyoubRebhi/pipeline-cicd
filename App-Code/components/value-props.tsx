"use client"

import { motion } from "framer-motion"
import { CheckCircle, Users, Target, TrendingUp } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function ValueProps() {
  const { t, isRTL } = useLanguage()

  const features = [
    {
      icon: <Users className="h-8 w-8" />,
      title: t("skillAssessment") || "AI-Powered Skill Assessment",
      description: t("skillAssessmentDesc") || "Get accurate evaluations of your technical skills using advanced AI algorithms",
      color: "bg-blue-500",
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: t("personalizedLearning") || "Personalized Learning Paths",
      description: t("personalizedLearningDesc") || "Receive customized course recommendations based on your skill gaps",
      color: "bg-green-500",
    },
    {
      icon: <CheckCircle className="h-8 w-8" />,
      title: t("careerGuidance") || "Career Guidance",
      description: t("careerGuidanceDesc") || "Get expert advice on career progression and skill development",
      color: "bg-purple-500",
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: t("progressTracking") || "Progress Tracking",
      description: t("progressTrackingDesc") || "Monitor your improvement with detailed analytics and insights",
      color: "bg-orange-500",
    },
  ]

  return (
    <section className="py-24 bg-gray-50" dir={isRTL ? "rtl" : "ltr"}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            {t("valuePropsTitle") || "Why Choose Our Platform?"}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t("valuePropsSubtitle") || "Transform your career with AI-powered insights and personalized learning experiences"}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div
                className={`w-16 h-16 rounded-full flex items-center justify-center text-white mb-4 ${feature.color}`}
              >
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

