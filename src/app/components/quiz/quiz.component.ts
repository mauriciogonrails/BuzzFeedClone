import { Component, OnInit } from '@angular/core';
import quizz_questions from '../../../assets/data/quizz_questions.json';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.css'
})
export class QuizComponent implements OnInit{

  playerSelection(selection:string) {
    this.answers.push(selection);
    this.nextQuestion();
}

  async nextQuestion(){
    this.questionID++;
    if (this.questionMaxID>this.questionID){
      this.selectedQuestion=this.questions[this.questionID];
    }else{
      this.finished=true;
      const finalAnswer:string=await this.result(this.answers);
      this.selectedAnswer=quizz_questions.results[finalAnswer as keyof typeof quizz_questions.results];
    }
  }

  async result(answers:string[]){
    const result=answers.reduce((previous,current,index,array)=>{
      if(array.filter(item=>item===previous).length >
         array.filter(item=>item===current).length){
          return previous
         }else{
          return current
         }
    })
    return result;
  }

title:string="";
questions:any;
selectedQuestion:any;
answers:string[]=[];
selectedAnswer:string="";
questionID:number=0;
questionMaxID:number=0;
finished:boolean=false;

constructor(){}

  ngOnInit(): void {
    if(quizz_questions){
    this.finished=false;
    this.title=quizz_questions.title;
    this.questions=quizz_questions.questions;
    this.selectedQuestion=this.questions[this.questionID];
    this.questionID=0;
    this.questionMaxID=this.questions.length;
    }
  }
}
