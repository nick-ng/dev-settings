# Steps

- Install git and checkout repo

```
sudo apt install -y git && git clone https://github.com/nick-ng/dev-settings.git ~/gits/dev-settings && cd ~/gits/dev-settings
```

- Run script

```
source kde.sh
```

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
- [Xanthics Gwennen Search](https://raw.githubusercontent.com/nick-ng/dev-settings/master/violentmonkey/xanthics-gwennen-search.js)
- [Spark Sports Thumbnail Hider](https://raw.githubusercontent.com/nick-ng/dev-settings/master/violentmonkey/spark-sport-thumbnail-hider.js)
- [Screen Time Restrictor](https://raw.githubusercontent.com/nick-ng/dev-settings/master/violentmonkey/screen-time-restrictor.js)
- [AWS CloudWatch Styles](https://raw.githubusercontent.com/nick-ng/dev-settings/master/violentmonkey/aws-cloudwatch-styles.js)
