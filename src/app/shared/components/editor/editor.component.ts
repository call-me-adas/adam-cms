import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import * as HtmlValidator from 'html-tag-validator';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {
  @ViewChild('textAreaElement') textAreaElement: ElementRef;
  htmlFormat = '';
  error = '';
  showEditor = true;
  @Input() content: string;
  @Output() correct = new EventEmitter();
  lastState;
  nextState;

  ngOnInit(): void {
    this.correct.emit(true);
    this.htmlFormat = this.content;
    this.lastState = this.content;
    this.nextState = this.content;
  }

  insertElement(el, classes) {
    this.lastState = this.htmlFormat;
    const a = this.htmlFormat;
    const b = '<' + el + ' class=' + classes.join(',') + '>';
    const b2 = '</' + el + '>';
    const posStart = this.textAreaElement.nativeElement.selectionStart;
    const posEnd = this.textAreaElement.nativeElement.selectionEnd;
    if (posStart === posEnd) {
      this.htmlFormat = [a.slice(0, posStart), b, b2, a.slice(posStart)].join('');
    } else {
      this.htmlFormat = [a.slice(0, posStart), b, a.slice(posStart, posEnd), b2, a.slice(posEnd)].join('');
    }
    this.nextState = this.htmlFormat;
  }

  insertImage() {
    const src = prompt('Give src');
    const a = this.htmlFormat;
    const posStart = this.textAreaElement.nativeElement.selectionStart;
    this.htmlFormat = [a.slice(0, posStart), '<img class=\'image\' src=\'', src, '\' />' , a.slice(posStart)].join('');
  }

  undo() {
    this.nextState = this.htmlFormat;
    this.htmlFormat = this.lastState;
  }

  redo() {
    this.lastState = this.htmlFormat;
    this.htmlFormat = this.nextState;
  }

  typeTextarea(event) {
    HtmlValidator(this.htmlFormat, (err, ast) => {
      if (err) {
        this.error = err;
        this.correct.emit(false);
      } else {
        this.error = '';
        this.correct.emit(true);
      }
    });
  }
}
