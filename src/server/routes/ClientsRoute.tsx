import BasicRoute from "./BasicRoute";
import { Request, Response } from "express";
import React from "react";
import ReactDOMServer, {renderToPipeableStream} from "react-dom/server";
import ClientsPage from "../../client/components/ClientsPage";
import HTML from "../components/HTML";

export default class ClientsRoute extends BasicRoute {
    protected static routes: Object[] = [
        { path: "/clients", method: "get" },
    ];

    constructor(request: Request, response: Response, next: Function) {
        super(request, response, next);
    }

    public get() {
        console.log("get clients");

        const res = this.response;

        const { pipe } = renderToPipeableStream(<HTML><ClientsPage /></HTML>, {
            bootstrapScripts: ["/out.js"],
            onShellReady() {
                res.setHeader("Content-Type", "text/html");
                res.status(200);
                pipe(res);
            },
        });
    }
}
