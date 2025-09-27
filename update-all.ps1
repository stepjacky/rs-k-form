. .\setenv.ps1
$env:PATH+=";C:\Program Files\WinRAR"
if( Test-Path -Path .\node_modules\ -PathType Container ){
    remove-Item -Path .\node_modules\ -Recurse -Force
}
if( Test-Path -Path .\package-lock.json  ){
    remove-Item -Path .\package-lock.json -Force
}
npm i 
$appName="rs-k-form"
rar a -r "$appName.rar" node_modules babel.config.js rollup.config.js package.json package-lock.json
Copy-Item -Path "$appName.rar" -Destination "..\web-app-deps"
Remove-Item "$appName.rar" -Force