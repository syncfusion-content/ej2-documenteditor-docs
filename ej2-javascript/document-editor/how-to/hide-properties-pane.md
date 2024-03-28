---
layout: post
title: Hide properties pane in ##Platform_Name## Document editor control | Syncfusion
description: Learn how to hide properties pane in Syncfusion ##Platform_Name## Document editor control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Hide properties pane 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Hide properties pane in ##Platform_Name## Document editor control

By default, Document editor container has built-in properties pane which contains options for formatting text, table, image and header and footer. You can use [`showPropertiesPane`](../../api/document-editor-container/documentEditorContainerModel/#showpropertiespane) API in [`DocumentEditorContainer`](../../api/document-editor-container/documentEditorContainerModel/) to hide the properties pane.

The following example code illustrates how to hide the properties pane.

{% if page.publishingplatform == "typescript" %}

```ts
import { DocumentEditorContainer, Toolbar } from '@syncfusion/ej2-documenteditor';

DocumentEditorContainer.Inject(Toolbar);

let container: DocumentEditorContainer = new DocumentEditorContainer({ height: '590px', showPropertiesPane:false });

container.serviceUrl = 'https://services.syncfusion.com/js/production/api/documenteditor/';

container.appendTo('#container');
```

{% elsif page.publishingplatform == "javascript" %}

```js
import { DocumentEditorContainer, Toolbar } from '@syncfusion/ej2-documenteditor';

DocumentEditorContainer.Inject(Toolbar);

var container = new DocumentEditorContainer({ height: '590px', showPropertiesPane:false });

container.serviceUrl = 'https://services.syncfusion.com/js/production/api/documenteditor/';

container.appendTo('#container');
```

>Note: Positioning and customizing the properties pane in Document editor container is not possible. Instead, you can hide the exiting properties pane and create your own pane using public API's.
