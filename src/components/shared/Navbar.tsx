import { ShoppingCart, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/button";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="text-xl font-bold text-primary">
              StationaryShop
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-gray-700 hover:text-primary">
              Home
            </a>
            <a href="/products" className="text-gray-700 hover:text-primary">
              Products
            </a>
            <a href="/about" className="text-gray-700 hover:text-primary">
              About
            </a>
            <a href="/contact" className="text-gray-700 hover:text-primary">
              Contact
            </a>
            <Button variant="ghost" size="icon">
              <ShoppingCart className="h-5 w-5" />
              <span className="sr-only">Shopping cart</span>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="/"
                className="block px-3 py-2 text-gray-700 hover:text-primary"
              >
                Home
              </a>
              <a
                href="/products"
                className="block px-3 py-2 text-gray-700 hover:text-primary"
              >
                Products
              </a>
              <a
                href="/about"
                className="block px-3 py-2 text-gray-700 hover:text-primary"
              >
                About
              </a>
              <a
                href="/contact"
                className="block px-3 py-2 text-gray-700 hover:text-primary"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
