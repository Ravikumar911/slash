import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { TrendingUp } from "lucide-react";

export function SavingsVisualizer() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Watch Your Savings Grow</h2>
          <p className="text-muted-foreground">The more people join, the more everyone saves</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <Card className="p-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-primary" />
                <h3 className="font-semibold">Individual Savings</h3>
              </div>
              <div className="text-3xl font-bold">$150</div>
              <Progress value={50} className="h-2" />
              <p className="text-sm text-muted-foreground">Average savings per purchase</p>
            </div>
          </Card>

          <Card className="p-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-primary" />
                <h3 className="font-semibold">Group Savings</h3>
              </div>
              <div className="text-3xl font-bold">$7,500</div>
              <Progress value={75} className="h-2" />
              <p className="text-sm text-muted-foreground">Total community savings this month</p>
            </div>
          </Card>

          <Card className="p-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-primary" />
                <h3 className="font-semibold">Potential Savings</h3>
              </div>
              <div className="text-3xl font-bold">75%</div>
              <Progress value={100} className="h-2" />
              <p className="text-sm text-muted-foreground">Maximum discount available</p>
            </div>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            Based on average group buy participation of 50+ members
          </p>
        </div>
      </div>
    </section>
  );
} 