import React from 'react';
import ReactJson from 'react-json-view';

export default function JsonViewer({ data }: any) {
    return (
        <ReactJson 
            src={data}
            name="me"
            theme="google"
            iconStyle="square"
            rootName={false}
            displayDataTypes={false}
            enableClipboard={false}
            collapsed={4}
        />
    );
}