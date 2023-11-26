
import { DocumentEditorContainer, Toolbar } from '@syncfusion/ej2-documenteditor';

// Inject require modules.
DocumentEditorContainer.Inject(Toolbar);

//Initialize Document Editor component
let documentEditorContainer: DocumentEditorContainer = new DocumentEditorContainer({ enableToolbar: true, height: '590px', serviceUrl: 'https://services.syncfusion.com/js/production/api/documenteditor/' });

// Render Document Editor component.
documentEditorContainer.appendTo('#DocumentEditor');

document.getElementById('export').addEventListener('click', (): void => {
    save();
});

async function save(): Promise<void> {
    let sfdt: object = {
        content: documentEditorContainer.documentEditor.serialize(),
        Filename: 'sample.docx',
    };
    const response = await fetch(
        'http://localhost:62870/api/documenteditor/SaveToAzure',
        {
            method: 'Post',
            headers: { 'Content-Type': 'application/json;charset=UTF-8' },
            body: JSON.stringify(sfdt),
        }
    );
}

