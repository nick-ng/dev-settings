sudo apt install -y tmux

git clone https://github.com/tmux-plugins/tpm ~/.tmux/plugins/tpm

\cp ./tmux/.tmux.conf ~/.tmux.conf

echo "Start tmux once so it loads the config."
tmux &
sleep 1
tmux kill-server
sleep 1
