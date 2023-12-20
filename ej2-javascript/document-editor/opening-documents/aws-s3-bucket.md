---
layout: post
title: Opening the document from AWS S3 Bucket in Syncfusion ##Platform_Name## Document editor control | Syncfusion
description: Learn here to open a document from AWS S3 Bucket in Syncfusion ##Platform_Name## Document editor control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Opening from AWS S3 Bucket
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
--- 

# Opening the document from AWS S3 Bucket in ##Platform_Name## Document editor control

Document Editor supports opening document from AWS S3 Bucket. We will guide you through the steps to open the documents from AWS S3 Bucket.

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
{% highlight js tabtitle="index.js" %}
{% include code-snippet/document-editor/open-aws-s3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/document-editor/open-aws-s3/index.html %}
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/document-editor/open-aws-s3/index.html %}
{% endhighlight %}
{% endtabs %}

{% endif %}

## Step 3: To use web service projects in.NET Core, refer to this [`link`](../web-services/core.md).

* Import the required namespaces at the top of the DocumentEditorController.cs file:

```c#

using System.IO;
using Amazon;
using Amazon.S3;
using Amazon.S3.Model;

```

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

>Note: Replace Your Access Key from AWS S3, Your Secret Key from AWS S3, and Your Bucket name from AWS S3 with your actual AWS access key, secret key and bucket name, Replace AWSProfileName with Your IAM account number from AWS S3.

* In the server-side, retrieve the word document from AWS S3 Bucket and convert it to **Syncfusion Document Text (.sfdt)**.

```c#
[AcceptVerbs("Post")]
[HttpPost]
[EnableCors("AllowAllOrigins")]
[Route("LoadFromS3")]
public async Task<string> LoadFromS3()
    {
        var s3Client = new AmazonS3Client(AWS_accesskey,AWS_secretkey,AWS_Region);
        // Set the bucket name and object key of the DOCX document
        var bucketName = "bucketName";
        var objectKey = "sample.docx";
        // Create a GetObjectRequest to retrieve the document
        var request = new GetObjectRequest
        {
            BucketName = bucketName,
            Key = objectKey
        };
        // Retrieve the document from S3
        var response = await s3Client.GetObjectAsync(request);
        // Read the content of the document
        MemoryStream stream = new MemoryStream();
        stream.Position = 0;
        await response.ResponseStream.CopyToAsync(stream);
        WordDocument document = WordDocument.Load(stream, FormatType.Docx);
        string json = Newtonsoft.Json.JsonConvert.SerializeObject(document);
        document.Dispose();
        stream.Close();
        return json;
    }
```
