echo "Setting up VS Code"

mkdir -p ~/.config/Code/User/
mkdir -p ~/.vscode/extensions/

\cp ./vscode/settings.json ~/.config/Code/User/settings.json
\cp ./vscode/keybindings.json ~/.config/Code/User/keybindings.json
\cp -r ./vscode/theme-nick/ ~/.vscode/extensions/theme-nick/

echo "Installing VS Code extensions"
# code --install-extension amazonwebservices.aws-toolkit-vscode
code --install-extension ban.spellright
code --install-extension bmewburn.vscode-intelephense-client
code --install-extension eamodio.gitlens
code --install-extension esbenp.prettier-vscode
code --install-extension felixfbecker.php-debug
code --install-extension felixfbecker.php-intellisense
# code --install-extension gerane.Theme-Github
code --install-extension getpsalm.psalm-vscode-plugin
code --install-extension hbenl.vscode-test-explorer
code --install-extension ikappas.phpcs
code --install-extension janisdd.vscode-edit-csv
code --install-extension junstyle.php-cs-fixer
code --install-extension MehediDracula.php-namespace-resolver
code --install-extension MikeBovenlander.formate
code --install-extension ms-python.python
code --install-extension ms-vscode.vscode-typescript-tslint-plugin
code --install-extension neilbrayfield.php-docblocker
# code --install-extension oderwat.indent-rainbow
code --install-extension pomber.git-file-history
code --install-extension recca0120.vscode-phpunit
# code --install-extension shd101wyy.markdown-preview-enhanced

echo "Finished setting up VS Code"
