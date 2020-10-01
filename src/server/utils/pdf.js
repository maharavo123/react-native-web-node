const ejs = require("ejs");

const optionsFDF = {
  // Export options
  "directory": "/tmp",       // The directory the file gets written into if not using .toFile(filename, callback). default: '/tmp'

  // Papersize Options: http://phantomjs.org/api/webpage/property/paper-size.html
  // "height": "10.5in",        // allowed units: mm, cm, in, px
  // "width": "8in",            // allowed units: mm, cm, in, px
  // - or -
  "format": "A4",        // allowed units: A3, A4, A5, Legal, Letter, Tabloid
  "orientation": "portrait", // portrait or landscape

  // Page options
  // "border": "0",             // default is 0, units: mm, cm, in, px
  // - or -
  "border": {
    "top": "0",            // default is 0, units: mm, cm, in, px
    "right": "5px",
    "bottom": "0",
    "left": "5px"
  },

  paginationOffset: 1,       // Override the initial pagination number
  "header": {
    "height": "10px",
    // "contents": "<img src='" + ulr + "' style='height: 21px; width: 500px' />",
    // "contents": '<div style="text-align: center;">Author: Marc Bachmann</div>'
    // "contents": '<div style="color: red; height: 21px;"><img src="http://localhost:5000/tamplete/img/bandeausitepieddepag_0.png" style="height: 20px; width: 575px;"></div>',
  },
  "footer": {
    "height": "25px",
    // "contents": {
    //   // first: 'Cover page',
    //   // bandeausitepieddepag_0
    //   // default: '<div style="color: red; height: 35px;"><img src="http://localhost:5000/tamplete/img/bandeausitepieddepag_0.png" style="height: 30px; width: 580px;"></div>',
    //   // 2: 'Second page', // Any page number is working. 1-based index
    //   // default: '<span style="color: #444;">{{page}}</span>/<span>{{pages}}</span>', // fallback value
    //   // last: 'Last Page' // width: 30px;
    //   // last: '<div style="color: red; height: 35px;"></div>', // <img src="http://localhost:5000/tamplete/img/bandeausitepieddepag_0.png" style="height: 14.5px;">
    //   // first: footer,
    //   // default: footer,
    // }
  },


  // Rendering options
  // "base": "file:///home/www/your-asset-path", // Base path that's used to load files (images, css, js) when they aren't referenced using a host

  // Zooming option, can be used to scale images if `options.type` is not pdf
  "zoomFactor": "1", // default is 1

  // File options
  "type": "pdf",             // allowed file types: png, jpeg, pdf
  "quality": "75",           // only used for types png & jpeg

  // Script options
  // "phantomPath": "./node_modules/phantomjs/bin/phantomjs", // PhantomJS binary which should get downloaded automatically
  // "phantomArgs": [], // array of strings used as phantomjs args e.g. ["--ignore-ssl-errors=yes"]
  // "script": '/url',           // Absolute path to a custom phantomjs script, use the file in lib/scripts as example
  "timeout": 30000,           // Timeout that will cancel phantomjs, in milliseconds

  // Time we should wait after window load
  // accepted values are 'manual', some delay in milliseconds or undefined to wait for a render event
  "renderDelay": 1000,

  // HTTP Headers that are used for requests
  // "httpHeaders": {
  //   // e.g.
  //   "Authorization": "Bearer ACEFAD8C-4B4D-4042-AB30-6C735F5BAC8B"
  // },

  // To run Node application as Windows service
  "childProcessOptions": {
    "detached": true
  }

}

// const example = {
//   baseURL,
//   ...req.body,
//   datasets: [{
//     backgroundColor: [
//       "#2ecc71",
//       "#3498db",
//       "#95a5a6",
//       "#9b59b6",
//       "#f1c40f",
//       "#e74c3c",
//       "#34495e"
//     ],
//     data: [12, 19, 3, 17, 28, 24, 7]
//   }],
// }

export const generatePdf = input => {
  return ejs.renderFile(path.join(__dirname, '../../storage/tamplete/', "index.ejs"), input, (err, data) => {
    if (err) {
      console.log("err =====> File created Field", err);
      return ({ err });
    } else {
      pdf.create(data, optionsFDF).toFile("./storage/pdfs/report.pdf", function (err, data) {
        if (err) {
          console.log("File created Field");
          return (err);
        } else {
          console.log("File created successfully");
          return ({ data });
        }
      });
    }
  });
}
