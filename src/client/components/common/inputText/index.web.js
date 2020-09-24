import React, { useCallback } from 'react';
import { View, TextInput, Text, Image } from 'react-native';
import { useDropzone } from 'react-dropzone';
import styles from './styles.css';

const csvToJson = require('./convert-csv-to-json');

const xmlToJson = require('xml-js');

import images from 'images';

const MyDropzone = ({ children, accept, onAddfile }) => {
  const onDrop = useCallback((acceptedFiles) => {
    let arrayJson = [];
    acceptedFiles.forEach((file) => {
      const reader = new FileReader()

      reader.onabort = () => console.log('file reading was aborted')
      reader.onerror = () => console.log('file reading has failed')
      reader.onload = () => {
        var csv = reader.result;
        if (accept === '.csv') {
          let json = csvToJson.getJsonFromCsv(csv);
          for(let i=0; i<json.length;i++){
            arrayJson.push(json[i])
          }
          onAddfile(arrayJson);
        } else {

          arrayJson = xmlToJson.xml2json(csv, {compact: true, spaces: 4});
          onAddfile(JSON.parse(arrayJson));
        }
        
      }
      reader.readAsText(file);
    })
  }, [])
  const { getRootProps, getInputProps } = useDropzone({ onDrop })

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} accept={accept} multiple={false} />
      {children}
    </div>
  )
}

const InputText = ({ label, ...props }) => (
  <View className={styles.inputView}>
    <Text className={styles.label}>{label}</Text>
    <TextInput
      className={styles.input}
      placeholder={label}
      {...props}
    />
  </View>
);

export const ImportFile = ({ label, accept, onAddfile, value }) => (
  <MyDropzone accept={accept} onAddfile={onAddfile}>
    <View className={styles.importView}>
      <View className={styles.check}>
        {value && <Image
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
