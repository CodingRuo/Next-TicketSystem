"use client";

import { consumeCookiedByKey } from "@/actions/cookies";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { toast } from "sonner";

const RedirectToast = (): null => {
    const pathName = usePathname();

    useEffect(() => {
        const showCookieToast = async (): Promise<void> => {
            const message = await consumeCookiedByKey("toast");

            if(message) {
                toast.success(message);
            }
        };

        showCookieToast();
    }, [pathName]);

    return null;
};

export { RedirectToast };