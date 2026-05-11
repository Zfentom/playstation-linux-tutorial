# How to improve your performance on the Playstation 4

> [!NOTE]
> All of the changes to the Playstation 4 Fat or Slim can be applied to the Pro if you want to squeeze in more performance**

# 1 - Kernel level optimizations


# 2 - Proton optimizations

- For proton we can use either [Proton-Sarek](https://github.com/pythonlover02/Proton-Sarek) or [Proton-CachyOS](https://github.com/CachyOS/proton-cachyos).

> [!TIP]
> Instead of just installing these compile them manually using custom -march and -mtune flags, those being *-march=btver2* and *-mtune=btver2*

- For Proton-Sarek you can use `PROTON_SAREK_PROFILE=agg` profile to gain performance in some games.

- For Proton-CachyOS you can try using `PROTON_USE_NTSYNC=1` to see if performance improves.

::: details What do these 2 actually do?
- The **agg** stands for "aggressive" and disables graphically intensive features to gain performance. More on that at [Proton-Sarek profiles section](#).
- **NTSYNC** is a Linux driver introduced in kernel 6.14 that implements some of the NT Kernel (the kernel Windows still uses today) API calls to dramatically reduce overhead when running Windows games through Wine/Proton. It can give 15–40 % more FPS in CPU-bound titles on PS4 Linux.
:::

# 3 - DE/WM Optimizations

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
