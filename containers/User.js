import React from 'react';
import {
    ScrollView,
    View,
    Text,
    TouchableOpacity,
    ImageBackground
} from 'react-native';

// components
import UserItem from '../components/UserItem';
// styles
import styles from "../assets/style";

// icons
import { Ionicons } from '@expo/vector-icons';
// dummy data
import Data from "../assets/data";

const User = () => {
    const {
        name,
        bio,
        image,
        info1,
        info2,
        info3,
    } = [Data[1]];

    return (
        <ImageBackground
            source={require("../assets/images/bg.png")}
            style={styles.background}
        >
            <ScrollView style={styles.containerUser}>
                <View style={styles.top}>
                    <Text style={styles.title}>User Profile</Text>
                    <TouchableOpacity>
                        <Text style={styles.icon}><Ionicons name="md-notifications-outline" size={32} /></Text>
                    </TouchableOpacity>
                </View>
                <ImageBackground source={require("../assets/images/user1.jpg")} style={styles.photo} />
                <UserItem
                    name={name}
                    bio={bio}
                    info1={info1} // club
                    info2={info2} // tools
                    info3={info3} // 2000m ergo best
                />
                <View style={styles.actionsProfile}>
                    <TouchableOpacity style={styles.roundedButton}>
                        <Text style={styles.iconButton}>
                            <Ionicons name="md-create"/>
                        </Text>
                        <Text style={styles.textButton}>Edit</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </ImageBackground>
    );
};

export default User;