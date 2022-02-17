import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function TarefasSingle(props){
	return(
		<View style={styles.tarefaSingle}>
			<View style={{flex: 1, width: '100%'}}>
				<Text>{props.tarefa}</Text> 
			</View>
			<View style={{alignItems: 'flex-end', flex: 1}}>
				<TouchableOpacity onPress={props.pressDo}>
					<AntDesign name="minuscircle" size={24} color="red" />
				</TouchableOpacity>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	tarefaSingle: {
		width: '100%',
		marginTop: 30,
		borderBottomWidth: 1,
		borderBottomColor: 'black',
		flexDirection: 'row',
		paddingBottom: 10,
		paddingHorizontal: 10
	}

});
