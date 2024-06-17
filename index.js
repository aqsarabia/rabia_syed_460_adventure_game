import chalk from "chalk";
import inquirer from "inquirer";
class Player {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    DecFuel() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
    IncFuel() {
        this.fuel = 100;
    }
}
let playerName = await inquirer.prompt([
    {
        type: "input",
        name: "name",
        message: "Enter your name ",
    },
]);
class Oppenent {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    DecFuel() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
}
let OponentName = await inquirer.prompt([
    {
        type: "list",
        name: "name",
        message: "Select your Opponent ",
        choices: ["Skeleton", "Zombe", "Tiger"],
    },
]);
let p1 = new Player(playerName.name);
let o1 = new Oppenent(OponentName.name);
do {
    if (OponentName.name == "Skeleton") {
        let ask = await inquirer.prompt([
            {
                type: "list",
                name: "name",
                message: "Select  ",
                choices: ["Attack", "Heal", "Exit Game"],
            },
        ]);
        if (ask.name == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.DecFuel();
                console.log(chalk.bold.red(p1.fuel));
                console.log(chalk.bold.green(o1.fuel));
                if (p1.fuel <= 0) {
                    console.log(chalk.red.bold.italic("You loose better luck next time"));
                    break;
                }
            }
            if (num <= 0) {
                o1.DecFuel();
                console.log(chalk.bold.green(o1.fuel));
                console.log(chalk.bold.red(p1.fuel));
                if (o1.fuel <= 0) {
                    console.log(chalk.red.bold.italic("You Win"));
                    break;
                }
            }
        }
        if (ask.name == "Heal") {
            p1.IncFuel();
            console.log(chalk.red.bold.italic("Your Heal is 100%"));
        }
        if (ask.name == "Exit Game") {
            console.log(chalk.red.bold.italic("You loose better luck next time"));
            process.exit();
        }
    }
    if (OponentName.name == "Zombe") {
        let ask = await inquirer.prompt([
            {
                type: "list",
                name: "name",
                message: "Select  ",
                choices: ["Attack", "Heal", "Exit Game"],
            },
        ]);
        if (ask.name == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.DecFuel();
                console.log(chalk.bold.red(p1.fuel));
                console.log(chalk.bold.green(o1.fuel));
                if (p1.fuel <= 0) {
                    console.log(chalk.red.bold.italic("You loose better luck next time"));
                    break;
                }
            }
            if (num <= 0) {
                o1.DecFuel();
                console.log(chalk.bold.green(o1.fuel));
                console.log(chalk.bold.red(p1.fuel));
                if (o1.fuel <= 0) {
                    console.log(chalk.red.bold.italic("You Win"));
                    break;
                }
            }
        }
        if (ask.name == "Heal") {
            p1.IncFuel();
            console.log(chalk.red.bold.italic("Your Heal is 100%"));
        }
        if (ask.name == "Exit Game") {
            console.log(chalk.red.bold.italic("You loose better luck next time"));
            process.exit();
        }
    }
    if (OponentName.name == "Tiger") {
        let ask = await inquirer.prompt([
            {
                type: "list",
                name: "name",
                message: "Select  ",
                choices: ["Attack", "Heal", "Exit Game"],
            },
        ]);
        if (ask.name == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.DecFuel();
                console.log(chalk.bold.red(p1.fuel));
                console.log(chalk.bold.green(o1.fuel));
                if (p1.fuel <= 0) {
                    console.log(chalk.red.bold.italic("You loose better luck next time"));
                    break;
                }
            }
            if (num <= 0) {
                o1.DecFuel();
                console.log(chalk.bold.green(o1.fuel));
                console.log(chalk.bold.red(p1.fuel));
                if (o1.fuel <= 0) {
                    console.log(chalk.red.bold.italic("You Win"));
                    break;
                }
            }
        }
        if (ask.name == "Heal") {
            p1.IncFuel();
            console.log(chalk.red.bold.italic("Your Heal is 100%"));
        }
        if (ask.name == "Exit Game") {
            console.log(chalk.red.bold.italic("You loose better luck next time"));
            process.exit();
        }
    }
} while (true);
