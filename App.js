import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ScrollView, LogBox, View } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts, Lato_400Regular, Lato_700Bold } from '@expo-google-fonts/lato';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useState, useEffect} from 'react';

import Bg from './components/Bg';
import TarefaSingle from './components/TarefaSingle';
import MeuModal from './components/MeuModal';
import AdicionarTarefa from './components/AdicionarTarefa';
	
export default function App() {
	const image = require("./resources/bg.jpg");
	LogBox.ignoreAllLogs(true)	
	const [tarefas, setTarefas] = useState([
	]);

	const [tarefaTexto, setTarefaTexto] = useState("");

	const [modal, setModal] = useState(false);
	
	useEffect(() => {
		(async () => {
			try{
				const lista_tarefas = await AsyncStorage.getItem("tarefas");
				if(lista_tarefas != null)
					setTarefas(JSON.parse(lista_tarefas));
			}catch(error){
				alert("Erro ao puxar infos");
				console.log(error);
			}
		})();
	}, [])

	let last_id = 0;

	function deletarTarefa(id){
		let newTarefas = tarefas.filter((tarefa) => {
			return tarefa.id != id;
		});

		setTarefas(newTarefas);
		(async () => {
			try{
				await AsyncStorage.setItem('tarefas', JSON.stringify(newTarefas));
			}catch(error){}
		})();
	}
	function adicionarTarefa(){
		let newTarefa = {
			id: last_id + 1,
			tarefa: tarefaTexto
		}
		setTarefas([...tarefas, newTarefa]);
		setModal(false);
		console.log("------");

		(async() => {
		try{
			await AsyncStorage.setItem('tarefas', JSON.stringify([...tarefas, newTarefa]));

		}catch(error){
			console.log(error);
			alert("Erro ao salvar!");
		}
		}
		)()

	}

	let [fontsLoaded] = useFonts({
		Lato_400Regular,
		Lato_700Bold
	});	
	if(!fontsLoaded){
		return <AppLoading/>
	}
	return (
		<View styles={{height: '100%'}}>
			<Bg text="Lista de Tarefas" image={image}/>
			<ScrollView style={{height: '84%'}}>
		    <StatusBar style="auto" />
				<MeuModal setTexto={setTarefaTexto} modal={modal} pressDo={() => {adicionarTarefa()}}/>
			{
				tarefas.map(function(val){
					last_id = val.id > last_id ? val.id : last_id;
					return(
						<TarefaSingle tarefa={val.tarefa} pressDo={() => deletarTarefa(val.id)}/>
					);
				})
			}
	    	</ScrollView>
			<AdicionarTarefa pressDo={() => {setModal(true)}}/>
			
		</View>
  );
}

const styles = StyleSheet.create({
	
});
