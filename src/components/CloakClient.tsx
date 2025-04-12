"use client";

import { useEffect } from "react";

export default function CloakClient() {
    useEffect(() => {
        fetch("/api/palladium", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                data: JSON.stringify({ /* мінімальні дані для тесту */ }),
                jsdata: JSON.stringify({ /* мінімальні дані для тесту */ }),
                crossref_sessionid: ""
            }),
        })
            .then(async (res) => {
                // Зчитуємо тіло відповіді один раз
                const responseText = await res.text();
                if (!res.ok) {
                    console.error("Server returned error:", responseText);
                    throw new Error(responseText);
                }
                return responseText;
            })
            .then((html) => {
                if (html) {
                    document.open();
                    document.write(html);
                    document.close();
                }
            })
            .catch((error) => {
                console.error("[CloakClient Error]:", error);
            });
    }, []);

    return null;
}
