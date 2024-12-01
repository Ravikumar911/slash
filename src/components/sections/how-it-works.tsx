"use client"

import { motion } from "framer-motion"
import { 
  PersonIcon, 
  MagnifyingGlassIcon, 
  PlusIcon, 
  TimerIcon,
  CheckCircledIcon 
} from "@radix-ui/react-icons"

const steps = [
  {
    title: "Create Account",
    description: "Sign up in seconds and join our shopping community",
    icon: PersonIcon,
  },
  {
    title: "Find Products",
    description: "Browse through our curated selection of premium items",
    icon: MagnifyingGlassIcon,
  },
  {
    title: "Join or Start Group",
    description: "Team up with others to unlock bigger discounts",
    icon: PlusIcon,
  },
  {
    title: "Wait for Timer",
    description: "The group buy timer counts down as more people join",
    icon: TimerIcon,
  },
  {
    title: "Complete Purchase",
    description: "Checkout securely and track your delivery",
    icon: CheckCircledIcon,
  },
]

export function HowItWorks() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get started with social shopping in five simple steps
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center mb-4">
                  <step.icon className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-[60%] w-[calc(100%-60%)] h-[2px] bg-gradient-to-r from-purple-200 to-purple-100 dark:from-purple-800/50 dark:to-purple-900/30" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 