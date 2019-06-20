import React from 'react';
import {
    Text,
    View,
    Image,
    ImageBackground,
    Dimensions,
    FlatList,
    TouchableOpacity
} from 'react-native';

//import List from '../components/List';

// import React Native Chart Kit
import {
    PieChart,
} from 'react-native-chart-kit'

// styles
import styles from '../assets/style';
import { Ionicons } from '@expo/vector-icons';
// dummy data
import Data from '../assets/data.js'
import rateData from '../assets/ratedata.js';

const Dashboard = () => {
    
    const screenWidth = Dimensions.get("window").width;

    return (
        <ImageBackground
            source={require("../assets/images/bg.png")}
            style={styles.background}
        >
            <View style={styles.containerDashboard}>
                <View style={styles.toptextDashboard}>
                    <Image 
                        style={styles.imageDashboard}
                    />
                    <Text style={styles.title}>Hello Sir</Text>
                    <Text style={styles.title}>How are you?</Text>
                </View>
                <View style={styles.overviewContainer}>
                    <View style={{borderRightWidth: 0.5, margin: 3 }}>
                        <View>
                            <Text style={styles.textSmall}>Training Time</Text>
                            <Text style={styles.textMedium}>1:23:45</Text>
                        </View>
                    </View>
                    <View>
                        <View>
                            <Text style={styles.textSmall}>Stroke Rate</Text>
                            <Text style={styles.textMedium}>28.45 s/m</Text>
                        </View>
                        <View /> 
                    </View>
                    <View style={{borderLeftWidth: 0.5, margin: 3 }}>
                        <View>
                            <Text style={styles.textSmall}>Avg. Speed</Text>
                            <Text style={styles.textMedium}>18.39 km/h</Text>
                        </View>
                        <View /> 
                    </View>
                </View>

                <View style={styles.graphContainer}>
                    <Text style={styles.textMedium}>LATEST TRAINING</Text>
                    <PieChart 
                        data={rateData}
                        width={screenWidth}
                        height={220}
                        chartConfig={{
                            backgroundColor: '#e26a00',
                            backgroundGradientFrom: '#fb8c00',
                            backgroundGradientTo: '#ffa726',
                            decimalPlaces: 2, 
                            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                            style: {
                              borderRadius: 16
                            }
                          }}                      
                        accessor="ratio"
                        backgroundColor="transparent"
                        paddingLeft="5"
                        absolute
                    />
                </View>
                <FlatList 
                    numColumns={2}
                    data={Data}
                    style={styles.listContainer}
                    keyExtractor={(index) => index.toString()}
                    renderItem={({item}) =>(
                        <TouchableOpacity>
                           <Text style={styles.textMedium}>NEXT TRAINING</Text>
                           <View style={styles.info}>
                              <Text style={styles.iconList}>
                                  <Ionicons name="md-clipboard" />
                              </Text>
                              <Text style={styles.infoContent}>
                                {item.trainingTitle}
                              </Text>
                          </View>
                           <View style={styles.info}>
                              <Text style={styles.iconList}>
                                  <Ionicons name="md-time" />
                              </Text>
                              <Text style={styles.infoContent}>
                                {item.date}
                              </Text>
                          </View>
                           <View style={styles.info}>
                              <Text style={styles.iconList}>
                                  <Ionicons name="md-locate" />
                              </Text>
                              <Text style={styles.infoContent}>
                                {item.location}
                              </Text>
                          </View>
                        </TouchableOpacity>
                    ) }
                />
            </View>
        </ImageBackground>
    );
};

export default Dashboard;