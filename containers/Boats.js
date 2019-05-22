import React from "react";

import {
	ScrollView,
	View,
	Text,
	TouchableOpacity,
	ImageBackground,
	FlatList
} from "react-native";

// components
import GridItem from "../components/GridItem";

// styles
import styles from "../assets/styles";
import Icon from './assets/Icons';
// dummy data
import Data from "../assets/data";

const Boats = () => {
    //const boatData = [
    //    { image: require('../assets/images/boat-001'), name: '1x - Main',  },
    //    { image: require('../assets/images/boat-002'), name: '1x - Sub',  },
    //    { image: require('../assets/images/boat-003'), name: '2x - Main',  },
    //    { image: require('../assets/images/boat-004'), name: '2x - Sub',  },
    //    { image: require('../assets/images/boat-005'), name: '4x - Main',  },
    //    { image: require('../assets/images/boat-001'), name: '8+ - Main',  },
    //]
    return (
        <ImageBackground
            source={require("../assets/images/background")}
            style={styles.background}
        >
            <View style={styles.containerBoats}>
                <ScrollView>
                    <View style={styles.top}>
                        <Text style={styles.title}>Boats</Text>
                        <TouchableOpacity>
                            <Text style={styles.icon}><Icon name="#" /></Text>
                        </TouchableOpacity>
                    </View>
                    <FlatList
                        numColumns={2}
                        data={Data}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({item}) => (
                            <TouchableOpacity>
                                <GridItem
                                    image={item.boat.image}
                                    name={item.boat.name}
                                    //status={item.status}
                                    //variant
                                />
                            </TouchableOpacity>
                        )}
                    />
                </ScrollView>
            </View>
        </ImageBackground>
    );
};

export default Boats;