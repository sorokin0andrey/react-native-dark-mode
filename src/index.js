import { useState, useEffect } from 'react'
import { useColorScheme, Platform, Appearance, DeviceEventEmitter } from 'react-native'

export const useDarkMode = () => {
	const colorScheme = useColorScheme()
	const [colorSchemeAndroid, setColorSchemeAndroid] = useState(Appearance.getColorScheme())

	useEffect(() => {
		if (Platform.OS === 'android') {
			const currentModeListener = DeviceEventEmitter.addListener('currentModeChanged', (mode) => {
				setColorSchemeAndroid(mode)
			})
			return () => currentModeListener.remove()
		}
	}, [])

	return Platform.OS === 'ios' ? colorScheme : colorSchemeAndroid
}
