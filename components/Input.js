import { View, Text, StyleSheet, TextInput } from 'react-native';
import React from 'react';

import colors from '../constants/colors';
const Input = (props) => {
  return (
    <View style={styles.container}>
      <Text>{props.label}</Text>
      <View style={styles.inputcontainer}>
        {props.icon && (
          <props.iconPack
            name={props.icon}
            size={props.iconSize || 15}
            style={styles.icon}
          />
        )}

        <TextInput selectionColor={colors.lightgrey} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  inputcontainer: {
    backgroundColor: colors.nearlywhite,
    width: '100%',
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 2,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 10,
    color: colors.grey,
  },
});
export default Input;
