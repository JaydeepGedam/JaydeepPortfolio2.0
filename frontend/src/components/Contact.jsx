import React, { useState, useRef, useEffect } from 'react';
import { Send, Mail, Phone, MapPin, Linkedin, Github, Download, ExternalLink, CheckCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { useToast } from '../hooks/use-toast';
import { personalInfo } from '../mock/portfolioData';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef();
  const { toast } = useToast();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Mock form submission - In real app, this would send to backend
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: "Message Sent Successfully! 🚀",
        description: "Thank you for reaching out. I'll get back to you soon!",
        duration: 5000
      });
      
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      toast({
        title: "Error Sending Message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: personalInfo.contact.email,
      href: `mailto:${personalInfo.contact.email}`,
      description: 'Best for detailed discussions'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: personalInfo.contact.phone,
      href: `tel:${personalInfo.contact.phone}`,
      description: 'Quick conversations welcome'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: personalInfo.contact.location,
      href: '#',
      description: 'Available for local meetings'
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      username: personalInfo.contact.linkedin,
      href: `https://linkedin.com/in/${personalInfo.contact.linkedin}`,
      color: 'text-blue-400 hover:text-blue-300'
    },
    {
      icon: Github,
      label: 'GitHub',
      username: personalInfo.contact.github,
      href: `https://github.com/${personalInfo.contact.github}`,
      color: 'text-gray-400 hover:text-white'
    }
  ];

  return (
    <section id="contact" ref={sectionRef} className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-48 h-48 bg-green-400 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-56 h-56 bg-yellow-400 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-blue-400 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section header */}
        <div 
          className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-white">LET'S </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-yellow-400">
              CONNECT
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to collaborate on innovative projects or discuss exciting opportunities? I'd love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact form */}
          <div 
            className={`lg:col-span-2 transform transition-all duration-1000 delay-200 ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
            }`}
          >
            <Card className="bg-black/50 border-gray-700">
              <CardHeader>
                <CardTitle className="text-2xl text-white flex items-center gap-2">
                  <Send className="w-6 h-6 text-green-400" />
                  Send me a message
                </CardTitle>
                <p className="text-gray-300">
                  Fill out the form below and I'll get back to you as soon as possible.
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                        Your Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="bg-gray-800 border-gray-600 text-white focus:border-green-400"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        Your Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="bg-gray-800 border-gray-600 text-white focus:border-green-400"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="bg-gray-800 border-gray-600 text-white focus:border-green-400"
                      placeholder="Project collaboration, Job opportunity, etc."
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="bg-gray-800 border-gray-600 text-white focus:border-green-400 resize-none"
                      placeholder="Tell me about your project, idea, or opportunity..."
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-green-400 to-yellow-400 text-black hover:from-green-500 hover:to-yellow-500 transition-all duration-300 font-semibold py-3"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-black mr-2" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 w-4 h-4" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact info */}
          <div 
            className={`lg:col-span-1 space-y-6 transform transition-all duration-1000 delay-400 ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
            }`}
          >
            {/* Direct contact methods */}
            <Card className="bg-black/50 border-gray-700">
              <CardHeader>
                <CardTitle className="text-xl text-white">Get in Touch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactMethods.map((method, index) => {
                  const Icon = method.icon;
                  return (
                    <a
                      key={index}
                      href={method.href}
                      className="flex items-start gap-3 p-3 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-colors group"
                    >
                      <div className="p-2 bg-green-400/10 rounded-lg text-green-400 group-hover:bg-green-400 group-hover:text-black transition-all">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="flex-1">
                        <div className="text-white font-medium">{method.label}</div>
                        <div className="text-green-400 text-sm">{method.value}</div>
                        <div className="text-gray-400 text-xs mt-1">{method.description}</div>
                      </div>
                    </a>
                  );
                })}
              </CardContent>
            </Card>

            {/* Social links */}
            <Card className="bg-black/50 border-gray-700">
              <CardHeader>
                <CardTitle className="text-xl text-white">Follow Me</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-colors group"
                    >
                      <Icon className={`w-5 h-5 ${social.color} transition-colors`} />
                      <div className="flex-1">
                        <div className="text-white font-medium">{social.label}</div>
                        <div className="text-gray-400 text-sm">@{social.username}</div>
                      </div>
                      <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
                    </a>
                  );
                })}
              </CardContent>
            </Card>


          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
