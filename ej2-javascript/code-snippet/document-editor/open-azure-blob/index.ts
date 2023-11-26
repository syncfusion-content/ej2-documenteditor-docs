
import { DocumentEditorContainer, Toolbar } from '@syncfusion/ej2-documenteditor';

// Inject require modules.
DocumentEditorContainer.Inject(Toolbar);

//Initialize Document Editor component
let documentEditorContainer: DocumentEditorContainer = new DocumentEditorContainer({ enableToolbar: true, height: '590px', serviceUrl: 'https://services.syncfusion.com/js/production/api/documenteditor/' });

// Render Document Editor component.
documentEditorContainer.appendTo('#DocumentEditor');

document.getElementById('load').addEventListener('click', (): void => {
    load();
});

async function load(): Promise<void> {
    const response = await fetch(
      'http://localhost:62870/api/documenteditor/LoadFromAzure',
      {
        method: 'Get',
        headers: { 'Content-Type': 'application/json;charset=UTF-8' },
      }
    );
  
    if (response.status === 200 || response.status === 304) {
      var json = await response.json();
      documentEditorContainer.documentEditor.open(JSON.stringify(json));
    }
  }

