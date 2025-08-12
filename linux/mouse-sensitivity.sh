#!/bin/bash

# wait 3 seconds so the mouse has time to connect
sleep 3

# SATECHI mouse at work
# Set to 3200 dpi - purple
XINPUT_LINE="$(xinput --list | grep 'PixArt OpticalMouse  ')"
if [[ $XINPUT_LINE ]]; then
		echo "$XINPUT_LINE"
		TEMP="${XINPUT_LINE#*id=}"
		MOUSE_ID="${TEMP%	*}"
		echo "$MOUSE_ID"

		# last item (2.00) is number of input events to move 1 pixel i.e. "inverse" sensitivity
		xinput --set-prop "$MOUSE_ID" 'Coordinate Transformation Matrix' 1.00 0.00 0.00 0.00 1.00 0.00 0.00 0.00 2.00
fi
