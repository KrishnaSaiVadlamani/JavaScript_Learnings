let re = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/

let result = re.exec('Pi day this year falls on 2023-01-11!')

let {year, month, day} = result.groups

// console.log(result.groups.year)
// console.log(result.groups.month)
// console.log(result.groups.day)

console.log(year)
console.log(month)
console.log(day)