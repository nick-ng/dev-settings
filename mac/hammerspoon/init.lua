hs.hotkey.bind({ "cmd", "ctrl" }, "1", function()
	hs.application.launchOrFocus("Terminal")
end)

hs.hotkey.bind({ "cmd", "ctrl" }, "2", function()
	hs.application.launchOrFocus("Firefox")
end)

hs.hotkey.bind({ "cmd", "ctrl" }, "3", function()
	hs.application.launchOrFocus("VSCodium")
end)
