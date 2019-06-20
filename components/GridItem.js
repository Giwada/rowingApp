import React from 'react';
import styles from "../assets/style";
import { 
    Text, 
    View, 
    Image, 
    Dimensions, 
    //TouchableOpacity
 } from 'react-native';

const GridItem = ({
    name,
    image,
}) => {
    const fullWidth = Dimensions.get("window").width;
    const imageStyle = [
        {
            borderRadius: 8,
            width: variant ? fullWidth / 2 - 30 : fullWidth - 80,
            height: variant ? 170 : 350,
            margin: variant ? 0 : 20
        }
    ];
    const nameStyle = [
        {
            paddingTop: variant ? 10 : 15,
            paddingBottom: variant ? 5 : 7,
            color: "#000000",
            fontSize: variant ? 15 : 30
        }
    ];

    return (
        <View style={styles.containerGridItem}>
            <Image 
                source={image} 
                style={imageStyle} 
            />
            <Text style={nameStyle}>{name}</Text>
        </View>
    );
};

export default GridItem;