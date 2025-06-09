"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";
import siteConfig from "@/data/content/site-config.json";
import { cn } from "@/lib/utils";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-blue-900 text-white py-2 text-sm">
        <div className="container">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <Phone className="h-4 w-4" />
                <span>{siteConfig.contact.phone}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Mail className="h-4 w-4" />
                <span>{siteConfig.contact.email}</span>
              </div>
            </div>
            <div className="hidden md:block">
              <span>{siteConfig.welcomeMessage}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-md border-b-4 border-red-600 sticky top-0 z-50">
        <div className="container">
          <div className="flex items-center justify-between py-4">
            {/* Logo & School Info */}
            <Link href="/" className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center">
                {/* TODO: Replace with image */}
                <span className="text-white font-bold text-xl">SK</span>{" "}
              </div>
              <div>
                <h1 className="text-2xl font-bold text-blue-900">
                  {siteConfig.name}
                </h1>
                <p className="text-sm text-gray-600">{siteConfig.tagline}</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6">
              {siteConfig.navigation.map((item) => (
                <div key={item.href} className="relative group">
                  <Link
                    href={item.href}
                    className="text-gray-700 hover:text-blue-900 font-medium py-2 px-3 rounded transition-colors relative"
                  >
                    {item.title}
                    {item.label && (
                      <span className="ml-2 bg-red-600 text-white px-2 py-1 rounded text-xs">
                        {item.label}
                      </span>
                    )}
                  </Link>

                  {/* Dropdown Menu */}
                  {item.children && (
                    <div className="absolute top-full left-0 bg-white shadow-lg border rounded-md mt-1 min-w-[200px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                      <div className="py-2">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-4 py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-900 transition-colors"
                          >
                            {child.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-2"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={cn("lg:hidden", mobileMenuOpen ? "block" : "hidden")}>
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50"
          onClick={() => setMobileMenuOpen(false)}
        />
        <div className="fixed top-0 right-0 h-full w-80 bg-white z-50 shadow-xl flex flex-col">
          <div className="p-4 border-b border-gray-200 flex-shrink-0">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-blue-900 rounded-full flex items-center justify-center">
                  {/* TODO: Replace with image */}
                  <span className="text-white font-bold">SK</span>
                </div>
                <span className="font-bold text-blue-900">
                  {siteConfig.name}
                </span>
              </div>
              <button onClick={() => setMobileMenuOpen(false)}>
                <X className="h-6 w-6" />
              </button>
            </div>
          </div>

          <div className="p-4 flex-1 overflow-y-auto">
            <nav className="space-y-2">
              {siteConfig.navigation.map((item) => (
                <div key={item.href}>
                  <Link
                    href={item.href}
                    className="block py-3 px-4 text-gray-700 hover:bg-blue-50 hover:text-blue-900 rounded transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.title}
                    {item.label && (
                      <span className="ml-2 bg-red-600 text-white px-2 py-1 rounded text-xs">
                        {item.label}
                      </span>
                    )}
                  </Link>
                  {item.children && (
                    <div className="ml-4 mt-1 space-y-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block py-2 px-4 text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-900 rounded"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {child.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
