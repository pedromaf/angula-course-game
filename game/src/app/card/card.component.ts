import { Component, Input } from '@angular/core';
import { lorem } from 'faker';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  title: string = "Typing Game";
  text: string = this.getCardText();
  inputText: string = "";
  success: boolean = false;

  getCardText() {
    return lorem.sentence(Math.round(Math.random() * 4 + 1));
  }

  onInput(event: Event) {
    let field: HTMLInputElement = event.target as HTMLInputElement;
    this.inputText = field.value;
    
    this.success = this.inputText == this.text;
  }

  getLetterClass(letter: string, index: number) {
    if (this.inputText == "" || this.inputText.length <= index) {
      return "gray-letter";
    }
    
    return letter == this.inputText[index] ? "green-letter" : "red-letter";
  }
}
