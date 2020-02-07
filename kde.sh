echo "Update apt"
sudo apt update

echo "Install things"
sudo apt install -y curl xclip

echo "Setup input devices"
\cp ./kde/kcminputrc ~/.config/kcminputrc
\cp ./kde/touchpadrc ~/.config/touchpadrc
\cp ./kde/kglobalshortcutsrc ~/.config/kglobalshortcutsrc
\cp ./kde/khotkeysrc ~/.config/khotkeysrc

cp ./kde/konsolerc ~/.config/konsolerc
cp ./kde/profile0.profile ~/.local/share/konsole/profile0.profile

source ./with-email/with-email.sh
source ./vscode/vscode-install-linux.sh
source ./vscode/vscode-settings.sh
source ./linux/tmux.sh
source ./linux/google-drive-install.sh

echo "Install more things"
sudo apt install -y keepassxc jq

echo "Change repo origin url"
git remote set-url origin git@github.com:nick-ng/dev-settings.git

source ./linux/zsh.sh
