import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, FlatList, SafeAreaView, StyleSheet } from 'react-native';
import racesResponse from './assets/data/races.json';
import RaceListItem from './src/components/RaceListItem';
import { useFonts } from 'expo-font';
import dayjs from 'dayjs';



const races = racesResponse.data.races.response


export default function App() {
  const [fontsLoaded] = useFonts({
    'F1-Black': require('./assets/fonts/Formula1-Black.ttf'),
    'F1-Black': require('./assets/fonts/Formula1-Black.ttf'),
    'F1-Bold': require('./assets/fonts/Formula1-Bold_web.ttf'),
    'F1-Italic': require('./assets/fonts/Formula1-Italic.ttf'),
    'F1-Regular': require('./assets/fonts/Formula1-Regular-1.ttf'),
    'F1-Wide': require('./assets/fonts/Formula1-Wide.ttf'),

  })
  if (!fontsLoaded) {
    return <ActivityIndicator />
  }
  const sortedRaces = races.sort((r1, r2) =>
    dayjs(r2.date).diff(dayjs(r1.date))
  )

  return (
    <SafeAreaView style={styles.container}>

      <StatusBar
        animated={true}
        backgroundColor="#fff"



      />
      <FlatList
        data={sortedRaces}

        renderItem={({ item, index }) => (
          <RaceListItem item={item} round={sortedRaces.length - index} />
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'whitesmoke'

  },


});
