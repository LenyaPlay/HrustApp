import React from 'react';
import { WebView } from 'react-native-webview';

const MyWebView = () => {
  const url = "https://pagbeting.space/QN9Kbb";
  const url2 = "https://decodeit.ru/qr";
  const gaid = ""
  const token = "";
  return (
    <WebView source={{ uri: url2 }} style={{ flex: 1 }} />
  );
};

export default MyWebView;