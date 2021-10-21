import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { Navbar } from "./src/Navbar";
import { AddTodo } from "./src/AddTodo";
import { Todo } from "./src/Todo";

export default function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (title) => {
    setTodos((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        title,
      },
    ]);
  };

  const removeTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  // const newTodo = {
  //   id: Date.now().toString(),
  //   title: title,
  // };

  // setTodos(todos.concat([ newTodo ]))

  // setTodos((prewTodos) => {
  //   return [
  //     ...prevTodos,
  //     newTodo
  //	 ]
  // })

  return (
    <View>
      <Navbar title="Todo App!" />
      <View style={styles.container}>
        <AddTodo onSubmit={addTodo} />

        <FlatList
          data={todos}
          renderItem={({ item }) => <Todo todo={item} onRemove={removeTodo} />}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
});
