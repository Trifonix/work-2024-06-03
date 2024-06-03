import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Привет всему коллективу компании 1Т !!!';
  }
}
