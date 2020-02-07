# Enter your email here and save.

my_email="<email here>"

# =======================================

git config --global core.editor "nano"
git config --global user.email $my_email

echo "Generate SSH key"
echo "KeepassXC can save your SSH key passphrase"
ssh-keygen -t rsa -b 4096 -C $my_email

echo "Add your SSH key to SSH agent"
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_rsa

echo "================="
echo "~/.ssh/id_rsa.pub"
cat ~/.ssh/id_rsa.pub
