
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Heart, MessageCircle, Lock, Crown, Star, Shield, Users, DollarSign } from "lucide-react";
import { CreatorProfile } from "@/components/CreatorProfile";
import { SubscriptionTiers } from "@/components/SubscriptionTiers";
import { ContentFeed } from "@/components/ContentFeed";
import { MessagingInterface } from "@/components/MessagingInterface";

const Index = () => {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-indigo-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-purple-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg flex items-center justify-center">
                <Crown className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                CreatorSpace
              </h1>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <button
                onClick={() => setActiveTab("home")}
                className={`px-4 py-2 rounded-lg transition-all ${
                  activeTab === "home"
                    ? "bg-purple-100 text-purple-700"
                    : "text-gray-600 hover:text-purple-600"
                }`}
              >
                Home
              </button>
              <button
                onClick={() => setActiveTab("creators")}
                className={`px-4 py-2 rounded-lg transition-all ${
                  activeTab === "creators"
                    ? "bg-purple-100 text-purple-700"
                    : "text-gray-600 hover:text-purple-600"
                }`}
              >
                Creators
              </button>
              <button
                onClick={() => setActiveTab("messages")}
                className={`px-4 py-2 rounded-lg transition-all ${
                  activeTab === "messages"
                    ? "bg-purple-100 text-purple-700"
                    : "text-gray-600 hover:text-purple-600"
                }`}
              >
                Messages
              </button>
            </nav>
            <div className="flex items-center space-x-3">
              <Button variant="ghost" className="text-purple-600 hover:bg-purple-50">
                Sign In
              </Button>
              <Button className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {activeTab === "home" && (
          <>
            {/* Hero Section */}
            <section className="text-center py-16">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-5xl font-bold text-gray-900 mb-6">
                  Premium Content.{" "}
                  <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                    Exclusive Access.
                  </span>
                </h2>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Connect with your favorite creators through premium subscriptions. 
                  Access exclusive content, private messaging, and behind-the-scenes experiences.
                </p>
                <div className="flex justify-center space-x-4">
                  <Button size="lg" className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 px-8 py-3">
                    <Crown className="w-5 h-5 mr-2" />
                    Become a Creator
                  </Button>
                  <Button size="lg" variant="outline" className="border-purple-300 text-purple-600 hover:bg-purple-50 px-8 py-3">
                    Explore Creators
                  </Button>
                </div>
              </div>
            </section>

            {/* Features */}
            <section className="py-16">
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="border-purple-100 hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <CardHeader>
                    <Shield className="w-12 h-12 text-purple-600 mb-4" />
                    <CardTitle className="text-xl">Privacy First</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      End-to-end encryption and advanced privacy controls ensure your content and conversations stay secure.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-purple-100 hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <CardHeader>
                    <DollarSign className="w-12 h-12 text-purple-600 mb-4" />
                    <CardTitle className="text-xl">Monetize Content</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Flexible subscription tiers and direct messaging options help creators maximize their earnings.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-purple-100 hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <CardHeader>
                    <Users className="w-12 h-12 text-purple-600 mb-4" />
                    <CardTitle className="text-xl">Exclusive Community</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Build meaningful relationships with subscribers through premium content and personal interactions.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Sample Content Feed */}
            <ContentFeed />
          </>
        )}

        {activeTab === "creators" && <CreatorProfile />}
        {activeTab === "messages" && <MessagingInterface />}
      </main>
    </div>
  );
};

export default Index;
