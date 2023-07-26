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

{% if page.publishingplatform == "typescript" %}

## Step 1: Create a Simple Document Editor Sample in Typescript

* Start by following the steps provided in this [`link`](../ts/getting-started.md) to create a simple Document Editor sample in Typescript. This will give you a basic setup of the Document Editor component. 

{% elsif page.publishingplatform == "javascript" %}

## Step 1: Create a Simple Document Editor Sample in Javascript

* Start by following the steps provided in this [`link`](../js/getting-started.md) to create a simple Document Editor sample in Javascript. This will give you a basic setup of the Document Editor component.

{% endif %}

## Step 2: Modify the index File in the Document Editor sample

* In the client-side, the document is returned from the web service is opening using [`open`](../../api/document-editor/#open) method.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight js tabtitle="index.ts" %}
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

## Step 3: To use web service projects in.NET Core, refer to this [`link`](../web-services/core.md).

* Import the required namespaces at the top of the DocumentEditorController.cs file:

```c#

using Azure.Storage.Blobs;

```

>Note: The Azure.Storage.Blobs NuGet package must be installed in your application to use the previous code example.

* In the server-side, retrieve the word document from blob storage and convert it to **Syncfusion Document Text (.sfdt)**. 

* Add the LoadFromAzure() method and add the necessary values to load the document from Azure Blob Storage

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
>Note: Replace Your Connection string from Azure with the actual connection string for your Azure Blob Storage account and Your container name in Azure with the actual container name and your blob name in Azure with the actual blob name