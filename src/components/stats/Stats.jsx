import "./Stats.scss";
import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import pdfjsWorker from "pdfjs-dist/build/pdf.worker.entry";
pdfjs.GlobalWorkerOptions.workerSrc = pdfjsWorker;
function Stats() {
  const [numPages, setNumPages] = useState(null); //pdf的总页数
  const [pageNumber, setPageNumber] = useState(1); //正在阅读的页码

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div>
      <a href={require("./sd1.pdf")} target="_self">
        Download Pdf
      </a>
      <Document
        file={require("./sd1.pdf")}
        onLoadSuccess={onDocumentLoadSuccess}
        error="加载预览文件失败"
        loading="加载中，请稍候..."
        className="pdfContext"
      >
        {new Array(numPages).fill("").map((item, index) => (

          <Page
            key={"page_$"+index + 1}
            pageNumber={index + 1}
            error="fail to load resource"
            renderMode="canvas"
            renderAnnotationLayer={false}
            renderTextLayer={false}
            width={350}
          />
        ))}
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p>
    </div>
  );
}

export default Stats;
