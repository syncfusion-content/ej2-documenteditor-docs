import { DocumentEditorContainer, DocumentEditor, CollaborativeEditingHandler} from '@syncfusion/ej2-documenteditor';

// Inject collaborative editing module.
ej.documenteditor.DocumentEditor.Inject(CollaborativeEditingHandler);
ej.documenteditor.DocumentEditorContainer.Inject(Toolbar);
let container = new ej.documenteditor.DocumentEditorContainer({ enableToolbar: true,  height: '590px',});

container.serviceUrl = 'http://localhost:5000/api/documenteditor/';
container.appendTo('#container');

// Enable collaborative editing in Document Editor.
container.documentEditor.enableCollaborativeEditing = true;