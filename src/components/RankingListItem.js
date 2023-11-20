import { View, Text, StyleSheet, Image } from 'react-native';
import raceRankingResponse from '../../assets/data/race-rankings.json'

const raceRankings = raceRankingResponse.data.raceRankings.response;

export default function RankingListItem({ item }) {
    return (

        <View style={styles.container}>
            <Text style={styles.position} >{item.position}</Text>
            <Image source={{ uri: item.driver.image }} style={styles.driverImage} />
            <View style={{ flex: 1 }}>

                <Text style={styles.name}>{item.driver.name}</Text>
                <Text style={styles.team}>{item.team.name}</Text>

            </View>
            <Text style={styles.time}>{item.time}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingHorizontal: 5,
        margin: 5,
        borderRadius: 5,
        backgroundColor: 'white',
        alignItems: 'center',
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.17,
        shadowRadius: 2.54,
        elevation: 3



    },
    position: {

        fontFamily: 'F1-Wide',
        width: 50,
    },
    name: {

        fontSize: 18,
        fontFamily: 'F1-Bold',
        marginBottom: 5
    },
    time: {
        fontSize: 12,
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
    driverImage: {

        height: 70,
        aspectRatio: 1,
        marginRight: 10,
    }


})