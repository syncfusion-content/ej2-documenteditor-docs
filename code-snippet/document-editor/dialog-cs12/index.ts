


import { DocumentEditor, Editor, Selection, TableOptionsDialog, SfdtExport, } from '@syncfusion/ej2-documenteditor';
DocumentEditor.Inject(Editor, Selection, SfdtExport, TableOptionsDialog);
let documenteditor: DocumentEditor = new DocumentEditor({
    isReadOnly: false,
    enableSelection: true,
    enableEditor: true,
    enableTableOptionsDialog: true,
    enableSfdtExport: true,
    height: '370px'
});
let button: HTMLElement = document.getElementById('dialog');
button.addEventListener('click', function () {
    //To open table options dialog
    documenteditor.showDialog('TableOptions');
});
documenteditor.appendTo('#DocumentEditor');
documenteditor.editor.insertTable(2, 2);



