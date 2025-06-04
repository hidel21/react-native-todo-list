import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function TaskItem({ task }) {
  return (
    <View style={styles.item}>
      <Text>{task}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#eee',
    borderRadius: 5,
  },
});