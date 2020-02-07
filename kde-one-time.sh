echo "Update apt"
sudo apt update

echo "Install things"
sudo apt install -y curl xclip

echo "Setup input devices"
\cp ./kde/kcminputrc ~/.config/kcminputrc
\cp ./kde/touchpadrc ~/.config/touchpadrc
\cp ./kde/kglobalshortcutsrc ~/.config/kglobalshortcutsrc
\cp ./kde/khotkeysrc ~/.config/khotkeysrc

source ./with-email/with-email.sh
source ./vscode/vscode-install-linux.sh
source ./linux/tmux.sh
source ./linux/zsh.sh
source ./linux/google-drive-install.sh

echo "Install more things"
sudo apt install -y keepassxc jq

source ./kde.sh

echo "Change repo origin url"
git remote set-url origin git@github.com:nick-ng/dev-settings.git
