import { useState } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "@/components/NavLink";
import { Menu, X } from "lucide-react";

import Logo from "@/assets/logo-with-text.svg";


export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/products", label: "Products" },
    // { to: "/careers", label: "Careers" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2 group">

            <span className="flex items-center space-x-2 text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              <img
                src={Logo}
                alt="Hifzio Technologies logo"
                className="h-[60px] w-auto"
              />
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm font-medium"
                activeClassName="text-primary font-semibold"
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-secondary transition-colors"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === "/"}
                  onClick={() => setIsOpen(false)}
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm font-medium px-4 py-2 rounded-lg hover:bg-secondary"
                  activeClassName="text-primary font-semibold bg-secondary/50"
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
