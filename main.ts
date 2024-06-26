#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

let myBalance = 10000; // Dollar
let myPin = 2809;

console.log(chalk.grey("Welcome to the banking application"));

    let pinAnswer = await inquirer.prompt([
        {
            name: "pin",
            message: "Enter your pin",
            type: "number",
        },
    ]);

    if (pinAnswer.pin === myPin) {
        console.log(chalk.yellowBright("Correct pin code !!!"));

        let operationAns = await inquirer.prompt([
            {
                name: "operation",
                    message: "Please select an option",
                type: "list",
                choices: ["Withdraw", "Check Balance", "Fast Cash", "Exit"],
            },
        ]);

        if (operationAns.operation === "Withdraw") {
            let amount = await inquirer.prompt([
                {
                    name: "myAmount",
                    message: "Enter your Withdraw amount",
                    type: "number",
                },
            ]);

            if (myBalance >= amount.myAmount) {
                myBalance -= amount.myAmount;
                console.log(chalk.yellowBright(`Your remaining balance is: ${myBalance}`));
            } else {
                console.log(chalk.gray("Insufficient balance"));
            }
        } else if (operationAns.operation === "Check Balance") {
            console.log(chalk.magentaBright(`Your current balance is: ${myBalance}`));
        } else if (operationAns.operation === "Fast Cash") {
            let selectAmount = await inquirer.prompt([
                {
                    name: "Select",
                    message: "Please select an amount",
                    type: "rawlist",
                    choices: [500, 1000, 5000, 10000, 15000],
                },
            ]);

            if (myBalance >= selectAmount.Select) {
                myBalance -= selectAmount.Select;
                console.log(chalk.greenBright(`Your remaining balance is: ${myBalance}`));
            } else {
                console.log(chalk.gray("Insufficient balance"));
            }
        } else if (operationAns.operation === "Exit") {
            console.log(chalk.redBright("Thank you for using the banking application"));
            process.exit();
        }
    } else {
        console.log(chalk.italic.red("Your Pin code is incorrect"));
    }

