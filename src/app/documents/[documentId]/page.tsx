import {Editor} from "./editor";
import {Toolbar} from "./toolbar";

interface DocumentIdPageProps {
    params: Promise<{ documentId: string}>;
};

const DocumentIdPage = async ({params}: DocumentIdPageProps) => {
    
    return (
        <div>
            {/* Document ID : {documentId} */}
            <Toolbar />
            <Editor/>{/* Rendering editor */}
            
        </div>
    );
}

export default DocumentIdPage;