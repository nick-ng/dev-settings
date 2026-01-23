#!/bin/bash

if ps aux | grep -v grep | grep firefox$ > /dev/null; then
	xdotool search --classname Navigator windowactivate
fi
