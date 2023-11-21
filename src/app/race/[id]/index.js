import { View, Text, Image, StyleSheet, ActivityIndicator } from 'react-native';
import React from 'react';
import { useLocalSearchParams } from 'expo-router';
import { useQuery, gql } from '@apollo/client';

const query = gql`
query MyQuery {
    races(season: "2023", type: "RACE") {
      response {
        date
        id
        competition {
          location {
            city
            country
          }
          
        }
        season
        circuit {
          name
          image
          id
        }
      }
    }
  }
`;

const RaceDetails = () => {
    const { id } = useLocalSearchParams();

    const { data, loading } = useQuery(query, { variables: { id: id } });

    if (loading) {
        return <ActivityIndicator />;
    }

    const race = data?.races?.response[7];

    if (!race) {
        return <Text>Race not found!</Text>;
    }

    return (
        <View style={styles.page}>
            <Text style={{ fontSize: 24, fontFamily: 'F1-Regular' }}>
                <Text style={{ fontFamily: 'F1-Bold' }}>
                    {race.competition.location.country}{' '}
                </Text>
                {race.season}
            </Text>
            <Text>{race.circuit.name}</Text>
            <Image
                source={{ uri: race.circuit.image }}
                style={styles.image}
                resizeMode="contain"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    page: {
        padding: 10,
    },
    image: {
        width: '100%',
        aspectRatio: 16 / 9,
        marginVertical: 15,
    },
});

export default RaceDetails;