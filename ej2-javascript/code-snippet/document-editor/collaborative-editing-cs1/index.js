// Inject collaborative editing module.
ejs.documenteditor.DocumentEditor.Inject(ejs.documenteditor.CollaborativeEditingHandler);
ejs.documenteditor.DocumentEditorContainer.Inject(ejs.documenteditor.Toolbar);
let container = new ejs.documenteditor.DocumentEditorContainer({ enableToolbar: true,  height: '590px',});

container.serviceUrl = 'http://localhost:5000/api/documenteditor/';
container.appendTo('#container');

// Enable collaborative editing in Document Editor.
container.documentEditor.enableCollaborativeEditing = true;
