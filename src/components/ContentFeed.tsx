
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Heart, MessageCircle, Lock, Share2, Bookmark } from "lucide-react";

export const ContentFeed = () => {
  const posts = [
    {
      id: 1,
      creator: "Sarah Chen",
      avatar: "/placeholder.svg",
      tier: "Premium",
      timeAgo: "2 hours ago",
      content: "Just finished an incredible morning workout! Here's my secret routine that's been getting amazing results. Swipe to see the full breakdown! 💪",
      isLocked: false,
      likes: 247,
      comments: 18,
      type: "workout"
    },
    {
      id: 2,
      creator: "Alex Rivera",
      avatar: "/placeholder.svg",
      tier: "VIP",
      timeAgo: "4 hours ago",
      content: "Behind the scenes of my photo shoot today! Exclusive content for my VIP subscribers...",
      isLocked: true,
      likes: 156,
      comments: 23,
      type: "exclusive"
    },
    {
      id: 3,
      creator: "Maya Patel",
      avatar: "/placeholder.svg",
      tier: "Basic",
      timeAgo: "6 hours ago",
      content: "Quick nutrition tip of the day: Start your morning with this amazing smoothie recipe that boosts energy naturally!",
      isLocked: false,
      likes: 89,
      comments: 12,
      type: "nutrition"
    }
  ];

  return (
    <section className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Latest from Creators</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Discover premium content from your favorite creators. Subscribe to unlock exclusive posts and behind-the-scenes content.
        </p>
      </div>

      <div className="max-w-2xl mx-auto space-y-6">
        {posts.map((post) => (
          <Card key={post.id} className="border-purple-100 hover:shadow-lg transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <Avatar className="w-12 h-12">
                  <AvatarImage src={post.avatar} />
                  <AvatarFallback className="bg-purple-600 text-white">
                    {post.creator.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <span className="font-semibold text-gray-900">{post.creator}</span>
                      <Badge 
                        variant="secondary" 
                        className={`text-xs ${
                          post.tier === 'VIP' ? 'bg-yellow-100 text-yellow-800' :
                          post.tier === 'Premium' ? 'bg-purple-100 text-purple-800' :
                          'bg-pink-100 text-pink-800'
                        }`}
                      >
                        {post.tier}
                      </Badge>
                      <span className="text-sm text-gray-500">{post.timeAgo}</span>
                    </div>
                    <Button variant="ghost" size="sm">
                      <Bookmark className="w-4 h-4" />
                    </Button>
                  </div>
                  
                  <div className="relative mb-4">
                    {post.isLocked ? (
                      <>
                        <p className="text-gray-600 blur-sm">{post.content}</p>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/70 to-transparent flex items-center justify-center">
                          <Button size="sm" className="bg-gradient-to-r from-purple-600 to-indigo-600">
                            <Lock className="w-4 h-4 mr-2" />
                            Subscribe to View
                          </Button>
                        </div>
                      </>
                    ) : (
                      <p className="text-gray-800">{post.content}</p>
                    )}
                  </div>

                  {!post.isLocked && (
                    <div className="h-48 bg-gradient-to-br from-purple-100 to-indigo-100 rounded-lg mb-4 flex items-center justify-center">
                      <span className="text-gray-500">Content Preview</span>
                    </div>
                  )}
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-6">
                      <button className="flex items-center space-x-2 text-gray-500 hover:text-red-500 transition-colors">
                        <Heart className="w-5 h-5" />
                        <span className="text-sm">{post.likes}</span>
                      </button>
                      <button className="flex items-center space-x-2 text-gray-500 hover:text-purple-600 transition-colors">
                        <MessageCircle className="w-5 h-5" />
                        <span className="text-sm">{post.comments}</span>
                      </button>
                      <button className="flex items-center space-x-2 text-gray-500 hover:text-purple-600 transition-colors">
                        <Share2 className="w-5 h-5" />
                        <span className="text-sm">Share</span>
                      </button>
                    </div>
                    
                    {post.isLocked && (
                      <Badge className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
                        <Lock className="w-3 h-3 mr-1" />
                        Exclusive
                      </Badge>
                    )}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center mt-12">
        <Button size="lg" className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700">
          View More Content
        </Button>
      </div>
    </section>
  );
};
