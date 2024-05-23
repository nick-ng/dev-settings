# Steps

- Install git and checkout repo

```
sudo apt install -y git && git clone https://github.com/nick-ng/dev-settings.git ~/gits/dev-settings && cd ~/gits/dev-settings
```

- Run script

```
source kde.sh
```

## VS Code

- [Extension](https://github.com/nick-ng/vscode-extension)
  - Download `nick-vscode-extension-x.y.z.vsix`
  - Go to "Extensions" in VS Code (`Ctrl + Shift + x`)
  - Click on dots
  - Install from VSIX...

## Github

- Add SSH key to Github
  - Click on your face -> settings -> SSH and GPG keys

```
cat ~/.ssh/id_rsa.pub | xclip -selection clipboard
```

## Node.js

```
source node.sh
```

## Install Manually

- [ripgrep](https://github.com/BurntSushi/ripgrep#installation)

## Windows (Git Bash)

### SSH Key

Same as Linux

1. `ssh-keygen -t rsa -b 4096 -C "your_email@gmail.com"`

## Mac

- bash_aliases
- karabiner.json
- vs-code.json
- [Karabiner Elements Complex Modifications](karabiner://karabiner/assets/complex_modifications/import?url=https://raw.githubusercontent.com/nick-ng/dev-settings/master/karabiner_complex.json)

# Violentmonkey

Install [Violentmonkey](https://violentmonkey.github.io/) then click on a link below.

If that doesn't work:

1. Right-click > copy link
2. In Violentmonkey, install from URL and paste the URL you copied.

- [YouTube Comments Hider](https://raw.githubusercontent.com/nick-ng/dev-settings/master/violentmonkey/youtube-comments-hider.js)
- [YouTube Related Videos Hider](https://raw.githubusercontent.com/nick-ng/dev-settings/master/violentmonkey/youtube-related-hider.js)
- [Xanthics Gwennen Search (Path of Exile)](https://raw.githubusercontent.com/nick-ng/dev-settings/master/violentmonkey/xanthics-gwennen-search.js)
- [Spark Sports Thumbnail Hider](https://raw.githubusercontent.com/nick-ng/dev-settings/master/violentmonkey/spark-sport-thumbnail-hider.js)
- [Screen Time Restrictor](https://raw.githubusercontent.com/nick-ng/dev-settings/master/violentmonkey/screen-time-restrictor.js)
- [Salesforce Code Block Style](https://raw.githubusercontent.com/nick-ng/dev-settings/master/violentmonkey/salesforce-codeblock-styles.js)
- [Jira Unicorn](https://raw.githubusercontent.com/nick-ng/dev-settings/master/violentmonkey/jira-unicorn.js)
- [JPerm.net Upside Down Algorithm Trainer](https://raw.githubusercontent.com/nick-ng/dev-settings/master/violentmonkey/jperm-net.js)
- [Bato.to Space Between Pages](https://raw.githubusercontent.com/nick-ng/dev-settings/master/violentmonkey/bato-to.js)
- [Bato.to Space Between Pages (mobile)](https://raw.githubusercontent.com/nick-ng/dev-settings/master/violentmonkey/bato-to-mobile.js)
