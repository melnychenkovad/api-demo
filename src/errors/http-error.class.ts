export class HTTPError extends Error{
    statusCode :number;
    context?: string;
    constructor(statusCode: number, message: string , content?: string){
        super(message);
        this.statusCode = statusCode;
        this.context = content;
        this.message = message;
    }
}