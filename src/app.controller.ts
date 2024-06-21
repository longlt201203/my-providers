import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("auth-uri")
  getGoogleOauth2Uri(): string {
    return this.appService.getGoogleOauth2Uri();
  }

  @Get("code")
  getGoogleOauth2Tokens(@Query("code") code: string) {
    return this.appService.getGoogleTokens(code);
  }
}
