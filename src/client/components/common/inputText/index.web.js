import React, { useCallback } from 'react';
import { View, TextInput, Text, Image } from 'react-native';
import { useDropzone } from 'react-dropzone';
import styles from './styles.css';

const csvToJson = require('./convert-csv-to-json');

const xmlToJson = require('xml-js');

import images from 'images';

import { trasformXML, trasformCSVKizeoArray } from '../../../../utils';

const MyDropzone = ({ children, accept, onAddfile, multiple }) => {
  const onDrop = useCallback((acceptedFiles) => {
    let arrayJson = [];
    acceptedFiles.forEach((file) => {
      const reader = new FileReader();

      reader.onabort = () => console.log('file reading was aborted')
      reader.onerror = () => console.log('file reading has failed')
      reader.onload = () => {
        var csv = reader.result;
        console.log({ csv });
        if (accept === '.csv') {
          const jsonOutput = csvToJson.getJsonFromCsv(csv);
          // for(let i=0; i<jsonOutput.length;i++){
          //   arrayJson.push(trasformCSVKizeo(jsonOutput[i]))
          // }
          // const csvFile = jsonOutput.reduce((acc, cu))
          onAddfile(trasformCSVKizeoArray(jsonOutput));
        }
        if (accept === '.xml') {
          arrayJson = xmlToJson.xml2json(csv, {compact: true, spaces: 4});
          onAddfile(trasformXML(JSON.parse(arrayJson)));
        }
        
      }
      reader.readAsText(file, 'Cp1252');
    })
  }, [])
  const { getRootProps, getInputProps } = useDropzone({ onDrop })
  // directory="" webkitdirectory=""
  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} accept={accept} multiple={multiple} /> 
      {children}
    </div>
  )
}

const InputText = ({ label, columns, style, ...props }) => (
  <View className={styles[columns === 3 ? 'inputView3' : 'inputView']} style={style}>
    <Text className={styles.label}>{label}</Text>
    <TextInput
      className={styles.input}
      placeholder={label}
      {...props}
    />
  </View>
);

export const ImportFile = ({ label, accept, onAddfile, value, checkBox }) => (
  <MyDropzone accept={accept} onAddfile={onAddfile}>
    <View className={styles.importView}>
      <View className={checkBox ? styles.check : styles.checkBoxOf}>
        {value && checkBox && <Image
          source={images.Raster}
          className={styles.Raster}
        />}
      </View>
      <View>
        <Image
          source={value ? images.time : images.calendar}
          className={styles.image}
        />
      </View>
      <View>
        <Text className={styles.labelBtn}>{label}</Text>
      </View>
    </View>
  </MyDropzone>
);


export default InputText;
