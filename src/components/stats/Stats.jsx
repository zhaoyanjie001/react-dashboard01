import { Component, React } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import { MobilePDFReader } from "react-read-pdf";
import { PDFReader } from "react-read-pdf";

import PDFViewer from "pdf-viewer-reactjs";



import { Document, Page, pdfjs } from "react-pdf";
// import "react-pdf/dist/esm/Page/AnnotationLayer.css"; // Blocks blank TextLayers.
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`; // Fix your issue.
// <Document file={"sample.pdf"}>
// <Page
//   pageNumber={1}
//   renderTextLayer={false} // Blocks blank TextLayer
// />
// </Document>

// import { PDFReader } from 'reactjs-pdf-reader';
// import { MobilePDFReader } from 'reactjs-pdf-reader';

const API_URL = "http://138.138.0.111:8085/api/test/";



export default class Stats extends Component {
  state = {
    numPages: 10,
    pageNumber: 1,
  }

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  }

  render() {
    return (
      <div>
        <a href={require('./sd.pdf')} target="_self">Download Pdf</a>
      </div>
    );
  }

  // render() {
  //   return (
  //     <div>
  //       {/* <div style={{ overflow: "scroll", height: 600 }}>
  //         <MobilePDFReader url={"http://localhost:8080/pdf/sample.pdf"} showAllPage="35"/>
  //       </div> */}
  //       <PDFViewer
  //         document={{
  //           // url: "http://localhost:8080/pdf/sample.pdf",
           
  //             url: 'https://arxiv.org/pdf/quant-ph/0410100.pdf',
  //         }}  
  //       />

  //     </div>
  //   );
  // }
}
// export default class Stats extends Component {
//     constructor(props) {
//     super(props);
//     this.state = {
//       page: 1,
//       setPage: 1,
//       canvasRef: null,
//       file: 'sample.pdf',
//       pdfDocument: 1,
//       pdfPage: 1,
//     };
//   }

//   render() {
//     return (
//       <div>
//         pppp
//         {!this.state.pdfDocument && <span>Loading...</span>}
//         <canvas ref={this.state.canvasRef} />
//         {Boolean(this.state.pdfDocument && this.state.pdfDocument.numPages) && (
//           <nav>
//             <ul className="pager">
//               <li className="previous">
//                 <button disabled={this.state.page === 1} onClick={() => this.state.setPage(this.state.page - 1)}>
//                   Previous
//                 </button>
//               </li>
//               <li className="next">
//                 <button
//                   disabled={this.state.page === this.state.pdfDocument.numPages}
//                   onClick={() => this.state.setPage(this.state.page + 1)}
//                 >
//                   Next
//                 </button>
//               </li>
//             </ul>
//           </nav>
//         )}
//       </div>
//     )
//   }
// }
