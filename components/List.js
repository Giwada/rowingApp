import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
   
class List extends Component {
   state = {
      trainings: [
         {
            id: 0,
            name: 'UT 28km',
            date: '15th July',
            place: 'Toda',
         },
         {
            id: 1,
            name: 'TT 2000m',
            date: '14th July',
            place: 'Odaiba',
         },
         {
            id: 2,
            name: 'UT 12km',
            date: '12th July',
            place: 'Akigase',
         },
         {
            id: 3,
            name: 'UT 18km',
            date: '10th July',
            place: 'Toda',
         }
      ],
   }
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
                            <Icon name="training" />
                        </Text>
                        <Text style={styles.infoContent}>{item.name}</Text>
                    </View>
                     <View style={styles.info}>
                        <Text style={styles.iconList}>
                            <Icon name="date" />
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

export default List

const styles = StyleSheet.create ({
   container: {
      padding: 10,
      marginTop: 3,
      backgroundColor: '#d8d8d8',
      alignItems: 'center',
   },
   text: {
      color: '#4f603c'
   }
})