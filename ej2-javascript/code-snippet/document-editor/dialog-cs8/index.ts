


import { DocumentEditor, Editor, Selection, StyleDialog, StylesDialog, SfdtExport, } from '@syncfusion/ej2-documenteditor';

DocumentEditor.Inject(Editor, Selection, SfdtExport, StyleDialog, StylesDialog);

let documenteditor: DocumentEditor = new DocumentEditor({
    isReadOnly: false,
    enableSelection: true,
    enableEditor: true,
    enableStyleDialog: true,
    enableSfdtExport: true,
    enableStylesDialog: true,
    height: '370px'
});

let button: HTMLElement = document.getElementById('dialog');
button.addEventListener('click', function () {

    //To open styles dialog
    documenteditor.showDialog('Styles');
});

documenteditor.appendTo('#DocumentEditor');



