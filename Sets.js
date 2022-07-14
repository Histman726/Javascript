//Son arrays sin valores repetidos
const set=new Set([true,false,1,53,[],{}])

console.log(set)
console.log(set.size)

const set2=new Set()

set2.add(1)
set2.add(1)
set2.add(1)
set2.add(1)
set2.add(1)
console.log(set2.size)

for (const i of set) {
    console.log(i)
}

const arr=Array.from(set)
console.log(arr[0])

set.delete(true)
console.log(set)

console.log(set.has(false))

set.clear()
console.log(set)