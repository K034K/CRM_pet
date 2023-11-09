import express from "express";
import IndexRoute from "../routes/IndexRoute";
import ClientsRoute from "../routes/ClientsRoute";
import { get } from "http";
import path from "path";

export default class ExpressRouter {
    private static app: express.Application = express();
    private static port: number = 3000;

    private static listen(Route: any) {
        const routes = Route.getRoutes();
        for (const route of routes) {
            const { method, path } = route as {
                method: string;
                path: string;
            };

            (this.app as any)[method](
                path,
                (req: Request, res: Response, next: Function) => {
                    new Route(req, res, next)[method]();
                }
            );


        }
    }

    public static run() {

        this.app.use(express.static(path.resolve(__dirname, "../../../public"), { index: false }));

        this.listen(IndexRoute);

        this.listen(ClientsRoute);


        this.app.listen(this.port, "localhost", () => {
            console.log(`Listening on http://localhost:${this.port}`);
        });
    }
}
