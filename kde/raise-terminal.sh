#!/bin/zsh

if ps aux | grep -v grep | grep "konsole" > /dev/null
then
	konsolepid=$(xdotool search --onlyvisible --class konsole)
	xdotool windowactivate "$konsolepid"
	# activepid=$(xdotool getactivewindow)
	# if [[ $konsolepid == $activepid ]]
	# then
	# 	# xdotool windowminimize "$konsolepid"
	# else
	# 	xdotool windowactivate --sync "$konsolepid"
	# 	# xdotool windowfocus --sync "$konsolepid"
	# fi
else
	konsole&
fi
