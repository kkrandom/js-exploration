'use strict'

function search(searchString, profiles) {
	// filter =

	const result = []
	profiles.forEach((profile) => {
		if (eval(parseSearchString(searchString))) {
			result.push(profile)
		}
	})
	// profiles.forEach((profile) => {
	// 	if (
	// 		!(profile.skills.includes('java') && profile.skills.includes('js')) ||
	// 		profile.skills.includes('backend')
	// 	) {
	// 		result.push(profile)
	// 	}
	// })
	return result
}

function parseSearchString(searchString) {
	//TODO: Replace through dictionary
	searchString = searchString.replace(/AND/g, '&&')
	searchString = searchString.replace(/OR/g, '||')
	searchString = searchString.replace(/NOT/g, '!')

	const re = /[a-z]+/g
	searchString = searchString.replace(re, (match) => {
		return `profile.skills.includes('${match}')`
	})

	return searchString
}

function presentResults(profiles) {
	let results = ''
	profiles.forEach((profile) => {
		results += profile.name + '\n'
	})
	return results
}

let profiles = [
	{
		name: 'Henry Hampsted',
		skills: ['java', 'aws', 'backend', 'amazon'],
	},
	{
		name: 'Susan Sunday',
		skills: ['fortran', 'aws', 'frontend'],
	},
	{
		name: 'Billy Boy',
		skills: ['java', 'diving'],
	},
	{
		name: 'Sharon Lee',
		skills: ['fortran', 'cobol', 'c++'],
	},
	{
		name: 'Guy Hawk',
		skills: ['java', 'aws', 'spring', 'bootstrap'],
	},
]

// Main

// let searchString = 'NOT(java AND js) OR backend'
let searchString = 'java'

const results = search(searchString, profiles)
console.log(presentResults(results))
