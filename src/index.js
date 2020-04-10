import { useColorScheme, Platform, useState, Appearance, useEffect, DeviceEventEmitter } from 'react-native'

export const useDarkMode = () => {
	const colorScheme = useColorScheme()
	const [colorSchemeAndroid, setColorSchemeAndroid] = useState(Appearance.getColorScheme())

	useEffect(() => {
		const currentModeListener = DeviceEventEmitter.addListener('currentModeChanged', (mode) => {
			setColorSchemeAndroid(mode)
		})
		return currentModeListener.remove()
	}, [])

	return Platform.OS === 'ios' ? colorScheme : colorSchemeAndroid
}
