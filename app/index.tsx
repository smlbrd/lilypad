import CreditsCounter from '@/components/CreditsCounter';
import { StyleSheet, View } from 'react-native';

export default function Index() {
  return (
    <View style={styles.homeContainer}>
      <View style={[styles.playerContainer, styles.farContainer]}>
        <CreditsCounter />
      </View>
      <View style={styles.playerContainer}>
        <CreditsCounter />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
  },
  playerContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  farContainer: {
    transform: [{ rotate: '180deg' }],
  },
});
