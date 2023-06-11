const vscode = require("vscode");

function activate(context) {
	console.log("test nick");

	const disposable = vscode.commands.registerCommand(
		"extension.nickTest",
		() => {
			vscode.window.showInformationMessage("pants");
		}
	);

	context.subscriptions.push(disposable);
}

module.exports = {
	activate,
};
