echo "Copy zsh .*rc files"
\cp ${HOME}/gits/dev-settings/.zshrc ${HOME}/.zshrc
\cp ${HOME}/gits/dev-settings/.nickrc ${HOME}/.nickrc
cp -n ${HOME}/gits/dev-settings/.workrc ${HOME}/.workrc

echo "Install tmux plugins"
${HOME}/.tmux/plugins/tpm/bin/install_plugins
