import React from 'react';
import { WebView } from 'react-native-webview';
import { Text } from 'react-native';



const WebViewComponent = ( {navigation, route} : any) => {
  const {gaid, token} = route.params;
  const url = "https://pagbeting.space/QN9Kbb";
  const name = "Danil_Khaertdinov";

  const getFullUrl = () => `${url}?gaid=${gaid}&token=${token}&name=${name}`;


  return (
    <>
      <Text>{getFullUrl()}</Text>
      <WebView source={{ uri: getFullUrl() }} style={{ flex: 1 }} />
    </>
  );
  
};

export default WebViewComponent;
