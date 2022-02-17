import {StyleSheet, Text, TouchableOpacity} from 'react-native';


function AdicionarTarefa({pressDo}){
return(	
	<TouchableOpacity style={styles.botao} onPress={pressDo}><Text style={styles.text}>+</Text></TouchableOpacity>
);
}

const styles = StyleSheet.create({

	botao:{
		backgroundColor: 'steelblue',
		padding: 10,
		paddingHorizontal: 16,
		borderRadius: 50,
		position: 'absolute',
		bottom: 0,
		right: 30

	},
	text:{
		color: 'white',
		fontSize: 20
	}
});

export default AdicionarTarefa;
