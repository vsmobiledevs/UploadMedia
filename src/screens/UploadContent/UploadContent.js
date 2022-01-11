import React, {useState} from 'react';
import {View, Text, Platform, StatusBar, Dimensions} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import * as Progress from 'react-native-progress';
import {colors, HP, WP} from '../../utils';
import {AppButton} from '../../components';
import styles from './styles';

const {width} = Dimensions.get('window');

const UploadContent = () => {
  const [item, setItem] = useState('');
  const [uploadProgress, setUploadProgress] = useState(0);

  const RenderText = ({title}) => (
    <Text style={styles.txtStyle}> {title} </Text>
  );

  //open Gallery
  const handleSelectFile = () => {
    setUploadProgress(0);
    try {
      ImagePicker.openPicker({
        mediaType: 'any',
      }).then(res => {
        setItem(res);
      });
    } catch (error) {
      console.log('Error is ==> ', error);
    }
  };

  //Method for handling Progress
  const handleProgress = event => {
    const val = Math.round((event.loaded * 100) / event.total) / 100;
    if (val >= 0.9) {
      return;
    }
    setUploadProgress(val);
  };

  //Method for uploading file
  const handleFileUpload = () => {
    try {
      const xhr = new XMLHttpRequest();
      const formData = new FormData();
      formData.append('file', {
        uri: item?.path,
        name: item?.path?.split('/').pop(),
        type: item?.mime,
      });
      xhr.upload.addEventListener('progress', handleProgress);
      xhr.addEventListener('load', () => {
        setUploadProgress(1);
        alert('File has been uploaded successfully.');
        console.log('File Upload Res ==> ', xhr.response);
      });
      xhr.open('POST', 'https://ipfs-dev.ternoa.dev/api/v0/add');
      xhr.send(formData);
    } catch (error) {
      alert('Something went wrong, try again later.');
    }
  };

  return (
    <>
      <StatusBar animated={true} backgroundColor={colors.p1} />
      <View style={styles.mainContainer}>
        <View style={styles.txtBox}>
          <RenderText
            title={
              item === ''
                ? 'selected file name'
                : 'Name => ' + item?.path?.split('/').pop()
            }
          />
          <RenderText
            title={item === '' ? 'selected file size' : 'Size => ' + item?.size}
          />
          <RenderText
            title={item === '' ? 'selected file path' : 'Path =>' + item?.path}
          />
        </View>
        <AppButton
          width={WP('27')}
          txt={'Select File'}
          onPress={() => handleSelectFile()}
        />
        <Progress.Bar
          useNativeDriver
          color={'green'}
          width={width / 2.2}
          style={styles.barStyle}
          progress={uploadProgress}
          unfilledColor={colors.g1}
          height={Platform.select({ios: HP('2'), android: HP('2.4')})}
        />
        <AppButton
          width={WP('45')}
          txt={'Upload Selected File'}
          onPress={() => handleFileUpload()}
        />
      </View>
    </>
  );
};

export default UploadContent;
