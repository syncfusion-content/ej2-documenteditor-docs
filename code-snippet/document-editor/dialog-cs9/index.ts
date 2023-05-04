


import { DocumentEditor, Editor, Selection, StyleDialog, SfdtExport } from '@syncfusion/ej2-documenteditor';

DocumentEditor.Inject(Editor, Selection, SfdtExport, StyleDialog);

let documenteditor: DocumentEditor = new DocumentEditor({
    isReadOnly: false,
    enableSelection: true,
    enableEditor: true,
    enableStyleDialog: true,
    enableSfdtExport: true,
    height: '370px'
});

let button: HTMLElement = document.getElementById('dialog');
button.addEventListener('click', function () {

    //To open style dialog
    documenteditor.showDialog('Style');
});

documenteditor.appendTo('#DocumentEditor');



