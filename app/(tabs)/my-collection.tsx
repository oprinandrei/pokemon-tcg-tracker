import React from 'react';
import { StyleSheet, SafeAreaView, Text, View } from 'react-native';

export default function MyCollectionScreen() {
 return (
  <SafeAreaView style={styles.container}>
   <Text style={styles.text}>My collection</Text>
  </SafeAreaView>
 );
}

const styles = StyleSheet.create({
 container: {
  flex: 1,
  paddingTop: 20,
 },
 text: {
  fontSize: 25,
  fontWeight: '500',
 },
});