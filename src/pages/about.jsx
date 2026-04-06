import React from "react";
import { Badge } from "@/components/ui/badge";
import { Heading } from "@/components/ui/Headings";
import { Separator } from "@/components/ui/separator";
import { aboutStats, aboutValues } from "@/constants/about";

function About() {
    return (
        <div className="flex flex-col gap-20 py-20">
            <div className="flex flex-col items-center gap-2 text-center">
                <Badge variant="info">Our Story</Badge>
                <Heading size="h3" className={"font-semibold"}>
                    Shopping made simple, honest, and joyful
                </Heading>
                <Heading size="h6" className={"text-muted-foreground"}>
                    EzStore was founded with a single belief — great products
                    should be accessible to everyone, everywhere. We cut through
                    the noise and bring you what actually matters.
                </Heading>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {aboutStats.map((item, idx) => (
                    <div
                        key={idx}
                        className="flex flex-col items-center gap-4 rounded-4xl border border-border p-6 text-center"
                    >
                        <item.icon className="text-amber-500" size={32} />
                        <div className="flex flex-col">
                            <Heading size="h4" className="font-bold">
                                {item.value}
                            </Heading>
                            <Heading size="p">{item.label}</Heading>
                        </div>
                    </div>
                ))}
            </div>

            <Separator />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                <div className="flex flex-col gap-5">
                    <Badge variant="info">Our Mission</Badge>
                    <Heading size="h3" className={"font-semibold"}>
                        Putting the &ldquo;easy&rdquo; back in e-commerce
                    </Heading>
                    <Heading size="h6" className={"text-muted-foreground"}>
                        We built EzStore because online shopping had become
                        complicated — too many tabs, too many doubts, too much
                        friction. Our mission is to deliver a seamless,
                        transparent, and delightful shopping experience from the
                        moment you land on our site to the moment your parcel
                        arrives at your door.
                    </Heading>
                    <Heading size="h6" className={"text-muted-foreground"}>
                        We work directly with brands and independent makers to
                        bring you authentic, competitively-priced products — no
                        middle-men, no hidden fees.
                    </Heading>
                </div>
                <div className="rounded-2xl border border-border bg-rose-100/40 aspect-video flex items-center justify-center">
                    <Heading size="h4" className="text-muted-foreground">
                        EzStore &mdash; Est. 2024
                    </Heading>
                </div>
            </div>

            <Separator />

            {/* Values */}
            <div className="flex flex-col gap-10">
                <div className="flex flex-col items-center gap-4 text-center">
                    <Badge variant="info">Our Values</Badge>
                    <Heading size="h3" className={"font-semibold"}>
                        Our Core values
                    </Heading>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {aboutValues.map((item, idx) => (
                        <div
                            key={idx}
                            className="flex flex-col gap-4 rounded-2xl border border-border p-6"
                        >
                            <div
                                className={`w-12 h-12 rounded-xl ${item.bg} flex items-center justify-center`}
                            >
                                <item.icon className={item.color} size={32} />
                            </div>
                            <div className="flex flex-col gap-2">
                                <Heading size="h5" className="font-semibold">
                                    {item.title}
                                </Heading>
                                <Heading size="p">{item.description}</Heading>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default About;
