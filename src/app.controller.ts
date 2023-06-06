import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { get } from 'http';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): object {
    return {msg: 'hello'};
  }

  @Get('write')
  writeToDatabase(@Body() data: any): object {
   
    console.log(data);
    
    return data;
  }
}


