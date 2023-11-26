---
layout: post
title: Insert page number and navigate to page in ##Platform_Name## Document editor control | Syncfusion
description: Learn here all about Insert page number and navigate to page in Syncfusion ##Platform_Name## Document editor control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Insert page number and navigate to page 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Insert page number and navigate to page in ##Platform_Name## Document editor control

You can insert page number and navigate to specific page in JavaScript Document Editor component by following ways.

## Insert page number

You can use [`insertPageNumber`](../../api/document-editor/editor/#insertpagenumber) API in editor module to insert the page number in current cursor position. By default, Page number will insert in Arabic number style. You can change it, by providing the number style in parameter.

>Note: Currently, Documenteditor have options to insert page number at current cursor position.

The following example code illustrates how to insert page number in header.

```ts
import { DocumentEditorContainer, Toolbar } from '@syncfusion/ej2-documenteditor';

DocumentEditorContainer.Inject(Toolbar);

let container: DocumentEditorContainer = new DocumentEditorContainer({ enableToolbar: true, height: '590px' });

container.serviceUrl = 'https://services.syncfusion.com/js/production/api/documenteditor/';

container.appendTo('#container');
// To insert text in cursor position
container.documentEditor.editor.insertText('Document editor');
// To move the selection to header
container.documentEditor.selection.goToHeader();
// Insert page number in the current cursor position
container.documentEditor.editor.insertPageNumber();
```

Also, you use [`insertField`](../../api/document-editor/editor/#insertfield) API in Editor module to insert the Page number in current position

```ts
//Current page number
container.documentEditor.editor.insertField('PAGE \* MERGEFORMAT', '1');
```

## Get page count

You can use [`pageCount`](../../api/document-editor/#pagecount) API to gets the total number of pages in Document.

The following example code illustrates how to get the number of pages in Document.

```ts
import { DocumentEditorContainer, Toolbar } from '@syncfusion/ej2-documenteditor';

DocumentEditorContainer.Inject(Toolbar);

let container: DocumentEditorContainer = new DocumentEditorContainer({ enableToolbar: true, height: '590px' });

container.serviceUrl = 'https://services.syncfusion.com/js/production/api/documenteditor/';

container.appendTo('#container');
// To insert text in cursor position
container.documentEditor.editor.insertText('Document editor');
// To get the total number of pages
let pageCount : number=container.documentEditor.pageCount;
```

## Navigate to specific page

You can use [`goToPage`](../../api/document-editor/selection/#gotopage) API in Selection module to move selection to the start of the specified page number.

The following example code illustrates how to move selection to specific page.

```ts
import { DocumentEditorContainer, Toolbar } from '@syncfusion/ej2-documenteditor';

DocumentEditorContainer.Inject(Toolbar);

let container: DocumentEditorContainer = new DocumentEditorContainer({ enableToolbar: true, height: '590px' });

container.serviceUrl = 'https://services.syncfusion.com/js/production/api/documenteditor/';

container.appendTo('#container');

// To move selection to page number 2
container.documentEditor.selection.goToPage(2);
```