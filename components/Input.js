import { View, Text, StyleSheet, TextInput } from 'react-native';
import React from 'react';

import colors from '../constants/colors';
const Input = (props) => {
  const onChangeText = (text) => {
    props.onInputChanged(props.id, text);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{props.label}</Text>
      <View style={styles.inputcontainer}>
        {props.icon && (
          <props.iconPack
            name={props.icon}
            size={props.iconSize || 15}
            style={styles.icon}
          />
        )}

        <TextInput
          style={styles.input}
          selectionColor={colors.lightgrey}
          onChangeText={onChangeText}
        />
      </View>
      {props.errorText && (
        <View style={styles.errormessageContainer}>
          <Text style={styles.errorText}>{props.errorText}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  label: {
    marginVertical: 8,
    fontFamily: 'bold',
    letterSpacing: 0.3,
    color: colors.textcolor,
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
  input: {
    color: colors.textcolor,
    flex: 1,
    fontFamily: 'regular',
    letterSpacing: 0.3,
    paddingTop: 0,
  },
  errormessageContainer: {
    marginVertical: 10,
  },
  errorText: {
    color: 'red',
    fontSize: 13,
    fontFamily: 'regular',
    letterSpacing: 0.3,
  },
});
export default Input;
