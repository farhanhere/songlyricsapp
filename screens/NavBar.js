import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Animated, Dimensions, Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from "./Home";
import { Settings } from "./Settings";
import { Likes } from './Likes';



// Font Awesome Icons...
import { FontAwesome5 } from '@expo/vector-icons'
import { useRef } from 'react';

const Tab = createBottomTabNavigator();

// Hiding Tab Names...
const NavBar = () => {
    // Animated Tab Indicator...
    const tabOffsetValue = useRef(new Animated.Value(0)).current;
    return (
        <NavigationContainer independent={true}>
            <Tab.Navigator screenOptions={{
                showLabel: false,
                "tabBarShowLabel": false,
                "tabBarStyle": [
                    {
                        "display": "flex",
                        
                    },
                    null
                ],

                // Floating Tab Bar...
                style: {
                    backgroundColor: 'white',
                    position: 'absolute',
                    bottom: 40,
                    marginHorizontal: 20,
                    // Max Height...
                    height: 80,
                    borderRadius: 10,
                    // Shadow...
                    shadowColor: '#000',
                    shadowOpacity: 0.06,
                    shadowOffset: {
                        width: 10,
                        height: 10
                    },
                    paddingHorizontal: 20,
                }
            }}>

                <Tab.Screen name={"Home"} component={Home} options={{
                    
                    tabBarIcon: ({ focused }) => (
                        <View style={{
                            // centring Tab Button...
                            position: 'absolute',
                            top: 5
                        }}>
                            <FontAwesome5
                                name="home"
                                size={35}
                                color={focused ? '#E31C79' : 'white'}
                            ></FontAwesome5>
                        </View>
                    ),
                    tabBarStyle: {
                        backgroundColor:  'black' ,
                      },
                }} listeners={({ navigation, route }) => ({
                    // Onpress Update....
                    tabPress: e => {
                        Animated.spring(tabOffsetValue, {
                            toValue: 0,
                            useNativeDriver: true
                        }).start();
                    }
                })}></Tab.Screen>

                <Tab.Screen name={"Likes"} component={Likes} options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{
                            // centring Tab Button...
                            position: 'absolute',
                            top: 5
                        }}>
                            <FontAwesome5
                                name="heart"
                                solid size={35}
                                color={focused ? '#E31C79' : 'white'}
                            ></FontAwesome5>
                        </View>
                    ),
                    tabBarStyle: {
                        backgroundColor:  'black' ,
                      },
                }} listeners={({ navigation, route }) => ({
                    // Onpress Update....
                    tabPress: e => {
                        Animated.spring(tabOffsetValue, {
                            toValue: getWidth(),
                            useNativeDriver: true
                        }).start();
                    }
                })}></Tab.Screen>





                <Tab.Screen name={"Settings"} component={Settings} options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{
                            // centring Tab Button...
                            position: 'absolute',
                            top: 5
                        }}>
                            <FontAwesome5
                                name="user-alt"
                                size={35}
                                color={focused ? '#E31C79' : 'white'}
                            ></FontAwesome5>
                        </View>
                    ),
                    tabBarStyle: {
                        backgroundColor:  'black' ,
                      },
                }} listeners={({ navigation, route }) => ({
                    // Onpress Update....
                    tabPress: e => {
                        Animated.spring(tabOffsetValue, {
                            toValue: getWidth() * 2,
                            useNativeDriver: true
                        }).start();
                    }
                })}></Tab.Screen>

            </Tab.Navigator>

            <Animated.View style={{
                width: getWidth() - 20,
                height: 2,
                backgroundColor: '#E31C79',
                position: 'absolute',
                bottom: 50,
                // Horizontal Padding = 20...
                left: 30,
                borderRadius: 20,
                transform: [
                    { translateX: tabOffsetValue }
                ]
            }}>

            </Animated.View>
        </NavigationContainer>
    );
}

function getWidth() {
    let width = Dimensions.get("window").width

    // Horizontal Padding = 20...
    width = width - 40

    // Total five Tabs...
    return width / 3
}






const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export { NavBar };