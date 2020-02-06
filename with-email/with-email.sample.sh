# Enter your email here and save.

my_email="<email here>"

# =======================================

git config --global core.editor "nano"
git config --global user.email $my_email

echo "Generate SSH key"
ssh-keygen -t rsa -b 4096 -C $my_email

echo "ssh-agent can save your passphrase"
echo "Add your SSH key"

eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_rsa

echo "================="
echo "~/.ssh/id_rsa.pub"
cat ~/.ssh/id_rsa.pub
