import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-result',
  imports: [],
  templateUrl: './result.component.html',
  styleUrl: './result.component.css',
})
export class ResultComponent implements OnInit {
  score: number = 0; // قيمة الدرجة الحالية
  position: number = 0;

  ngOnInit(): void {
    this.calculatePosition();
  }

  calculatePosition(): void {
    const maxScore = 27; // أقصى درجة
    this.position = (this.score / maxScore) * 100; // حساب النسبة المئوية
  }
}
