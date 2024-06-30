// import { Component, React } from "react";
// import axios from "axios";
// import PropTypes from "prop-types";
// import { MobilePDFReader } from "react-read-pdf";
// import { PDFReader } from "react-read-pdf";

// import PDFViewer from "pdf-viewer-reactjs";

// import { Document, Page, pdfjs } from "react-pdf";
// import { View } from "react-native";

// // import "react-pdf/dist/esm/Page/AnnotationLayer.css"; // Blocks blank TextLayers.
// // pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`; // Fix your issue.
// // <Document file={"sample.pdf"}>
// // <Page
// //   pageNumber={1}
// //   renderTextLayer={false} // Blocks blank TextLayer
// // />
// // </Document>

// // import { PDFReader } from 'reactjs-pdf-reader';
// // import { MobilePDFReader } from 'reactjs-pdf-reader';

// const API_URL = "http://138.138.0.111:8085/api/test/";

// export default class Stats extends Component {
//   state = {
//     numPages: 10,
//     pageNumber: 1,
//   }

//   onDocumentLoadSuccess = ({ numPages }) => {
//     this.setState({ numPages });
//   }

//   render() {
//     return (
//       <div>
//         <a href={require('./sd.pdf')} target="_self">Download Pdf</a>

//       </div>
//     );
//   }

//   // render() {>
//   //   return (
//   //     <div>
//   //       {/* <div style={{ overflow: "scroll", height: 600 }}>
//   //         <MobilePDFReader url={"http://localhost:8080/pdf/sample.pdf"} showAllPage="35"/>
//   //       </div> */}
//   //       <PDFViewer
//   //         document={{
//   //           // url: "http://localhost:8080/pdf/sample.pdf",

//   //             url: 'https://arxiv.org/pdf/quant-ph/0410100.pdf',
//   //         }}
//   //       />

//   //     </div>
//   //   );
//   // }
// }
// // export default class Stats extends Component {
// //     constructor(props) {
// //     super(props);
// //     this.state = {
// //       page: 1,
// //       setPage: 1,
// //       canvasRef: null,
// //       file: 'sample.pdf',
// //       pdfDocument: 1,
// //       pdfPage: 1,
// //     };
// //   }

// //   render() {
// //     return (
// //       <div>
// //         pppp
// //         {!this.state.pdfDocument && <span>Loading...</span>}
// //         <canvas ref={this.state.canvasRef} />
// //         {Boolean(this.state.pdfDocument && this.state.pdfDocument.numPages) && (
// //           <nav>
// //             <ul className="pager">
// //               <li className="previous">
// //                 <button disabled={this.state.page === 1} onClick={() => this.state.setPage(this.state.page - 1)}>
// //                   Previous
// //                 </button>
// //               </li>
// //               <li className="next">
// //                 <button
// //                   disabled={this.state.page === this.state.pdfDocument.numPages}
// //                   onClick={() => this.state.setPage(this.state.page + 1)}
// //                 >
// //                   Next
// //                 </button>
// //               </li>
// //             </ul>
// //           </nav>
// //         )}
// //       </div>
// //     )
// //   }
// // }
import './Stats.scss'
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
  function componentDidMount() {
    setTimeout(() => {
      console.log('暂停十秒后执行的操作');
    }, 1000);
  }
  function test() {
    console.log(99);
  }
  return (
    <div><a href={require('./sd.pdf')} target="_self">Download Pdf</a>
      <Document
        file={require("./somefile.pdf")}
        onLoadSuccess={onDocumentLoadSuccess}
        error="加载预览文件失败"
        loading="加载中，请稍候..."
        className="pdfContext"
      >
{ 
		new Array(numPages).fill('').map((item, index) => (
			// <Page className='pdfContext' scale={1.5} key={ index } pageNumber={ index + 1 } /> 

      <Page key={"page_${index + 1}"}
      pageNumber={index + 1}
      error="fail to load resource"
      renderMode="canvas"
      renderAnnotationLayer={false}
      renderTextLayer={false}
      width={350}
    />

		)) 
	  } 


      
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p>
    </div>
  );
}

export default Stats;
