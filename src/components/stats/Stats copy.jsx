// import { Component,React } from "react";
// import axios from "axios";
// import PropTypes from "prop-types";
// import { MobilePDFReader } from "react-read-pdf";
// import { PDFReader } from "react-read-pdf";


// // import { usePdf } from '@mikecousins/react-pdf';

// const API_URL = "http://138.138.0.111:8085/api/test/";

// class ListItem extends Component {
//   static contextTypes = {
//     color: PropTypes.string,
//     test: PropTypes.string,
//   };
//   constructor(props) {
//     super(props);
//     this.state = {
//       pageNumber: 1,
//       setPageNumber: 1,
//       numPages: null,
//       setNumPages: 0,
//     };
//   }

//   render() {
//     const { value } = this.props;
//     return (
//       <div>
//         <li style={{ background: this.context.color }}>
//           <span>{value}</span>
//         </li>
//         <li style={{ background: this.context.test }}>
//           <span>{value}</span>
//         </li>
//       </div>
//     );
//   }
// }

// export default class Stats extends Component {

//     render() {
//       return ( 
//         <div>
        
//           <div style={{overflow:'scroll',height:600}}>
//             <MobilePDFReader url={"http://localhost:8080/pdf/demo.pdf"} />
//            </div>

           
//         </div>
//       )
//     }

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