import { StyleSheet, Dimensions } from 'react-native';

// dimension
const DIMENSION_WIDTH = Dimensions.get("window").width;
const DIMENSION_HEIGHT = Dimensions.get("window").height;

export default StyleSheet.create({
    // component - GridItem
    containerGridItem: {
        backgroundColor: '#ffffff',
        borderRadius: 10,
        alignItems: 'center',
        margin: 10,
        shadowOpacity: 0.05,
        shadowRadius: 0.05,
        shadowColor: '#000000',
        shadowOffset: { 
            height: 0, 
            width: 0 
        }
    },
    // component - UserItem
    containerUserItem: {
        backgroundColor: '#ffffff',
		paddingHorizontal: 10,
		paddingBottom: 25,
		margin: 20,
		borderRadius: 8,
		marginTop: -65,
		shadowOpacity: 0.05,
		shadowRadius: 10,
		shadowColor: '#000000',
		shadowOffset: { 
            height: 0, 
            width: 0 
        }
    },
    name: {
        paddingTop: 15,
		paddingBottom: 10,
		color: "#4a4a4a",
		fontSize: 18,
		textAlign: "center"
    },
    bio: {
        paddingTop: 5,
		paddingBottom: 25,
		color: "#d3d3d3",
		fontSize: 14,
		textAlign: "center"
    },
    info: {
        paddingVertical: 8,
		flexDirection: "row",
		alignItems: "center"
    },
    iconProfile: {
        fontFamily: "Lato",
		fontSize: 16,
		color: "#4a4a4a",
		paddingHorizontal: 10
    },
    iconProfile: {
		fontSize: 16,
		color: "#4a4a4a",
    },
    
    // container - general
    background: {
        flex: 1,
        resizeMode: "cover",
        width: DIMENSION_WIDTH,
        height: DIMENSION_HEIGHT
    },
    top: {
        paddingTop: 50,
        marginHorizontal: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "left"
    },
    title: { 
        paddingBottom: 10, 
        fontSize: 20, 
        color:"#ffffff" 
    },
    icon: {
        fontFamily: "Lato",
        fontSize: 20,
        color: "#d1d1d1",
        paddingRight: 10
    },

    // container - dashboard
    containerDashboard: { 
        marginHorizontal: 10
    },
    
    imageDashboard:{
        borderRadius: 50,
        paddingLeft: 20,
		marginTop: -20,
    },

    toptextDashboard: {
        fontSize: 12,
        color: "#ffffff",
    },
    
    // container - boats
    containerBoats: {
        justifyContent: "space-between",
        flex: 1,
        paddingHorizontal: 10
    },

    // container - user
    containerUser: { 
        marginHorizontal: 10
    },
    photo: {
        borderRadius: 50,
        height: 180,
        width: 180,
        alignItems: "center"
    },
    topIconLeft: {
        fontFamily: "font-name",
        fontSize: 20,
        color: "#ffffff",
        paddingLeft: 20,
        marginTop: -20,
        transform: [{ rotate: "90deg"}]
    },
    tapIconRight: {
        fontFamily: "Lato",
		fontSize: 20,
		color: "#ffffff",
		paddingRight: 20
	},
	actionsProfile: {
		justifyContent: "center",
		flexDirection: "row",
		alignItems: "center"
	},
	iconButton: { 
        fontFamily: "Lato", 
        fontSize: 20, 
        color: "#ffffff" 
    },
	textButton: {
		fontFamily: "Lato",
		fontSize: 15,
		color: "#ffffff",
		paddingLeft: 5
	},

    roundedButton: {
        justifyContent: "center",
		flexDirection: "row",
		alignItems: "center",
		marginLeft: 10,
		height: 50,
		borderRadius: 25,
		backgroundColor: "#D0021B",
		paddingHorizontal: 20
    },

    // menu
    tabButton: {
        paddingTop: 20,
        paddingBottom: 30,
        alignItems: "center",
        justifyContent: "center",
        flex: 1
    },
    tabButtonText: {
        textTransform: "lowercase"
    },
    iconMenu: {
        fontFamily: "Lato",
        height: 20,
        paddingBottom: 5,
    }
})