// Used for Amadeus duration formatting

export function formatDuration(duration: string) {
	// Ensure the input is a string and matches the expected format
	if (typeof duration !== "string" || !/^PT(?:\d+H)?(?:\d+M)?$/.test(duration)) {
		throw new Error("Invalid duration format")
	}

	// Extract hours and minutes using regular expressions
	const hoursMatch = duration.match(/(\d+)H/)
	const minutesMatch = duration.match(/(\d+)M/)

	const hours = hoursMatch ? hoursMatch[1] : "0"
	const minutes = minutesMatch ? minutesMatch[1] : "0"

	// Create the formatted string
	return `${hours} hrs ${minutes} mins`
}
