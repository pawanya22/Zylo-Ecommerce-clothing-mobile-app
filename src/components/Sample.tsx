import React, { useState, useEffect } from 'react';
import { View, Text, Alert, StyleSheet, TouchableOpacity } from 'react-native';
import PinInput from './PinInput';
import Keypad from './keypad';
import ErrorMessage from './ErrorMessage';
import ActionButton from './ActionButton';
import DeleteButton from './DeleteButton';
import { useNavigation } from '@react-navigation/native';
import ROUTES from '../constants/routes';

const Sample: React.FC = () => {
  const navigation = useNavigation();
  const [pin, setPin] = useState<string>('');
  const [attempts, setAttempts] = useState<number>(3);
  const [lockout, setLockout] = useState<boolean>(false);
  const [countdown, setCountdown] = useState<number>(60);

  const CORRECT_PIN = '1234';
  const lockoutDuration: number = 60; // Lockout duration in seconds

  useEffect(() => {
    let countdownInterval: NodeJS.Timeout | null = null;
    if (lockout && countdown > 0) {
      countdownInterval = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);
    }

    return () => {
      if (countdownInterval) {
        clearInterval(countdownInterval);
      }
    };
  }, [lockout, countdown]);

  const handlePinPress = (value: string): void => {
    if (pin.length < 4 && !lockout) {
      setPin(pin + value);
    }
  };

  const handleDeletePress = (): void => {
    if (pin.length > 0 && !lockout) {
      setPin(pin.slice(0, -1));
    }
  };

  const handleUnlockPress = (): void => {
    if (pin === CORRECT_PIN) {
      Alert.alert('Unlocked', 'Lock screen unlocked', [
        {
          text: 'OK',
          onPress: () => {
            navigation.navigate(ROUTES.HOMESCREEN);
            setPin('');
            setAttempts(3);
            setLockout(false);
            setCountdown(60); // reset countdown timer
          },
        },
      ]);
    } else {
      setPin('');
      setAttempts(attempts - 1);

      if (attempts === 1) {
        setLockout(true); // Activate lockout
        setTimeout(() => {
          setLockout(false); // Deactivate lockout after the specified duration
          setAttempts(3); // reset attempts
          setCountdown(60); // reset countdown timer
        }, lockoutDuration * 1000);
        Alert.alert(
          'Incorrect PIN',
          `Lock screen will be locked for ${lockoutDuration} seconds`,
          [
            {
              text: 'OK',
            },
          ]
        );
      } else {
        Alert.alert('Incorrect PIN', `You have ${attempts - 1} attempts left`);
      }
    }
  };

  const keypadData: string[] = [
    '1', '2', '3',
    '4', '5', '6',
    '7', '8', '9',
    '', // Empty item for layout
    '0', // '0' button added here
  ];

  const renderKeypadItem = ({ item }: { item: string }): JSX.Element => {
    if (item === '') {
      return <View style={styles.emptyKeypadButton} />;
    }

    return (
      <TouchableOpacity
        onPress={() => handlePinPress(item)}
        style={[styles.keypadButton, lockout ? styles.keypadButtonDisabled : null]}
        disabled={lockout}
      >
        <Text style={styles.keypadButtonText}>{item}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter Passcode</Text>
      <ErrorMessage lockout={lockout} countdown={countdown} attempts={attempts} styles={styles} />
      <PinInput pin={pin} styles={styles} />
      <Keypad keypadData={keypadData} handlePinPress={handlePinPress} lockout={lockout} styles={styles} />
      <ActionButton onPress={handleUnlockPress} text="Unlock" style={{ backgroundColor: 'red' }} />
      <DeleteButton onPress={handleDeletePress} />
    </View>
  );

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 60,
    marginTop: 80,
  },

  title :{
    fontSize: 30,
    color: '#5A7FD6',
    marginBottom: 20,
    fontFamily: 'roboto',
  },
  
  errorText:{
    color: '#E15646',
    marginBottom: 20,
    fontFamily: 'roboto',
  },

  pinContainer:{
    flexDirection : 'row' ,
    marginBottom: 20,
  },

  pinCircle:{
    width:20,
    height:20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#5A7FD6',
    marginRight:10, 
  },

  pinCircleFilled:{
    width:20,
    height:20,
    borderRadius: 10,
    backgroundColor :'#5A7FD6',
    marginRight:10,
  },

  keypadButton: {
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    backgroundColor: 'white',
    borderRadius: 40,
    borderWidth: 2,
    borderColor: '#5A7FD6',
    margineTop: 10,
  },

  keypadButtonDisabled:{
    backgroundColor: '#D3D3D3', 
    //backgroundColor: '', 
  },

  emptyKeypadButton: {
    width: 80,
    height: 80,
    margin: 10,
  },

  keypadButtonText: {
    fontSize:24,
    color:'#5A7FD6',
    alignItems:'center',
    fontFamily: 'roboto',
  },

  actionButtonsContainer:{
    flexDirection: 'row',
    justifyContent:'space-between' ,
    width: '100%',
    paddingHorizontal: 30,
  },

  actionButton:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    backgroundColor: 'white',
    borderRadius: 30,
  },

  deleteButton:{
    fontSize: 40,
    color : "#5A7FD6",
    fontFamily: 'roboto',
  },

  unlockButton:{
    fontSize: 40,
    color : "#5A7FD6",
    fontFamily: 'roboto',
  },

});

export default Sample;
