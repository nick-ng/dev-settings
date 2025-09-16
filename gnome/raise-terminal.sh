#!/bin/zsh

terminalbin="konsole"
if ps aux | grep -v grep | grep $terminalbin > /dev/null
then
	terminalpid=$(xdotool search --class $terminalbin)
	if [[ $terminalpid == $(xdotool getactivewindow) ]]
	then
		xdotool windowminimize "$terminalpid"
	else
		xdotool windowactivate --sync "$terminalpid"
	fi
else
	$terminalbin&
fi
