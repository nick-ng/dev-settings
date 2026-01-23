#!/bin/bash

if ps aux | grep -v grep | grep codium > /dev/null; then
	xdotool search --classname VSCodium windowactivate
fi
