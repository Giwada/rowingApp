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
// icons
import Icon from './assets/Icons';
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
    } = Data[6];

    return (
        <ImageBackground
            source={require("../assets/images/background.png")}
            style={styles.background}
        >
            <ScrollView style={styles.containerUser}>
                <View style={styles.top}>
                        <Text style={styles.title}>User Profile</Text>
                        <TouchableOpacity>
                            <Text style={styles.icon}><Icon name="#" /></Text>
                        </TouchableOpacity>
                    </View>
                <ImageBackground source={image} style={styles.photo} />
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
                            <Icon name="edit"/>
                        </Text>
                        <Text style={styles.textButton}>Edit</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </ImageBackground>
    );
};

export default User;