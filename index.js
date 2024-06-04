const cats = ["Milo", "Otis", "Garfield"]
function destructivelyAppendCat(name) { 
    cats.push("Ralph"),
    console.log("cats", name)
}
function destructivelyPrependCat(name) {
    cats.unshift("Bob")
    console.log("cats", name)

}
function destructivelyRemoveLastCat(name) {
    cats.pop("Garfield")
    console.log("cats", name)

}
function destructivelyRemoveFirstCat(name) {
    cats.shift("Milo")
    console.log("cats", name)

}
function appendCat(name) {
    const newCats = [...cats, name];
    return newCats;
  }
  function prependCat(name) {
    const newCats = ["Arnold", ...cats, name]
    newCats.splice(4)
    return newCats;

  }
  function removeLastCat(name) {
    const copyCats = cats.slice(0, -1)
      return copyCats
  }
  function removeFirstCat(name) {
    const copyCats = cats.slice(1)
    return copyCats
   
  }

