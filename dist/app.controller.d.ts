import { AppService } from './app.service';
import { UserService } from './user.service';
export declare class AppController {
    private readonly appService;
    private readonly userService;
    constructor(appService: AppService, userService: UserService);
    getHello(): Promise<object>;
    writeToDatabase(data: any): object;
}
