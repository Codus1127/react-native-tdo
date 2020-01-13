import React, {Component} from 'react';
import {StyleSheet, Text, Button, TouchableOpacity} from 'react-native'

class TodoItem extends Component {
    constructor(props) {
        super(props);
        
    }
    
    render() {
        const todoItem = this.props.todoItem
        console.log(this.props)
        return (
            <TouchableOpacity 
            style={styles.todoItem}
            onPress={()=> this.props.toggleDone()}
            >
            <Text style={(todoItem.done) ? {color: '#AAAAAA', fontSize: 30 } :{color: '#313131', fontSize: 30} }>
                {todoItem.item.title}
                {/* {this.props.todoItem.index} */}
            </Text>

            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    todoItem: {
        width: '100%',
        height: 40,
        borderBottomColor: '#DDD',
        borderBottomWidth: 1,
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "space-between",
        paddingLeft: 15
    }
})

export default TodoItem;