echo "Add PPAs"
sudo add-apt-repository ppa:phoerious/keepassxc -y

echo "Update apt"
sudo apt update

echo "Install things"
sudo apt install -y curl xclip

echo "Applying some settings"
# Increase inotify watch limit. For nodemon, vscode etc. to detect file changes.
echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p

echo "Setup input devices"
\cp ./kde/kcminputrc ~/.config/kcminputrc
\cp ./kde/touchpadrc ~/.config/touchpadrc
\cp ./kde/kglobalshortcutsrc ~/.config/kglobalshortcutsrc
\cp ./kde/khotkeysrc ~/.config/khotkeysrc
\cp ./kde/konsolerc ~/.config/konsolerc
\cp ./kde/kxkbrc ~/.config/kxkbrc
\cp ./kde/kwinrc ~/.config/kwinrc

cp ./kde/profile0.profile ~/.local/share/konsole/profile0.profile

grep -c "<email here>" ./with-email/with-email.hot.sh >/dev/null && source ./with-email/with-email.sh
which code | grep "not found" >/dev/null && source ./vscode/vscode-install-linux.sh
source ./vscode/vscode-settings.sh
source ./linux/tmux.sh
mount | grep "${HOME}/google-drive" >/dev/null || source ./linux/google-drive-install.sh

echo "Install more things"
sudo apt install -y keepassxc jq audacity

echo "Install youtube-dl"
sudo curl -L https://yt-dl.org/downloads/latest/youtube-dl -o /usr/local/bin/youtube-dl
sudo chmod a+rx /usr/local/bin/youtube-dl
mkdir -p ~/.config/youtube-dl/
\cp ./linux/youtube-dl-config ~/.config/youtube-dl/config

echo "Change repo origin url"
git remote set-url origin git@github.com:nick-ng/dev-settings.git

echo $SHELL | grep zsh || source ./linux/zsh.sh
echo $SHELL | grep zsh && source ./linux/zsh-once.sh
