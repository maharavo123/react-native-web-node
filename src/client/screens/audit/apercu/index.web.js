import React, { PureComponent } from 'react';
import { Text, View, TouchableOpacity, Image, Dimensions } from 'react-native';

import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

import { connect } from 'react-redux';

import mapStateToProps from 'mapStateToProps';
import mapDispatchToProps from 'mapDispatchToProps';

import { baseURL } from '../../../../config';

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

  render() {
    const url = `${baseURL}pdfs/report.pdf`;
    console.log(this.props, url);
    return (
      // <div dangerouslySetInnerHTML={{ __html: html }}>
      // </div>
      <div style={{marginTop: 5, flex: 1}}>
        <Document
          // file={url}
          // url={url}
          file={{ url }}
          onLoadSuccess={this.onDocumentLoadSuccess}
        >
          <Page pageNumber={1} />
        </Document>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeScreen);
