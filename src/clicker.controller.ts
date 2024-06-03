// clicker.controller.ts
import { Controller, Get, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { ScoreService } from './score.service';
import { Score } from './score.model';

@Controller()
export class ClickerController {
  constructor(private readonly scoreService: ScoreService) {}

  @Get()
  getHello(): string {
    const score: Score = this.scoreService.getScore();
    return `
      <!DOCTYPE html>
      <html lang="ru">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Игра-кликер</title>
        <link rel="stylesheet" href="style.css">
      </head>
      <body>
        <h1>Игра-кликер</h1>
        <p id="score" class="click-animation">СЧЕТ: ${score.points}</p>
        <button id="clickButton">Нажмите на меня!</button>
        <script>
          document.getElementById('clickButton').addEventListener('click', function() {
            fetch('/click', { method: 'POST' })
              .then(response => response.json())
              .then(data => {
                const scoreElement = document.getElementById('score');
                scoreElement.textContent = 'СЧЕТ: ' + data.points;
                scoreElement.classList.add('click-animation');
                setTimeout(() => { scoreElement.classList.remove('click-animation'); }, 200);
              });
          });
        </script>
      </body>
      </html>
    `;
  }

  @Get('score')
  getScore(): Score {
    return this.scoreService.getScore();
  }

  @Post('click')
  clickButton(): Score {
    return this.scoreService.increaseScore(1);
  }
}
