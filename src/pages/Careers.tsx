import { Heart, Globe, Rocket, Users, Briefcase, Code } from "lucide-react";
import { Button } from "@/components/ui/button";

const openPositions = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    department: "Engineering",
    location: "Dhaka, Bangladesh / Remote",
    type: "Full-time",
    icon: Code,
  },
  {
    id: 2,
    title: "Product Manager",
    department: "Product",
    location: "Dhaka, Bangladesh",
    type: "Full-time",
    icon: Briefcase,
  },
  {
    id: 3,
    title: "Security Engineer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    icon: Code,
  },
  {
    id: 4,
    title: "UX/UI Designer",
    department: "Design",
    location: "Dhaka, Bangladesh / Remote",
    type: "Full-time",
    icon: Briefcase,
  },
];

const benefits = [
  {
    icon: Heart,
    title: "Work-Life Balance",
    description: "Flexible hours and remote work options to help you maintain a healthy balance.",
  },
  {
    icon: Globe,
    title: "Global Impact",
    description: "Your work directly impacts millions of users across the world.",
  },
  {
    icon: Rocket,
    title: "Growth & Learning",
    description: "Continuous learning opportunities and career development programs.",
  },
  {
    icon: Users,
    title: "Amazing Team",
    description: "Work with talented, passionate people who care about making a difference.",
  },
];

const Careers = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center animate-fade-up">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Join Our Mission
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Help us build a safer digital world for every family
            </p>
            <div className="inline-block px-6 py-3 bg-accent/10 rounded-full border border-accent/20">
              <span className="text-accent font-semibold">We're Hiring!</span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Why Hifzio?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join a team that's passionate about making a real difference
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="text-center animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-accent/20 to-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <benefit.icon className="text-accent" size={32} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Open Positions
            </h2>
            <p className="text-lg text-muted-foreground">
              Find your perfect role and apply today
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {openPositions.map((position, index) => (
              <div
                key={position.id}
                className="bg-card rounded-2xl p-6 shadow-soft hover:shadow-card transition-all duration-300 border border-border hover:border-accent/50 animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-accent/20 to-primary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <position.icon className="text-accent" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-1">
                        {position.title}
                      </h3>
                      <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                        <span>{position.department}</span>
                        <span>•</span>
                        <span>{position.location}</span>
                        <span>•</span>
                        <span>{position.type}</span>
                      </div>
                    </div>
                  </div>
                  <Button variant="default" className="md:flex-shrink-0">
                    Apply Now
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application CTA */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center animate-fade-up">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Don't See the Right Role?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We're always looking for talented people. Send us your resume and tell us how you can contribute to our mission.
            </p>
            <Button variant="accent" size="lg">
              Send General Application
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
