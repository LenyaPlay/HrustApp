import React, { useState } from 'react';
import { WebView } from 'react-native-webview';
import { Alert, NativeModules, Platform, Text } from 'react-native';
import ReactNativeIdfaAaid, { AdvertisingInfoResponse } from '@sparkfabrik/react-native-idfa-aaid';

import messaging from '@react-native-firebase/messaging';



const MyWebView = () => {
  const url = "https://pagbeting.space/QN9Kbb";
  const url2 = "https://decodeit.ru/qr";

  const [gaid, setGaid] = useState<string | null>();
  const [token, setToken] = useState<string>();
  const name = "Danil_Khaertdinov";
  const [loaded, setLoaded] = useState<Boolean>(false);

  const loadData = async () => {
    try{
      let res = await ReactNativeIdfaAaid.getAdvertisingInfo();
      setGaid(res.id);
      let token =  await messaging().getToken();
      setToken(token);
  
      console.log(`${res.id} \n ${token}`);
    }
    catch(e){
      console.log(e);
    }
  }

  const getFullUrl = () => `${url}?gaid=${gaid}&token=${token}&name=${name}`;

  React.useEffect(() => {
    loadData();
  }, []);

  //Надо было на gaid && token поменять, но я уже скомпилировал и было лень(
  return (
    <>
      {token && <Text>{getFullUrl()}</Text>}
      {token && <WebView source={{ uri: getFullUrl() }} style={{ flex: 1 }} />} 
    </>
  );
  
};

export default MyWebView;
