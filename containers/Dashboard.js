import React from 'react';
import {
    View,
    ImageBackground
} from 'react-native';

// import React Native Chart Kit
import {
    //LineChart,
    //BarChart,
    PieChart,
    //ProgressChart,
    //ContributionGraph,
    //StackedBarChart
  } from 'react-native-chart-kit'

// styles
import styles from '../assets/styles';

// dummy data
//import Data from '../assets/data.js'

const Dashboard = () => {
    const rateData = [
        { name: '- SR 18', ratio: 40, color: 'rgba(255, 0, 0, 0.8)', legendFontColor: '#7F7F7F', legendFontSize: 15 },
        { name: 'SR 18 - 24', ratio: 10, color: 'rgba(255, 0, 0, 0.6)', legendFontColor: '#7F7F7F', legendFontSize: 15 },
        { name: 'SR 24 - 30', ratio: 22, color: 'rgba(255, 0, 0, 0.4)', legendFontColor: '#7F7F7F', legendFontSize: 15 },
        { name: 'SR 30 -', ratio: 28, color: 'rgba(255, 0, 0, 0.2)', legendFontColor: '#7F7F7F', legendFontSize: 15 },
    ]

    return (
        <ImageBackground
            source={require("../assets/images/background")}
            style={styles.background}
        >
            <View >
                <Image 
                    source={require("../assets/images/user")} 
                    style={styles.imageDashboard}
                    />
                <Text style={styles.toptextDashboard}>Hello, Sir.</Text>
                <Text>Have a good day.</Text>
            </View>
            <View style={styles.containerDashboard}>
                {/* Overview */}
                <View style={styles.top}>
                    <View>
                        <View>
                            <Text>Training Time</Text>
                            <Text>1:00:05</Text>
                        </View>
                    </View>
                    <View>
                        <View>
                            <Text>Average Rate</Text>
                            <Text>28<Text>SR/m</Text></Text>
                        </View>
                        <View /> {/* border */}
                    </View>
                    <View>
                        <View>
                            <Text>Average Speed</Text>
                            <Text>12.34<Text>km/h</Text></Text>
                        </View>
                        <View /> {/* border */}
                    </View>
                </View>
                {/* Graphical View - The ratio of user's stroke rate(SR) */}
                <View style={styles.graph}>
                    <Text>Latest Training</Text>
                    <PieChart 
                        data={rateData}
                        width={screenWidth}
                        height={220}
                        chartConfig={chartConfig}
                        accessor="ratio"
                        backgroundColor="transparent"
                        paddingLeft="15"
                        absolute
                    />
                </View>
                <View style={styles.list}>
                    <List />
                </View>
            </View>
        </ImageBackground>
    );
};

export default Dashboard;