sudo apt install -y zsh

# Unnecessary. Oh my zsh does this.
# chsh -s $(which zsh)

echo "It'll ask your password to change the default shell"
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"

\cp ./.zshrc ~/.zshrc
