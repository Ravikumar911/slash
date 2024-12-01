"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

import { AnimatedBeam } from "@/components/ui/animated-beam";
import { Play } from "lucide-react";
import Image from "next/image";
import { useRef } from 'react';
import { BorderBeam } from "../ui/border-beam";

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const fromRef = useRef<HTMLHeadingElement>(null);
  const toRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={containerRef} className="relative min-h-[90vh] flex items-center overflow-hidden">
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={fromRef}
        toRef={toRef}
        gradientStartColor="#FF6B6B"
        gradientStopColor="#4ECDC4"
      />

      
      <div className="container px-4 mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6">
            <h1 ref={fromRef} className="text-5xl md:text-6xl font-bold leading-tight bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent animate-in fade-in slide-in-from-left-8 duration-1000">
              Slash Prices,
              <br />
              Save Together
            </h1>

            <p className="text-xl text-muted-foreground animate-in fade-in slide-in-from-left-8 duration-1000 delay-200">
              Join thousands of smart shoppers who save up to 75% through 
              group buying. Experience the future of social shopping.
            </p>

            <div className="flex gap-4 animate-in fade-in slide-in-from-left-8 duration-1000 delay-300">
              <Button 
                size="lg" 
                className="px-8 relative overflow-hidden group"
              >
                <span className="relative z-10">Start Saving</span>
                <div className="absolute inset-0 bg-primary/10 translate-y-full group-hover:translate-y-0 transition-transform" />
              </Button>
              
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" size="lg" className="gap-2 group">
                    <Play size={16} className="group-hover:scale-110 transition-transform" />
                    Watch Demo
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-3xl">
                  <div className="aspect-video w-full">
                    <iframe 
                      width="100%" 
                      height="100%" 
                      src="https://www.youtube.com/embed/your-video-id"
                      title="Product Demo"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>

          <div ref={toRef} className="lg:justify-self-end animate-in fade-in slide-in-from-right-8 duration-1000 delay-200">
            <Card className="w-full max-w-md p-6 transition-colors backdrop-blur-sm bg-background/80">
             <BorderBeam />
              <div className="flex flex-col gap-4">
                <div className="relative aspect-square rounded-lg overflow-hidden">
                  <Image
                    src="/shoe.jpg"
                    alt="Featured Product"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-semibold">Weekly Hot Deal</h3>
                  <p className="text-muted-foreground">
                    Premium Wireless Headphones
                  </p>
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-3xl font-bold">$149</span>
                      <span className="text-sm text-muted-foreground line-through ml-2">
                        $299
                      </span>
                    </div>
                    <Button 
                      size="lg"
                      className="relative overflow-hidden group"
                    >
                      <span className="relative z-10">Join Group</span>
                      <div className="absolute inset-0 bg-primary/10 translate-y-full group-hover:translate-y-0 transition-transform" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
} 