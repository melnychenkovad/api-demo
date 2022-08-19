import express, {Express} from "express";
import {Server} from 'http'
import {LoggerService} from "./logger/logger.service";
import {UserController} from "./users/users.controller";
import {ExceptionFilter} from "./errors/exception.filter";


export class App {
    app: Express;
    port: number;
    server: Server | undefined;
    l: LoggerService;
    userController: UserController;
    exceptionFilter : ExceptionFilter;

    constructor(logger: LoggerService,userController: UserController, exceptionFilter: ExceptionFilter) {
        this.app = express();
        this.port = 8000;
        this.l = logger;
        this.userController = userController;
        this.exceptionFilter = exceptionFilter;
    }

    useRoutes() {
        this.app.use('/users', this.userController.router);
    }

    useExceptionsFilter() {
        this.app.use(this.exceptionFilter.catch.bind(this.exceptionFilter));
    }


    public async init() {
        this.useRoutes();
        this.useExceptionsFilter();
        this.server = this.app.listen(this.port);
        this.l.log(`Server is running on port ${this.port}`);

    }
}