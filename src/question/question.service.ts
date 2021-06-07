import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateQuestionDto } from './dto/create-question.dto';
import { UpdateQuestionDto } from './dto/update-question.dto';

const question1 = {
  "id": 1,
  "title": "Natsu Dragneel",
  "answers": ["Bleach", "Fairy Tail", "Naruto", "One Piece"],
  "correctAnswerIndex": 1
}

const question2 = {
  "id": 2,
  "title": "Byakuya Kuchiki",
  "answers": ["Bleach", "Fairy Tail", "Naruto", "One Piece"],
  "correctAnswerIndex": 0
}

const question3 = {
  "id": 3,
  "title": "Portgas D. Ace",
  "answers": ["Bleach", "Fairy Tail", "Naruto", "One Piece"],
  "correctAnswerIndex": 3
}

const question4 = {
  "id": 4,
  "title": "Tobi",
  "answers": ["Bleach", "Fairy Tail", "Naruto", "One Piece"],
  "correctAnswerIndex": 2
}

const questions = [question1, question2, question3, question4]

@Injectable()
export class QuestionService {
  create(createQuestionDto: CreateQuestionDto) {
    throw new HttpException(`Not implemented yet. This action adds a new question`, HttpStatus.NOT_IMPLEMENTED)
  }

  findAll() {
    return questions;
  }

  findOne(id: number) {
    const foundQuestion = questions.find(q => q.id == id)
    if (foundQuestion)
      return foundQuestion
    
    throw new HttpException('Not found', HttpStatus.NOT_FOUND);
  }

  update(id: number, updateQuestionDto: UpdateQuestionDto) {
    throw new HttpException(`Not implemented yet. This action updates a #${id} question`, HttpStatus.NOT_IMPLEMENTED)
  }

  remove(id: number) {
    throw new HttpException(`Not implemented yet. This action removes a #${id} question`, HttpStatus.NOT_IMPLEMENTED)
  }
}
