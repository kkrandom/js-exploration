'use strict'

function search(searchString, profiles) {
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

	const result = []
	profiles.forEach((profile) => {
		if (eval(parseSearchString(searchString))) {
			result.push(profile)
		}
	})
	return result
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
;(function main() {
	// let searchString = 'NOT(java AND js) OR backend'
	let searchString = 'java AND aws'

	const results = search(searchString, profiles)
	console.log(presentResults(results))
})()
