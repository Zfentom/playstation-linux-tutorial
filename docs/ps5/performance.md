# Improve Performance and Responsiveness 

# 2 - Proton optimizations

- For proton we can use either [Proton-Sarek](https://github.com/pythonlover02/Proton-Sarek) or [Proton-CachyOS](https://github.com/CachyOS/proton-cachyos).

> [!TIP]
> Instead of just installing these compile them manually using custom -march and -mtune flags, those being *-march=znver2* and *-mtune=znver2* to apply znver2 optimizations.

- For Proton-Sarek you can use `PROTON_SAREK_PROFILE=agg` profile to gain performance in some games.

- For Proton-CachyOS you can try using `PROTON_USE_NTSYNC=1` to see if performance improves.

::: details What do these 2 actually do?
- The **agg** stands for "aggressive" and disables graphically intensive features to gain performance. More on that at [Proton-Sarek profiles section](#).
- **NTSYNC** is a Linux driver introduced in kernel 6.14 that implements some of the NT Kernel (the kernel Windows still uses today) API calls to dramatically reduce overhead when running Windows games through Wine/Proton.
:::


# Feral Gamemode

Feral Gamemode is a piece of software that optimizes system performance for gaming by temporarily adjusting settings like CPU priority and I/O operations.

On ubuntu you can install it by running these commands:

```bash
sudo add-apt-repository ppa:samoilov-lex/gamemode
sudo apt install gamemode
```

You can use it by using ``gamemoderun %command%`` in steam or ``gamemoderun *game*`` outside of steam.


# 3 - DE/WM Optimizations

While these are not really "optimizations" Windows Managers and some Desktop Enviroments can reduce ram usage and make the system more responsive, while these may not have a significant impact on your performance or have any at all the lesser ram usage and minimalism may appeal to some

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
