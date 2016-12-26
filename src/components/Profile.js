import React, { Component, PropTypes } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';

import Badge from './Badge';

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    buttonText: {
        fontSize: 18,
        color: 'white',
        alignSelf: 'center'
    },
    rowContainer: {
        padding: 10
    },
    rowTitle: {
        color: '#48BBEC',
        fontSize: 16
    },
    rowContent: {
        fontSize: 19
    }
});

export default class Profile extends Component {
  render() {
    let userInfo = this.props.userInfo
    let topicArr = ['company', 'location', 'followers', 'following', 'email', 'bio', 'public_repos']
    const list = topicArr.map((item, index) => {
      if ( !userInfo[item] ) {
        return <View key={index} />
      } else {
        return (
          <View key={index}>
            <View style={styles.rowContainer}>
              <Text style={styles.rowTitle}>  </Text>
              <Text style={styles.rowContent}> {userInfo[item]} </Text>
            </View>
          </View>
        )
      }
    })

    <ScrollView style={styles.container}>
      <Badge userInfo={this.props.userInfo} />
    </ScrollView>
  }
}
