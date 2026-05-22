# Improve Performance and Responsiveness

## Proton optimizations

- For proton we can use either [Proton-Sarek](https://github.com/sillyfish38/Proton-Sarek) or [Proton-CachyOS](https://github.com/CachyOS/proton-cachyos).

- For Proton-Sarek you can use `PROTON_SAREK_PROFILE=agg` profile to gain performance in some games.

- For Proton-CachyOS you can try using `PROTON_USE_NTSYNC=1` to see if performance improves.

::: details What do these 2 actually do?
- The **agg** stands for "aggressive" and disables graphically intensive features to gain performance. More on that at [Proton-Sarek profiles section](#).
- **NTSYNC** is a Linux driver introduced in kernel 6.14 that implements some of the NT Kernel (the kernel Windows still uses today) API calls to dramatically reduce overhead when running Windows games through Wine/Proton. It can give 15–40 % more FPS in CPU-bound titles on PS4 Linux.
:::

# Feral Gamemode

Feral Gamemode is a piece of software that optimizes system performance for gaming by temporarily adjusting settings like CPU priority and I/O operations.

On Arch and arch based distros you can install it by running these commands:

```bash
sudo pacman -S gamemode --noconfirm
```

You can use it by using ``gamemoderun %command%`` in steam or ``gamemoderun *game*`` outside of steam.


# DE/WM Optimizations

- The Playstation Fat and Slim are significantly weaker compared to the Pro model therefore you cannot run most modern Desktop environments so here will be listed which you should use that have low ram usage and won't lag on the console.


::: details  Xorg based Dekstop enviroments:
		
- [LXDE](https://www.lxde.org/) ***Small Note: for some fucking reason the site is flagged as unsecure***

- [LXQT](https://lxqt-project.org/) (Just LXDE but with QT support)

- [XFCE](https://xfce.org/)

- [DWM](https://dwm.suckless.org/)

- [i3](https://i3wm.org/)

- [Openbox](http://openbox.org/)

- [bspwm](https://github.com/baskerville/bspwm)

- [Awesome](https://awesomewm.org/)
:::

::: details  Wayland based Window Managers:

- [DWL](https://gitlab.com/marcobruna/dwl)

- [Hyprland](https://hypr.land/) (Runs well on Pro models but not tested on non Pro models, use a lightweight config)

- [Swayfx](https://github.com/WillPower3309/swayfx) (Also not tested on non pro models, use a lightweight config)

- [Niri](https://yalter.github.io/niri/) (Also not tested on non pro model, use a lightweight config)
:::
