import React from 'react';
import { Text, ViewStyle } from 'react-native';

interface ErrorMessageProps {
  lockout: boolean;
  countdown: number;
  attempts: number;
  styles: {
    errorText: ViewStyle;
  };
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ lockout, countdown, attempts, styles }) => {
  if (lockout) {
    return <Text style={styles.errorText}>Locked. Please wait... ({countdown} seconds)</Text>;
  } else if (attempts < 3) {
    return <Text style={styles.errorText}>You have {attempts} attempts left</Text>;
  } else {
    return null;
  }
};

export default ErrorMessage;
