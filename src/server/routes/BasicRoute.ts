import { Request, Response } from "express";


    abstract class BasicRoute {

    request: Request;
    response: Response<any, Record<string, any>>;
    next: Function;
    protected static routes: Object[] = [];


    constructor(request: Request, response: Response, next: Function) {
        this.request = request;
        this.response = response;
        this.next = next;

    }

    public resOk(add: any) {
        this.response.json({ok: true, ...add});
    }

    public resError(add: any) {
        this.response.json({ok: false, ...add});
    }

    public error500(add: any) {
        this.response.status(500);
    }

    public static getRoutes() {
        return this.routes;
    }
}

export default BasicRoute;
