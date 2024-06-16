// import React, { useState, useRef } from 'react';
import useFormState from '@arco-design/web-react/es/Form/hooks/useState';
import { useState } from 'react';
import { Document, Page } from 'react-pdf';
const Blank = () => {
    // return (
    //     <div>
    //         This is a blank page
    //     </div>
    // )
  const [numPages, setNumPages] = useFormState();
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess( { numPages }) {
    setNumPages(numPages);
  }

  return (
    <div>
      <Document file="somefile.pdf" onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p>
    </div>
  );

};


export default Blank
