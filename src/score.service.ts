// score.service.ts
import { Injectable } from '@nestjs/common';
import { Score } from './score.model';

@Injectable()
export class ScoreService {
  private score: Score;

  constructor() {
    this.score = new Score(0); // Изначально очки равны нулю
  }

  getScore(): Score {
    return this.score || new Score(0); // Если score не определен, возвращаем новый объект Score с 0 очками
  }

  increaseScore(points: number): Score {
    this.score.points += points;
    return this.score;
  }
}
