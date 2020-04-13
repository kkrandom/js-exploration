;(function forEvery() {
	let flagMaterialClass = true
	let flagVolume = true
	let flagMaxDimension = true
	let flagVolumeVsBoundingBox = true
	let flagMaterial = true

	let flagMinimumWallThickness = true
	let flagManufacturingMethod = false
	let flagIsAssembly = true

	const positives = [
		flagMaterialClass,
		flagVolume,
		flagMaxDimension,
		flagVolumeVsBoundingBox,
		flagMaterial,
	]

	const negatives = [
		flagMaterialClass,
		flagVolume,
		flagMaxDimension,
		flagVolumeVsBoundingBox,
		flagMaterial,
		flagMinimumWallThickness,
		flagManufacturingMethod,
		flagIsAssembly,
	]

	// if (
	// 	[
	// 		flagMaterialClass,
	// 		flagVolume,
	// 		flagMaxDimension,
	// 		flagVolumeVsBoundingBox,
	// 		flagMaterial,
	// 	].every((flag) => flag === true)
	// )
	// 	return 1

	const evalPositives = positives.every((flag) => flag === true)
	const evalNegatives = negatives.some((flag) => flag === false)

	console.log(`Positives: ${evalPositives}`)
	console.log(`Negatives: ${evalNegatives}`)
})()
