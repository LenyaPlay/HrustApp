import * as React from 'react';
import { useState } from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';
import ReactNativeIdfaAaid from '@sparkfabrik/react-native-idfa-aaid';
import messaging from '@react-native-firebase/messaging';


const HomeScreen = ({navigation} : any) => {
  const [gaid, setGaid] = useState<string | null>();
  const [token, setToken] = useState<string>();

  const loadData = async () => {
    try {
      let res = await ReactNativeIdfaAaid.getAdvertisingInfo();
      setGaid(res.id);
      let token = await messaging().getToken();
      setToken(token);

      console.log(`${res.id} \n ${token}`);
    }
    catch (e) {
      console.log(e);
    }
  }

  React.useEffect(() => {
    loadData();
  }, []);

  const navigateToWebView = () => {
    navigation.navigate('WebView', {gaid: gaid, token:token});
  } 
  
  return (<>
    <Button title="Открыть" onPress={navigateToWebView} disabled={gaid == undefined || token == undefined}></Button>
  </>
  );
};

export default HomeScreen;

