
import { StyleSheet, Text, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';

import racesResponse from '../../assets/data/races.json';
import { Colors } from '../Contants/Colors';
const races = racesResponse.data.races.response


export default function RaceListItem({ item }) {
    return (
        <View style={styles.itemContainer}>
            <View style={styles.datesContainer}>

                <Text style={styles.date}>02-05</Text>
                <Text style={styles.month}>JUL</Text>
            </View>
            <View style={{ flex: 1 }}>

                <Text style={styles.round}>Round 22</Text>
                <Text style={styles.country}>{item.competition.location.country}</Text>
                <Text style={styles.description}>Formula 1 {item.competition.name} 2023</Text>
            </View>
            <Entypo name="chevron-right" size={24} color={Colors.primary} />
        </View>
    )
}




const styles = StyleSheet.create({

    itemContainer: {
        padding: 10,
        margin: 5,
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.00,

        elevation: 1

    },
    date: {

    },
    month: {
        backgroundColor: 'gainsboro',
        paddingVertical: 3,
        paddingHorizontal: 10,
        borderRadius: 10,
        overflow: 'hidden',
        color: 'dimgray',
        fontWeight: 'bold',
        marginTop: 5,

    },
    round: { color: Colors.primary },
    description: {
        color: 'dimgray'
    },
    country: {

        fontWeight: 'bold',
        fontSize: 20,
    },
    datesContainer: {
        padding: 10,
        marginRight: 10,
        borderRightWidth: 1,
        borderRightColor: 'gainsboro',
        alignItems: 'center',
    }

});
