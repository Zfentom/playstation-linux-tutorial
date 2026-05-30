# Post installation things
Once you've installed Linux and are on the desktop, before rushing to do things, you may want to do a couple of additional steps.

To change some config files (don't worry, it won't hurt), I'll recommend `nano` because it just works. To save a file, use `CTRL+S` and to exit `CTRL+X`.

## Update your system <Badge type="danger" text="caution" />
Updating your system can be a bit of a pain in the ass, as some of the packages can't be updated because they contain modifications to make them work on the PS4.

> [!CAUTION]
> Arch-based distros have repositories for drivers, other distros might not.

::: details Arch based distros (with driver updates)

- NOTE: CachyOS Lite already has this repo configured.

To update the drivers, you need to open the pacman config:
```bash
sudo nano /etc/pacman.conf
```

If you installed a distro from the forums, you may have go to the `[Options]` section and delete the lines `IgnorePkg` and `IgnoreGroup`.

Then, under the `REPOSITORIES` section, add this ([GitHub](https://github.com/DionKill/ps4-video-archlinux)):
```bash
[ps4-video]
SigLevel = Optional 
Server = https://dionkill.github.io/ps4-video-archlinux/repo/
```

> [!NOTE]
> This repo will only work as long as the developer is updating it and keeping it online. It may be changed in the future.

Then, `CTRL+S` to save and `CTRL+X` to exit.

Finally, install the driver packages:
```bash
sudo pacman -Syu lib32-mesa-ps4 mesa-ps4 lib32-libdrm-ps4 libdrm-ps4 xf86-video-amdgpu-ps4
```

You should now have up-to-date drivers.
:::

::: details Debian/Ubuntu based distros (WITH Mesa updates, WIP)
Use triki1's updater (should be included in their distro releases now)

Use uar's script updater:
```bash
wget [https://uar.no/ps4/baikal/mesa-25.sh](https://uar.no/ps4/baikal/mesa-25.sh "https://uar.no/ps4/baikal/mesa-25.sh") && sudo sh mesa-25.sh
```
:::

::: details Debian/Ubuntu based distros (disabled Mesa updates)
To make sure that the PS4 packages don't get updated run the command below:
```bash
sudo apt-mark hold lib32-libdrm-git lib32-mesa-git libdrm-git mesa-git lib32-libdrm lib32-mesa libdrm mesa lib32-llvm-libs llvm-libs
```

Then, you should be free to update your system with:
```bash
sudo apt update
sudo apt upgrade
```
:::

Otherwise, you can always update everything but not the driver packages.

## Change username and password
Create a new user. Because changing current user is unsupported.

You can however change the password, by doing:
```bash
sudo passwd
```
And setting a new password.

## Better ram management
To do that, we must use Swap.

::: details Enabling Swap
> [!CAUTION]
> It's ABSOLUTELY NOT recommended to use the internal HDD as swap, you'd just add fuel to the dumpsterfire of slowness that it already is. Disable it and move on.

Swap is storage that you are taking from your drive and allocating as "extra RAM": it works by moving unused software over there if extra main memory needs to be reserved for another program or game. This means we can improve the memory situation a little bit.

We will be using a swap file instead of a swap partition, as it's easier to change in size.
First of all, we need to remove any existing swap:
```bash
sudo swapoff -v /swapfile  
sudo rm /swapfile
```

Then, we need to enable new swap (8GB for this tutorial, you may change it)
```bash
sudo dd if=/dev/zero of=/swapfile bs=1M count=2048 # Allocates 8GBs, to find
sudo chmod 600 /swapfile
sudo mkswap /swapfile
sudo swapon /swapfile
```

Finally, go to the `fstab` file, and check if  the line `/swapfile none swap sw 0 0` exists.
If it doesn't, add it by going here and pasting it at the end of the file:
```bash
sudo nano /etc/fstab
```
:::

Oh, and don't worry if you see that your installation is using a lot of memory. It's normal and is meant to happen in order to improve performance. Check this [link](https://linuxatemyram.com) to learn more.

## Install more applications
To play games, these are the recommended softwares:
- Steam
- Heroic Games Launcher (for Epic, GOG and Amazon)
- Lutris (for other PC games not in those launchers)
- Fjord Launcher instead of those other shitty Minecraft launchers
	- Minecraft has graphical issues in versions newer than 1.21.5
- And a bunch of emulators!

> [!TIP]
> In some distros you may need to uncomment ``DisableSandbox`` in ``/etc/pacman.conf``.

To do that, if using anything other than Arch based distros, install from their repo or github.

If you chose an Arch based distro however, use `pacman` or `yay` to install your packages. All packages you can even think of and more are available.
