import { StatusBar } from "expo-status-bar"
import { Platform, StyleSheet } from "react-native"

import { Text, View } from "@/components/Themed"
import { CheckBox } from "react-native-btr"
import { useState } from "react"

export default function TaskOneInfo() {
	const [checkedItems, setCheckedItems] = useState<boolean[]>([false, false, false, false, false, false])

	const toggleCheckbox = (index: number) => {
		const updatedCheckedItems = [...checkedItems]
		updatedCheckedItems[index] = !updatedCheckedItems[index]
		setCheckedItems(updatedCheckedItems)
	}

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Task One Todos</Text>
			<Text style={{ ...styles.subtext, fontSize: 14, textAlign: "center", marginTop: 20 }}>
				The following tasks are to be completed in providers/root-store.tsx and are meant to assess your ability to
				control state management and API calls using MobX and Amadeus API.
			</Text>
			<View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

			{[
				"Step 1. Implement the queryAmadeusFlightsSearch action.",
				"Step 2. Display the desired data results in the Task 1 screen using the queried data. Use flights from the rootStore.",
				"Step 3. implement the queryAmadeusFlightOffersPrice action.",
				"Step 4. Display the desired data results in the Task 1 screen using the confirmed flights data. Using an Amadeus test key, this data should be the same as the flight search data.",
				"Step 5. Implement the queryAmadeusFlightCreateOrder action. Use the first flight from the confirmed flights array in rootStore.",
				"Step 6. Display the desired data results in the Task 1 screen using the selected flight data.",
			].map((item, index) => (
				<View key={index} style={styles.checkboxContainer}>
					<CheckBox checked={checkedItems[index]} onPress={() => toggleCheckbox(index)} />
					<Text style={{ ...styles.subtext, marginLeft: 20 }}>{item}</Text>
				</View>
			))}

			<StatusBar style={Platform.OS === "ios" ? "dark" : "auto"} />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	checkboxContainer: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		marginBottom: 20,
	},
	title: {
		fontSize: 20,
		fontWeight: "bold",
	},
	subtext: {
		fontSize: 16,
		fontWeight: "normal",
		width: 300,
	},
	separator: {
		marginVertical: 30,
		height: 1,
		width: "80%",
	},
})
