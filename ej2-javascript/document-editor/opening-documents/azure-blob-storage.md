---
layout: post
title: Opening the document from Azure Blob Storage in Syncfusion ##Platform_Name## Document editor control | Syncfusion
description: Learn here to open a document from Azure Blob Storage in Syncfusion ##Platform_Name## Document editor control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Opening from Azure blob storage
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
--- 

# Opening the document from Azure Blob Storage in ##Platform_Name## Document editor control

Document Editor supports opening document from Azure Blob Storage. We will guide you through the steps to open the documents from Azure blob storage.

* In the client-side, the document is returned from the web service is opening using [`open`](../../api/document-editor/#open) method.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/document-editor/open-azure-blob/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/document-editor/open-azure-blob/index.html %}
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/document-editor/open-azure-blob/index.html %}
{% endhighlight %}
{% endtabs %}

{% endif %}

* In the server-side, retrieve the word document from blob storage and convert it to **Syncfusion Document Text (.sfdt)**.

```c#
[AcceptVerbs("Get")]
[HttpGet]
[EnableCors("AllowAllOrigins")]
[Route("LoadFromAzure")]
public async Task<string> LoadFromAzure()
{
    //Create a connection to your Azure Blob storage account:
    string connectionString = "<connectionString>";
    //Retrieve a reference to the container containing your document:
    string containerName = "<your-container-name>";
    //Load the document from the blob storage:
    string blobName = "<your-blob-name>";
    BlobServiceClient blobServiceClient = new BlobServiceClient(connectionString);
    BlobContainerClient containerClient = blobServiceClient.GetBlobContainerClient(containerName);
    BlobClient blobClient = containerClient.GetBlobClient(blobName);
    Stream stream = new MemoryStream();
    blobClient.DownloadTo(stream);
    WordDocument document = WordDocument.Load(stream, FormatType.Docx);
    string json = Newtonsoft.Json.JsonConvert.SerializeObject(document);
    stream.Close();
    return json;
}
```
