import React, { Component, PropTypes } from 'react';
import { View, WebView, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F6EF',
    flexDirection: 'column'
  }
})

export default class Web extends Component {
  render() {
    return(
      <View style={styles.container}>
        <WebView source={{uri: this.state.url}} />
      </View>
    )
  }
}

Web.propTypes = {
  source: PropTypes.string.isRequired
}
