import { ScrollView, StyleSheet } from "react-native"

import { Text, View } from "@/components/Themed"
import { useStores } from "@/providers/context"

export default function TaskOneScreen() {
	const rootStore = useStores()

	const getDuration = (departureDate: Date, arrivalDate: Date) => {
		// Hint: you might want to convert the dates to a specific format to calculate the duration
		// Importing date-fns or another library is allowed
	}

	return (
		<View style={{ backgroundColor: "white" }}>
			<ScrollView contentContainerStyle={styles.container}>
				<Text style={styles.title}>Task 1: Mini Flight Booking Engine</Text>
				<Text style={styles.subtext}>
					Click on the info button on the top right corner to view the task details.
				</Text>
				<View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
				{/* STEP 2 */}
				<View style={styles.subContainer}>
					<Text style={styles.boxText}>Step 2, Search Flights Data:</Text>
					<Text style={{ fontWeight: "bold" }}>Flight 1 details:</Text>
					<Text>Grand total price: [______] </Text>
					<Text>Departure IATA Code: [______]</Text>
					<Text>Departure Terminal: [______]</Text>
					<Text>Departure Time: [______]</Text>
					<Text>Arrival IATA Code: [______]</Text>
					<Text>Arrival Terminal: [______]</Text>
					<Text>Arrival Time: [______]</Text>
					<Text>Flight duration: [______]</Text>
					<Text style={{ fontWeight: "bold", marginTop: 10 }}>Flight 2 details:</Text>
					<Text>Grand total price: [______] </Text>
					<Text>Departure IATA Code: [______]</Text>
					<Text>Departure Terminal: [______]</Text>
					<Text>Departure Time: [______]</Text>
					<Text>Arrival IATA Code: [______]</Text>
					<Text>Arrival Terminal: [______]</Text>
					<Text>Arrival Time: [______]</Text>
					<Text>Flight duration: [______]</Text>
					<Text style={{ fontWeight: "bold", marginTop: 10 }}>Flight 3 details:</Text>
					<Text>Grand total price: [______] </Text>
					<Text>Departure IATA Code: [______]</Text>
					<Text>Departure Terminal: [______]</Text>
					<Text>Departure Time: [______]</Text>
					<Text>Arrival IATA Code: [______]</Text>
					<Text>Arrival Terminal: [______]</Text>
					<Text>Arrival Time: [______]</Text>
					<Text>Flight duration: [______]</Text>
				</View>
				{/* STEP 4 */}
				<View style={styles.subContainer}>
					<Text style={styles.boxText}>Step 4, Confirmed Flight Data</Text>
					<Text style={{ fontWeight: "bold" }}>Flight 1 details:</Text>
					<Text>Grand total price: [______] </Text>
					<Text>Departure IATA Code: [______]</Text>
					<Text>Departure Terminal: [______]</Text>
					<Text>Departure Time: [______]</Text>
					<Text>Arrival IATA Code: [______]</Text>
					<Text>Arrival Terminal: [______]</Text>
					<Text>Arrival Time: [______]</Text>
					<Text>Flight duration: [______]</Text>
					<Text style={{ fontWeight: "bold", marginTop: 10 }}>Flight 2 details:</Text>
					<Text>Grand total price: [______] </Text>
					<Text>Departure IATA Code: [______]</Text>
					<Text>Departure Terminal: [______]</Text>
					<Text>Departure Time: [______]</Text>
					<Text>Arrival IATA Code: [______]</Text>
					<Text>Arrival Terminal: [______]</Text>
					<Text>Arrival Time: [______]</Text>
					<Text>Flight duration: [______]</Text>
					<Text style={{ fontWeight: "bold", marginTop: 10 }}>Flight 3 details:</Text>
					<Text>Grand total price: [______] </Text>
					<Text>Departure IATA Code: [______]</Text>
					<Text>Departure Terminal: [______]</Text>
					<Text>Departure Time: [______]</Text>
					<Text>Arrival IATA Code: [______]</Text>
					<Text>Arrival Terminal: [______]</Text>
					<Text>Arrival Time: [______]</Text>
					<Text>Flight duration: [______]</Text>
				</View>
				{/* STEP 4 */}
				<View style={styles.subContainer}>
					<Text style={styles.boxText}>Step 6, Created Flight Order</Text>
					<Text style={{ fontWeight: "bold" }}>Flight Order details:</Text>
					<Text>Traveler first and last name: [______] </Text>
					<Text>Flight Order Id: [______]</Text>
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
		marginBottom: 100,
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
