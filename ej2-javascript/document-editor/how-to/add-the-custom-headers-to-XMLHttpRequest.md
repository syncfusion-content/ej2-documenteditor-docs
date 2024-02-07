---
layout: post
title: Add the custom headers to XMLHttpRequest in ##Platform_Name## Document editor control | Syncfusion
description: Learn here to add the custom headers to XMLHttpRequest in in Syncfusion ##Platform_Name## Document editor control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Add Custom Headers 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Add the custom headers to XMLHttpRequest in ##Platform_Name## Document editor control

## How to add the custom headers to XMLHttpRequest in DocumentEditor component

DocumentEditor allows you to add the custom headers to XMLHttpRequest using the [`layoutType`](../../api/document-editor#headers).

{% if page.publishingplatform == "typescript" %}

```ts
let docEdit: DocumentEditor = new DocumentEditor({ headers: [{ CustomHeader_Key: 'Value' }, { CustomHeader_Key2: 'Value2' }] });
```
{% elsif page.publishingplatform == "javascript" %}

```ts
var docEdit = new ej.documenteditor.DocumentEditor({ headers: [{ CustomHeader_Key: 'Value' }, { CustomHeader_Key2: 'Value2' }] });
```

{% endif %}

## How to add the custom headers to XMLHttpRequest in DocumentEditorContainer component

DocumentEditorContainer component allows you to add the custom headers to XMLHttpRequest using the [`layoutType`](../../api/document-editor-container#headers)

{% if page.publishingplatform == "typescript" %}

```ts
let container: DocumentEditorContainer = new DocumentEditorContainer({ headers: [{ CustomHeader_Key: 'Value' }, { CustomHeader_Key2: 'Value2' }] });
```
{% elsif page.publishingplatform == "javascript" %}

```ts
var container = new ej.documenteditor.DocumentEditorContainer({ headers: [{ CustomHeader_Key: 'Value' }, { CustomHeader_Key2: 'Value2' }] });
```

{% endif %}