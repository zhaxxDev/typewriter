let sentence = "hello there from lighthouse labs";

// for (const char of sentence) {
//   setTimeout(() => {}, 1000)
//   process.stdout.write(char);
// }

sentence += "\n";

for (let i = 0; i < sentence.length; i++) {
  setTimeout(() => {
    process.stdout.write(sentence[i]);
  }, 100 + i * 100);
} 