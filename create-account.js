function createAccount(pin, amount) {
	let PIN = pin;
	let balance = amount ? amount : 0;
	const account = {
		checkBalance : function(currPIN) {
			if (currPIN === PIN) {
				return `$${balance}`;
			} else {
				return `Invalid PIN.`;
			}
		},
		deposit      : function(currPIN, total) {
			if (currPIN === PIN) {
				balance += total;
				return `Succesfully deposited $${total}. Current balance: $${balance}.`;
			} else {
				return `Invalid PIN.`;
			}
		},
		withdraw     : function(currPIN, total) {
			if (currPIN !== PIN) return `Invalid PIN.`;
			if (total > balance) return `Withdrawal amount exceeds account balance. Transaction cancelled.`;

			balance -= total;
			return `Succesfully withdrew $${total}. Current balance: $${balance}.`;
		},
		changePin    : function(currPIN, newPIN) {
			if (currPIN !== PIN) return `Invalid PIN.`;
			PIN = newPIN;
			return `PIN successfully changed!`;
		}
	};

	return account;
}

module.exports = { createAccount };
