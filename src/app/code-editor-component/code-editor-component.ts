import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { MonacoEditorModule } from 'ngx-monaco-editor-v2';

@Component({
  selector: 'app-code-editor-component',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MonacoEditorModule
  ],
  templateUrl: './code-editor-component.html',
  styleUrl: './code-editor-component.css',
})
export class CodeEditorComponent {

  isBrowser = false;

  code = `function sum(a, b) {
  return a + b;
}`;

  editorOptions = {
    theme: 'vs-dark',
    language: 'javascript',
    automaticLayout: true
  };

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }
}