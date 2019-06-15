import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild, ViewEncapsulation} from '@angular/core';
import * as HtmlValidator from 'html-tag-validator';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EditorComponent implements OnInit {
  @ViewChild('textAreaElement') textAreaElement: ElementRef;
  htmlFormat = '';
  error = '';
  showEditor = true;
  @Input() content: string;
  @Output() correct = new EventEmitter();
  @Output() editor = new EventEmitter();
  lastState;
  nextState;

  ngOnInit(): void {
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
    this.saveChanges();
  }

  insertImage(classes) {
    const src = prompt('Give src');
    const a = this.htmlFormat;
    const posStart = this.textAreaElement.nativeElement.selectionStart;
    this.htmlFormat = [a.slice(0, posStart), '\n<img class=' + classes.join(',') + ' src=\'', src, '\' />' , a.slice(posStart)].join('');
    this.saveChanges();
  }

  insertLink(classes) {
    const src = prompt('Give src');
    const a = this.htmlFormat;
    const posStart = this.textAreaElement.nativeElement.selectionStart;
    this.htmlFormat = [a.slice(0, posStart), '\n<a target="_blank" class=' + classes.join(',') + ' href=\'', src, '\'>' +
    'Link</a>' , a.slice(posStart)].join('');
    this.saveChanges();
  }

  insertVideo(classes) {
    const src = prompt('Give src');
    const a = this.htmlFormat;
    const posStart = this.textAreaElement.nativeElement.selectionStart;
    this.htmlFormat = [a.slice(0, posStart), '\n<div class=' + classes.join(',') + '>',
      '<iframe width="560" height="349" src="http://www.youtube.com/embed/' + this.youtube_parser(src) + '?rel=0&hd=1" ' +
      'frameborder="0" allowfullscreen></iframe>',
      '</div>', a.slice(posStart)].join('');
    this.saveChanges();
  }

  insertList(el, classes) {
    const a = this.htmlFormat;
    const posStart = this.textAreaElement.nativeElement.selectionStart;
    this.htmlFormat = [a.slice(0, posStart), '\n<' + el + ' class=' + classes.join(',') + '>\n',
      '<li>Item 1</li>' , '\n</' + el + '>', a.slice(posStart)].join('');
    this.saveChanges();
  }

  insertColumns(count, classes) {
    const a = this.htmlFormat;
    const posStart = this.textAreaElement.nativeElement.selectionStart;

    this.htmlFormat = [a.slice(0, posStart), '\n<div class=' + classes.join(',') + '>\n',
      '<div class="column"></div>\n'.repeat(count) , '</div>', a.slice(posStart)].join('');
    this.saveChanges();
  }

  undo() {
    this.nextState = this.htmlFormat;
    this.htmlFormat = this.lastState;
    this.saveChanges();
  }

  redo() {
    this.lastState = this.htmlFormat;
    this.htmlFormat = this.nextState;
    this.saveChanges();
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
      this.saveChanges();
    });
  }

  saveChanges() {
    this.editor.emit(this.htmlFormat);
  }

  youtube_parser(url) {
    const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
    const match = url.match(regExp);
    return (match && match[7].length === 11) ? match[7] : false;
  }
}
