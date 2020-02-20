# ToDo
* Install VS Code extensions
# Steps
* Install git and checkout repo
```
sudo apt install -y git && git clone https://github.com/nick-ng/dev-settings.git ~/gits/dev-settings && cd ~/gits/dev-settings
```
* Run script
```
source kde.sh
```
## Github
* Add SSH key to Github
    * Click on your face -> settings -> SSH and GPG keys
```
cat ~/.ssh/id_rsa.pub | xclip -selection clipboard
```
## Node.js
```
source node.sh
```
## VS Code Extensions
```
# code --install-extension amazonwebservices.aws-toolkit-vscode
code --install-extension ban.spellright
code --install-extension bmewburn.vscode-intelephense-client
code --install-extension eamodio.gitlens
code --install-extension esbenp.prettier-vscode
code --install-extension felixfbecker.php-debug
code --install-extension felixfbecker.php-intellisense
code --install-extension gerane.Theme-Github
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
```

## Mac
* bash_aliases
* karabiner.json
* vs-code.json
* [Karabiner Elements Complex Modifications](karabiner://karabiner/assets/complex_modifications/import?url=https://raw.githubusercontent.com/nick-ng/dev-settings/master/karabiner_complex.json)
