const stdin = process.stdin;

stdin.setEncoding('utf8');
stdin.setRawMode(true);
const timer = () => {
  stdin.on('data', (key) => {
    if (key === 'b') {
      process.stdout.write('\x07');

    } else if (!Number.isNaN(Number(key))) {
      console.log(`setting timer for ${key} seconds later`);
      setTimeout(() => {
        process.stdout.write('\x07');
      }, 1000 * key);

    } else if (key === '\u0003') {
      process.exit();
    }
  });
}

timer();

