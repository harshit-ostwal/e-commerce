import React, { useState } from "react";
import { Send } from "lucide-react";
import { toast } from "sonner";
import { Heading } from "@/components/ui/Headings";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { contactInfo } from "@/constants/contact";

const initialState = { name: "", email: "", subject: "", message: "" };

function Contact() {
    const [form, setForm] = useState(initialState);
    const [loading, setLoading] = useState(false);

    function handleChange(e) {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }

    function handleSubmit(e) {
        e.preventDefault();

        if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
            toast.error("Please fill in all required fields.");
            return;
        }

        setLoading(true);
        // Simulate async send
        setTimeout(() => {
            setLoading(false);
            setForm(initialState);
            toast.success("Message sent! We'll get back to you soon.");
        }, 1200);
    }

    return (
        <div className="flex flex-col gap-20 pb-10">
            {/* Hero */}
            <div className="flex flex-col items-center gap-6 text-center">
                <span className="text-sm font-semibold uppercase tracking-widest text-amber-500">
                    Contact
                </span>
                <Heading size="h2" className="max-w-2xl text-center">
                    We&apos;d love to hear from you
                </Heading>
                <Heading size="p" className="max-w-xl text-center">
                    Have a question, feedback, or just want to say hello? Fill
                    out the form below and our team will respond within 24
                    hours.
                </Heading>
            </div>

            {/* Contact info cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {contactInfo.map(({ icon: Icon, color, bg, label, value, href }) => (
                    <a
                        key={label}
                        href={href}
                        className="flex flex-col items-center gap-4 rounded-2xl border border-border p-6 text-center transition-colors hover:bg-muted/50"
                    >
                        <div
                            className={`w-12 h-12 rounded-xl ${bg} flex items-center justify-center`}
                        >
                            <Icon className={color} size={22} />
                        </div>
                        <div className="flex flex-col gap-1">
                            <Heading
                                size="h6"
                                className="font-semibold text-foreground"
                            >
                                {label}
                            </Heading>
                            <Heading size="small" className="text-muted-foreground">
                                {value}
                            </Heading>
                        </div>
                    </a>
                ))}
            </div>

            <Separator />

            {/* Form */}
            <div className="flex flex-col items-center gap-10">
                <div className="flex flex-col items-center gap-3 text-center">
                    <Heading size="h3">Send us a message</Heading>
                    <Heading size="p" className="text-center">
                        We read every message and reply as fast as we can.
                    </Heading>
                </div>

                <form
                    onSubmit={handleSubmit}
                    className="w-full max-w-2xl flex flex-col gap-5"
                >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div className="flex flex-col gap-2">
                            <Label htmlFor="name">
                                Name <span className="text-destructive">*</span>
                            </Label>
                            <Input
                                id="name"
                                name="name"
                                placeholder="Jane Doe"
                                value={form.name}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <Label htmlFor="email">
                                Email <span className="text-destructive">*</span>
                            </Label>
                            <Input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="jane@example.com"
                                value={form.email}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <Label htmlFor="subject">Subject</Label>
                        <Input
                            id="subject"
                            name="subject"
                            placeholder="Order issue, product question…"
                            value={form.subject}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <Label htmlFor="message">
                            Message <span className="text-destructive">*</span>
                        </Label>
                        <Textarea
                            id="message"
                            name="message"
                            placeholder="Tell us how we can help…"
                            rows={6}
                            value={form.message}
                            onChange={handleChange}
                        />
                    </div>

                    <Button
                        type="submit"
                        size="lg"
                        className="self-end"
                        disabled={loading}
                    >
                        <Send size={18} />
                        {loading ? "Sending…" : "Send Message"}
                    </Button>
                </form>
            </div>
        </div>
    );
}

export default Contact;
