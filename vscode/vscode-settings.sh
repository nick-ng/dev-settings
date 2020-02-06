echo "Setting up VS Code"

\cp ./vscode/settings.json ~/.config/Code/User/settings.json
\cp ./vscode/keybindings.json ~/.config/Code/User/keybindings.json
\cp -r ./vscode/theme-nick/ ~/.vscode/extensions/theme-nick/

echo "Finished setting up VS Code"
