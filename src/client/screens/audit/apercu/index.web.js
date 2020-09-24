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
      clientName: "Anissa Haingotiana",
      csv: null,
      documentName: "Anissa Haingotiana",
      kizeo: null,
      liciel: null,
      lieuName: "Haingotiana",
      mail: "dhvsjddq@qsqsd.sss",
      name: "Anissa",
      phoneFix: "0680522972",
      phonePortable: "0680522972",
    }
    this.props.getPfd(data);
  }

  render() {
    const url = `${baseURL}pdfs/report.pdf`;
    console.log(this.props, url);
    return (
      // <div dangerouslySetInnerHTML={{ __html: html }}>
      // </div>
      <div style={{marginTop: 5, flex: 1}}>
        <div
          onClick={this.onGenerate}
            style={{
              top: 20,
              right: 10,
              zIndex: 2,
              backgroundColor: 'red',
              padding: 5,
            }}
        >onGenerate</div>
        <Document
          file={{ url }}
          onLoadSuccess={this.onDocumentLoadSuccess}
        >
          <Page pageNumber={2} width={(1 - 1 / 4.75) * Dimensions.get('window').width} />
        </Document>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeScreen);
