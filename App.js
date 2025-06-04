import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';
import TaskItem from './TaskItem';

export default function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleAddTask = () => {
    if (task.trim() === '') return;
    setTasks([...tasks, { id: Date.now().toString(), text: task }]);
    setTask('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>📝 To-do List</Text>
      <TextInput
        style={styles.input}
        placeholder="Nueva tarea..."
        value={task}
        onChangeText={setTask}
      />
      <Button title="Agregar" onPress={handleAddTask} />
      <FlatList
        data={tasks}
        renderItem={({ item }) => <TaskItem task={item.text} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, marginTop: 40 },
  title: { fontSize: 24, marginBottom: 10 },
  input: { borderWidth: 1, padding: 8, marginBottom: 10 },
});