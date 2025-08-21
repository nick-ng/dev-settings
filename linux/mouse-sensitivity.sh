#!/bin/bash

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

		xinput --set-prop "$MOUSE_ID" 'libinput Accel Profile Enabled' 0 0 0
		echo "Set mouse to 3200 DPI (purple)"
fi

# Attack Shark X3 Bluetooth
# Set to 1600 dpi - green
XINPUT_LINE="$(xinput --list | grep 'X3-5.4 Mouse  ')"
if [[ $XINPUT_LINE ]]; then
		echo "$XINPUT_LINE"
		TEMP="${XINPUT_LINE#*id=}"
		MOUSE_ID="${TEMP%	*}"
		echo "$MOUSE_ID"

		# Mouse has 3 acceleration profiles
		xinput --set-prop "$MOUSE_ID" 'libinput Accel Profile Enabled' 0 0 0
		echo "Set Attack Shark X3 to 1600 DPI (green)"
fi

XINPUT_LINE="$(xinput --list | grep 'M585/M590 Mouse ')"
if [[ $XINPUT_LINE ]]; then
		echo "$XINPUT_LINE"
		TEMP="${XINPUT_LINE#*id=}"
		MOUSE_ID="${TEMP%	*}"
		echo "$MOUSE_ID"

		# Mouse has 3 acceleration profiles
		xinput --set-prop "$MOUSE_ID" 'libinput Accel Profile Enabled' 0 0 0
		echo "Logitech M585/M590 acceleration disabled"
fi
