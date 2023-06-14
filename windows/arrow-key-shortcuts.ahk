#NoEnv ; Recommended for performance and compatibility with future AutoHotkey releases.
#SingleInstance, Force
; #Warn  ; Enable warnings to assist with detecting common errors.
SendMode Input ; Recommended for new scripts due to its superior speed and reliability.
SetWorkingDir %A_ScriptDir% ; Ensures a consistent starting directory.

; ! = Alt, + = Shift, ^ = Ctrl
; https://autohotkey.com/docs/Hotkeys.htm

^+4::Send #+{s}

; Block Right Alt + F4
>!F4::Send {F4}

~LShift::
	SetCapsLockState, Off
	Sleep, 30
	if GetKeyState("RShift", "P")
		SetCapsLockState, On
return

~RShift::
	SetCapsLockState, Off
	Sleep, 30
	if GetKeyState("LShift", "P")
		SetCapsLockState, On
return

^#f::Send ^!f

~^`::
	DetectHiddenWindows, On
	windowHandleId := WinExist("ahk_exe WindowsTerminal.exe")

	windowExistsAlready := windowHandleId > 0

	if (windowExistsAlready) {
		return
	} else {
		Run, wt
	}

	DetectHiddenWindows, Off

; WinWait, ahk_exe WindowsTerminal.exe,, 1
; if ErrorLevel
; {
;   Run, wt
;   return
; }

; if not WinExist(windowExistsAlready)
; Run, explorer.exe shell:AppsFolder\Microsoft.WindowsTerminal_8wekyb3d8bbwe!App
return

; Arrow keys
^#i::Send {Up}
^#k::Send {Down}
^#j::Send {Left}
^#l::Send {Right}

; Arrow keys + shift
^#+i::Send +{Up}
^#+k::Send +{Down}
^#+j::Send +{Left}
^#+l::Send +{Right}

; Next/prev word
^#m::Send ^{Left}
^#.::Send ^{Right}
^#+m::Send ^+{Left}
^#+.::Send ^+{Right}

; Home/end
^#u::Send {Home}
^#o::Send {End}
^#+u::Send +{Home}
^#+o::Send +{End}

; Page up/down
^#8::Send {Up}{Up}{Up}{Up}{Up}{Up}{Up}{Up}{Up}{Up}
^#,::Send {Down}{Down}{Down}{Down}{Down}{Down}{Down}{Down}{Down}{Down}
^#+8::Send +{Up}+{Up}+{Up}+{Up}+{Up}+{Up}+{Up}+{Up}+{Up}+{Up}
^#+,::Send +{Down}+{Down}+{Down}+{Down}+{Down}+{Down}+{Down}+{Down}+{Down}+{Down}

; Joy3::Send {NumpadDot}
; Joy2::Send {Numpad0}

; Joy10::Send {NumpadAdd}
; Joy9::Send {NumpadSub}

; Mouse remap
;*XButton1::Send {RControl down}
;*XButton1 Up::Send {RControl up}

; CapsLock Up
; *CapsLock:: Send {RControl down}
; *CapsLock up::
;   Send {RControl up}
;   SetCapsLockState, Off
; return

;Old Snipping Tool
;^+4::
;  Run, snippingtool
;  Sleep, 500
;  Send ^{n}
;return

; Snip & Sketch (new snipping tool)
; Windows + Shift + s
