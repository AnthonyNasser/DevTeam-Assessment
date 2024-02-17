import { StatusBar } from "expo-status-bar"
import { Platform, StyleSheet } from "react-native"

import { Text, View } from "@/components/Themed"
import { CheckBox } from "react-native-btr"
import { useState } from "react"

export default function TaskTwoInfo() {
	const [checkedItems, setCheckedItems] = useState<boolean[]>([false, false, false, false, false])

	const toggleCheckbox = (index: number) => {
		const updatedCheckedItems = [...checkedItems]
		updatedCheckedItems[index] = !updatedCheckedItems[index]
		setCheckedItems(updatedCheckedItems)
	}

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Task Two Todos</Text>
			<Text style={{ ...styles.subtext, fontSize: 14, textAlign: "center", marginTop: 20 }}>
				The following tasks are to be completed using AWS Amplify and DataStore. These tasks are designed to assess
				your ability to manage state and synchronize data with a cloud backend.
			</Text>
			<View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

			{[
				"Step 1. Initialize AWS Amplify and configure DataStore.",
				"Step 2. Use the Amplify CLI to define a data model for your application.",
				"Step 3. Store confirmed flight data in DataStore using the rootStore.",
				"Step 4. Create a Lambda function and an API Gateway endpoint to retrieve flight data from DataStore.",
				"Step 5. Implement the Task 2 screen to display data fetched from DataStore.",
				"Step 6. Grant AWS Amplify Viewer IAM access to mail@anthonynasser.com for backend verification.",
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
