---
layout: post
title: how to enable ruler in ##Platform_Name## Document editor control | Syncfusion
component: "DocumentEditor"
description: Learn how to enable ruler in Syncfusion ##Platform_Name## Document editor control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Enable ruler 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Enable ruler

## How to enable ruler in Document Editor component

Using ruler we can refer to setting specific margins, tab stops, or indentations within a document to ensure consistent formatting in Document Editor.

The following example illustrates how to enable ruler in Document Editor

{% tab template="document-editor/ruler",es5Template="ruler", sourceFiles="index.ts,index.html" %}

```typescript
import { DocumentEditor, Editor } from '@syncfusion/ej2-documenteditor';

//Initialize Document Editor component.
let documenteditor: DocumentEditor = new DocumentEditor({
    isReadOnly: false, height: '370px', documentEditorSettings: {showRuler: true}
});

//Enable all built in modules.
documenteditor.enableAllModules();

document.getElementById('container_ruler_button').addEventListener('click', 
function () {
    documenteditor.documentEditorSettings.showRuler = !documenteditor.documentEditorSettings.showRuler;
});

//Render Document Editor component.
documenteditor.appendTo('#DocumentEditor');
```

{% endtab %}

## How to enable ruler in Document Editor Container component

Using ruler we can refer to setting specific margins, tab stops, or indentations within a document to ensure consistent formatting in Document Editor Container.

The following example illustrates how to enable ruler in Document Editor Container.

{% tab template="document-editor/ruler",es5Template="open-default-window", sourceFiles="index.ts,index.html" %}

```typescript
import { DocumentEditorContainer, Toolbar } from '@syncfusion/ej2-documenteditor';

//Inject require modules.
DocumentEditorContainer.Inject(Toolbar);

//Initialize Document Editor Container component.
let container: DocumentEditorContainer = new DocumentEditorContainer({
    height: '590px', documentEditorSettings: {showRuler: true}
});

document.getElementById('container_ruler_button').addEventListener('click', 
function () {
    container.documentEditorSettings.showRuler = !container.documentEditorSettings.showRuler;
});

//Render Document Editor Container component.
container.appendTo('#DocumentEditor');
```

{% endtab %}