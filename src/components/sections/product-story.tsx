import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";

export function ProductStory() {
  return (
    <section className="py-20">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Premium Quality Products</h2>
          <p className="text-muted-foreground">Discover this week&apos;s featured item</p>
        </div>

        <Tabs defaultValue="features" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="features">Features</TabsTrigger>
            <TabsTrigger value="specs">Specifications</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
          </TabsList>
          
          <TabsContent value="features">
            <Card className="p-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="relative aspect-square rounded-lg overflow-hidden">
                  <Image
                    src="/product-features.jpg"
                    alt="Product Features"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold">Key Features</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full" />
                      Active Noise Cancellation
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full" />
                      40-hour Battery Life
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full" />
                      Premium Sound Quality
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
          </TabsContent>
          
          <TabsContent value="specs">
            <Card className="p-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">Technical Specifications</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium">Driver Size</h4>
                    <p className="text-muted-foreground">40mm</p>
                  </div>
                  <div>
                    <h4 className="font-medium">Frequency Response</h4>
                    <p className="text-muted-foreground">20Hz - 20kHz</p>
                  </div>
                  <div>
                    <h4 className="font-medium">Bluetooth Version</h4>
                    <p className="text-muted-foreground">5.0</p>
                  </div>
                  <div>
                    <h4 className="font-medium">Weight</h4>
                    <p className="text-muted-foreground">250g</p>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>
          
          <TabsContent value="reviews">
            <Card className="p-6">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-semibold">Customer Reviews</h3>
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-medium">4.8</span>
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  {/* Sample review */}
                  <div className="border-b pb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="font-medium">John D.</div>
                      <div className="text-muted-foreground">Verified Buyer</div>
                    </div>
                    <p className="text-muted-foreground">
                      Amazing sound quality and the group buy price made it an absolute steal!
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
} 