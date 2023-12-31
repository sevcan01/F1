
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';

import racesResponse from '../../assets/data/races.json';
import { Colors } from '../Contants/Colors';
import dayjs from 'dayjs';
import { Link } from 'expo-router';
const races = racesResponse.data.races.response


export default function RaceListItem({ item, round }) {
    return (
        <Link href={`/race/${item.id}`} asChild>
            <Pressable style={styles.itemContainer}>
                <View style={styles.datesContainer}>

                    <Text style={styles.date}>{dayjs(item.date).subtract(2, 'days').format('DD')}-{dayjs(item.date).format('DD')}</Text>
                    <Text style={styles.month}>{dayjs(item.date).format('MMM')}</Text>
                </View>
                <View style={{ flex: 1 }}>

                    <Text style={styles.round}>Round {round}</Text>
                    <Text style={styles.country}>{item.competition.location.country}</Text>
                    <Text style={styles.description}>Formula 1 {item.competition.name} {item.season}</Text>

                </View>
                <Entypo name="chevron-right" size={24} color={Colors.primary} />
            </Pressable>
        </Link>
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
        fontFamily: 'F1-Regular',
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
        fontFamily: 'F1-Bold',

    },
    round: { color: Colors.primary, fontFamily: 'F1-Regular' },
    description: {
        color: 'dimgray'
    },
    country: {


        fontSize: 20,
        fontFamily: 'F1-Bold',
        marginVertical: 7,
    },
    datesContainer: {
        padding: 10,
        marginRight: 10,
        borderRightWidth: 1,
        borderRightColor: 'gainsboro',
        alignItems: 'center',
    }

});
