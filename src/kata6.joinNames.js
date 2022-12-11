const joinNames = (namesObj) => {
   return namesObj.map(object => object.name).join(", ").replace(/,(?=[^,]+$)/, " &");

};

module.exports = joinNames;

// first I used .map because I wanted to return the name for each object in the array
// result [Function map]
// then in .map() I went one layer down into the object as the objects are in an array
// once into the object I wanted to get into the name element so used object.name
// result ["Bart", "Lisa", Maggie]
// now the names are in a new array I used .join (", ") to turn to a string with commas
// result "Bart, Lisa, Maggie"
// then to change the last comma to an ampersand I used a regex and .replace function
// result "Bart, Maggie & Lisa"
