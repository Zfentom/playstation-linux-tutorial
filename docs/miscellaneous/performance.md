# How to improve your performance on the Playstation 4

## This page will only cover the Playstation Fat and Slim because the Pro has basically no issues in terms of running Window managers, Desktop environments and games.

> [!NOTE]
> All of the changes to the Playstation 4 Fat or Slim can be applied to the Pro if you want to squeeze in more performance**

# 1 - Kernel level optimizations


- Most of the optimizations for the kernel can not be applied after installation so to use this visit the [How to compile your own kernel page](/miscellaneous/kernel.md).


| Kernel optimizations           | What this option does?      
|--------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| _processor_opt="btver2"	 | Applies microarcitecture specific optimizations to the kernel.																		  |
| _cpusched="bmq"		 | Uses bmq as the default scheduler, way better then the default one and usually most present in the newer kernel versions.											  |
| _cpusched="eevdf"              | Use this if bmq is unavailable
| _lto_mode="thin"		 | Uses Thin LTO mode to optimize for performance.**(SHOULD NOT BE USED WITH LLVM BECAUSE IT CAN LEAD TO UNBOOTABLE KERNEL)**.											  |
| _compileroptlevel="1"		 | Uses compiler to optimize for performance.																					  |
| _tcp_cong_alg="bbr"		 | Uses a better network algorithm that could have better network stability or speed. ***Small Note: even if this does not change anything internet will still work properly***.				  |
| _default_cpu_gov="ondemand"	 | Makes the default cpu governor "ondemand" meaning it uses more power when needed resulting in quieter experience during lower workloads.												  |
| _aggressive_ondemand="true"	 | Makes the "ondemand" governor more aggressive.																				  |

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
