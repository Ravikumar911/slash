import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Users } from "lucide-react";

export function GroupBuyTracker() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Live Group Buy Status</h2>
          <p className="text-muted-foreground">Watch the savings grow in real-time</p>
        </div>

        <Card className="max-w-2xl mx-auto p-6">
          <div className="flex items-center gap-4 mb-6">
            <Users className="w-6 h-6 text-primary" />
            <span className="text-xl font-semibold">50 shoppers have joined</span>
          </div>

          <div className="space-y-6">
            <div>
              <div className="flex justify-between mb-2">
                <span>Progress to next tier</span>
                <Badge variant="secondary">Silver Tier</Badge>
              </div>
              <Progress value={75} className="h-3" />
            </div>

            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="p-4 rounded-lg bg-muted">
                <div className="text-2xl font-bold">25%</div>
                <div className="text-sm text-muted-foreground">Bronze Savings</div>
              </div>
              <div className="p-4 rounded-lg bg-primary/10">
                <div className="text-2xl font-bold text-primary">50%</div>
                <div className="text-sm text-muted-foreground">Silver Savings</div>
              </div>
              <div className="p-4 rounded-lg bg-muted">
                <div className="text-2xl font-bold">75%</div>
                <div className="text-sm text-muted-foreground">Gold Savings</div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
} 