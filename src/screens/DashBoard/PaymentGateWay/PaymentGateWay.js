
import React, { Component } from "react";
import { StyleSheet, View, Switch, Text } from "react-native";
import { CreditCardInput, LiteCreditCardInput } from "react-native-credit-card-input";
import { TouchableOpacity } from "react-native-gesture-handler";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";

const s = StyleSheet.create({
  switch: {
    alignSelf: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    marginTop: 60,
  },
  label: {
    color: "black",
    fontSize: 12,
  },
  input: {
    fontSize: 16,
    color: "black",
  },
  btnStyle: {
    alignSelf: 'center',
    marginTop: responsiveHeight(4),
    paddingHorizontal: responsiveWidth(2),
    backgroundColor: 'lightcoral',
    paddingVertical: responsiveHeight(1)
  }
});


export default class Payment extends Component {

  state = {
     useLiteCreditCardInput: false,
     onSubmit:false
       
  };

  _onChange = (formData) => { 
    if(formData.valid){
        this.setState({onSubmit:true})
    }
    console.log("form data validation",formData.valid)
    console.log("updated data is",JSON.stringify(formData.valid, null, " ")) 
  };
  _onFocus = (field) => console.log("focusing", field);
  _setUseLiteCreditCardInput = (useLiteCreditCardInput) => this.setState({ useLiteCreditCardInput });

  render() {
      const onSubmitMethod = (formData) => {
        if(this.state.onSubmit){
          alert("Order Received"),
            this.props.navigation.navigate("Dashboard")
        }
        else{
          alert("Fill the Valid Card Details")
        }
     
    }

    return (
      <View style={s.container}>
        <Switch
          style={s.switch}
          onValueChange={this._setUseLiteCreditCardInput}
          value={this.state.useLiteCreditCardInput} />

        { this.state.useLiteCreditCardInput ?
          (
            <LiteCreditCardInput
              autoFocus
              inputStyle={s.input}

              validColor={"black"}
              invalidColor={"red"}
              placeholderColor={"darkgray"}

              onFocus={this._onFocus}
              onChange={this._onChange} />
          ) : (
            <CreditCardInput
              autoFocus
              requiresName
              requiresCVC
              //requiresPostalCode

              labelStyle={s.label}
              inputStyle={s.input}

              validColor={"black"}
              invalidColor={"red"}
              placeholderColor={"darkgray"}

              onFocus={this._onFocus}
              onChange={this._onChange}
            />
          )
        }

        <TouchableOpacity style={s.btnStyle}
          onPress={() => onSubmitMethod()}

        >
          <Text style={{ fontSize: responsiveFontSize(2), color: 'white', fontWeight: 'bold' }}>Submit</Text>
        </TouchableOpacity>

      </View>
    );
  }
}
