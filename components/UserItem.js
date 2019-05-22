import React from "react";
import styles from "../assets/styles";

import { Text, View } from "react-native";
import Icon from "./Icon";

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
                {name}
            </Text>
            <View style={styles.bio}>
                <Text>
                    {bio}
                </Text>
            </View>
            <View style={styles.info}>
                <Text style={styles.iconProfile}>
                    <Icon name="club" />
                </Text>
                <Text style={styles.infoContent}>{info1}</Text>
            </View>
            <View style={styles.info}>
                <Text style={styles.iconProfile}>
                    <Icon name="tool"/>
                </Text>
                <Text style={styles.infoContent}>{info2}</Text>
            </View>
            <View style={styles.info}>
                <Text style={styles.iconProfile}>
                    <Icon name="timer" />
                </Text>
                <Text style={styles.infoContent}>{info3}</Text>
            </View>
        </View>
    );
};

export default UserItem;