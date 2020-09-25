import React, { PureComponent, useState } from 'react';
import { Text, View, TouchableOpacity, Image, Dimensions, ScrollView } from 'react-native';

import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

import { connect } from 'react-redux';

import mapStateToProps from 'mapStateToProps';
import mapDispatchToProps from 'mapDispatchToProps';

import { baseURL } from '../../../../config';

import './styles.css';

const url = `${baseURL}pdfs/report.pdf`;

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
    // console.log('onDownload');
    // this.onGenerate();
    window.open(url);
  }

  render() {
    return (
      <View style={{ paddingTop: 5, flex: 1 }}>
        <ScrollView style={{ height: (1 - 1 / 6) * Dimensions.get('window').height }}>
          <DisplayPDF file={{ url }} />
        </ScrollView>
        <TouchableOpacity onPress={this.onDownload}>
          <View
            style={{
              borderRadius: 50,
              backgroundColor: '#2C7AC3',
              position: 'absolute',
              top: -70,
              right: 20,
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
      </View>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeScreen);
