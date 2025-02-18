import { Image, StyleSheet, Platform, View, Text} from 'react-native';
import { useTemperature } from '@/hooks/useTemperature';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import CounterButton from '@/components/ExamComponents/CounterButton';


export default function HomeScreen() {


  const {
    temp,
    rgb,
    evalTemp
  } = useTemperature();


  return (
    <View style={{...styles.titleContainer}}>
      <View style={styles.container}>
      <View style={{...styles.canvas}}>
          <Text style={{...styles.canvaText,color: rgb}}>{temp}</Text>
        </View>
        <View style={styles.row}>

        <CounterButton label="-" onPress={() => evalTemp("-")}/>
        <CounterButton label="+" onPress={() => evalTemp("+")}/>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flex: 1
  },
  canvas:{
    marginHorizontal: 50,
    marginTop: 150,
    height:200,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  canvaText: {
    textAlign: "center",
    padding: 10,
    fontSize: 80,
    color: "white",
    fontWeight: 900
  },

  container:{
    flex: 1,
    justifyContent: "flex-start",
    paddingBottom: 20,
  },

  row: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 40,
    paddingHorizontal: 5
  },


});
