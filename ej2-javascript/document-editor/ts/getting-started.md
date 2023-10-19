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

This section briefly explains how to create a simple **Document editor** component and configure its available functionalities in TypeScript, using Essential JS 2 [quickstart](https://github.com/SyncfusionExamples/ej2-quickstart-webpack-) seed repository.

> This application is integrated with the `webpack.config.js` configuration and uses the latest version of the [webpack-cli](https://webpack.js.org/api/cli/#commands). It requires node `v14.15.0` or higher. For more information about webpack and its features, refer to the [webpack documentation](https://webpack.js.org/guides/getting-started/).

## Dependencies

Following is the list of minimum dependencies required to use the Document Editor.

```javascript
    |-- @syncfusion/ej2-documentEditor
        |-- @syncfusion/ej2-base
        |-- @syncfusion/ej2-buttons
        |-- @syncfusion/ej2-calendars
        |-- @syncfusion/ej2-compression
        |-- @syncfusion/ej2-dropdowns
        |-- @syncfusion/ej2-file-utils
        |-- @syncfusion/ej2-inputs
        |-- @syncfusion/ej2-navigations
        |-- @syncfusion/ej2-office-chart
            |-- @syncfusion/ej2-charts
        |-- @syncfusion/ej2-popups
        |-- @syncfusion/ej2-splitbuttons

```

### Server side dependencies

The Document Editor component requires server-side interactions for the following operations:

* [Open file formats other than SFDT](../document-editor/import#convert-word-documents-into-sfdt)
* [Paste with formatting](../document-editor/clipboard#paste-with-formatting)
* [Restrict editing](../document-editor/document-management)
* [Spellcheck](../document-editor/spell-check)
* [Save as file formats other than SFDT and DOCX](../document-editor/server-side-export)

>Note: If you don't require the above functionalities then you can deploy as pure client-side component without any server-side interactions.

To know about server-side dependencies, please refer this [page](../document-editor/web-services-overview).

## Set up development environment

Open the command prompt from the required directory, and run the following command to clone the Syncfusion JavaScript (Essential JS 2) quickstart project from [GitHub](https://github.com/SyncfusionExamples/ej2-quickstart-webpack-).

```
    git clone https://github.com/SyncfusionExamples/ej2-quickstart-webpack- ej2-quickstart
```

After cloning the application in the `ej2-quickstart` folder, run the following command line to navigate to the `ej2-quickstart` folder.

```
    cd ej2-quickstart
```

## Add Syncfusion JavaScript packages

Syncfusion JavaScript (Essential JS 2) packages are available on the [npmjs.com](https://www.npmjs.com/~syncfusionorg) public registry. You can install all Syncfusion JavaScript (Essential JS 2) controls in a single [@syncfusion/ej2](https://www.npmjs.com/package/@syncfusion/ej2) package or individual packages for each control.

The quickstart application is preconfigured with the dependent [@syncfusion/ej2](https://www.npmjs.com/package/@syncfusion/ej2) package in the `~/package.json` file. Use the following command to install the dependent npm packages from the command prompt.

```
    npm install
```

## Import the Syncfusion CSS styles

Syncfusion JavaScript controls come with [built-in themes](https://ej2.syncfusion.com/documentation/appearance/theme/), which are available in the installed packages. It's easy to adapt the Syncfusion JavaScript controls to match the style of your application by referring to one of the built-in themes.

The quickstart application is preconfigured to use the `Material` theme in the `~/src/styles/styles.css` file, as shown below: 

```
  @import "../../node_modules/@syncfusion/ej2/material.css";
```

> You can check out the [themes](https://ej2.syncfusion.com/documentation/appearance/theme/) section to know more about built-in themes and CSS reference for individual controls.

## Adding component

You can add `DocumentEditorContainer` component with  predefined toolbar and properties pane options or `DocumentEditor` component with customize options.

>Note: Starting from `v19.3.0.x`, we have optimized the accuracy of text size measurements such as to match Microsoft Word pagination for most Word documents. This improvement is included as default behavior along with an optional API [to disable it and retain the document pagination behavior of older versions](../document-editor/how-to/disable-optimized-text-measuring).

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

* [How to localize the Documenteditor container](../document-editor/global-local).
* [How to load the document by default](../document-editor/how-to/open-default-document).
* [How to customize tool bar](../document-editor/how-to/customize-tool-bar).
* [How to resize Document editor component?](../document-editor/how-to/resize-document-editor)
