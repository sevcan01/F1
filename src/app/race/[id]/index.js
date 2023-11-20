import { View, Text, Image } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'
import raceResponse from '../../../../assets/data/race.json'
import { StyleSheet } from 'react-native';


const race = raceResponse.data.races.response[0]
const RaceDetails = () => {
    const { id } = useLocalSearchParams()
    return (
        <View style={styles.page}>
            <Text style={{ fontSize: 20, fontFamily: 'F1-Regular' }}><Text style={{ fontFamily: 'F1-Bold' }}>{race.competition.location.country}</Text>{race.season}</Text>
            <Text>{race.circuit.name}</Text>
            <Image source={{ uri: race.circuit.image }} style={styles.image} resizeMode='contain' />


        </View>
    )
}

const styles = StyleSheet.create({
    page: {
        padding: 10,
    },
    image: {
        width: '100%',
        aspectRatio: 16 / 9,
        marginVertical: 15


    }
})

export default RaceDetails