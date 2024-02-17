import React from "react"
import FontAwesome from "@expo/vector-icons/FontAwesome"
import { Link, Tabs } from "expo-router"
import { Pressable } from "react-native"

import Colors from "@/constants/Colors"
import { useColorScheme } from "@/hooks/useColorScheme"
import { useClientOnlyValue } from "@/hooks/useClientOnlyValue"

function TabBarIcon(props: { name: React.ComponentProps<typeof FontAwesome>["name"]; color: string }) {
	return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />
}

export default function TabLayout() {
	const colorScheme = useColorScheme()

	function InfoButton(props: { href: `${string}:${string}` | any }) {
		return (
			<Link href={props.href} asChild>
				<Pressable>
					{({ pressed }) => (
						<FontAwesome
							name="info-circle"
							size={25}
							color={Colors[colorScheme ?? "dark"].text}
							style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
						/>
					)}
				</Pressable>
			</Link>
		)
	}

	return (
		<Tabs
			screenOptions={{
				tabBarActiveTintColor: Colors[colorScheme ?? "dark"].tint,
				headerShown: useClientOnlyValue(false, true),
			}}
		>
			<Tabs.Screen
				name="index"
				options={{
					title: "Task 1",
					tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
					headerRight: () => <InfoButton href="/taskOneInfo" />,
				}}
			/>
			<Tabs.Screen
				name="two"
				options={{
					title: "Task 2",
					tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
					headerRight: () => <InfoButton href="/taskTwoInfo" />,
				}}
			/>
		</Tabs>
	)
}
