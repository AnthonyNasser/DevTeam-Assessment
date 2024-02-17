import FontAwesome from "@expo/vector-icons/FontAwesome"
import { DarkTheme, DefaultTheme, ThemeProvider } from "@react-navigation/native"
import { useFonts } from "expo-font"
import { Stack } from "expo-router"
import * as SplashScreen from "expo-splash-screen"
import { useEffect, useState } from "react"

import { useColorScheme } from "@/hooks/useColorScheme"
import { RootStoreProvider } from "@/providers/context"
import { RootStore, setupRootStore } from "@/providers/root-store"

export { ErrorBoundary } from "expo-router"

export const unstable_settings = {
	initialRouteName: "(tabs)",
}

SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
	const [loaded, error] = useFonts({
		SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
		...FontAwesome.font,
	})

	useEffect(() => {
		if (error) throw error
	}, [error])

	useEffect(() => {
		if (loaded) {
			SplashScreen.hideAsync()
		}
	}, [loaded])

	if (!loaded) {
		return null
	}

	return <RootLayoutNav />
}

function RootLayoutNav() {
	const colorScheme = useColorScheme()
	const [rootStore, setRootStore] = useState<RootStore>({} as RootStore)

	useEffect(() => {
		;(async () => {
			setRootStore(await setupRootStore())
		})()
	}, [])

	return (
		<RootStoreProvider value={rootStore}>
			<ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
				<Stack>
					<Stack.Screen name="(tabs)" options={{ headerShown: false }} />
					<Stack.Screen name="taskOneInfo" options={{ presentation: "modal" }} />
					<Stack.Screen name="taskTwoInfo" options={{ presentation: "modal" }} />
				</Stack>
			</ThemeProvider>
		</RootStoreProvider>
	)
}
