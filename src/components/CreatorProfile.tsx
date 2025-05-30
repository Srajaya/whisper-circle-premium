
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Heart, MessageCircle, Lock, Crown, Star, Calendar, Users } from "lucide-react";
import { SubscriptionTiers } from "./SubscriptionTiers";

export const CreatorProfile = () => {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Creator Header */}
      <Card className="border-purple-100 overflow-hidden">
        <div className="h-48 bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400"></div>
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6 -mt-16">
            <Avatar className="w-24 h-24 border-4 border-white shadow-lg">
              <AvatarImage src="/placeholder.svg" />
              <AvatarFallback className="bg-purple-600 text-white text-2xl">SC</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="flex items-center space-x-3 mb-2">
                <h1 className="text-3xl font-bold text-gray-900">Sarah Chen</h1>
                <Badge className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
                  <Crown className="w-4 h-4 mr-1" />
                  Verified Creator
                </Badge>
              </div>
              <p className="text-gray-600 mb-4 max-w-2xl">
                Fitness trainer & wellness coach sharing exclusive workout routines, 
                nutrition tips, and personal journey content. Join me for a healthier lifestyle! 💪
              </p>
              <div className="flex items-center space-x-6 text-sm text-gray-500">
                <div className="flex items-center space-x-1">
                  <Users className="w-4 h-4" />
                  <span>2.4K subscribers</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Calendar className="w-4 h-4" />
                  <span>Joined March 2024</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-500" />
                  <span>4.9 rating</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col space-y-2">
              <Button className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700">
                <Heart className="w-4 h-4 mr-2" />
                Subscribe
              </Button>
              <Button variant="outline" className="border-purple-300 text-purple-600 hover:bg-purple-50">
                <MessageCircle className="w-4 h-4 mr-2" />
                Message
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Subscription Tiers */}
      <SubscriptionTiers />

      {/* Recent Posts Preview */}
      <Card className="border-purple-100">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Lock className="w-5 h-5 text-purple-600" />
            <span>Recent Posts</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {[1, 2, 3].map((post) => (
            <div key={post} className="border border-purple-100 rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex items-start space-x-3">
                <Avatar className="w-10 h-10">
                  <AvatarImage src="/placeholder.svg" />
                  <AvatarFallback className="bg-purple-600 text-white">SC</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="font-semibold text-gray-900">Sarah Chen</span>
                    <Badge variant="secondary" className="text-xs">Premium</Badge>
                    <span className="text-sm text-gray-500">2 hours ago</span>
                  </div>
                  <div className="relative">
                    <p className="text-gray-600 mb-3 blur-sm">
                      Just finished an amazing workout session! Here's my new routine that's been getting incredible results...
                    </p>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent flex items-center justify-center">
                      <Button size="sm" className="bg-gradient-to-r from-purple-600 to-indigo-600">
                        <Lock className="w-4 h-4 mr-2" />
                        Subscribe to View
                      </Button>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <button className="flex items-center space-x-1 hover:text-purple-600">
                      <Heart className="w-4 h-4" />
                      <span>24</span>
                    </button>
                    <button className="flex items-center space-x-1 hover:text-purple-600">
                      <MessageCircle className="w-4 h-4" />
                      <span>8</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};
