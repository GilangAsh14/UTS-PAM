import { ScrollView, View, StyleSheet, TouchableOpacity,Image, Text } from 'react-native'
import React from 'react'

const Daftar = ({navigation}) => {
  return (
    <ScrollView>
      <View style={styles.row}>
                <TouchableOpacity style={styles.menu}
                    onPress={() => {
                        navigation.navigate('Detail', {
                            link:require("../../assets/video/videoML.mp4"),
                            judul: 'Machine Learning'
                        })
                    }}
                >
                    <Image source={require('../../images/ML.png')} style={styles.ikon} />
                    <Text style={styles.teks} >Machine Learning</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menu}
                    onPress={() => {
                        navigation.navigate('Detail', {
                            link: require("../../assets/video/VideoRN.mp4"),
                            judul: 'Apa itu React Native?'
                        })
                    }}
                >
                    <Image source={require('../../images/ReactNative.png')} style={styles.ikon} />
                    <Text style={styles.teks} >React Native</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.row}>
                <TouchableOpacity style={styles.menu}
                    onPress={() => {
                        navigation.navigate('Detail', {
                            link:require("../../assets/video/mendeley.mp4"),
                            judul: 'Pengguna Mendeley'
                        })
                    }}
                >
                    <Image source={require('../../images/mendeley.png')} style={styles.ikon} />
                    <Text style={styles.teks} >Mendeley</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menu}
                    onPress={() => {
                        navigation.navigate('Detail', {
                            link: require("../../assets/video/perbedaan.mp4"),
                            judul: 'Perbedaan ReactNative dan Flutter?'
                        })
                    }}
                >
                    <Image source={require('../../images/perbedaan.png')} style={styles.ikon} />
                    <Text style={styles.teks} >Perbedaan ReactNative dan Flutter</Text>
                </TouchableOpacity>
            </View>
    </ScrollView>
  )
}

export default Daftar
const styles=StyleSheet.create({
    menu: {
        backgroundColor: 'white',
        borderRadius: 20,
        marginVertical: 10,
        width: 180,
        margin: 10,
        padding: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    row: {
        display: 'flex',
        flexDirection: 'row'
    },
    ikon: {
        width: 170,
        height: 170,
        borderRadius: 20,
    },
})