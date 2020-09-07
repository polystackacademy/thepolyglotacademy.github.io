@echo off
REM To use code feature please edit Line 5 in code.cmd to 'start "" "%~dp0..\Code.exe" "%~dp0..\resources\\app\\out\\cli.js" %*'
start chrome index.html
code . && exit