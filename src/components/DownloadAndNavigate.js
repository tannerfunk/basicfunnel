// import React from 'react';
// import { Link } from 'react-router-dom';
// // import {useState, useEffect} from 'react';

// const DownloadAndNavigate = () => {
//     // const [isDownloaded, setIsDownloaded] = useState(false);
  
//     // useEffect(() => {
//     //   if (isDownloaded) {
//     //     window.location.href = '/thankyou';
//     //   }
//     // }, [isDownloaded]);
  
//     const handleDownload = () => {
//       const link = document.createElement('a');
//       link.href = './8_Step_Guide.pdf';
//       link.setAttribute('download', '8_Step_Guide.pdf');
//       document.body.appendChild(link);
//       link.click();
//       document.body.removeChild(link);
  
//     //   setIsDownloaded(true);
//     };
  
//     return (
//       <Link to="/thankyou" onClick={handleDownload}>
//         Download PDF
//       </Link>
//     );
//   };
  

// export default DownloadAndNavigate;
