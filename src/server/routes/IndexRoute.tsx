import BasicRoute from "./BasicRoute";
import React from "react";
import  { renderToPipeableStream } from "react-dom/server";
import App from "../../client/components/App";
import { Request, Response } from "express";
import HTML from "../components/HTML";


export default class IndexRoute extends BasicRoute {
    static routes= [{ path: "/", method: "get" }];

    constructor(request: Request, response: Response , next: Function) {
        super(request, response, next);
    }

    get() {
        console.log("get index");
        const res = this.response;

        const { pipe } = renderToPipeableStream(<HTML><App /></HTML>, {
            bootstrapScripts: ["/out.js"],
            onShellReady() {
                res.setHeader("Content-Type", "text/html");
                res.status(200);
                pipe(res);
            },
        });
    }
}
