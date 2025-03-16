import "./Stats.scss";
import React, { useState } from "react";
import { Button, ButtonGroup, ButtonToolbar } from "react-bootstrap";
import { Document, Page, pdfjs } from "react-pdf";
import pdfjsWorker from "pdfjs-dist/build/pdf.worker.entry";
pdfjs.GlobalWorkerOptions.workerSrc = pdfjsWorker;
function Stats() {
  const [numPages, setNumPages] = useState(null); //pdf的总页数
  const [pageNumber, setPageNumber] = useState(1); //正在阅读的页码
  const [, setTrigger] = useState(0);

  
  const [pdfScale, setPdfScale] = useState(1.6); 

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  function handleNextPage() {
    if (pageNumber < numPages) {
      setPageNumber(pageNumber + 1);
    }
    console.log(pageNumber);
    console.log(numPages);
    console.log(pageNumber < numPages);
  }
  function handlePrePage({ numPages }) {
    console.log(pageNumber >= 2);
    if (pageNumber >= 2) {
      setPageNumber(pageNumber - 1);
    }
  }
  function handleBigPage({ numPages }) {
    console.log(pageNumber);
  }
  function handleSmallPage({ numPages }) {
    console.log(pageNumber);
  }

  return (
    <div width="50%" height="100%" border="2">
      <p>
        Page {pageNumber} of {numPages}&nbsp;&nbsp;&nbsp;
        <Button onClick={handleNextPage}>下一页</Button>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <Button onClick={handlePrePage}>上一页</Button>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <Button onClick={handleBigPage}>放大</Button>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <Button onClick={handleSmallPage}>缩小</Button>
      </p>
      <Document
        file={require("./cust.pdf")}
        onLoadSuccess={onDocumentLoadSuccess}
        error="加载预览文件失败"
        loading="加载中，请稍候..."
        className="pdfContext"
        width="100%"
      >
        {new Array(1).fill("").map((item, index) => (
          <Page
            key={"page_$" + pageNumber}
            pageNumber={pageNumber}
            error="fail to load resource"
            renderMode="canvas"
            renderAnnotationLayer={false}
            renderTextLayer={false}
          />
        ))}
      </Document>
    </div>
  );
}

export default Stats;
