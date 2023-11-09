import React from "react";

export default function HTML(props: any) {
    return (
        <>
            <html lang="en">
                <head>
                    <meta charSet="UTF-8" />
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1.0"
                    />
                    <title>CRM Systems</title>

                    <link
                        rel="stylesheet"
                        href="css/style.css"
                    />
                    <link
                        rel="stylesheet"
                        href="out.css"
                    />
                    <script
                        src="out.js"
                        defer
                    ></script>
                </head>

                <body>
                    <div id="root">{props.children}</div>
                </body>
            </html>
        </>
    );
}
