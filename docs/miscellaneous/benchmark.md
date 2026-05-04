# This page will cover on how to benchmark on ps4

- Benchmarking is the act of measuring performance and comparing the results to another system's results or a widely accepted standard through a unified procedure. This unified method of evaluating system performance can help answer questions such as:
	- Is the system performing as it should?
	- What driver version should be used to get optimal performance?
	- Is the system capable of doing task x?

- Many tools can be used to determine system performance, the following provides a list of tools available.

## Basemark GPU

- Basemark GPU can be installed with following commands depending on your distro:
	- Arch/Arch-based: `yay -S basemark --noconfirm`
	- Fedora/Fedora-based: `flatpak install flathub com.basemark.BasemarkGPU`
	- Debian/Debian-based: `flatpak install flathub com.basemark.BasemarkGPU`

- For flatpaks you first need to install flatpak package and add the flatpak repo, installing the flatpak package will depend on your distro. To install the flatpak package for your distro check the commands below and pick the command acordingly:
	- Fedora/Fedora-based: `sudo dnf install flatpak` then add the repo with `flatpak remote-add --if-not-exists flathub https://flathub.org/repo/flathub.flatpakrepo`.
	- Debian/Debian-based: `sudo apt install flatpak` then add the repo using the same command provided above.


- To run the benchmark type these commands acording to your distro:
	- Arch/Arch-based: `basemark`.
	- For any distro running flatpak version use: `flatpak run com.basemark.BasemarkGPU`.

## Mangohud

- MangoHud is a Vulkan and OpenGL overlay for monitoring system performance while inside applications and to record metrics for benchmarking.

- You can install mangohud on your system by using the follow commands, pick a command acording to your distro:

	- Arch/Arch-based: `sudo pacman -S mangohud lib32-mangohud --noconfirm`.
	- Debian/Debian-based: `sudo apt install mangohud mangohud:i386` if neccesery enable 32bit support by running `sudo dpkg --add-architecture i386`
	- Fedora/Fedora-based: first you need to enable RPM Fusion, do that using this command `sudo dnf install \
https://download1.rpmfusion.org/free/fedora/rpmfusion-free-release-$(rpm -E %fedora).noarch.rpm` then you can install by running `sudo dnf install mangohud mangohud.i686`.

- You can verify the installation by running `mangohud --version`

| Keyboard commands       |			    |
|-------------------------|-------------------------|
| Keyboard Shortcut	  | Description		    |
| RShift+F12 		  | Toggle overlay	    |
| RShift+F11		  | Change overlay position |
| RShift+F10		  | Toggle preset	    |
| LShift+F2		  | Toggle loading	    |
| LShift+F4		  | Reload config	    |

- Test the configuration by running these commands:

	- `mangohud glxgears`
	- `mangohud vkcube`

## Using mangohud with steam

- You can use mangohud for invidual game by putting `mangohud %command%` in the steam launch options

- If you wish to use mangohud for all games you may start steam with mangohud, to do that run this command `mangohud steam`

- To use mangohud with vulkan games you need to use enviroment variables, you can use `MANGOHUD=1` to enable mangohud for vulkan games.
