import React, { PureComponent } from 'react';
import { Text, View, TouchableOpacity, Image, Dimensions } from 'react-native';

import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

import { connect } from 'react-redux';

import mapStateToProps from 'mapStateToProps';
import mapDispatchToProps from 'mapDispatchToProps';

import { baseURL } from '../../../../config';

import './styles.css';

const DEFAULT_PROPS = {
  htmlStyles: CUSTOM_STYLES,
  renderers: CUSTOM_RENDERERS,
  imagesMaxWidth: IMAGES_MAX_WIDTH,
  onLinkPress: (evt, href) => { Linking.openURL(href); },
  debug: true
};

const IMAGES_MAX_WIDTH = (1 - 1/3) * Dimensions.get('window').width;
const CUSTOM_STYLES = {};
const CUSTOM_RENDERERS = {};

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

  next = () => {
    const { pageNumber } = this.state;
    if (pageNumber < 3) {
      this.setState({ pageNumber: pageNumber + 1 });
    }
    
  }

  prev = () => {
    const { pageNumber } = this.state;
    if (pageNumber > 1) {
      this.setState({ pageNumber: pageNumber - 1 });
    }
    
  }

  render() {
    const url = `${baseURL}pdfs/report.pdf`;
    return (
      // <div dangerouslySetInnerHTML={{ __html: html }}>
      // </div>
      <div style={{marginTop: 5, flex: 1}}>
        <div style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
        <div
          onClick={this.onGenerate}
            style={{
              zIndex: 2,
              backgroundColor: 'red',
              padding: 5,
              width: 100
            }}
        >Generate FDF</div>
        <div
          onClick={this.prev}
            style={{
              zIndex: 2,
              backgroundColor: '#97CC53',
              padding: 5,
              width: 100
            }}
        >prev</div>
        <div
          onClick={this.next}
            style={{
              zIndex: 2,
              backgroundColor: 'orange',
              padding: 5,
              width: 100
            }}
        >next</div>
        </div>
        <Document
          file={{ url }}
          onLoadSuccess={this.onDocumentLoadSuccess}
        >
          <Page pageNumber={this.state.pageNumber} width={(1 - 1 / 4.75) * Dimensions.get('window').width} />
        </Document>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeScreen);
