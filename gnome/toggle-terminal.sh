#!/bin/bash

if ps aux | grep -v grep | grep gnome-terminal > /dev/null; then
	if [[ $(xdotool search --class ^gnome-terminal$) == $(xdotool getactivewindow) ]]; then
		xdotool search --class ^gnome-terminal$ windowminimize
	else
		xdotool search --class ^gnome-terminal$ windowactivate
	fi
else
	gnome-terminal &
fi
