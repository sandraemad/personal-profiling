import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { ResultComponent } from '../result/result.component';

@Component({
  selector: 'app-depression',
  standalone: true,
  imports: [HeaderComponent, ResultComponent],
  templateUrl: './depression.component.html',
  styleUrls: ['./depression.component.css'],
})
export class DepressionComponent implements AfterViewInit {
  @ViewChild('header', { static: false }) myheader!: ElementRef; // Reference to header element
  @ViewChild(ResultComponent) resultComponent!: ResultComponent; // Reference to ResultComponent

  cnt: number = 0; // Current score
  showResultComponent: boolean = false; // Control visibility of ResultComponent

  ngAfterViewInit(): void {
    if (this.myheader) {
      this.myheader.nativeElement.style.background =
        "url('/images/images (1).jpeg')";
    }

    // Ensure ResultComponent is initially hidden
    this.showResultComponent = false;
  }

  showResult(num: number): void {
    this.cnt += num; // Update score
  }

  Result(): void {
    // Show the result component
    this.showResultComponent = true;

    // Ensure resultComponent exists before accessing its properties
    if (this.resultComponent) {
      this.resultComponent.score = this.cnt;
      this.resultComponent.calculatePosition();
    }
  }
}
