import { StatusBar } from 'expo-status-bar';
import { FlatList, SafeAreaView, StyleSheet } from 'react-native';
import racesResponse from './assets/data/races.json';
import RaceListItem from './src/components/RaceListItem';



const races = racesResponse.data.races.response


export default function App() {
  return (
    <SafeAreaView style={styles.container}>

      <StatusBar
        animated={true}
        backgroundColor="#fff"



      />
      <FlatList
        data={races}

        renderItem={({ item }) => (
          <RaceListItem item={item} />
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
