#!/bin/zsh

brew bundle dump --describe --file "brew_$(date +%Y-%m-%d_%H-%M).brew"
