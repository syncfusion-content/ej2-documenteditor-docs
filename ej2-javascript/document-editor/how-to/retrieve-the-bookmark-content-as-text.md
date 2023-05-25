---
layout: post
title: Retrieve the bookmark content as text in ##Platform_Name## Document editor control | Syncfusion
description: Learn here all about Retrieve the bookmark content as text in Syncfusion ##Platform_Name## Document editor control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Retrieve the bookmark content as text 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Retrieve the bookmark content as text in ##Platform_Name## Document editor control

You can get the bookmark or whole document content from the JavaScript Document Editor component as plain text and SFDT (rich text).

## Get the bookmark content as plain text

You can [`selectBookmark`](../../document-editor/bookmark#select-bookmark) API to navigate to the bookmark and use [`text`](../../api/document-editor/selection/#text-code-classlanguage-textstringcode) API to get the bookmark content as plain text from JavaScript Document Editor component.

The following example code illustrates how to get the bookmark content as plain text.

```ts
import { DocumentEditorContainer, Toolbar } from '@syncfusion/ej2-documenteditor';

DocumentEditorContainer.Inject(Toolbar);

let container: DocumentEditorContainer = new DocumentEditorContainer({ enableToolbar: true, height: '590px' });

container.serviceUrl = 'https://ej2services.syncfusion.com/production/web-services/api/documenteditor/';

container.appendTo('#container');
// To insert text in cursor position
container.documentEditor.editor.insertText('Document editor');
// To select all the content in document
container.documentEditor.selection.selectAll();
// Insert bookmark to selected content
container.documentEditor.editor.insertBookmark('Bookmark1');

// Provide your bookmark name to navigate to specific bookmark
container.documentEditor.selection.selectBookmark('Bookmark1');

// To get the selected content as text
 let selectedContent: string = container.documentEditor.selection.text;
```

To get the bookmark content as SFDT (rich text), please check this [`link`](../../document-editor/how-to/get-the-selected-content/#get-the-selected-content-as-sfdt-rich-text)

## Get the whole document content as text

You can use [`text`](../../api/document-editor/selection/#text-code-classlanguage-textstringcode) API to get the whole document content as plain text from JavaScript Document Editor component.

The following example code illustrates how to get the whole document content as plain text.

```ts
import { DocumentEditorContainer, Toolbar } from '@syncfusion/ej2-documenteditor';

DocumentEditorContainer.Inject(Toolbar);

let container: DocumentEditorContainer = new DocumentEditorContainer({ enableToolbar: true, height: '590px' });

container.serviceUrl = 'https://ej2services.syncfusion.com/production/web-services/api/documenteditor/';

container.appendTo('#container');
// To insert text in cursor position
container.documentEditor.editor.insertText('Document editor');
// To select all the content in document
container.documentEditor.selection.selectAll();

// To get the content as text
 let selectedContent: string = container.documentEditor.selection.text;
```

## Get the whole document content as SFDT(rich text)

You can use [`serialize`](../../api/document-editor/#serialize) API to get the whole document content as SFDT string from JavaScript Document Editor component.

The following example code illustrates how to get the whole document content as SFDT.

```ts
import { DocumentEditorContainer, Toolbar } from '@syncfusion/ej2-documenteditor';

DocumentEditorContainer.Inject(Toolbar);

let container: DocumentEditorContainer = new DocumentEditorContainer({ enableToolbar: true, height: '590px' });

container.serviceUrl = 'https://ej2services.syncfusion.com/production/web-services/api/documenteditor/';

container.appendTo('#container');
// To insert text in cursor position
container.documentEditor.editor.insertText('Document editor');

// To get the content as SFDT
 let selectedContent: string = container.documentEditor.serialize();
```

## Get the header content as text

You can use [`goToHeader`](../../api/document-editor/selection/#gotoheader) API to navigate the selection to the header and then use [`text`](../../api/document-editor/selection/#text-code-classlanguage-textstringcode) API to get the content as plain text.

The following example code illustrates how to get the header content as plain text.

```ts
import { DocumentEditorContainer, Toolbar } from '@syncfusion/ej2-documenteditor';

DocumentEditorContainer.Inject(Toolbar);

let container: DocumentEditorContainer = new DocumentEditorContainer({ enableToolbar: true, height: '590px' });

container.serviceUrl = 'https://ej2services.syncfusion.com/production/web-services/api/documenteditor/';

container.appendTo('#container');
// To navigate the selection to header
container.documentEditor.selection.goToHeader();
// To insert text in cursor position
container.documentEditor.editor.insertText('Document editor');
// To select all the content in document
container.documentEditor.selection.selectAll();

// To get the selected content as text
 let selectedContent: string = container.documentEditor.selection.text;
```

Similarly, you can use [`goToFooter`](../../api/document-editor/selection/#gotofooter) API to navigate the selection to the footer and then use [`text`](../../api/document-editor/selection/#text-code-classlanguage-textstringcode) API to get the content as plain text.