
alias reload="source ~/.bash_aliases"
alias gis='git status'
alias gib='git branch --remote && git branch'
alias gic='git checkout'
alias gid='git branch -d'
alias gim='git checkout master && git remote prune origin && git pull'
alias gimm='gim && git checkout - && git merge master'
alias gims='git checkout staging && git remote prune origin && git pull && git checkout - && git merge staging'
alias gin='gim && git checkout -b'
alias gia='git add'
alias gia.='git add . && git status'
alias gipurge='gim && git fetch -p && git branch -vv | grep ": gone]" | awk "{print \$1}" | xargs git branch -D && echo Nick is cool!'
alias giclear='gim && git branch | grep "^[^*]" | xargs git branch -d && echo ===================='
alias cd..='cd ..'
alias dir='ls -a'
alias vi='nano'
alias vim='nano'
alias emacs='nano'
alias npmi='rm -f package-lock.json && npm install'
alias gipush='git branch | grep "* " | awk "{print \$2}" | xargs git push --set-upstream origin '
alias gitcommitifnotmasterm='git branch -v | grep "* " | awk "{print \"hello\"\$2\"world\"}" | grep "hellomasterworld" || git add . && git commit -m'
alias todo='clear && grep "^[^*+/-]" ~/Dropbox/plans/a.plan.txt'
alias todow='clear && grep "^[^*+/-]" ~/Dropbox/plans/work.plan.txt'
alias todoe='nano ~/Dropbox/plans/a.plan.txt'
alias todowe='nano ~/Dropbox/plans/work.plan.txt'
alias pm2deploy='git push --tags && pm2 deploy ecosystem.config.js production --force'
alias giwip='gia. && git commit -m WIP && gipush --no-verify'
alias notes='cd ~/Google\ Drive\ File\ Stream/My\ Drive/notes && code . && cd -'
alias weather='curl wttr.in'

ezlatex() {
    pdflatex "$1.tex" "$1.pdf"
    pdflatex "$1"
    pdflatex "$1.tex" "$1.pdf"
    pdflatex "$1.tex" "$1.pdf"
}
