---
title: How to save document in the cloud storage in ##Platform_Name## Document editor control | Syncfusion
description: Learn how to save document in the cloud storage in Syncfusion ##Platform_Name## Document editor control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Save document in cloud
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
--- 


# How to save the document in the cloud storage in Javascript Document Editor

In this article, we are going to see how to save the document in the cloud storage.

## Save the document in the azure blob storage

The following example code illustrates how to save the document in the azure cloud storage.

### Client Side

```typescript

document.getElementById('export').addEventListener('click', (): void => {
  save();
});

async function save(): Promise<void> {
  let sfdt: object = {
    content: container.documentEditor.serialize(),
    Filename: 'sample.docx',
  };
  const response = await fetch(
    'http://localhost:62870/api/documenteditor/SaveToAzure',
    {
      method: 'Post',
      headers: { 'Content-Type': 'application/json;charset=UTF-8' },
      body: JSON.stringify(sfdt),
    }
  );
}


```

### Server Side 

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
