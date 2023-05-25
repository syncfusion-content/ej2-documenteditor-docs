---
layout: post
title: Get current word in ##Platform_Name## Document editor control | Syncfusion
description: Learn here all about Get current word in Syncfusion ##Platform_Name## Document editor control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Get current word 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Get current word in ##Platform_Name## Document editor control

You can get the current word or paragraph content from the JavaScript Document Editor component as plain text and SFDT (rich text).

## Select and get the word in current cursor position

You can use [`selectCurrentWord`](../../api/document-editor/selection#selectcurrentword) API in selection module to select the current word at cursor position and use [`text`](../../api/document-editor/selection/#text-code-classlanguage-textstringcode) API to get the selected content as plain text from JavaScript Document Editor component.

The following example code illustrates how to select and get the current word as plain text.

```ts
import { DocumentEditorContainer, Toolbar } from '@syncfusion/ej2-documenteditor';

DocumentEditorContainer.Inject(Toolbar);

let container: DocumentEditorContainer = new DocumentEditorContainer({ enableToolbar: true, height: '590px' });

container.serviceUrl = 'https://ej2services.syncfusion.com/production/web-services/api/documenteditor/';

container.appendTo('#container');
// To insert text in cursor position
container.documentEditor.editor.insertText('Document editor');
// To select the current word in document
container.documentEditor.selection.selectCurrentWord();

// To get the selected content as text
let selectedContent: string = container.documentEditor.selection.text;
```

To get the bookmark content as SFDT (rich text), please check this [`link`](../../document-editor/how-to/get-the-selected-content/#get-the-selected-content-as-sfdt-rich-text)

## Select and get the paragraph in current cursor position

You can use [`selectParagraph`](../../api/document-editor/selection/#selectparagraph) API in selection module to select the current paragraph at cursor position and use [`text`](../../api/document-editor/selection/#text-code-classlanguage-textstringcode) API or [`sfdt`](../../api/document-editor/selection/#sfdt-code-classlanguage-textstringcode) API to get the selected content as plain text or SFDT from JavaScript Document Editor component.

The following example code illustrates how to select and get the current paragraph as SFDT.

```ts
import { DocumentEditorContainer, Toolbar } from '@syncfusion/ej2-documenteditor';

DocumentEditorContainer.Inject(Toolbar);

let container: DocumentEditorContainer = new DocumentEditorContainer({ enableToolbar: true, height: '590px' });

container.serviceUrl = 'https://ej2services.syncfusion.com/production/web-services/api/documenteditor/';

container.appendTo('#container');
// To insert text in cursor position
container.documentEditor.editor.insertText('Document editor');
// To select the current paragraph in document
container.documentEditor.selection.selectParagraph();

// To get the selected content as SFDT
let selectedContent: string = container.documentEditor.selection.sfdt;
```