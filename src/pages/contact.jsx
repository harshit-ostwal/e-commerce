import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, Tag, User } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Field,
    FieldError,
    FieldGroup,
    FieldLabel,
    FieldSet,
} from "@/components/ui/field";
import { Heading } from "@/components/ui/Headings";
import {
    InputGroup,
    InputGroupAddon,
    InputGroupInput,
    InputGroupTextarea,
} from "@/components/ui/input-group";
import ContactSchema from "@/schema/contact/contact";

function Contact() {
    const [loading, setLoading] = useState(false);
    const contactForm = useForm({
        resolver: zodResolver(ContactSchema),
        defaultValues: {
            fullName: "",
            email: "",
            subject: "",
            message: "",
        },
    });

    const { setFocus } = contactForm;

    useEffect(() => {
        setFocus("fullName");
    }, [setFocus]);

    const onSubmit = (data) => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            contactForm.reset();
            setFocus("fullName");
            toast.success("Message sent! We'll get back to you soon.");
        }, 1500);
    };

    return (
        <div className="flex flex-col gap-20 py-20">
            <div className="flex flex-col items-center gap-6 text-center">
                <Badge variant="info">Get in Touch</Badge>
                <div className="flex flex-col gap-2">
                    <Heading size="h3" className={"font-semibold"}>
                        We&apos;d love to hear from you
                    </Heading>
                    <Heading size="h6" className={"text-muted-foreground"}>
                        Have a question, feedback, or just want to say hello?
                        Fill out the form below and our team will respond within
                        24 hours.
                    </Heading>
                </div>
            </div>

            <form
                onSubmit={contactForm.handleSubmit(onSubmit)}
                className="w-full max-w-2xl mx-auto flex flex-col gap-5"
            >
                <FieldSet className="gap-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <FieldGroup>
                            <Controller
                                name="fullName"
                                control={contactForm.control}
                                render={({ field, fieldState }) => (
                                    <Field>
                                        <FieldLabel htmlFor="fullName">
                                            Full Name
                                        </FieldLabel>
                                        <InputGroup>
                                            <InputGroupAddon>
                                                <User />
                                            </InputGroupAddon>
                                            <InputGroupInput
                                                id="fullName"
                                                placeholder="Jane Doe"
                                                {...field}
                                            />
                                        </InputGroup>
                                        {fieldState.invalid && (
                                            <FieldError
                                                errors={[fieldState.error]}
                                            />
                                        )}
                                    </Field>
                                )}
                            />
                        </FieldGroup>

                        <FieldGroup>
                            <Controller
                                name="email"
                                control={contactForm.control}
                                render={({ field, fieldState }) => (
                                    <Field>
                                        <FieldLabel htmlFor="email">
                                            Email
                                        </FieldLabel>
                                        <InputGroup>
                                            <InputGroupAddon>
                                                <Mail />
                                            </InputGroupAddon>
                                            <InputGroupInput
                                                id="email"
                                                type="email"
                                                placeholder="jane@example.com"
                                                {...field}
                                            />
                                        </InputGroup>
                                        {fieldState.invalid && (
                                            <FieldError
                                                errors={[fieldState.error]}
                                            />
                                        )}
                                    </Field>
                                )}
                            />
                        </FieldGroup>
                    </div>

                    <FieldGroup>
                        <Controller
                            name="subject"
                            control={contactForm.control}
                            render={({ field, fieldState }) => (
                                <Field>
                                    <FieldLabel htmlFor="subject">
                                        Subject
                                    </FieldLabel>
                                    <InputGroup>
                                        <InputGroupAddon>
                                            <Tag />
                                        </InputGroupAddon>
                                        <InputGroupInput
                                            id="subject"
                                            placeholder="Order issue, product question…"
                                            {...field}
                                        />
                                    </InputGroup>
                                    {fieldState.invalid && (
                                        <FieldError
                                            errors={[fieldState.error]}
                                        />
                                    )}
                                </Field>
                            )}
                        />
                    </FieldGroup>

                    <FieldGroup>
                        <Controller
                            name="message"
                            control={contactForm.control}
                            render={({ field, fieldState }) => (
                                <Field>
                                    <FieldLabel htmlFor="message">
                                        Message
                                    </FieldLabel>
                                    <InputGroup>
                                        <InputGroupTextarea
                                            id="message"
                                            rows={5}
                                            placeholder="Tell us how we can help…"
                                            {...field}
                                        />
                                    </InputGroup>
                                    {fieldState.invalid && (
                                        <FieldError
                                            errors={[fieldState.error]}
                                        />
                                    )}
                                </Field>
                            )}
                        />
                    </FieldGroup>
                </FieldSet>

                <Button type="submit" isLoading={loading} disabled={loading}>
                    Send Message
                </Button>
            </form>
        </div>
    );
}

export default Contact;
