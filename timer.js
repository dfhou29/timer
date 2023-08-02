const timer = () => {
  let args = process.argv.slice(2).map(Number);
  if (!args) return;

  for (const arg of args) {
    if (!Number.isNaN(arg)) {
      if (arg >= 0) {
        setTimeout(() => {
          process.stdout.write('\x07');
          console.log(`Bell ringed after ${arg} second(s)`);
        }, (arg * 1000))
      }
    }
  }
}

timer();