import React from "react";
import styles from "../assets/style";

import { Text, View } from "react-native";
import { Ionicons } from '@expo/vector-icons';

const UserItem = ({
    name,
    bio,
    info1,
    info2,
    info3,
}) => {
    return (
        <View style={styles.containerUserItem}>
            <Text style={styles.name}>
                Taro Yamada
            </Text>
            <View style={styles.bio}>
                <Text style={styles.bio}>
                    I am focusing on Scull-rowing
                </Text>
            </View>
            <View style={styles.info}>
                <Text style={styles.iconProfile}>
                    <Ionicons name="md-contacts" />
                </Text>
                <Text style={styles.infoContent}>ABC Rowing Club</Text>
            </View>
            <View style={styles.info}>
                <Text style={styles.iconProfile}>
                    <Ionicons name="md-build"/>
                </Text>
                <Text style={styles.infoContent}>Single Scull</Text>
            </View>
            <View style={styles.info}>
                <Text style={styles.iconProfile}>
                    <Ionicons name="md-timer" />
                </Text>
                <Text style={styles.infoContent}>6:21:59</Text>
            </View>
        </View>
    );
};

export default UserItem;