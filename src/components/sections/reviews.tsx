import { Card } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Sarah Johnson",
    avatar: "/avatars/sarah.jpg",
    role: "Verified Buyer",
    content: "The group buying experience was seamless. Got my headphones at 65% off!",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Chen",
    avatar: "/avatars/michael.jpg",
    role: "Verified Buyer",
    content: "Amazing deals and the community aspect makes shopping more fun.",
    rating: 5
  },
  {
    id: 3,
    name: "Emma Davis",
    avatar: "/avatars/emma.jpg",
    role: "Verified Buyer",
    content: "Quality products at unbeatable prices. Will definitely shop here again!",
    rating: 4
  }
];

export function Reviews() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-muted-foreground">Join thousands of happy shoppers</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {reviews.map((review) => (
            <Card key={review.id} className="p-6">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Avatar className="w-12 h-12">
                    <img src={review.avatar} alt={review.name} />
                  </Avatar>
                  <div>
                    <div className="font-medium">{review.name}</div>
                    <div className="text-sm text-muted-foreground">{review.role}</div>
                  </div>
                </div>

                <div className="flex text-yellow-400">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                <p className="text-muted-foreground">{review.content}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
} 