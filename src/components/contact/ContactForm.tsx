"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        className="p-10 rounded-2xl bg-cream-200/60 dark:bg-charcoal-800 border border-gold-300/30 text-center"
      >
        <div className="w-16 h-16 rounded-full bg-gold-300/20 flex items-center justify-center mx-auto mb-6">
          <svg
            className="w-8 h-8 text-gold-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="font-display text-xl text-charcoal-800 dark:text-cream-100">
          Thank you for reaching out
        </h3>
        <p className="mt-4 text-charcoal-600 dark:text-cream-400">
          This is a demo. In production, your message would be sent. We'll get back to you
          soon.
        </p>
      </motion.div>
    );
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="space-y-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-charcoal-700 dark:text-cream-300 mb-2"
          >
            Name
          </label>
          <input
            id="name"
            type="text"
            name="name"
            required
            className="w-full px-4 py-3 rounded-lg border border-charcoal-200 dark:border-charcoal-600 bg-cream-100 dark:bg-charcoal-800 text-charcoal-800 dark:text-cream-100 placeholder-charcoal-400 focus:ring-2 focus:ring-gold-300 focus:border-gold-400 transition-colors"
            placeholder="Your name"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-charcoal-700 dark:text-cream-300 mb-2"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            required
            className="w-full px-4 py-3 rounded-lg border border-charcoal-200 dark:border-charcoal-600 bg-cream-100 dark:bg-charcoal-800 text-charcoal-800 dark:text-cream-100 placeholder-charcoal-400 focus:ring-2 focus:ring-gold-300 focus:border-gold-400 transition-colors"
            placeholder="you@example.com"
          />
        </div>
      </div>
      <div>
        <label
          htmlFor="subject"
          className="block text-sm font-medium text-charcoal-700 dark:text-cream-300 mb-2"
        >
          Subject
        </label>
        <input
          id="subject"
          type="text"
          name="subject"
          className="w-full px-4 py-3 rounded-lg border border-charcoal-200 dark:border-charcoal-600 bg-cream-100 dark:bg-charcoal-800 text-charcoal-800 dark:text-cream-100 placeholder-charcoal-400 focus:ring-2 focus:ring-gold-300 focus:border-gold-400 transition-colors"
          placeholder="How can we help?"
        />
      </div>
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-charcoal-700 dark:text-cream-300 mb-2"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="w-full px-4 py-3 rounded-lg border border-charcoal-200 dark:border-charcoal-600 bg-cream-100 dark:bg-charcoal-800 text-charcoal-800 dark:text-cream-100 placeholder-charcoal-400 focus:ring-2 focus:ring-gold-300 focus:border-gold-400 transition-colors resize-none"
          placeholder="Tell us about your inquiry, wholesale interest, or partnership ideas..."
        />
      </div>
      <Button type="submit" size="lg" className="w-full sm:w-auto">
        Send Message
      </Button>
    </motion.form>
  );
}
