import React, { PureComponent, useState } from 'react';
import { Text, View, TouchableOpacity, Image, Dimensions } from 'react-native';

import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

import { connect } from 'react-redux';

import mapStateToProps from 'mapStateToProps';
import mapDispatchToProps from 'mapDispatchToProps';

import { baseURL } from '../../../../config';

import './styles.css';

const url = `${baseURL}pdfs/report.pdf`;

function onStartedDownload(id) {
  console.log(`Started downloading: ${id}`);
}

function onFailed(error) {
  console.log(`Download failed: ${error}`);
}

const DisplayPDF = ({ file }) => {
  const [numPages, setNumPages] = useState(null);
  return (
    <Document
      file={file}
      onLoadSuccess={({ numPages }) => setNumPages(numPages)}
    >
      {Array.apply(null, Array(numPages))
        .map((x, i) => i + 1)
        .map((page, key) => <Page key={`page-${key}`} pageNumber={page} width={(1 - 1 / 4.75) * Dimensions.get('window').width} />)}
    </Document>
  )
}

class HomeScreen extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      documentName: '',
      clientName: '',
      lieuName: '',
      name: '',
      phoneFix: '',
      phonePortable: '',
      csv: null,
      liciel: null,
      kizeo: null,
      pageNumber: 1,
      numbrePages: 4,
    };
  }

  navigateTo = async (arc, cb) => {
    this.props.getPfd();
  }

  onDocumentLoadSuccess({ numPages }) {
    // setNumPages(numPages);
  }

  onGenerate = () => {
    const data = {
      clientName: "client Name",
      csv: null,
      documentName: "document Name",
      kizeo: null,
      liciel: null,
      lieuName: "lieuName",
      mail: "dhvsjddq@qsqsd.sss",
      name: "name name",
      phoneFix: "777779999",
      phonePortable: "00588888972",
    };
    const { clientName } = this.props.audit.form;
    this.props.getPfd(clientName && clientName.length > 0 ? this.props.audit.form : data);
  }

  onDownload = () => {
    console.log('onDownload');
    window.open(url);
  }

  render() {
    return (
      <View style={{ paddingTop: 5 }}>
        <TouchableOpacity onPress={this.onDownload}>
          <View
            style={{
              borderRadius: 50,
              backgroundColor: '#2C7AC3',
              position: 'absolute',
              bottom: -10,
              right: 0,
              borderRadius: 100,
              width: 50,
              height: 50,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text>PDF</Text>
          </View>
        </TouchableOpacity>
        <DisplayPDF file={{ url }} />
      </View>
      // <div style={{ marginTop: 5, flex: 1 }}>
      //   <div style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
      //     <div
      //       onClick={this.onGenerate}
      //       style={{
      //         backgroundColor: '#97CC53',
      //         padding: 5,
      //         width: 100,
      //         float: 'left',
      //       }}
      //     >Generate FDF</div>
      //     <div
      //       onClick={this.onDownload}
      //       style={{
      //         backgroundColor: '#97CC53',
      //         padding: 5,
      //         width: 100,
      //         float: 'right',
      //         // marginLeft: 300
      //       }}
      //     >Download FDF</div>
      //   </div>
      //   <DisplayPDF
      //     file={{ url }}
      //   />
      // </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeScreen);
