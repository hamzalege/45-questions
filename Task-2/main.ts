let personName = "Hamza Bhatti"

console.log("Lower case: " , personName.toLowerCase());
console.log("Upper case: " , personName.toUpperCase());

function toTitleCase(str: string): string {
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

console.log("Titlecase:", toTitleCase(personName));