import React from "react";

import {
	ScrollView,
	View,
	Text,
    TouchableOpacity,
    Image,
	ImageBackground,
	FlatList
} from "react-native";

// components
//import GridItem from "../components/GridItem";

// styles
import styles from "../assets/style";
import { Ionicons } from '@expo/vector-icons';
// dummy data
//import Data from "../assets/data";
import boatData from "../assets/boatdata";

const Boats = () => {
    const {
        name,
        image,
    } = [boatData[2]];

    return (
        <ImageBackground
            source={require("../assets/images/bg.png")}
            style={styles.background}
        >
            <View style={styles.containerBoats}>
                <ScrollView>
                    <View style={styles.top}>
                        <Text style={styles.title}>Boats</Text>
                        <TouchableOpacity>
                            <Text style={styles.icon}><Ionicons name="md-notifications-outline" size={32}/></Text>
                        </TouchableOpacity>
                    </View>
                    <FlatList
                        numColumns={2}
                        data={boatData}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({item}) => (
                            <TouchableOpacity>
                                <View style={styles.containerGridItem}>
                                    <Image 
                                        style={{justifyContent:'center',alignItems:'center',height:175, width:175}}
                                        source={item.image} 
                                    />
                                    <Text style={{justifyContent:'center',textAlign:'center', fontSize: 18, marginBottom: 15, marginTop: 15}}>{item.name}</Text>
                                </View>
                            </TouchableOpacity>
                        )}
                    />
                </ScrollView>
            </View>
        </ImageBackground>
    );
};

export default Boats;