
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Send, Crown, Circle, Image, Smile, Paperclip } from "lucide-react";

export const MessagingInterface = () => {
  const [selectedChat, setSelectedChat] = useState(0);
  const [message, setMessage] = useState("");

  const conversations = [
    {
      id: 1,
      creator: "Sarah Chen",
      avatar: "/placeholder.svg",
      lastMessage: "Thanks for subscribing! Here's your welcome message...",
      time: "2m ago",
      unread: 2,
      isOnline: true,
      tier: "Premium"
    },
    {
      id: 2,
      creator: "Alex Rivera",
      avatar: "/placeholder.svg",
      lastMessage: "The exclusive content you requested is ready!",
      time: "1h ago",
      unread: 0,
      isOnline: false,
      tier: "VIP"
    },
    {
      id: 3,
      creator: "Maya Patel",
      avatar: "/placeholder.svg",
      lastMessage: "Hope you enjoyed today's workout session! 💪",
      time: "3h ago",
      unread: 1,
      isOnline: true,
      tier: "Basic"
    }
  ];

  const messages = [
    {
      id: 1,
      sender: "creator",
      content: "Hey! Thanks so much for subscribing to my premium tier! 🎉",
      time: "2:30 PM",
      type: "text"
    },
    {
      id: 2,
      sender: "creator",
      content: "I wanted to personally welcome you and let you know about some exclusive content I have planned for this week.",
      time: "2:31 PM",
      type: "text"
    },
    {
      id: 3,
      sender: "user",
      content: "Thank you! I'm really excited to be here. Your content is amazing!",
      time: "2:45 PM",
      type: "text"
    },
    {
      id: 4,
      sender: "creator",
      content: "That means the world to me! Here's a sneak peek at tomorrow's exclusive workout routine.",
      time: "2:46 PM",
      type: "text"
    },
    {
      id: 5,
      sender: "creator",
      content: "Exclusive_Workout_Preview.jpg",
      time: "2:46 PM",
      type: "image"
    }
  ];

  const handleSendMessage = () => {
    if (message.trim()) {
      // Handle sending message
      setMessage("");
    }
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid md:grid-cols-3 gap-6 h-[600px]">
        {/* Conversations List */}
        <Card className="border-purple-100">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <span>Messages</span>
              <Badge variant="secondary" className="text-xs">3</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="space-y-1">
              {conversations.map((conversation, index) => (
                <div
                  key={conversation.id}
                  onClick={() => setSelectedChat(index)}
                  className={`p-4 hover:bg-purple-50 cursor-pointer transition-colors border-l-4 ${
                    selectedChat === index
                      ? 'bg-purple-50 border-purple-500'
                      : 'border-transparent'
                  }`}
                >
                  <div className="flex items-start space-x-3">
                    <div className="relative">
                      <Avatar className="w-12 h-12">
                        <AvatarImage src={conversation.avatar} />
                        <AvatarFallback className="bg-purple-600 text-white">
                          {conversation.creator.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      {conversation.isOnline && (
                        <Circle className="w-3 h-3 text-green-500 fill-current absolute -bottom-1 -right-1 bg-white rounded-full" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center space-x-2">
                          <span className="font-semibold text-sm text-gray-900 truncate">
                            {conversation.creator}
                          </span>
                          {conversation.tier === 'VIP' && (
                            <Crown className="w-3 h-3 text-yellow-500" />
                          )}
                        </div>
                        <span className="text-xs text-gray-500">{conversation.time}</span>
                      </div>
                      <p className="text-sm text-gray-600 truncate mb-1">
                        {conversation.lastMessage}
                      </p>
                      <div className="flex items-center justify-between">
                        <Badge 
                          variant="outline" 
                          className={`text-xs ${
                            conversation.tier === 'VIP' ? 'border-yellow-300 text-yellow-700' :
                            conversation.tier === 'Premium' ? 'border-purple-300 text-purple-700' :
                            'border-pink-300 text-pink-700'
                          }`}
                        >
                          {conversation.tier}
                        </Badge>
                        {conversation.unread > 0 && (
                          <Badge className="bg-purple-600 text-white text-xs">
                            {conversation.unread}
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Chat Interface */}
        <Card className="md:col-span-2 border-purple-100 flex flex-col">
          {/* Chat Header */}
          <CardHeader className="border-b border-purple-100">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Avatar className="w-10 h-10">
                  <AvatarImage src={conversations[selectedChat]?.avatar} />
                  <AvatarFallback className="bg-purple-600 text-white">
                    {conversations[selectedChat]?.creator.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-semibold text-gray-900">
                    {conversations[selectedChat]?.creator}
                  </h3>
                  <div className="flex items-center space-x-2">
                    <Badge 
                      variant="outline" 
                      className={`text-xs ${
                        conversations[selectedChat]?.tier === 'VIP' ? 'border-yellow-300 text-yellow-700' :
                        conversations[selectedChat]?.tier === 'Premium' ? 'border-purple-300 text-purple-700' :
                        'border-pink-300 text-pink-700'
                      }`}
                    >
                      {conversations[selectedChat]?.tier} Subscriber
                    </Badge>
                    {conversations[selectedChat]?.isOnline && (
                      <span className="text-xs text-green-600">Online</span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </CardHeader>

          {/* Messages */}
          <CardContent className="flex-1 p-4 overflow-y-auto">
            <div className="space-y-4">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                      msg.sender === 'user'
                        ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white'
                        : 'bg-gray-100 text-gray-900'
                    }`}
                  >
                    {msg.type === 'image' ? (
                      <div className="space-y-2">
                        <div className="w-48 h-32 bg-gradient-to-br from-purple-100 to-indigo-100 rounded flex items-center justify-center">
                          <Image className="w-8 h-8 text-gray-400" />
                        </div>
                        <p className="text-sm">{msg.content}</p>
                      </div>
                    ) : (
                      <p>{msg.content}</p>
                    )}
                    <p className={`text-xs mt-1 ${
                      msg.sender === 'user' ? 'text-purple-100' : 'text-gray-500'
                    }`}>
                      {msg.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>

          {/* Message Input */}
          <div className="p-4 border-t border-purple-100">
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="sm">
                <Paperclip className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Image className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Smile className="w-4 h-4" />
              </Button>
              <Input
                placeholder="Type your message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                className="flex-1 border-purple-200 focus:border-purple-500"
              />
              <Button 
                onClick={handleSendMessage}
                className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};
