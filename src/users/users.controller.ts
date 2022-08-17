import {BaseController} from "../common/base.controller";
import {LoggerService} from "../logger/logger.service";
import {NextFunction, Request, Response} from "express";
import {HTTPError} from "../errors/http-error.class";

export class UserController extends BaseController {
    constructor(
        logger: LoggerService
    ) {
        super(logger);
        this.bindRoutes([
            {method: 'post', path: '/register', func: this.register},
            {method: 'post', path: '/login', func: this.login}
        ]);
    }

    login(req: Request, res: Response, next: NextFunction) {
        // this.ok(res, {message: 'You are logged in'});
        next(new HTTPError(400, 'You are not login', 'login'));

    }

    register(req: Request, res: Response, next: NextFunction) {
        this.ok(res, {message: 'You are registered'});
    }


}