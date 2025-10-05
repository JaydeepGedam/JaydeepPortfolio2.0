import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, Send, X, Bot, User, Minimize2, Maximize2 } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { chatbotData } from '../mock/portfolioData';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: chatbotData.greetings[0],
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getBotResponse = (message) => {
    const lowerMessage = message.toLowerCase();

    // Check for specific keywords
    if (lowerMessage.includes('project') || lowerMessage.includes('nayaan') || lowerMessage.includes('nextbms') || lowerMessage.includes('grocerymate')) {
      if (lowerMessage.includes('nayaan')) {
        return chatbotData.responses.nayaan;
      } else {
        return chatbotData.responses.projects;
      }
    }

    if (lowerMessage.includes('skill') || lowerMessage.includes('technology') || lowerMessage.includes('react') || lowerMessage.includes('javascript')) {
      return chatbotData.responses.skills;
    }

    if (lowerMessage.includes('achievement') || lowerMessage.includes('award') || lowerMessage.includes('patent') || lowerMessage.includes('competition')) {
      return chatbotData.responses.achievements;
    }

    if (lowerMessage.includes('education') || lowerMessage.includes('college') || lowerMessage.includes('degree') || lowerMessage.includes('study')) {
      return chatbotData.responses.education;
    }

    if (lowerMessage.includes('contact') || lowerMessage.includes('email') || lowerMessage.includes('phone') || lowerMessage.includes('reach')) {
      return chatbotData.responses.contact;
    }

    if (lowerMessage.includes('experience') || lowerMessage.includes('internship') || lowerMessage.includes('work')) {
      return chatbotData.responses.experience;
    }

    if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
      return chatbotData.greetings[Math.floor(Math.random() * chatbotData.greetings.length)];
    }

    return chatbotData.fallback;
  };

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      text: inputMessage,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate bot thinking time
    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        text: getBotResponse(inputMessage),
        isBot: true,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const quickQuestions = [
    "Tell me about Nayaan project",
    "What are your skills?",
    "Show me achievements",
    "How to contact you?"
  ];

  const handleQuickQuestion = (question) => {
    setInputMessage(question);
    setTimeout(() => {
      handleSendMessage();
    }, 100);
  };

  return (
    <>
      {/* Chatbot toggle button */}
      {!isOpen && (
        <div className="fixed bottom-6 right-6 z-50">
          <Button
            onClick={() => setIsOpen(true)}
            size="lg"
            className="rounded-full w-16 h-16 bg-gradient-to-r from-green-400 to-yellow-400 text-black hover:from-green-500 hover:to-yellow-500 shadow-lg transition-all duration-300 transform hover:scale-110"
          >
            <MessageCircle className="w-8 h-8" />
          </Button>
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-pulse" />
        </div>
      )}

      {/* Chatbot window */}
      {isOpen && (
        <div
          className={`fixed bottom-6 right-6 z-50 transition-all duration-300 overflow-hidden ${isMinimized ? 'w-80 h-16' : 'w-96 h-[600px]'
            }`}
        >
          <Card className="bg-gray-900/95 backdrop-blur-sm border-green-400/30 h-full flex flex-col shadow-2xl">
            {/* Header */}
            <CardHeader
              className={`flex-shrink-0 bg-gradient-to-r from-green-400/10 to-yellow-400/10 ${isMinimized ? 'py-2 px-3' : 'pb-3 px-4 pt-3'
                }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-gradient-to-r from-green-400 to-yellow-400 rounded-lg text-black">
                    <Bot className="w-5 h-5" />
                  </div>
                  <div className={`${isMinimized ? 'hidden md:block' : 'block'}`}>
                    <CardTitle className="text-white text-sm md:text-lg">
                      Jaydeep's AI Assistant
                    </CardTitle>
                    {!isMinimized && (
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                        <span className="text-green-400 text-sm">Online</span>
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => setIsMinimized(!isMinimized)}
                    className="text-gray-400 hover:text-white hover:bg-green-400/20 p-1 h-8 w-8"
                  >
                    {isMinimized ? (
                      <Maximize2 className="w-4 h-4" />
                    ) : (
                      <Minimize2 className="w-4 h-4" />
                    )}
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => setIsOpen(false)}
                    className="text-gray-400 hover:text-white hover:bg-red-400/20 p-1 h-8 w-8"
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>

            {/* Hide main content when minimized */}
            {!isMinimized && (
              <>
                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                    >
                      <div
                        className={`flex items-start gap-2 max-w-[80%] ${message.isBot ? 'flex-row' : 'flex-row-reverse'
                          }`}
                      >
                        <div
                          className={`p-2 rounded-full flex-shrink-0 ${message.isBot
                              ? 'bg-gradient-to-r from-green-400 to-yellow-400 text-black'
                              : 'bg-gray-700 text-white'
                            }`}
                        >
                          {message.isBot ? <Bot className="w-4 h-4" /> : <User className="w-4 h-4" />}
                        </div>
                        <div
                          className={`p-3 rounded-lg ${message.isBot
                              ? 'bg-gray-800 text-white'
                              : 'bg-gradient-to-r from-green-400 to-yellow-400 text-black'
                            }`}
                        >
                          <p className="text-sm leading-relaxed">{message.text}</p>
                          <p
                            className={`text-xs mt-2 opacity-70 ${message.isBot ? 'text-gray-400' : 'text-black/70'
                              }`}
                          >
                            {message.timestamp.toLocaleTimeString([], {
                              hour: '2-digit',
                              minute: '2-digit',
                            })}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}

                  {isTyping && (
                    <div className="flex justify-start">
                      <div className="flex items-start gap-2">
                        <div className="p-2 rounded-full bg-gradient-to-r from-green-400 to-yellow-400 text-black">
                          <Bot className="w-4 h-4" />
                        </div>
                        <div className="bg-gray-800 text-white p-3 rounded-lg">
                          <div className="flex space-x-1">
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                            <div
                              className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                              style={{ animationDelay: '0.1s' }}
                            />
                            <div
                              className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                              style={{ animationDelay: '0.2s' }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  <div ref={messagesEndRef} />
                </div>

                {/* Quick questions */}
                {messages.length <= 1 && (
                  <div className="px-4 pb-2">
                    <div className="text-gray-400 text-xs mb-2">Quick questions:</div>
                    <div className="flex flex-wrap gap-2">
                      {quickQuestions.map((question, index) => (
                        <Badge
                          key={index}
                          variant="outline"
                          className="cursor-pointer border-green-400/50 text-green-400 hover:bg-green-400/10 text-xs py-1"
                          onClick={() => handleQuickQuestion(question)}
                        >
                          {question}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}

                {/* Input */}
                <div className="flex-shrink-0 p-4 border-t border-gray-700">
                  <div className="flex gap-2">
                    <Input
                      value={inputMessage}
                      onChange={(e) => setInputMessage(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Ask me anything about Jaydeep..."
                      className="bg-gray-800 border-gray-600 text-white flex-1 focus:border-green-400"
                    />
                    <Button
                      onClick={handleSendMessage}
                      disabled={!inputMessage.trim()}
                      className="bg-gradient-to-r from-green-400 to-yellow-400 text-black hover:from-green-500 hover:to-yellow-500 px-4"
                    >
                      <Send className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </>
            )}
          </Card>
        </div>
      )}
    </>
  );
};

export default Chatbot;
