"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { Send } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message is too short"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");
    
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      
      if (response.ok) {
        setSubmitStatus("success");
        reset();
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="contact" className="surface-structural w-full max-w-2xl mx-auto p-8">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold font-heading tracking-tight text-theme-text">Get in Touch</h2>
        <p className="text-theme-muted mt-2">Interested in building something scalable? Let's talk.</p>
      </div>
      
      {submitStatus === "success" && (
        <div className="mb-6 p-4 bg-green-500/10 border border-green-500/20 text-green-600 dark:text-green-400 rounded-lg text-sm font-medium">
          Message sent successfully! I'll be in touch soon.
        </div>
      )}
      
      {submitStatus === "error" && (
        <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 rounded-lg text-sm font-medium">
          Something went wrong. Please try again later.
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium text-theme-text">Name</label>
            <input
              {...register("name")}
              id="name"
              className={cn(
                "flex h-10 w-full rounded-theme border border-theme-muted/30 bg-theme-base px-3 py-2 text-sm text-theme-text ring-offset-theme-base file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-theme-muted/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-theme-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-colors",
                errors.name && "border-red-500 focus-visible:ring-red-500"
              )}
              placeholder="John Doe"
            />
            {errors.name && (
              <p className="text-sm text-red-500">{errors.name.message}</p>
            )}
          </div>
          
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium text-theme-text">Email</label>
            <input
              {...register("email")}
              id="email"
              type="email"
              className={cn(
                "flex h-10 w-full rounded-theme border border-theme-muted/30 bg-theme-base px-3 py-2 text-sm text-theme-text ring-offset-theme-base file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-theme-muted/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-theme-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-colors",
                errors.email && "border-red-500 focus-visible:ring-red-500"
              )}
              placeholder="john@example.com"
            />
            {errors.email && (
              <p className="text-sm text-red-500">{errors.email.message}</p>
            )}
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className="text-sm font-medium text-theme-text">Message</label>
          <textarea
            {...register("message")}
            id="message"
            className={cn(
              "flex min-h-[120px] w-full rounded-theme border border-theme-muted/30 bg-theme-base px-3 py-2 text-sm text-theme-text ring-offset-theme-base placeholder:text-theme-muted/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-theme-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-colors resize-y",
              errors.message && "border-red-500 focus-visible:ring-red-500"
            )}
            placeholder="Tell me about your project..."
          />
          {errors.message && (
            <p className="text-sm text-red-500">{errors.message.message}</p>
          )}
        </div>

        <Button 
          type="submit" 
          className="w-full h-11 text-base rounded-theme bg-theme-primary text-theme-base hover:bg-theme-primary/90"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <span className="flex items-center gap-2">
              <span className="h-4 w-4 rounded-full border-2 border-theme-base border-t-transparent animate-spin" />
              Sending...
            </span>
          ) : (
            <span className="flex items-center gap-2">
              Send Message <Send className="h-4 w-4" />
            </span>
          )}
        </Button>
      </form>
    </div>
  );
}
