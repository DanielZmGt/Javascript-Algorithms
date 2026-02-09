@echo off
title CodeSidebar Launcher
:start
echo Starting CodeSidebar...
python "C:\Users\zam_z\.gemini	mp\15fda5f3183577b8e38a9eba25ada6631618a2fd66b6c589a286e637e178507d\CodeSidebar\main.py"
if %errorlevel% neq 0 (
    echo App crashed with exit code %errorlevel%. Restarting in 2 seconds...
    timeout /t 2 >nul
    goto start
)
echo Application closed normally.
pause
