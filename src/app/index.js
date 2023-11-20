
import { FlatList, StyleSheet, View } from 'react-native';
import racesResponse from '../../assets/data/races.json';


import dayjs from 'dayjs';
import RaceListItem from '../components/RaceListItem';
import { Stack } from 'expo-router';




const races = racesResponse.data.races.response


export default function HomeScreen() {
  console.log('Home screen');

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
