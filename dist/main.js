import yargs from 'yargs/yargs';
import { hideBin } from 'yargs/helpers';
const argv = yargs(hideBin(process.argv))
    .option('f', {
    alias: 'file',
    demandOption: true,
    describe: 'x marks the spot',
    type: 'string'
}).parse();
/*
console.log(chalk.greenBright("Meow~!"));
console.log(chalk.green("Meow~!"));
console.log(chalk.dim.green("Meow~!"));
console.log(chalk.rgb(123, 45, 67).underline('Underlined reddish color'));
 */
//# sourceMappingURL=main.js.map