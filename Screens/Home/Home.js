import React from 'react';
import { Image, ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';

const Home = () => {
    return (
        <ScrollView>
            <ImageBackground
                source={require('../../images/Rectangle3.png')}
                style={styles.backgroundImg}
            >

                <View style={styles.topSection}>
                    <View style={styles.nextTrip}>
                        <Text style={styles.textColor}>Hello Atiq,</Text>
                        <Text style={styles.headingText}>Wanna plan your next trip?</Text>
                    </View>
                    <View>
                        <Text style={{ ...styles.textColor, ...styles.search }}>search</Text>
                    </View>
                </View>

                <View style={styles.headerBottom}>
                    <Text style={styles.park}>Jasper National Park</Text>
                    <Text style={styles.textColor}>Alberta, Canada</Text>
                </View>

            </ImageBackground>
            <ScrollView
                horizontal={true}
            >
                <View style={styles.hrBtn}>
                    <Text style={styles.btnText}>Restaurant</Text>
                </View>
                <View style={styles.hrBtn}>
                    {/* <Icon name="rocket" size={30} /> */}
                    <Text style={styles.btnText}>Hotels</Text>
                </View>
                <View style={styles.hrBtn}>
                    <Text style={styles.btnText}>Ticket</Text>
                </View>
                <View style={styles.hrBtn}>
                    <Text style={styles.btnText}>Resort</Text>
                </View>
                <View style={styles.hrBtn}>
                    <Text style={styles.btnText}>Motel</Text>
                </View>
            </ScrollView>

            <View style={styles.cardWrapper}>
                <ImageBackground
                source={require('../../images/Rectangle6.png')}
                style={styles.card1}>
                   <Text style={styles.textColor}>Ritz-Carlton</Text>
                   <Text style={styles.rating}>Rating: 4</Text>
                </ImageBackground>
                <ImageBackground
                source={require('../../images/Rectangle7.png')}
                style={styles.card2}>
                                      <Text style={styles.textColor}>KFC</Text>
                                      <Text style={styles.rating}>Rating: 5</Text>
                </ImageBackground>
            </View>

            <View style={styles.cardWrapper}>
                <ImageBackground
                source={require('../../images/Rectangle6.png')}
                style={styles.card1}>
                   <Text style={styles.textColor}>NFC</Text>
                   <Text style={styles.rating}>Rating: 4.5</Text>
                </ImageBackground>
                <ImageBackground
                source={require('../../images/Rectangle7.png')}
                style={styles.card2}>
                   <Text style={styles.textColor}>Ritz-Carlton</Text>
                   <Text style={styles.rating}>Rating: 3.6</Text>
                </ImageBackground>
            </View>
        </ScrollView>
    );
};
const styles = StyleSheet.create({
    backgroundImg: {
        height: 350,
        backgroundColor: '#181818',
        padding: 30,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        opacity: 1
    },
    topSection: {
        flexDirection: 'row',
        justifyContent: "space-between",

    },
    nextTrip: {
        width: 200
    },
    headerBottom: {
        marginTop: 160
    },
    headingText: {
        fontSize: 28,
        color: '#FFFFFF',
        fontWeight: 'bold',

    },
    park: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FFFFFF'
    },
    hrBtn: {
        padding: 15,
        borderRadius: 25,
        backgroundColor: "#2F80ED",
        marginHorizontal: 5,
        marginVertical: 10
    },
    btnText: {
        fontSize: 14,
        color: "#FFFFFF",
    },
    cardWrapper: {
        flex: 1,
        flexDirection: "row",
        marginHorizontal: 10,
        marginVertical: 10,
        // boxSizing: "border-box"
    },
    card1: {
        flex: 1,
      backgroundColor: "red",
      height: 180,
      marginRight: 10,
      borderRadius: 20,
      padding: 10,
    },
    card2: {
        flex: 1,
        backgroundColor: "red",
        height: 180,
        marginLeft: 10,
        borderRadius: 20,
        padding: 10,
    },
    rating:{
 color: "#FFFFFF",
 fontSize: 22,
    },
    textColor: {
        color: '#FFFFFF'
    },
})

export default Home;