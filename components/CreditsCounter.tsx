import * as Haptics from 'expo-haptics';
import { useState } from 'react';
import {
  View,
  TouchableHighlight,
  StyleSheet,
  Text,
  Image,
} from 'react-native';

const CreditsCounter = () => {
  const [credits, setCredits] = useState(0);

  const handleDecrementPress = () => {
    // TODO: Make haptics conditional, based on device platform
    // Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    setCredits((previousCredits) => previousCredits - 1);
  };

  const handleIncrementPress = () => {
    // Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    setCredits((previousCredits) => previousCredits + 1);
  };

  return (
    <View style={styles.counterContainer}>
      <Image
        source={require('../assets/images/NSG_CREDIT_HALFTRANSPARENT.png')}
        style={styles.creditsIcon}
      />
      <Text style={styles.creditsText}>{credits}</Text>
      <TouchableHighlight
        onPress={handleIncrementPress}
        style={styles.incrementButton}
        underlayColor="rgba(255, 255, 255, 0.2)"
      >
        <View style={[styles.touchableArea, styles.plusIcon]}>
          <Text style={styles.creditsText}>+</Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight
        onPress={handleDecrementPress}
        style={styles.decrementButton}
        underlayColor="rgba(255, 255, 255, 0.2)"
      >
        <View style={[styles.touchableArea, styles.minusIcon]}>
          <Text style={styles.creditsText}>-</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  counterContainer: {
    position: 'relative',
    width: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  touchableArea: {
    flex: 1,
  },
  incrementButton: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    width: '50%',
  },
  decrementButton: {
    position: 'absolute',
    right: 0,
    top: 0,
    bottom: 0,
    width: '50%',
  },
  plusIcon: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '80%',
  },
  minusIcon: {
    position: 'relative',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: '80%',
  },
  creditsIcon: { position: 'absolute', width: 100, height: 100 },
  creditsText: {
    position: 'absolute',
    fontSize: 48,
    fontWeight: 'bold',
    textShadowColor: '#000000',
    textShadowRadius: 5,
    color: '#FFFFFF',
  },
});

export default CreditsCounter;
