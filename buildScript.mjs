import * as esbuild from "esbuild";
import sassPlugin from "esbuild-plugin-sass";


let app = await esbuild.context({
    entryPoints: ["./src/client/index.tsx"],
    bundle: true,
    plugins: [sassPlugin()],
    sourcemap: true,
    target: ["chrome58", "firefox57", "safari11", "edge20"],
    outfile: "./public/out.js",
    tsconfig: "./tsconfig.json",
});

await app.watch();
console.log("watching...");

// await new Promise(r => setTimeout(r, 10 * 1000));
// await app.dispose();
// console.log('stopped watching')


// let server = await esbuild.context({
//     entryPoints: ["./src/server/serve.ts"],
//     bundle: true,
//     platform: "node",
//     target: ["node14"],
//     outfile: "./src/server/serve.js",
// });

// let { host, port } = await server.serve({ port: 3000, host: "localhost" });
// console.log(`serving on ${host}:${port}`);


