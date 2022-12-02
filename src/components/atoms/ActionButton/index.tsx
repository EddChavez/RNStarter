import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Text } from 'react-native-svg';

interface Props {
  text?: string;
  onPress: () => void;
  loading?: boolean;
  icon?: JSX.Element;
}

const ActionButton: React.FC<Props> = ({ text, onPress, loading, icon }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text>{text}</Text>
      {icon}
    </TouchableOpacity>
  );
};

export default ActionButton;
