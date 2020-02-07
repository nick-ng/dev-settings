sudo apt install -y zsh

cp ./linux/zsh-once.sh ~/.runonce

echo "It'll ask your password to change the default shell"
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
