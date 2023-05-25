

import { DocumentEditorContainer, Toolbar } from '@syncfusion/ej2-documenteditor';

// Inject require modules.
DocumentEditorContainer.Inject(Toolbar);

//Initialize Document Editor component
let documenteditor: DocumentEditorContainer = new DocumentEditorContainer({ enableToolbar: true, height: '590px', serviceUrl: 'https://ej2services.syncfusion.com/production/web-services/api/documenteditor/' });

// Render Document Editor component.
documenteditor.appendTo('#DocumentEditor');



