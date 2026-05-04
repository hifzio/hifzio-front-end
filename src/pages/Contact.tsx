import { useState, type ChangeEvent, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle, 
  Twitter, 
  Linkedin, 
  Instagram,
  LoaderCircle,
  Send
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { sendContactEmail } from "@/lib/email";

const heroPattern =
  "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    try {
      setIsSubmitting(true);
      await sendContactEmail(formData);

      toast({
        title: "Message Sent!",
        description: "Thank you for contacting us. We'll get back to you soon.",
      });

      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : "Failed to send message.";
      toast({
        title: "Unable to send",
        description: message,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section - Enhanced */}
      <section className="relative bg-gradient-hero py-24 overflow-hidden">
        {/* Subtle pattern overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{ backgroundImage: heroPattern }}
        />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-fade-up">
            <div className="inline-flex items-center gap-2 bg-accent/10 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6">
              <MessageCircle className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-accent">We're here to help</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Get In Touch
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Have questions about Hifzio, need support, or want to collaborate? 
              We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            
            {/* Left Column - Contact Info */}
            <div className="space-y-8 animate-fade-up">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Let's Talk
                </h2>
                <p className="text-muted-foreground text-lg">
                  We typically respond within <span className="font-semibold text-accent">24 hours</span> on business days.
                </p>
              </div>

              {/* Contact Methods - Cards */}
              <div className="space-y-5">
                <div className="group flex items-start gap-5 p-5 rounded-2xl bg-card border border-border hover:border-accent/30 hover:shadow-card transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                    <Mail className="text-accent w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-lg mb-1">General Enquiries</h3>
                    <a href="mailto:hello@hifzio.com" className="text-muted-foreground hover:text-accent transition-colors">
                      hello@hifzio.com
                    </a>
                  </div>
                </div>

                <div className="group flex items-start gap-5 p-5 rounded-2xl bg-card border border-border hover:border-accent/30 hover:shadow-card transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                    <Mail className="text-accent w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-lg mb-1">Technical Support</h3>
                    <a href="mailto:support@hifzio.com" className="text-muted-foreground hover:text-accent transition-colors">
                      support@hifzio.com
                    </a>
                  </div>
                </div>

                <div className="group flex items-start gap-5 p-5 rounded-2xl bg-card border border-border hover:border-accent/30 hover:shadow-card transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                    <Mail className="text-accent w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-lg mb-1">Privacy & Security</h3>
                    <div className="space-y-1">
                      <a href="mailto:privacy@hifzio.com" className="text-muted-foreground hover:text-accent transition-colors block">
                        privacy@hifzio.com
                      </a>
                      <a href="mailto:security@hifzio.com" className="text-muted-foreground hover:text-accent transition-colors block">
                        security@hifzio.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="group flex items-start gap-5 p-5 rounded-2xl bg-card border border-border hover:border-accent/30 hover:shadow-card transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                    <MapPin className="text-accent w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-lg mb-1">Office</h3>
                    <p className="text-muted-foreground">
                      Dhaka, Bangladesh<br />
                      <span className="text-sm">(Remote-first team, global reach)</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Response Time Badge */}
              <div className="flex items-center gap-3 p-4 bg-muted/30 rounded-xl border border-border">
                <Clock className="text-accent w-5 h-5" />
                <span className="text-sm text-muted-foreground">
                  Average response time: <strong className="text-foreground">&lt; 12 hours</strong> for premium support
                </span>
              </div>

              {/* Map Placeholder - Enhanced */}
              <div className="relative rounded-2xl overflow-hidden border border-border h-64 mt-4 group">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <MapPin className="text-accent w-8 h-8 mb-3 animate-pulse" />
                  <p className="text-muted-foreground font-medium">Hifzio Global HQ</p>
                  <p className="text-sm text-muted-foreground/70">Dhaka, Bangladesh</p>
                  <p className="text-xs text-muted-foreground/50 mt-4">Interactive map coming soon</p>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="font-semibold text-foreground mb-4">Follow our journey</h3>
                <div className="flex gap-3">
                  <a href="#" className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent/50 transition-all">
                    <Twitter size={18} />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent/50 transition-all">
                    <Linkedin size={18} />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent/50 transition-all">
                    <Instagram size={18} />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form (Enhanced) */}
            <div className="bg-card rounded-2xl p-8 shadow-card border border-border animate-fade-up" style={{ animationDelay: "0.1s" }}>
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-foreground mb-2">Send us a message</h2>
                <p className="text-muted-foreground">Fill out the form below and we'll get back to you promptly.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">
                    Full name <span className="text-accent">*</span>
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g., Ahmed Rahman"
                    required
                    className="focus:ring-accent/20 focus:border-accent transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">
                    Email address <span className="text-accent">*</span>
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="hello@example.com"
                    required
                    className="focus:ring-accent/20 focus:border-accent transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-1.5">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="How can we help?"
                    className="focus:ring-accent/20 focus:border-accent transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5">
                    Message <span className="text-accent">*</span>
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us more about your question or feedback..."
                    rows={6}
                    required
                    className="focus:ring-accent/20 focus:border-accent transition-all resize-none"
                  />
                </div>

                <Button 
                  type="submit" 
                  variant="hero" 
                  className="w-full group" 
                  disabled={isSubmitting}
                  aria-busy={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <LoaderCircle size={18} className="mr-2 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={18} className="mr-2 group-hover:translate-x-0.5 transition-transform" />
                      Send Message
                    </>
                  )}
                </Button>
                <p className="text-xs text-center text-muted-foreground mt-4">
                  By submitting this form, you agree to our <a href="/privacy" className="text-accent hover:underline">Privacy Policy</a>.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Teaser */}
      <section className="py-12 border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground text-sm">
            Need immediate help? Check our <a href="#" className="text-accent hover:underline">Help Center</a> or email us directly at{" "}
            <a href="mailto:support@hifzio.com" className="text-accent hover:underline">support@hifzio.com</a>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Contact;
