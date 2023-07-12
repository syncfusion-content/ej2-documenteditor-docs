--- 
layout: post
title: How to import document from cloud storage in ##Platform_Name## Document editor control | Syncfusion
description: Learn how to import document from cloud storage in Syncfusion ##Platform_Name## Document editor control of Syncfusion Essential JS 2 and more. 
platform: ej2-javascript
control: Import document from cloud 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
--- 

# How to import the document from cloud storage in Javascript Document Editor

In this article, we are going to see how to import the document from cloud storage.

## import the document from azure blob storage

The following example code illustrates how to import the document from azure cloud storage.

### Client Side

```typescript

document.getElementById('import').addEventListener('click', (): void => {
  load();
});

async function load(): Promise<void> {
  const response = await fetch(
    'http://localhost:62870/api/documenteditor/LoadFromAzure',
    {
      method: 'Get',
      headers: { 'Content-Type': 'application/json;charset=UTF-8' },
    }
  );

  if (response.status === 200 || response.status === 304) {
    var json = await response.json();
    container.documentEditor.open(JSON.stringify(json));
  }
}

```

### Server Side 

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
