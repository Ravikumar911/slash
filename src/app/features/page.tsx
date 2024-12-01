"use client"

import { BorderBeam } from "@/components/ui/border-beam"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { useState } from "react"
import { Users, ShoppingBag, Sparkles, Brain, 
         MessageSquare, Wallet, Shield, Gift } from "lucide-react"
import { cn } from "@/lib/utils"

const features = [
    {
      id: 1,
      title: "Group Shopping",
      description: "Shop together, save more with friends",
      details: "Create shopping groups, split costs, and unlock exclusive group discounts.",
      icon: Users,
      size: 'large',
      gradient: "from-violet-500/40 via-pink-500/40 to-purple-700/40"
    },
    {
      id: 2,
      title: "Weekly Deals",
      description: "Exclusive drops",
      details: "Get access to limited-time deals with massive discounts.",
      icon: ShoppingBag,
      size: 'small',
      gradient: "from-orange-500/40 via-yellow-500/40 to-red-600/40"
    },
    {
      id: 3,
      title: "Slash Intelligence",
      description: "AI-powered shopping assistant",
      details: "Smart recommendations and personalized shopping experience.",
      icon: Brain,
      size: 'wide',
      gradient: "from-blue-500/40 via-green-500/40 to-pink-500/40"
    },
    {
      id: 4,
      title: "Group Chat",
      description: "Real-time coordination",
      details: "Chat with your shopping group in real-time.",
      icon: MessageSquare,
      size: 'small',
      gradient: "from-green-500/40 via-teal-500/40 to-emerald-700/40"
    },
    {
      id: 5,
      title: "Split Payments",
      description: "Easy cost sharing",
      details: "Automatically split costs among group members.",
      icon: Wallet,
      size: 'medium',
      gradient: "from-pink-500/40 via-purple-500/40 to-rose-600/40"
    },
    {
      id: 6,
      title: "Premium Brands",
      description: "Curated selection",
      details: "Access to exclusive premium brands and products.",
      icon: Sparkles,
      size: 'medium',
      gradient: "from-yellow-500/40 via-orange-500/40 to-red-600/40"
    },
    {
      id: 7,
      title: "Secure Shopping",
      description: "Protected transactions",
      details: "End-to-end encrypted payments and user data.",
      icon: Shield,
      size: 'small',
      gradient: "from-cyan-500/40 via-blue-500/40 to-indigo-600/40"
    },
    {
      id: 8,
      title: "Rewards",
      description: "Earn while shopping",
      details: "Get points and rewards for group purchases.",
      icon: Gift,
      size: 'small',
      gradient: "from-indigo-500/40 via-violet-500/40 to-purple-600/40"
    },
    {
        id: 9,
        title: "Secure Shopping",
        description: "Protected transactions",
        details: "End-to-end encrypted payments and user data.",
        icon: Shield,
        size: 'small',
        gradient: "from-cyan-500/40 via-blue-500/40 to-indigo-600/40"
      },
      {
        id: 10,
        title: "Rewards",
        description: "Earn while shopping",
        details: "Get points and rewards for group purchases.",
        icon: Gift,
        size: 'small',
        gradient: "from-indigo-500/40 via-violet-500/40 to-purple-600/40"
      }
  ] as const

export default function FeaturesPage() {
  const [selectedFeature, setSelectedFeature] = useState<typeof features[number] | null>(null)

  return (
    <div className="min-h-screen bg-black p-3">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 auto-rows-[minmax(200px,auto)] grid-flow-dense">
        {features.map((feature) => (
          <div
            key={feature.id}
            className={cn(
              "relative",
              {
                'col-span-2 row-span-2': feature.size === 'large',
                'col-span-2 row-span-1': feature.size === 'wide',
                'col-span-1 row-span-1': feature.size === 'small',
                'col-span-1 row-span-2': feature.size === 'medium',
              }
            )}
          >
            <Button
              variant="ghost"
              className="relative w-full h-full overflow-hidden rounded-xl p-0 border border-slate-800/50 hover:border-slate-700 group"
              onClick={() => setSelectedFeature(feature)}
            >
              <div className={cn(
                "absolute inset-0 bg-gradient-to-br transition-opacity group-hover:opacity-100",
                feature.gradient
              )} />
              {feature.size === 'large' && <BorderBeam className="opacity-40" />}
              <div className="relative h-full w-full p-4 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <feature.icon className="h-12 w-12 text-slate-300" />
                </div>
                <div className="text-left">
                  <h3 className="font-semibold md:text-lg text-slate-100">
                    {feature.title}
                  </h3>
                  <p className="text-lg text-slate-400 mt-1">
                    {feature.description}
                  </p>
                </div>
              </div>
            </Button>
          </div>
        ))}
      </div>

      <Dialog open={selectedFeature !== null} onOpenChange={() => setSelectedFeature(null)}>
        <DialogContent className="bg-black/95 text-white border-slate-800">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-xl">
              {selectedFeature?.icon && <selectedFeature.icon className="h-6 w-6" />}
              {selectedFeature?.title}
            </DialogTitle>
          </DialogHeader>
          <p className="text-slate-300">{selectedFeature?.details}</p>
        </DialogContent>
      </Dialog>
    </div>
  )
}