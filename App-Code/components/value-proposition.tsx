"use client"

import { motion } from "framer-motion"
import { CheckCircle, Users, Target, TrendingUp } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function ValueProposition() {
  const { t, isRTL } = useLanguage()

  const benefits = [
    {
      icon: <Users className="h-8 w-8" />,
      title: "AI-Powered Assessment",
      description: "Get accurate skill evaluations using advanced machine learning algorithms",
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Personalized Learning",
      description: "Receive customized recommendations based on your unique skill profile",
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Career Growth",
      description: "Track your progress and advance your career with data-driven insights",
    },
    {
      icon: <CheckCircle className="h-8 w-8" />,
      title: "Expert Guidance",
      description: "Get professional advice from our AI mentor and career experts",
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
            Transform Your Career with AI-Powered Insights
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our platform combines cutting-edge AI technology with proven career development strategies to help you succeed.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                <div className="text-blue-600">
                  {benefit.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

