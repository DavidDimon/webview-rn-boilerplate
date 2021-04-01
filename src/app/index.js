import React from 'react'
import {
  View,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  ActivityIndicator,
  TouchableOpacity,
  Text,
} from 'react-native'
import WebView from 'react-native-webview'
import { useNetInfo } from '@react-native-community/netinfo'

import { Wrapper } from './styles'

const INJECTED_JAVASCRIPT =
  "const meta = document.createElement('meta'), meta.setAttribute('content', 'width=device-width, initial-scale=1, maximum-scale=0.99, user-scalable=0'); meta.setAttribute('name', 'viewport'); document.getElementsByTagName('head')[0].appendChild(meta); "

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    height: '100%',
  },
  loading: { alignSelf: 'center' },
  loadingContainer: {
    flex: 1,
    height: '100%',
    width: '100%',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorPage: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'red',
    fontSize: 16,
  },
  button: {
    backgroundColor: 'blue',
    borderRadius: 4,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    color: '#fff',
  },
})

export default () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <StatusBar barStyle="light-content" />
      <WebView
        source={{ uri: 'https://doncorleone.adboxdelivery.com.br/' }}
        injectedJavaScript={INJECTED_JAVASCRIPT}
        originWhitelist={['*']}
        renderLoading={() => (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" style={styles.loading} />
          </View>
        )}
        renderError={() => (
          <View style={styles.errorPage}>
            <Text style={styles.text}>{'Sem conexão com a internet!'}</Text>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.label}>{'Atualizar'}</Text>
            </TouchableOpacity>
          </View>
        )}
        javaScriptEnabled
        domStorageEnabled
        scrollEnabled
        startInLoadingState
      />
    </SafeAreaView>
  )
}
