import z from "zod/v4";
import { zEmail, zString } from "@/utils/zod.utils";

const ContactSchema = z.strictObject({
    fullName: zString("Full Name").transform((value) =>
        value
            .trim()
            .split(" ")
            .filter(Boolean)
            .map(
                (word) =>
                    word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
            )
            .join(" ")
    ),
    email: zEmail(),
    subject: zString("Subject"),
    message: zString("Message"),
});

export default ContactSchema;
