const account = {
    name: "Andrew Mead",
    expenses: [],
    income: [],
    addExpense: function(description, amount) {
        const expense = {
            description: description,
            amount: amount
        }
        this.expenses.push(expense);
    },
    getTotalExpenses: function() {
        let total = 0;
        this.expenses.forEach(function(expense){
            total+=expense.amount;
        })
        return total;
    },
    addIncome: function(description, amount) {
        const income = {
            description: description,
            amount: amount
        }
        this.income.push(income);
    },
    getTotalIncome: function() {
        let total = 0;
        this.income.forEach(function(income){
            total+=income.amount;
        })
        return total;
    },
    getAccountSummary: function() {
        const balance = this.getTotalIncome()-this.getTotalExpenses();
        return ` ${this.name} has a balance of $${balance}. $${this.getTotalIncome()} in income. $${this.getTotalExpenses()} in expenses.`
    }
}

//Expense -> description, amount - DONE
//addExpense -> description, amount - DONE
//getAccountSummary -> total up all expenses -> ${name} has ${total} in expenses. - DONE

//Add income array to account - DONE
//addIncome method - DONE
//Tweak getAccountSummary `${name} has a balance of $${balance}. $${income} in income. $${expenses} in expenses`
console.log("\n================================\n");


account.addExpense("Rent", 950);
account.addExpense("Coffee",2);
account.addIncome("Job", 1000);
console.log(account.getAccountSummary());