// components/CloakClient.tsx

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
                const responseText = await res.text(); // зчитуємо відповідь один раз
                if (!res.ok) {
                    console.error("Server returned error:", responseText);
                    throw new Error(responseText);
                }
                return responseText;
            })
            .then((html) => {
                if (html) {
                    // Відображаємо отриманий HTML-код
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
