import React, { Component } from "react";
import { Text, TouchableOpacity } from "react-native";

interface Props {
    navigation: any,
  }
  

export default class HomeScreen extends React.Component<Props,{}> {
    constructor(props: any) {
        super(props);
        this.state = {
            name: ""
        }
    }

    componentDidMount() {
        // alert("a")
    }


    render() {
        return (
            <TouchableOpacity onPress={() => this.props.navigation.navigate("Details")}>
                <Text>Home</Text>
            </TouchableOpacity>
        )
    }
}