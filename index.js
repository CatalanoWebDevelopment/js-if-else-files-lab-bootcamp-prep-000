var name = "Joe"
var height = "74"

if (name === "Susan") {
  console.log("The correct name is entered.")
} else {
  console.log("We are looking for the name of Susan!")
  var name = "Susan"
}

if (name === "Susan") {
  console.log("We changed it!")
} else {
  console.log("Shit")
}

// Don't worry about this
module.exports = { name, height
}
