import React from 'react';
import { Image, ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native';

const PlaceDetails = () => {
    const images = [
        "https://i.ibb.co/0YDvgD9/Rectangle3-1.png",
        "https://i.ibb.co/rw9MrV2/Rectangle3.png",
        'https://images.pexels.com/photos/5282269/pexels-photo-5282269.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
        "https://i.ibb.co/f8CfJgN/Rectangle6.png",
        "https://i.ibb.co/KrdDLdK/Rectangle7.png",
    ]
    return (
        <ScrollView>
           {/* <ScrollView
           pagingEnabled
           horizontal={true}
           style={styles.topBackgroundImgWrapper}
           >
            {
                images.map((image, index) =>{
                    <Image
                    key={index}
                    source={{uri: image}}
                    style={styles.topBackgroundImg}
                >
                </Image>
                 })
            } 
            </ScrollView> */}
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
    topBackgroundImgWrapper:{
        height: 390
    },
    topBackgroundImg: {
        height: 390,
        resizeMode: 'cover'
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