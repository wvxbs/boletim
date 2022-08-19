import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function HomeScreen({ navigation }: RootTabScreenProps<'Home'>) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Boa Tarde!
      </Text>
      <Card />
    </View>
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
    height: 300
  }
});
