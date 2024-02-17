import { ScrollView, StyleSheet } from "react-native"

import { Text, View } from "@/components/Themed"
import { useStores } from "@/providers/context"

export default function TaskTwoScreen() {
	const rootStore = useStores()

	const getDuration = (departureDate: Date, arrivalDate: Date) => {
		// Hint: you might want to convert the dates to a specific format to calculate the duration
		// Importing date-fns or another library is allowed
	}

	return (
		<View style={{ backgroundColor: "white" }}>
			<ScrollView contentContainerStyle={styles.container}>
				<Text style={styles.title}>Task 2: Amplify and DataStore</Text>
				<Text style={styles.subtext}>
					Click on the info button on the top right corner to view the task details.
				</Text>
				<View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
				<View style={styles.subContainer}>
					<Text style={styles.boxText}>Step 5, Retrieved Flight Data:</Text>
					<Text style={{ fontWeight: "bold" }}>Booked flight details:</Text>
					<Text>Traveler First and Last Name: [______] </Text>
					<Text>Grand total price: [______] </Text>
					<Text>Departure IATA Code: [______]</Text>
					<Text>Departure Terminal: [______]</Text>
					<Text>Departure Time: [______]</Text>
					<Text>Arrival IATA Code: [______]</Text>
					<Text>Arrival Terminal: [______]</Text>
					<Text>Arrival Time: [______]</Text>
					<Text>Flight duration: [______]</Text>
				</View>
			</ScrollView>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "white",
		marginTop: 20,
		height: "100%",
	},
	subContainer: {
		alignItems: "flex-start",
		justifyContent: "center",
		marginBottom: 20,
		borderWidth: 1,
		borderColor: "black",
		padding: 10,
		width: "90%",
		borderRadius: 10,
	},
	title: {
		fontSize: 20,
		fontWeight: "bold",
	},
	subtext: {
		marginTop: 20,
		width: "80%",
	},
	boxText: {
		fontSize: 18,
		fontWeight: "bold",
		marginBottom: 10,
	},
	separator: {
		marginVertical: 30,
		height: 1,
		width: "80%",
	},
})
