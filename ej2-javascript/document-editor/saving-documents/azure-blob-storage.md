---
layout: post
title: Save the document the Azure Blob Storage in Syncfusion ##Platform_Name## Document editor control | Syncfusion
description: Learn here to save document in the Azure Blob Storage in Syncfusion ##Platform_Name## Document editor control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Save to Azure blob storage
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
--- 

# Saving the document to Azure Blob Storage in ##Platform_Name## Document editor control 

Document Editor exports the document into various known file formats in client-side such as Microsoft Word document (.docx), text document (.txt), and its own format called **Syncfusion Document Text (.sfdt)**. We will guide you through the steps to save your documents in cloud storage. 

{% if page.publishingplatform == "typescript" %}

## Step 1: Create a Simple Document Editor Sample in Typescript 

* Start by following the steps provided in this [`link`](../ts/getting-started.md) to create a simple Document Editor sample in Typescript. This will give you a basic setup of the Document Editor component.

{% elsif page.publishingplatform == "javascript" %}

## Step 1: Create a Simple Document Editor Sample in Javascript

* Start by following the steps provided in this [`link`](../js/getting-started.md) to create a simple Document Editor sample in Javascript. This will give you a basic setup of the Document Editor component.

{% endif %}

## Step 2: Modify the index File in the Document Editor sample

* In the client-side, the document is saved as sfdt using using [`serialize`](../../api/document-editor/#serialize) method which save's the document as **Syncfusion Document Text (.sfdt)** and sent to server-side for saving in Azure Blob Storage.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/document-editor/save-azure-blob/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/document-editor/save-azure-blob/index.html %}
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/document-editor/save-azure-blob/index.html %}
{% endhighlight %}
{% endtabs %}

{% endif %}

## Step 3: To use web service projects in.NET Core, refer to this [`link`](../web-services/core.md).

* Import the required namespaces at the top of the DocumentEditorController.cs file:

```c#

using Azure.Storage.Blobs;

```

>Note: The Azure.Storage.Blobs NuGet package must be installed in your application to use the previous code example.

* In the server-side, Export the **Syncfusion Document Text (.sfdt)** to Word document and upload to the blob storage.

* Add the SaveToAzure() method and add the necessary values to save the document to Azure Blob Storage

```c#
[AcceptVerbs("Post")]
[HttpGet]
[EnableCors("AllowAllOrigins")]
[Route("SaveToAzure")]
public async Task SaveToAzure([FromBody] SaveParameter data)
{
    //Create a connection to your Azure Blob storage account:
    string connectionString = "<connectionString>";
    //Retrieve a reference to the container containing your document:
    string containerName = "<your-container-name>";
    string baseBlobName = "<your-blob-name>";
    string uniqueIdentifier = Guid.NewGuid().ToString(); // Generate a unique identifier
    string blobName = $"{baseBlobName}-{uniqueIdentifier}.docx"; // Create the blob name with the base name and unique identifier
    BlobServiceClient blobServiceClient = new BlobServiceClient(connectionString);
    BlobContainerClient containerClient = blobServiceClient.GetBlobContainerClient(containerName);
    BlobClient blobClient = containerClient.GetBlobClient(blobName);
    Stream stream = new MemoryStream();
    WDocument document = WordDocument.Save(data.Content);
    document.Save(stream, Syncfusion.DocIO.FormatType.Docx);
    await blobClient.UploadAsync(stream, true);
    document.Close();
    stream.Close();
}
```
>Note: Replace Your Connection string from Azure with the actual connection string for your Azure Blob Storage account and Your container name in Azure with the actual container name and your blob name in Azure with the actual blob name