# Caputure card support

> [!DANGER]
> It has been decided that this will not be updated until more info has been gathered because its hard to keep up with updating the info if nobody makes pr's


| Capture Card Name / Model | What it takes to make it work |
| :--- | :--- |
| **AVerMedia Live Gamer Ultra GC553** | **1080p@60Hz:** Works. <br> **2K@60Hz:** 1. Remove EDID profiles > 2K on card settings. 2. Delete `video=DP-1:1920x1080@60` from `cmdline.txt`. 3. Change `vram.txt` to `0x80000000`. <br> *Note: 120Hz and 4K results in a blackscreen.* |
| **Elgato 4KX** | Potential fix involves removing the `video=` item from `cmdline.txt` (similar to AVerMedia). |