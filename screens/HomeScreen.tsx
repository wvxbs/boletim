import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { ScrollView, Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function HomeScreen({ navigation }: RootTabScreenProps<'Home'>) {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>
        Boa Tarde!
      </Text>
      <ScrollView horizontal={true}>
        <Card />
        <Card />
        <Card />
      </ScrollView>
    </ScrollView>
  );
}

const Card = () => {
  return(
    <View style={styles.card}>  
      <Text style={styles.body}>
        Exemplo
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    padding: 15,
    height: '100%'
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  body: {
    fontSize: 22
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  card: {
    margin: 20,
    height: 200,
    width: 200
  }
});
