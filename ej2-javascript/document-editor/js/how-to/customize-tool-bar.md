---
title: "How to"
component: "DocumentEditor"
description: "Learn how to customize the existing toolbar in document editor."
---

# Customize existing toolbar

## How to customize existing toolbar in DocumentEditorContainer

DocumentEditorContainer allows you to customize(add, show, hide, enable, and disable) existing items in a toolbar.

* Add - New items can defined by [`CustomToolbarItemModel`](../../api/document-editor/customToolbarItemModel/) and with existing items in [`toolbarItems`](../../api/document-editor-container/#toolbaritems) property. Newly added item click action can be defined in [`toolbarclick`](../../api/toolbar/clickEventArgs/).

* Show, Hide - Existing items can be shown or hidden using the [`toolbarItems`](../../api/document-editor-container/#toolbaritems) property. Pre-defined toolbar items are available with [`ToolbarItem`](../../api/document-editor/toolbarItem/).

* Enable, Disable -  Toolbar items can be enabled or disable using [`enableItems`](../../api/document-editor-container/toolbar/#enableItems)

```typescript
var toolItem = {
    prefixIcon: "e-de-ctnr-lock",
    tooltipText: "Disable Image",
    text: "Disable Image",
    id: "Custom"
};

//Initialize Document Editor Container component with custom toolbar item.
var container = ej.documenteditor.DocumentEditorContainer({
    toolbarItems: [toolItem, 'Undo', 'Redo', 'Separator', 'Image', 'Table', 'Hyperlink', 'Bookmark', 'Comments', 'TableOfContents', 'Separator', 'Header', 'Footer', 'PageSetup', 'PageNumber', 'Break', 'Separator', 'Find', 'Separator', 'LocalClipboard', 'RestrictEditing']
});

//To handle custom toolbar click event.
container.toolbarClick = function (args) {
    switch (args.item.id) {
        case 'Custom':
            //Disable image toolbar item.
            container.toolbar.enableItems(4, false);
            break;
    }
};
```

>Note: Default value of `toolbarItems` is `['New', 'Open', 'Separator', 'Undo', 'Redo', 'Separator', 'Image', 'Table', 'Hyperlink', 'Bookmark', 'TableOfContents', 'Separator', 'Header', 'Footer', 'PageSetup', 'PageNumber', 'Break', 'InsertFootnote', 'InsertEndnote', 'Separator', 'Find', 'Separator', 'Comments', 'TrackChanges', 'Separator', 'LocalClipboard', 'RestrictEditing', 'Separator', 'FormFields', 'UpdateFields']`.

## How to break custom toolbar text to the next line

The following code shows how to break custom toolbar text to the next line.

```typescript
var toolItem = {
    prefixIcon: "e-de-ctnr-lock",
    tooltipText: "Disable Image",
    text: onWrapText("Disable Image"),
    id: "Custom"
};

function onWrapText(text) {
    var content = '';
    var index = text.lastIndexOf(' ');
    content = text.slice(0, index);
    text.slice(index);
    content += '<div class="e-de-text-wrap">' + text.slice(index) + '</div>';
    return content;
}
```