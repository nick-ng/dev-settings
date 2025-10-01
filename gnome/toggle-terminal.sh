#!/bin/bash

if ps aux | grep -v grep | grep gnome-terminal > /dev/null; then
	if [[ $(xdotool search --class ^gnome-terminal$) == $(xdotool getactivewindow) ]]; then
		xdotool search --class ^gnome-terminal$ windowminimize
	else
		xdotool search --class ^gnome-terminal$ windowactivate
	fi
else
	gnome-terminal &
	for (( i = 0 ; i < 1000 ; i++ )); do
		if [ -n "$(xdotool search --class ^gnome-terminal$)" ]; then
			xdotool search --class ^gnome-terminal$ windowactivate --sync
			# xdotool key --clearmodifiers super+F11
			break;
		fi

		sleep 0.2s
	done
fi
