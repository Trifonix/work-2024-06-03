// app.module.ts
import { Module } from '@nestjs/common';
import { ClickerController } from './clicker.controller';
import { ScoreService } from './score.service';

@Module({
  controllers: [ClickerController],
  providers: [ScoreService],
})
export class AppModule {}
