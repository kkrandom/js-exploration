'use strict'

// Enter you strings for camelCasing here, one string per line
const camelCaseMe = `
LUTTE CONTRE L'INCENDIE
LUTTE CONTRE L\`INCENDIE
LUTTE CONTRE L"INCENDIE
Come A Gain
Hans Dampf
`

/**
 * Takes a string input and returns the camelCase version of it.
 * @param {string} word - the word you want to camelCase
 */
function toCamelCase(word) {
	let wordNoSpecial = word.replace(/(\d|\'|\`|\")+/g, '')
	let words = wordNoSpecial.split(/(?:_|\W)+/)

	const wordsWithoutEmpty = words.filter((element) => element !== '')
	const wordsNew = wordsWithoutEmpty.map((element, index) => {
		const first = element[0]
		const firstLetter = index === 0 ? first.toLowerCase() : first.toUpperCase()
		const rest = element.slice(1)
		const restLower = rest.toLowerCase()
		return firstLetter + restLower
	})

	return wordsNew.join('')
}

function test() {
	console.log('*** TEST START ***')
	console.log(toCamelCase('Hans Dampf'))
	console.log(toCamelCase('Hans   Dampf'))
	console.log(toCamelCase('Hans_Dampf'))
	console.log(toCamelCase('Hans___Dampf'))
	console.log(toCamelCase('Hans_   _Dampf'))
	console.log(toCamelCase('Hans   0Dampf'))
	console.log(toCamelCase('Hans   123'))
	console.log(toCamelCase('Hans12   123'))
	console.log(toCamelCase('Ha12ns  d12mpF'))
	console.log(toCamelCase('  Ha12ns  d12mpF'))
	console.log(toCamelCase('  12  d12mpF'))
	console.log(toCamelCase('  12  12mpF'))
	console.log(toCamelCase('Hans_   _Dampf    Hans_   _Dampf'))
	console.log(toCamelCase('hansDampf'))
	console.log('*** TEST END *****')
	// console.log('\n')
}
// test()

;(function main() {
	const arr = camelCaseMe.split(/\n/)
	arr.forEach((element) => {
		console.log(toCamelCase(element))
	})
})()
