"use client";

import { consumeCookiedByKey } from "@/actions/cookies";
import { useEffect } from "react";
import { toast } from "sonner";

const RedirectToast = (): null => {
    useEffect(() => {
        const showCookieToast = async (): Promise<void> => {
            const message = await consumeCookiedByKey("toast");

            if(message) {
                toast.success(message);
            }
        };

        showCookieToast();
    }, []);

    return null;
};

export { RedirectToast };