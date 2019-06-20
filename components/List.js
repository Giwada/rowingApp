import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
   
// styles
import styles from "../assets/style";
import Icon from '../assets/Icons';

class List extends Component {
   alertItemName = (item) => {
      alert(item.name)
   }
   render() {
      return (
         <View>
            {
               this.state.trainings.map((item, index) => (
                  <TouchableOpacity
                     key = {item.id}
                     style = {styles.container}
                     onPress = {() => this.alertItemName(item)}>
                     <View style={styles.info}>
                        <Text style={styles.iconList}>
                            <Icon name="history" />
                        </Text>
                        <Text style={styles.infoContent}>{item.name}</Text>
                    </View>
                     <View style={styles.info}>
                        <Text style={styles.iconList}>
                            <Icon name="timer" />
                        </Text>
                        <Text style={styles.infoContent}>{item.date}</Text>
                    </View>
                     <View style={styles.info}>
                        <Text style={styles.iconList}>
                            <Icon name="location" />
                        </Text>
                        <Text style={styles.infoContent}>{item.location}</Text>
                    </View>
                  </TouchableOpacity>
               ))
            }
         </View>
      )
   }
}

export default List;