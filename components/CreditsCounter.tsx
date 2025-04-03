import * as Haptics from 'expo-haptics';
import { useState } from 'react';
import { View, TouchableHighlight, StyleSheet, Text } from 'react-native';

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
    <View style={styles.container}>
      <TouchableHighlight
        onPress={handleDecrementPress}
        style={styles.decrementButton}
        underlayColor="rgba(255, 255, 255, 0.2)"
      >
        <View style={styles.touchableArea} />
      </TouchableHighlight>
      <Text>Hello</Text>
      <TouchableHighlight
        onPress={handleIncrementPress}
        style={styles.incrementButton}
        underlayColor="rgba(255, 255, 255, 0.2)"
      >
        <View style={styles.touchableArea} />
      </TouchableHighlight>
      <Text style={styles.creditsText}>{credits}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    marginTop: 5,
  },
  touchableArea: {
    // touchableHighlight throws an error without a child to call their own
    flex: 1,
  },
  decrementButton: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    width: '50%',
  },
  incrementButton: {
    position: 'absolute',
    right: 0,
    top: 0,
    bottom: 0,
    width: '50%',
  },
  creditsText: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#FFFFFF',
    position: 'absolute',
  },
});

export default CreditsCounter;
