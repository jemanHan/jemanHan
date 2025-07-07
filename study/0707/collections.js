// Set는 중복을 제거함.
const set = new Set([1, 2, 2, 3, 4]);
set.add(5)
set.add(5)
set.delete(2)

console.log(set)
console.log("===========================")
//=================================================
const map = new Map();
map.set("name", "Lee");
map.set("age", "20");
map.get("name");
map.get("age");
console.log(map.get("name"))
console.log(map.get("age"))
console.log(map.size)
map.delete("age")
console.log(map)
console.log("===========================")
//=================================================
for (const val of set){
    console.log(val)
}
console.log("===========================")
for (const [key, val] of map){
    console.log(key,val)
}