---
layout: post
title: Read only default in ##Platform_Name## Document editor control | Syncfusion
description: Learn here all about Read only default in Syncfusion ##Platform_Name## Document editor control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Read only default 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Read only default in ##Platform_Name## Document editor control

In this article, we are going to see how to open a document in read only mode by default in DocumentEditor & DocumentEditorContainer.

## Opening a document in read only mode by default in DocumentEditor

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/document-editor/read-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/document-editor/read-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/document-editor/read-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/document-editor/read-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/document-editor/read-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/document-editor/read-cs1" %}
{% endif %}

## Opening a document in ready only mode by default in DocumentEditorContainer

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/document-editor/read-container-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/document-editor/read-container-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/document-editor/read-container-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/document-editor/read-container-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/document-editor/read-container-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/document-editor/read-container-cs1" %}
{% endif %}

>Note: You can use the [`restrictEditing`](../../api/document-editor-container#restrictediting) in DocumentEditorContainer and [`isReadOnly`](../../api/document-editor/#isreadonly) in DocumentEditor based on your requirement to change component to read only mode.