

import { DocumentEditor, SfdtExport, Selection, RequestNavigateEventArgs } from '@syncfusion/ej2-documenteditor';

//Inject require modules.
DocumentEditor.Inject(Selection, SfdtExport);
//Initilize the Document Editor component.
let documenteditor: DocumentEditor = new DocumentEditor({ enableSelection: true, height: '370px' });
documenteditor.appendTo('#DocumentEditor');

// Add event listener for requestNavigate event to customize hyperlink navigation functionality
documenteditor.requestNavigate = (args: RequestNavigateEventArgs) => {
    if (args.linkType !== 'Bookmark') {
        let link: string = args.navigationLink;
        if (args.localReference.length > 0) {
            link += '#' + args.localReference;
        }
        //Navigate to the selected URL.
        window.open(link);
        args.isHandled = true;
    }
};


