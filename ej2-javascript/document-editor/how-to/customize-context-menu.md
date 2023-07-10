---
layout: post
title: Customize context menu in ##Platform_Name## Document editor control | Syncfusion
description: Learn here all about Customize context menu in Syncfusion ##Platform_Name## Document editor control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Customize context menu 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Customize context menu in ##Platform_Name## Document editor control

## How to customize context menu in Document Editor

Document Editor allows you to add custom option in context menu. It can be achieved by using the [`addCustomMenu()`](../../api/document-editor/contextMenu/#addcustommenu) method and custom action is defined using the [`customContextMenuSelect`](../../api/document-editor/customContentMenuEventArgs/)

### Add Custom Option

The following code shows how to add custom option in context menu.

```ts
let documentEditor: DocumentEditor = new DocumentEditor({
    isReadOnly: false
});
documentEditor.enableAllModules();
documentEditor.appendTo('#DocumentEditor');
//Creating custom menu items
let menuItems: MenuItemModel[] = [
    {
        text: 'Search In Google',
        id: 'search_in_google',
        iconCss: 'e-icons e-de-ctnr-find'
    }];
//Adding custom options
documentEditor.contextMenu.addCustomMenu(menuItems, false);
//To handle contextmenu select event
documentEditor.customContextMenuSelect = (args: CustomContentMenuEventArgs): void => {
    let item: string = args.id;
    let id: string = documentEditor.element.id;
    switch (item) {
        case id + 'search_in_google':
            let searchContent: string = documentEditor.selection.text;
            if (!documentEditor.selection.isEmpty && /\S/.test(searchContent)) {
                window.open('http://google.com/search?q=' + searchContent);
            }
            break;
    }
};
```

### Customize custom option in context menu

Document Editor allows you to customize the added custom option and also to hide/show default context menu.

#### Hide default context menu items

The following code shows how to hide default context menu and add custom option in context menu.

```ts
let documentEditor: DocumentEditor = new DocumentEditor({
    isReadOnly: false
});
documentEditor.enableAllModules();
documentEditor.appendTo('#DocumentEditor');
//Creating custom menu items
let menuItems: MenuItemModel[] = [
    {
        text: 'Search In Google',
        id: 'search_in_google',
        iconCss: 'e-icons e-de-ctnr-find'
    }];
//Adding custom options
documentEditor.contextMenu.addCustomMenu(menuItems, true);
```

#### Customize added context menu items

The following code shows how to hide/show added custom option in context menu using the [`customContextMenuBeforeOpen`](../../api/document-editor/beforeOpenCloseCustomContentMenuEventArgs/).

```ts
let documentEditor: DocumentEditor = new DocumentEditor({
    isReadOnly: false
});
documentEditor.enableAllModules();
documentEditor.appendTo('#DocumentEditor');
//Creating custom menu items
let menuItems: MenuItemModel[] = [
    {
        text: 'Search In Google',
        id: 'search_in_google',
        iconCss: 'e-icons e-de-ctnr-find'
    }];
//Adding custom options
documentEditor.contextMenu.addCustomMenu(menuItems, false);
//To show/hide custom menu item
documentEditor.customContextMenuBeforeOpen = (args: BeforeOpenCloseCustomContentMenuEventArgs): void => {
    let search: HTMLElement = document.getElementById(args.ids[0]);
    search.style.display = 'none';
    let searchContent: string = documentEditor.selection.text;
    if ((!documentEditor.selection.isEmpty) && (/\S/.test(searchContent))) {
        search.style.display = 'block';
    }
};
//To handle contextmenu select event
documentEditor.customContextMenuSelect = (args: CustomContentMenuEventArgs): void => {
    let item: string = args.id;
    let id: string = documentEditor.element.id;
    switch (item) {
        case id + 'search_in_google':
            let searchContent: string = documentEditor.selection.text;
            if (!documentEditor.selection.isEmpty && /\S/.test(searchContent)) {
                window.open('http://google.com/search?q=' + searchContent);
            }
            break;
    }
};
```

The following is the output of custom context menu with customization.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/document-editor/customize-context-menu-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/document-editor/customize-context-menu-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/document-editor/customize-context-menu-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/document-editor/customize-context-menu-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/document-editor/customize-context-menu-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/document-editor/customize-context-menu-cs1" %}
{% endif %}