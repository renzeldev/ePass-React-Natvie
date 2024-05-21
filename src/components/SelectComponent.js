import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { IndexPath, Layout, Select, SelectItem } from '@ui-kitten/components';

const SelectComponent = (props) => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  return (
    <Layout style={styles.container}>
      
      <Select 
        selectedIndex={selectedIndex}
        value={props.data[selectedIndex-1]}
        onSelect={index => {
        setSelectedIndex(index);
        props.clickItem(props.data[selectedIndex]);
      }}>
        {
          props.data.length > 0 && props.data.map((item, index) => {
            return (
              <SelectItem key={index} title={item}/>
            )
          })
        }
      </Select>
    </Layout>
  );
};

export default SelectComponent
const styles = StyleSheet.create({
  container: {
    // minHeight: 128,
  },
});