import {
	Archivo_400Regular,
	Archivo_500Medium,
	Archivo_600SemiBold
} from '@expo-google-fonts/archivo'
import { Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter'
import * as Font from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'

import { useCallback, useEffect, useState } from 'react'
import { StatusBar, Text, View } from 'react-native'

SplashScreen.preventAutoHideAsync()

export default function App() {
	const [appIsReady, setAppIsReady] = useState(false)

	useEffect(() => {
		async function prepare() {
			try {
				await Font.loadAsync({
					Inter_400Regular,
					Inter_500Medium,
					Archivo_400Regular,
					Archivo_500Medium,
					Archivo_600SemiBold
				})
				await new Promise(resolve => setTimeout(resolve, 500))
			} catch (e) {
				console.warn(e)
			} finally {
				setAppIsReady(true)
			}
		}

		prepare()
	}, [])

	const onLayoutRootView = useCallback(async () => {
		if (appIsReady) {
			await SplashScreen.hideAsync()
		}
	}, [appIsReady])

	if (!appIsReady) {
		return null
	}

	return (
		<View
			onLayout={onLayoutRootView}
			className="flex-1 items-center justify-center bg-white"
		>
			<Text className=" font-primary_500">
				Open up App.tsx to start working on your app!
			</Text>
			<StatusBar
				barStyle="dark-content"
				backgroundColor="transparent"
				translucent
			/>
		</View>
	)
}
