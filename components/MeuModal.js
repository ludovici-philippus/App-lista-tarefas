import {useState} from 'react';
import { Modal, StyleSheet, Text, View, Alert, TouchableHighlight, TextInput } from 'react-native';
function MeuModal({modal, pressDo, setTexto}){
	return(
		<Modal
			animationType="slide" 
			transparent={true} 
			visible={modal}
			onRequestClose={() => {
				Alert.alert("Modal has been closed.");
			}}
		>
			<View style={styles.centeredView}>
				<View style={styles.modalView}>
					<TextInput onChangeText={text => setTexto(text)} autoFocus={true}></TextInput>
					<TouchableHighlight 
						style={{...styles.openButton, backgroundColor:"#2196F3"}}
						onPress={pressDo}
					>
						<Text style={styles.textStyle}>Adicionar Tarefa</Text>
					</TouchableHighlight>
				</View>
			</View>
		</Modal>
	)
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  openButton: {
    borderRadius: 10,
    padding: 10,
    elevation: 2,
	marginTop: 10,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
})

export default MeuModal;
