echo "Install google-drive-ocamlfuse"
sudo add-apt-repository ppa:alessandro-strada/ppa
sudo apt-get update
sudo apt-get install -y google-drive-ocamlfuse

echo "First run to authorize"
google-drive-ocamlfuse

echo "Mount to ~/google-drive"
mkdir ~/google-drive
google-drive-ocamlfuse ~/google-drive

cat ./linux/.zprofile >> ~/.zprofile
