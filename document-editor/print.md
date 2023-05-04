---
layout: post
title: Print in ##Platform_Name## Document editor control | Syncfusion
description: Learn here all about Print in Syncfusion ##Platform_Name## Document editor control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Print 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Print in ##Platform_Name## Document editor control

To print the document, use the [`print`](../api/document-editor#print) method from Document Editor instance.

Refer to the following example for showing a document and print it.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/document-editor/print-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/document-editor/print-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/document-editor/print-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/document-editor/print-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/document-editor/print-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/document-editor/print-cs1" %}
{% endif %}

Refer to the following example for creating a document and print it.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/document-editor/print-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/document-editor/print-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/document-editor/print-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/document-editor/print-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/document-editor/print-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/document-editor/print-cs2" %}
{% endif %}

## Improve print quality

Document editor provides an option to improve the print quality using [`printDevicePixelRatio`](../api/document-editor/documentEditorSettingsModel/#printdevicepixelratio) in Document editor settings. Document editor using canvas approach to render content. Then, canvas are converted to image and it process for print. Using printDevicePixelRatio API, you can increase the image quality based on your requirement.

The following example code illustrates how to improve the print quality in Document editor container.

```ts
let container: DocumentEditorContainer = new DocumentEditorContainer({ enableToolbar: true, height: '590px',
   documentEditorSettings: {
     printDevicePixelRatio: 2
   }
 });
 DocumentEditorContainer.Inject(Toolbar);
 container.serviceUrl = 'https://ej2services.syncfusion.com/production/web-services/api/documenteditor/';
 container.appendTo('#container');
```

>Note: By default, printDevicePixelRatio value is 1

## Print using window object

You can print the document in Document Editor by passing the window instance. This is useful to implement print in third party frameworks such as electron, where the window instance will not be available. Refer to the following example.

```ts
import { DocumentEditor, Print } from '@syncfusion/ej2-documenteditor';

DocumentEditor.Inject(Print);

let documenteditor: DocumentEditor = new DocumentEditor({
    enablePrint: true, height: '370px'
});
documenteditor.appendTo('#DocumentEditor');
documenteditor.print(window);
```

## Page setup

Some of the print options cannot be configured using JavaScript. Refer to the following links to learn more about the browser page setup:

* [`Chrome`](https://support.google.com/chrome/answer/1069693?hl=en&visit_id=1-636335333734668335-3165046395&rd=1/)
* [`Firefox`](https://support.mozilla.org/en-US/kb/how-print-web-pages-firefox/)

However, you can customize margins, paper, and layout options by modifying the section format properties using page setup dialog

```ts
import { DocumentEditor, Print, PageSetupDialog, Editor, Selection, EditorHistory } from '@syncfusion/ej2-documenteditor';

DocumentEditor.Inject(Print, PageSetupDialog, Editor, Selection, EditorHistory);

let documenteditor: DocumentEditor = new DocumentEditor({
    isReadOnly: false,
    enablePrint: true,
    enablePageSetupDialog: true,
    enableEditor: true,
    enableSelection: true,
    enableEditorHistory: true,
    height: '370px'
});
documenteditor.appendTo('#DocumentEditor');
documenteditor.showPageSetupDialog();
```

By customizing margins, papers, and layouts, the layout of the document will be changed in Document Editor. To modify these options during print operation, serialize the document as SFDT using the [`serialize`](../api/document-editor#serialize) method in Document Editor instance and open the SFDT data in another instance of Document Editor in separate window.

The following example shows how to customize layout options only for printing.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/document-editor/print-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/document-editor/print-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/document-editor/print-cs3" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/document-editor/print-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/document-editor/print-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/document-editor/print-cs3" %}
{% endif %}

## See Also

* [Feature modules](../document-editor/feature-module/)
* [Page Setup dialog](../document-editor/dialog#page-setup-dialog)
