#!/usr/bin/env node

//==== Start Call Package ====
//const terminalImage = require('terminal-image');
//const got = require('got');
const CFonts = require("cfonts");
const boxen = require('boxen');
const chalk = require("chalk");
//const muda = require('ora');
//==== END Call Package ====

//==== Initiate Data and chalk ====

const data ={
    name: chalk.green("Richard Denys"),
    greetings: chalk.green("Hello there!"),
    presentation: chalk.white.italic("I'm an friendly human who love stuff like : "),
    hobby: chalk.yellow("Game Design, Video Game, Books, Role Playing Game!"),
    plus: chalk.white.italic("If you want to know a bit more : "),
    github: chalk.cyan("https://github.com/") + chalk.magenta("Richyden"),
    npm: chalk.cyan("https://npmjs.com/") + chalk.magenta("~richyden"),
    npx: chalk.red("npx") + " " + chalk.white("richy"),
    linkedin: chalk.cyan("https://linkedin.com/in/") + chalk.magenta("linkedin.com/in/richard-denys-b78960185"),
    tips: chalk.gray("Press ") + chalk.cyan("ctrl + click ") + chalk.gray("on the link to open them in your browser!"),
    work: chalk.yellow("I'm a web dev junior in formation and I ") + chalk.red(chalk.bgMagentaBright("LUV")) + chalk.yellow(" it!"),

    labelNpm: chalk.white.bold("        npm:"),
    labelGitHub: chalk.white.bold("     GitHub:"),
    labelLinkedIn: chalk.white.bold("   LinkedIn:"),
    labelCard: chalk.white.bold("   Card:"),
    labelTips: chalk.white.bold("   Tips:"),
    labelWork: chalk.white.bold("   Work:"),
};

//==== MAIN ====

const NEWLINE = "\n";
const EMPTYLINE = "";

CFonts.say(`Richard Denys`, {
    font: 'shade',
    align: 'center',
    colors: ['#422c6d', 'black']
});

console.log(
    chalk.black(
        boxen(
            [
                `${data.greetings}`,
                EMPTYLINE,
                `${data.presentation}`,
                `${data.hobby}`,
                EMPTYLINE,
                `${data.labelWork} ${data.work}`,
                EMPTYLINE,
                `${data.plus}`,
                `${data.labelNpm} ${data.npm}`,
                `${data.labelGitHub} ${data.github}`,
                `${data.labelLinkedIn} ${data.linkedin}`,
                EMPTYLINE,
                `${data.labelCard} ${data.npx}`,
            ].join(NEWLINE),
            {
                padding: 1,
                margin: 1,
                borderStyle: "double",
            }
        ),
    ),

    `${data.labelTips} ${data.tips}`,
);