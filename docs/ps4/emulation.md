# This page will cover on how to install multiple emulators on multiple distros


## 1 - Arch based distros

- **NOTE: I will be using yay mostly because pacman may not have all packages.**

::: details Retroarch

- Install these 3 packages using the command provided below:
- `yay -S retroarch-assets-xmb --noconfirm`
- `yay -S retroarch-assets-ozone --noconfirm`
- `sudo pacman -S retroarch --noconfirm`
:::


::: details PCSX2


- Just install by running `yay -S pcsx2 --noconfirm`

:::


::: details Dolphin

- Just install by running `yay -S dolphin-emu --noconfirm`

:::

::: details Rpcs3

- Just install by running `yay -S rpcs3-bin --noconfirm`

- Also install *rpcs3-udev* with `yay -S rpcs3-udev --noconfirm`

- *rpcs3-udev* is need for the emulator to be able to utilize ps4 and ps3 controllers.

:::


::: details PPSSPP

- Just install by running `yay -S ppsspp --noconfirm`

:::


::: details Duckstation

- Just install by running `yay -S duckstation-gpl --noconfirm`

:::


## 2 - Debian based distros

- **NOTE: You will need to run `sudo apt install flatpak` and `flatpak remote-add --if-not-exists flathub https://flathub.org/repo/flathub.flatpakrepo` before installing most of these.**

::: details Retroarch

- Just install by running `sudo apt install retroarch -y`

:::


::: details PCSX2


- Just install by running `flatpak install flathub net.pcsx2.PCSX2`

- You can run it by using `flatpak run net.pcsx2.PCSX2`

:::


::: details Dolphin

- Just install by running `flatpak install flathub org.DolphinEmu.dolphin-emu`

- You can run it by using `flatpak run org.DolphinEmu.dolphin-emu`

:::

::: details Rpcs3

- Just install by running `flatpak install flathub net.rpcs3.RPCS3`

- You can run it by using `flatpak run net.rpcs3.RPCS3`

:::


::: details PPSSPP

- Just install by running `flatpak install flathub org.ppsspp.PPSSPP`

- You can run it by using `flatpak run org.ppsspp.PPSSPP`

:::


::: details Duckstation

- Download the latest DuckStation-x64.AppImage from https://github.com/stenzek/duckstation/releases

- Run `chmod +x DuckStation-x64.AppImage` in the directory in which your DuckStation-x64.AppImage file is located in

- Run `./DuckStation-x64.AppImage` to run DuckStation

:::
