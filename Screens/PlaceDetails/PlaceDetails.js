import React from 'react';
import { ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native';

const PlaceDetails = () => {
    return (
        <ScrollView>
            <ImageBackground
                source={require('../../images/Rectangle3(1).png')}
                style={styles.topBackgroundImg}
            >
            </ImageBackground>
            <View style={styles.description}>
                <Text style={styles.park}>
                    Jasper National Park
               </Text>
                <Text >Alberta, Canada</Text>
                <Text style={styles.desText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac velit in nascetur pulvinar dignissim. Lectus elit odio hendrerit vel sed </Text>
                <View style={styles.infoBoxWrapper}>
                    <View style={styles.infoBox}>
                        <Text>36 Hotels</Text>
                    </View>
                    <View style={styles.infoBox}>
                        <Text>145 Restaurants</Text>
                    </View>
                </View>

                <Text>34 Km from here</Text>
                <View style={styles.bookFlightBtn}>
                    <Text style={styles.bookFlightText}>Book Flight for My Trip</Text>
                </View>
            </View>
        </ScrollView>
    );
};
const styles = StyleSheet.create({
    topBackgroundImg: {
        height: 390
    },
    description: {
        backgroundColor: '#FFFFFF',
        padding: 16,
        marginTop: -30,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,

    },
    park: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000000'
    },
    desText: {
        color: '#828282',
        marginTop: 8,

    },
    infoBoxWrapper:{
      flexDirection: 'row',
      marginTop: 4
    },
    infoBox: {
        margin: 10,
        padding: 10,
        backgroundColor: 'rgba(47, 128, 237, 0.1)',
        borderRadius: 7,

    },
    bookFlightBtn:{
        padding: 25,
        backgroundColor: '#2F80ED',
        margin: 10,
        justifyContent: 'center',
        borderRadius: 20,

    },
    bookFlightText:{
        textAlign: 'center',
        color: '#FFFFFF',
        fontSize: 15,

    }
})
export default PlaceDetails;