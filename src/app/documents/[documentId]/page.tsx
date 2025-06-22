
interface DocumentIdProps {
    params: {
        documentId: string;
    };
}

const DocumentIdPage = async ({ params }: DocumentIdProps) => {
    const { documentId } = await params;

    return (
        <div>
            <h1 className="text-2xl font-bold">Document ID {documentId}</h1>
        </div>
    );
}

export default DocumentIdPage;