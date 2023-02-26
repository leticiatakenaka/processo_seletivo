let string = "leticia_takenaka";
let final = [];

for (i = 1; i <= string.length; i++) {
  final.push(string.charAt(string.length - i));
}
console.log(final.toString());
