import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import style from './src/styles';
import Icon from 'react-native-vector-icons/Entypo';
import {nanoid} from 'nanoid';

const App = () => {
  const [value, setValue] = useState('');
  const [todo, setTodo] = useState([]);
  const handleSubmit = () => {
    if (value !== '') {
      todo.push(value);
    }

    setValue('');
  };

  const clearTodos = () => {
    setTodo([]);
  };

  const deleteTodo = (index) => {
    let todoItems = [...todo]
    todoItems.splice(index, 1)
    setTodo(todoItems)
  };
  return (
    <View style={style.constainer}>
      <TextInput
        placeholder="Your todos"
        style={style.todoContainer}
        value={value}
        onChangeText={value => setValue(value)}
      />
      <View style={{flexDirection: 'row', justifyContent: 'center'}}>
        <TouchableOpacity style={style.button} onPress={() => handleSubmit()}>
          <Text style={{color: '#ffffff', fontSize: 15}}>Add Todos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.button} onPress={() => clearTodos()}>
          <Text style={{color: '#ffffff', fontSize: 15}}>Clear All Todos</Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        {todo.map((item, index) => {
          return (
            <View key={index} style = {{flexDirection: 'row',
            backgroundColor: '#DFA00A',
            borderRadius: 5,
            marginBottom: 5,
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: 7,}}>
              <Text style={style.todoList}>{item}</Text>
              <Icon.Button
                name="circle-with-cross"
                size={18}
                backgroundColor="#DFA00A"
                onPress={() => deleteTodo(index)}
                style={{justifyContent: 'center', alignItems: 'center'}}
              />
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default App;
