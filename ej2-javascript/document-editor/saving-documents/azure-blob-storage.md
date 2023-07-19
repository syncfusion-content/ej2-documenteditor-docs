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

* In the server-side, Export the **Syncfusion Document Text (.sfdt)** to Word document and upload to the blob storage.

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
