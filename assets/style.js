import { StyleSheet, Dimensions } from 'react-native';

// dimension
const DIMENSION_WIDTH = Dimensions.get("window").width;
const DIMENSION_HEIGHT = Dimensions.get("window").height;

export default StyleSheet.create({
    // component - GridItem
    containerGridItem: {
        flex:1, 
        flexDirection:'column', 
        margin: 1,
        marginTop: 15,
        shadowOpacity: 0.05,
		shadowRadius: 10,
		shadowColor: '#000000',
		shadowOffset: { 
            height: 0, 
            width: 0 
        },
        borderRadius: 10,
        overflow: 'hidden',
        backgroundColor:"#ffffff"
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
        paddingTop: 1,
		paddingBottom: 5,
		color: "#d3d3d3",
		fontSize: 14,
		textAlign: "center"
    },
    info: {
        paddingVertical: 8,
		flexDirection: "row",
		alignItems: "center"
    },
    infoContent: {
        fontSize: 16,
		color: "#4a4a4a",
		paddingHorizontal: 10
    },
    iconProfile: {
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
        paddingTop: 75,
        marginHorizontal: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
    },
    title: { 
        paddingBottom: 10, 
        fontSize: 20,
        fontWeight: 'bold', 
        color:"#ffffff" 
    },
    icon: {
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
        marginTop: 100,
        fontSize: 12,
        color: "#ffffff",
    },

    overviewContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#ffffff',
        padding: 15,
		paddingVertical: 15,
        paddingHorizontal: 5,
        paddingBottom: 15,
        marginTop: 55,
		margin: 20,
		borderRadius: 8,
		shadowOpacity: 0.05,
		shadowRadius: 10,
		shadowColor: '#000000',
		shadowOffset: { 
            height: 0, 
            width: 0 
        }
    },

    textMedium:{
        color: '#282c37',
        fontSize: 18,
        marginTop: 5,
        marginBottom: 5,
    },
    textSmall:{
        color: '#6d819c',
        fontSize: 16
    },

    graphContainer: {
        backgroundColor: '#ffffff',
        marginTop: 2,
        paddingRight: 10,
		shadowOpacity: 0.05,
		shadowRadius: 10,
		shadowColor: '#000000',
		shadowOffset: { 
            height: 0, 
            width: 0 
        }
    },
    listContainer: {
        backgroundColor: '#ffffff',
        marginTop: 12,
		shadowOpacity: 0.05,
		shadowRadius: 10,
		shadowColor: '#000000',
		shadowOffset: { 
            height: 0, 
            width: 0 
        }
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
        marginLeft: 100,
        marginBottom: 100,
        borderRadius: 100,
        overflow: 'hidden',
        height: 150,
        width: 150,
    },
    topIconLeft: {
        fontSize: 20,
        color: "#ffffff",
        paddingLeft: 20,
        marginTop: -20,
        transform: [{ rotate: "90deg"}]
    },
    tapIconRight: {
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
        fontSize: 20, 
        color: "#ffffff" 
    },
	textButton: {
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
        width: 250,
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
        height: 20,
        paddingBottom: 5,
    }
})