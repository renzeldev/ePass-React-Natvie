import {StyleSheet, Text, View, TextInput} from 'react-native';
import React, {useState} from 'react';
import * as Dimension from '../shared/dimension';
import {colors} from '../shared/color';

const VerifycationBox = (props) => {
  const [code, setCode] = useState('');

  const handleCodeChange = value => {
    // setCode(value);
    props.handleOpt(value);
  };
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        // value={code[0]}
        onChangeText={value => handleCodeChange(value)}
        maxLength={1}
        keyboardType="numeric"
        autoFocus={true}
      />
      <TextInput
        style={styles.input}
        // value={code[1]}
        onChangeText={value => handleCodeChange(value)}
        maxLength={1}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        // value={code[2]}
        onChangeText={value => handleCodeChange(value)}
        maxLength={1}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        // value={code[3]}
        onChangeText={value => handleCodeChange(value)}
        maxLength={1}
        keyboardType="numeric"
      />
      {/* <TextInput
        style={styles.input}
        value={code[4]}
        onChangeText={value => handleCodeChange(value)}
        maxLength={1}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        value={code[5]}
        onChangeText={value => handleCodeChange(value)}
        maxLength={1}
        keyboardType="numeric"
      /> */}
    </View>
  );
};

export default VerifycationBox;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  
  input: {
    width: 65 * Dimension.ew,
    height: 78 * Dimension.eh,
    borderWidth: 1,
    borderColor: colors.gray,
    backgroundColor: colors.white,
    borderRadius: 7 * Dimension.eh,
    fontSize: 16,
    display: 'flex',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
