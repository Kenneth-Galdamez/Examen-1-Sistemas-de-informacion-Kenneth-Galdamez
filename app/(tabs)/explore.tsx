import { StyleSheet, Image, Platform, View } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { useTemperature } from '@/hooks/useTemperature';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { useRandom } from '@/hooks/useRandom';
import CounterButton from '@/components/ExamComponents/CounterButton';

export default function TabTwoScreen() {

  const {
    hex,
    randomize
  } = useRandom();  

  return (
    <View style={{...styles.titleContainer, backgroundColor: hex}}>
      <View style={styles.container}>
        
        <CounterButton label={hex} onPress={() => randomize()}/>
 

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flex: 1
  },

  container:{
    flex: 1,
    justifyContent: "center",
  },


});