
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Crown, Star, Heart } from "lucide-react";

export const SubscriptionTiers = () => {
  const tiers = [
    {
      name: "Basic",
      price: "$9.99",
      period: "month",
      icon: Heart,
      color: "from-pink-500 to-rose-500",
      features: [
        "Access to basic content",
        "Monthly live streams",
        "Community chat access",
        "Basic support"
      ],
      popular: false
    },
    {
      name: "Premium",
      price: "$19.99",
      period: "month",
      icon: Star,
      color: "from-purple-500 to-indigo-500",
      features: [
        "All Basic features",
        "Exclusive premium content",
        "Weekly 1-on-1 sessions",
        "Custom workout plans",
        "Priority messaging",
        "Early content access"
      ],
      popular: true
    },
    {
      name: "VIP",
      price: "$39.99",
      period: "month",
      icon: Crown,
      color: "from-yellow-400 to-orange-500",
      features: [
        "All Premium features",
        "Daily personal check-ins",
        "Video call sessions",
        "Custom meal plans",
        "24/7 priority support",
        "Exclusive merchandise",
        "Behind-the-scenes content"
      ],
      popular: false
    }
  ];

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Choose Your Experience</h2>
        <p className="text-gray-600">Select the perfect subscription tier for your journey</p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-6">
        {tiers.map((tier) => {
          const IconComponent = tier.icon;
          return (
            <Card 
              key={tier.name} 
              className={`relative border-purple-100 hover:shadow-xl transition-all duration-300 hover:scale-105 ${
                tier.popular ? 'ring-2 ring-purple-500 border-purple-500' : ''
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-4 py-1">
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-r ${tier.color} flex items-center justify-center mb-4`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900">{tier.name}</CardTitle>
                <div className="text-center">
                  <span className="text-4xl font-bold text-gray-900">{tier.price}</span>
                  <span className="text-gray-500">/{tier.period}</span>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  {tier.features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full mt-6 ${
                    tier.popular 
                      ? 'bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700' 
                      : 'bg-white border-2 border-purple-200 text-purple-600 hover:bg-purple-50'
                  }`}
                  variant={tier.popular ? "default" : "outline"}
                >
                  {tier.popular ? 'Get Started' : 'Choose Plan'}
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};
