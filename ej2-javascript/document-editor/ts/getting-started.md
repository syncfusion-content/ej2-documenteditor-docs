---
layout: post
title: Getting started with ##Platform_Name## Document editor control | Syncfusion
description:  Checkout and learn about Getting started with ##Platform_Name## Document editor control of Syncfusion Essential JS 2 and more details.
platform: ej2-javascript
control: Getting started 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Getting started in ##Platform_Name## Document editor control

This section explains the steps to create a Word Document Editor within your application and demonstrates the basic usage of the DocumentEditor component.

## Dependencies

Following is the list of minimum dependencies required to use the Document Editor.

```javascript
    |-- @syncfusion/ej2-documentEditor
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-buttons
    |-- @syncfusion/ej2-compression
    |-- @syncfusion/ej2-data
    |-- @syncfusion/ej2-dropdowns
    |-- @syncfusion/ej2-file-utils
    |-- @syncfusion/ej2-inputs
    |-- @syncfusion/ej2-lists
    |-- @syncfusion/ej2-navigations
    |-- @syncfusion/ej2-popups
    |-- @syncfusion/ej2-splitbuttons
    |-- @syncfusion/ej2-charts
```

### Server side dependencies

The Document Editor component requires server-side interactions for the following operations:

* [Open file formats other than SFDT](https://ej2.syncfusion.com/documentation/document-editor/import#convert-word-documents-into-sfdt)
* [Paste with formatting](https://ej2.syncfusion.com/documentation/document-editor/clipboard#paste-with-formatting)
* [Restrict editing](https://ej2.syncfusion.com/documentation/document-editor/document-management)
* [Spellcheck](https://ej2.syncfusion.com/documentation/document-editor/spell-check)
* [Save as file formats other than SFDT and DOCX](https://ej2.syncfusion.com/documentation/document-editor/saving-documents/server-side-export)

>Note: If you don't require the above functionalities then you can deploy as pure client-side component without any server-side interactions.

To know about server-side dependencies, please refer this [page](https://ej2.syncfusion.com/documentation/document-editor/web-services-overview).

## Installation and configuration

To get started with Document Editor component, you can clone the [`Essential JS 2 quickstart`](https://github.com/syncfusion/ej2-quickstart.git) project and install necessary packages by using the following commands.

```
git clone https://github.com/syncfusion/ej2-quickstart.git quickstart
cd quickstart
npm install
```

## Configuring system JS

[Syncfusion DocumentEditor packages](https://ej2.syncfusion.com/documentation/document-editor/getting-started#dependencies/) have to be mapped in the `system.config.js` configuration file.

```javascript
System.config({
    paths: {
        'syncfusion:': './node_modules/@syncfusion/',
    },
    map: {
        app: 'app',

        //Syncfusion packages mapping
        "@syncfusion/ej2-base": "syncfusion:ej2-base/dist/ej2-base.umd.min.js",
        "@syncfusion/ej2-file-utils": "syncfusion:ej2-file-utils/dist/ej2-file-utils.umd.min.js",
        "@syncfusion/ej2-compression": "syncfusion:ej2-compression/dist/ej2-compression.umd.min.js",
        "@syncfusion/ej2-buttons": "syncfusion:ej2-buttons/dist/ej2-buttons.umd.min.js",
        "@syncfusion/ej2-popups": "syncfusion:ej2-popups/dist/ej2-popups.umd.min.js",
        "@syncfusion/ej2-navigations": "syncfusion:ej2-navigations/dist/ej2-navigations.umd.min.js",
        "@syncfusion/ej2-inputs": "syncfusion:ej2-inputs/dist/ej2-inputs.umd.min.js",
        "@syncfusion/ej2-splitbuttons": "syncfusion:ej2-splitbuttons/dist/ej2-splitbuttons.umd.min.js",
        "@syncfusion/ej2-dropdowns": "syncfusion:ej2-dropdowns/dist/ej2-dropdowns.umd.min.js",
        "@syncfusion/ej2-lists": "syncfusion:ej2-lists/dist/ej2-lists.umd.min.js",
        "@syncfusion/ej2-data": "syncfusion:ej2-data/dist/ej2-data.umd.min.js",
        "@syncfusion/ej2-office-chart": "syncfusion:ej2-office-chart/dist/ej2-office-chart.umd.min.js",
        "@syncfusion/ej2-calendars": "syncfusion:ej2-calendars/dist/ej2-calendars.umd.min.js",
        "@syncfusion/ej2-charts": "syncfusion:ej2-charts/dist/ej2-charts.umd.min.js",
        "@syncfusion/ej2-svg-base": "syncfusion:ej2-svg-base/dist/ej2-svg-base.umd.min.js",
        "@syncfusion/ej2-pdf-export": "syncfusion:ej2-pdf-export/dist/ej2-pdf-export.umd.min.js",
        "@syncfusion/ej2-documenteditor": "syncfusion:ej2-documenteditor/dist/ej2-documenteditor.umd.min.js"
    },
    packages: {
        'app': {
            main: 'app',
            defaultExtension: 'js'
        }
    }
});

System.import('app');
```

## Adding CSS reference

Combined CSS files are available in the Essential JS 2 package root folder.
This can be referenced in your `[src/styles/styles.css]` using the following code.

```
@import '../../node_modules/@syncfusion/ej2/material.css';
```

> To know about individual component CSS, please refer to [Individual Component theme files](https://ej2.syncfusion.com/documentation/appearance/theme#referring-individual-control-theme/) section.

## Adding component

You can add `DocumentEditorContainer` component with  predefined toolbar and properties pane options or `DocumentEditor` component with customize options.

>Note: Starting from `v19.3.0.x`, we have optimized the accuracy of text size measurements such as to match Microsoft Word pagination for most Word documents. This improvement is included as default behavior along with an optional API [to disable it and retain the document pagination behavior of older versions](https://ej2.syncfusion.com/documentation/document-editor/how-to/disable-optimized-text-measuring).

### Document Editor component

Document Editor component is used to create, view and edit word documents. In this, you can customize the UI options based on your requirements to modify the document.

#### Adding Document Editor component

You can start adding Essential JS 2 documenteditor component to the application. To get started, add the DocumentEditor component in `app.ts` and `index.html` files using the following code.

Place the following code in the `app.ts`.

```ts
import { DocumentEditor } from '@syncfusion/ej2-documenteditor';

// Initialize Document Editor component.
let documenteditor: DocumentEditor = new DocumentEditor({ isReadOnly: false, height: '370px', serviceUrl: 'https://ej2services.syncfusion.com/production/web-services/api/documenteditor/' });

// Enable all built in modules.
documenteditor.enableAllModules();

// Render the Document Editor component.
documenteditor.appendTo('#DocumentEditor');

```

Now, add an HTML div element to act as the DocumentEditor element in `index.html` using the following code.

```html
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <title>Essential JS 2</title>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
        <meta name="description" content="Essential JS 2" />
        <meta name="author" content="Syncfusion" />
        <link rel="shortcut icon" href="resources/favicon.ico" />
        <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" />

        <!--style reference from app-->
        <link href="/styles/styles.css" rel="stylesheet" />

        <!--system js reference and configuration-->
        <script src="node_modules/systemjs/dist/system.src.js" type="text/javascript"></script>
        <script src="system.config.js" type="text/javascript"></script>
    </head>

    <body>
        <!--Element which will render as DocumentEditor -->
        <div id="DocumentEditor"></div>
    </body>

    </html>
```

#### Run the Document Editor application

The quickstart project is configured to compile and run the application in the browser. Use the following command to run the application.

```
npm start
```

Documenteditor output will be displayed as follows.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/document-editor/getting-started-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/document-editor/getting-started-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/document-editor/getting-started-cs1" %}

### Document Editor Container component

Document Editor Container is a predefined component which wraps DocumentEditor, Toolbar, Properties pane, and Status bar into a single component. And the toolbar and properties pane is used to view and modify the document in DocumentEditor thought public APIs available in it.

#### Adding Document Editor Container component

You can start adding Essential JS 2 documenteditor container component to the application. To get started, add the DocumentEditorContainer component in `app.ts` and `index.html` files using the following code.

Place the following code in the `app.ts`.

```ts
import { DocumentEditorContainer, Toolbar } from '@syncfusion/ej2-documenteditor';

DocumentEditorContainer.Inject(Toolbar);

let documenteditor: DocumentEditorContainer = new DocumentEditorContainer({ enableToolbar: true, height: '390px', serviceUrl: 'https://ej2services.syncfusion.com/production/web-services/api/documenteditor/' });

documenteditor.appendTo('#DocumentEditor');

```

Now, add an HTML div element to act as the DocumentEditorContainer element in `index.html` using the following code.

```html
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <title>Essential JS 2</title>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
        <meta name="description" content="Essential JS 2" />
        <meta name="author" content="Syncfusion" />
        <link rel="shortcut icon" href="resources/favicon.ico" />
        <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" />

        <!--style reference from app-->
        <link href="/styles/styles.css" rel="stylesheet" />

        <!--system js reference and configuration-->
        <script src="node_modules/systemjs/dist/system.src.js" type="text/javascript"></script>
        <script src="system.config.js" type="text/javascript"></script>
    </head>

    <body>
        <!--Element which will render as DocumentEditorContainer -->
        <div id="DocumentEditor"></div>
    </body>

    </html>
```

#### Run the Document Editor Container application

The quickstart project is configured to compile and run the application in the browser. Use the following command to run the application.

```
npm start
```

DocumentEditorContainer output will be displayed as follows.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/document-editor/getting-started-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/document-editor/getting-started-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/document-editor/getting-started-cs2" %}

## Frequently Asked Questions

* [How to localize the Documenteditor container](https://ej2.syncfusion.com/documentation/document-editor/global-local).
* [How to load the document by default](https://ej2.syncfusion.com/documentation/document-editor/how-to/open-default-document).
* [How to customize tool bar](https://ej2.syncfusion.com/documentation/document-editor/how-to/customize-tool-bar).
* [How to resize Document editor component?](https://ej2.syncfusion.com/documentation/document-editor/how-to/resize-document-editor)
