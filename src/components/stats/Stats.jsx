import "./Stats.scss";
import React, { useEffect,useState } from "react";
import { Button, ButtonGroup, ButtonToolbar } from "react-bootstrap";
import { Document, Page, pdfjs } from "react-pdf";

import * as PDF from "pdfjs-dist";

import pdfjsWorker from "pdfjs-dist/build/pdf.worker.entry";

pdfjs.GlobalWorkerOptions.workerSrc = pdfjsWorker;
function Stats() {
  const [numPages, setNumPages] = useState(null); //pdf的总页数
  const [pageNumber, setPageNumber] = useState(1); //正在阅读的页码

  const [pdfScale, setPdfScale] = useState(1);

  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };

    // 监听窗口大小变化
    window.addEventListener("resize", handleResize);
    console.log(width * 0.83);
    console.log(height);
    // 清理函数，移除事件监听器
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // 空依赖数组表示这个effect只运行一次，相当于componentDidMount和componentWillUnmount的组合

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
    console.log(pageNumber);
    if (pageNumber >= 2) {
      setPageNumber(pageNumber - 1);
    }
  }
  function handleBigPage({ scale }) {
    console.log(pdfScale);
    if (pdfScale <= 5) {
      setPdfScale(pdfScale + 0.01);
    }
    console.log(pdfScale);
  }
  function handleSmallPage({ scale }) {
    console.log(pdfScale);
    if (pdfScale >= 0.3) {
      setPdfScale(pdfScale - 0.01);
    }
    console.log(pdfScale);
  }

  return (
    <div width="50%" height="100%" border="2">
      <p>
        Page {pageNumber} of {numPages}&nbsp;&nbsp;
        <Button onClick={handleNextPage}>下一页</Button>
        &nbsp;&nbsp;
        <Button onClick={handlePrePage}>上一页</Button>
        &nbsp;&nbsp;
        <Button onClick={handleBigPage}>放大</Button>
        &nbsp;&nbsp;
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
            scale={pdfScale}
            width={width - width * 0.17}
            height={height}
          />
        ))}
      </Document>

      {/* <ShowPDF/> */}
    </div>
  );
}

export default Stats;
