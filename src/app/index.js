
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native';
import racesResponse from '../../assets/data/races.json';


import dayjs from 'dayjs';
import RaceListItem from '../components/RaceListItem';
import { Stack } from 'expo-router';
import { gql, useQuery } from '@apollo/client';

const races = racesResponse.data.races.response

const query = gql`
query MyQuery($season: String!, $type: String!) {
  races(season:$season, type: $type) {
    response {
      date
      id
      season
      competition {
        name
        location {
          country
        }
        
      }
    }
  }
}
`

export default function HomeScreen() {
  const { data, loading, error } = useQuery(query, {
    variables: { "season": "2023", "type": "RACE" }
  });


  if (loading) {
    return <ActivityIndicator />
  } if (error) {
    return <Text>Error fetching races</Text>
  }

  const races = [...data.races.response]

  const sortedRaces = races.sort((r1, r2) =>
    dayjs(r2.date).diff(dayjs(r1.date))
  )

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: 'Racing 123' }} />

      <FlatList
        data={sortedRaces}

        renderItem={({ item, index }) => (
          <RaceListItem item={item} round={sortedRaces.length - index} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'whitesmoke'

  },


});
