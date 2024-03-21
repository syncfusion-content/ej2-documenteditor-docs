---
layout: post
title: Customize color picker in ##Platform_Name## Document editor control | Syncfusion
description: Learn here all about Customize color picker in Syncfusion ##Platform_Name## Document editor control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Customize Color Picker 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Customize color picker in ##Platform_Name## Document editor control

Document editor provides an options to customize the color picker using [`colorPickerSettings`](../../api/document-editor/documentEditorSettingsModel/#colorpickersettings) in Document editor settings. The color picker offers customization options for default appearance, by allowing selection between Picker or Palette mode, for font and border colors."

Similarly, you can use [`documentEditorSettings`](../../api/document-editor#documenteditorsettings) property for DocumentEditor also.

The following example code illustrates how to Customize the color picker in Document editor container.

```ts
let container: DocumentEditorContainer = new DocumentEditorContainer({ enableToolbar: true,height: '590px',
  //Customizing options for color picker.
  documentEditorSettings: {
    colorPickerSettings: { mode: 'Palette', modeSwitcher: true, showButtons: true },
  }
});
DocumentEditorContainer.Inject(Toolbar);
container.serviceUrl = 'https://services.syncfusion.com/js/production/api/documenteditor/';
container.appendTo('#container');
```
The following table illustrates all the possible properties for the color picker.

| Property | Behaviour |
|---|---|
| columns | It is used to render the ColorPicker palette with specified columns. Defaults to 10 |
| disabled | It is used to enable / disable ColorPicker component. If it is disabled the ColorPicker popup won’t open. Defaults to false |
| mode | It is used to render the ColorPicker with the specified mode. Defaults to ‘Picker’ |
| modeSwitcher | It is used to show / hide the mode switcher button of ColorPicker component. Defaults to true |
| showButtons | It is used to show / hide the control buttons (apply / cancel) of ColorPicker component. Defaults to true |