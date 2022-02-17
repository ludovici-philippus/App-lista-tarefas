import {Text, StyleSheet, View, ImageBackground} from 'react-native';
import Constants from 'expo-constants';

function Bg(props){


	return(
		<ImageBackground source={props.image} style={styles.bg}>
			<View style={styles.overlay}></View>
			<Text style={styles.text}>{props.text}</Text>
		</ImageBackground>
	);
}

const styles = StyleSheet.create({
	bg: {
		width: '100%',
		resizeMode: 'cover',
		height: 100,
		paddingTop: Constants.statusBarHeight,
		position: 'relative'
	},
	overlay: {
		width: '100%',
		height: 100,
		paddingTop: Constants.statusBarHeight,
		backgroundColor: 'rgba(0, 0, 0, 0.6)',
		position: 'absolute'
	},
	text: {
		color: 'white',
		fontSize: 28,
		textAlign: 'center',
		marginTop: 10,
		fontFamily: "Lato_700Bold"
	}
})

export default Bg;
