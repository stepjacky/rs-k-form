if( -not (Test-Path -Path Env:NODE_HOME) ){
  $env:NODE_HOME="d:\node-v22.18.0"
  $env:PATH+=";$env:NODE_HOME"
}
if( -not (Test-Path -Path Env:RAR_HOME)){
  $env:RAR_HOME="C:\Program Files\WinRAR"
  $env:PATH+=";$env:RAR_HOME"
}
