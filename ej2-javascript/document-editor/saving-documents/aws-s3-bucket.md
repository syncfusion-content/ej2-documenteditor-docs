---
layout: post
title: Save the document the AWS S3 Bucket in Syncfusion ##Platform_Name## Document editor control | Syncfusion
description: Learn here to save document in the AWS S3 Bucket in Syncfusion ##Platform_Name## Document editor control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Save to AWS S3 Bucket
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
--- 

# Saving the document to AWS S3 Bucket in ##Platform_Name## Document editor control

Document Editor exports the document into various known file formats in client-side such as Microsoft Word document (.docx), text document (.txt), and its own format called **Syncfusion Document Text (.sfdt)**. We will guide you through the steps to save your documents in cloud storage.

* In the client-side, the document is saved as sfdt using using [`serialize`](../../api/document-editor/#serialize) method which save's the document as **Syncfusion Document Text (.sfdt)** and sent to server-side for saving in AWS S3 Bucket.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/document-editor/save-aws-s3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/document-editor/save-aws-s3/index.html %}
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/document-editor/save-aws-s3/index.html %}
{% endhighlight %}
{% endtabs %}

{% endif %}

* In server-side, configure the access key and secret key in `web.config` file and register profile in `startup.cs`.

In `web.config`, add key like below format:

```c#
 <appSettings>
    <add key="AWSProfileName" value="sync_development" />
    <add key="AWSAccessKey" value="" />
    <add key="AWSSecretKey" value="" />
  </appSettings>
```

In `startup.cs`, register profile in below format:

```c#
Amazon.Util.ProfileManager.RegisterProfile("sync_development","", "");
```

* In the server-side, Export the **Syncfusion Document Text (.sfdt)** to Word document and upload to the blob storage.

```c#
[AcceptVerbs("Post")]
[HttpPost]
[EnableCors("AllowAllOrigins")]
[Route("SaveToS3")]
public string SaveToS3()
    {
        IFormFile file = HttpContext.Request.Form.Files[0];
        Stream stream = new MemoryStream();
        file.CopyTo(stream);
        UploadFileStreamToS3(stream, "bucketName", "", "sample.docx");
        stream.Close();
        return "Sucess";
    }

public bool UploadFileStreamToS3(System.IO.Stream localFilePath, string bucketName, string subDirectoryInBucket, string fileNameInS3)
    {
        AWSCredentials credentials = new StoredProfileAWSCredentials("sync_development");
        IAmazonS3 client = new AmazonS3Client(credentials, Amazon.RegionEndpoint.USEast1);
        TransferUtility utility = new TransferUtility(client);
        TransferUtilityUploadRequest request = new TransferUtilityUploadRequest();

        if (subDirectoryInBucket == "" || subDirectoryInBucket == null)
        {
            request.BucketName = bucketName; //no subdirectory just bucket name  
        }
        else
        {   // subdirectory and bucket name  
            request.BucketName = bucketName + @"/" + subDirectoryInBucket;
        }
        request.Key = fileNameInS3; //file name up in S3  
        request.InputStream = localFilePath;
        utility.Upload(request); //commensing the transfer  

        return true; //indicate that the file was sent  
    }
```
