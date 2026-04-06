import { Heart, Rocket, ShieldCheck, Star, Users, Globe, Award, TrendingUp } from "lucide-react";

export const aboutStats = [
    { icon: Users, value: "10,000+", label: "Happy Customers" },
    { icon: Globe, value: "50+", label: "Countries Served" },
    { icon: Award, value: "200+", label: "Brand Partnerships" },
    { icon: TrendingUp, value: "98%", label: "Satisfaction Rate" },
];

export const aboutValues = [
    {
        icon: Heart,
        color: "text-pink-500",
        bg: "bg-pink-500/10",
        title: "Customer First",
        description:
            "Every decision we make starts with one question: is this good for our customers? Your satisfaction drives everything we do.",
    },
    {
        icon: ShieldCheck,
        color: "text-green-500",
        bg: "bg-green-500/10",
        title: "Trust & Safety",
        description:
            "We partner only with verified sellers and use end-to-end encryption on every transaction so you shop with complete confidence.",
    },
    {
        icon: Rocket,
        color: "text-blue-500",
        bg: "bg-blue-500/10",
        title: "Fast & Reliable",
        description:
            "Same-day dispatch on thousands of items and real-time order tracking — because waiting shouldn't be part of the experience.",
    },
    {
        icon: Star,
        color: "text-amber-500",
        bg: "bg-amber-500/10",
        title: "Quality Guaranteed",
        description:
            "Every product on EzStore is curated for quality. Not happy? Our hassle-free 30-day return policy has you covered.",
    },
];
