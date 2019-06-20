import React from 'react';

import { Text } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

import styles from './assets/style';
import { Ionicons } from '@expo/vector-icons';


// import containers(screens)
import DashboardScreen from './containers/Dashboard';
import BoatsScreen from './containers/Boats';
import UserScreen from './containers/User';
//import MoreScreen from './containers/More'; implemented later
// notification - implemented later


const App = createBottomTabNavigator(
    {
        Dashboard: {
            screen: DashboardScreen,
            navigationOptions: {
                tabBarIcon: ({ focused }) => {
                    const iconFocused = focused ? "#d8d8d8" : "#D0021B"
                    return (
                        <Text style={[styles.iconMenu, { color: iconFocused }]}>
                            <Ionicons name="md-home" />
                        </Text>
                    );
                }
            }
        },
        Boats: {
            screen: BoatsScreen,
            navigationOptions: {
                tabBarIcon: ({ focused}) => {
                    const iconFocused = focused ? "#d8d8d8" : "#D0021B"
                    return (
                        <Text style={[styles.iconMenu, { color: iconFocused }]}>
                            <Ionicons name="md-boat" />
                        </Text>
                    );
                }
            }
        },
        User: {
            screen: UserScreen,
            navigationOptions: {
                tabBarIcon: ({ focused}) => {
                    const iconFocused = focused ? "#d8d8d8" : "#D0021B"
                    return (
                        <Text style={[styles.iconMenu, { color: iconFocused }]}>
                            <Ionicons name="md-person" />
                        </Text>
                    );
                }
            }
        },
        //More: {
        //    screen: MoreScreen,
        //    navigationOptions: {
        //        tabBarIcon: ({ focused}) => {
        //            const iconFocused = focused ? "#d8d8d8" : "#D0021B"
        //            return (
        //                <Text style={[styles.iconMenu, { color: iconFocused }]}>
        //                    <Ionicons name="md-reorder" />
        //                </Text>
        //            );
        //        }
        //    }
        //},
    },
    {
        tabBarOptions:{
            activeTintColor: "#d0021b",
            inactiveTintColor: "#d8d8d8",
            labelStyle: {
                fontSize: 12,
                textTransform: "none",
                paddingTop: 10
            },
            style: {
                backgroundColor: "#fff",
                borderTopWidth: 0,
                paddingVertical: 30,
                height: 60,
                marginBottom: 0,
                shadowOpacity: 0.05,
                shadowRadius: 10,
                shadowColor: "#000",
                shadowOffset: {height: 0, width: 0}
            }
        }
    }
);

export default createAppContainer(App);