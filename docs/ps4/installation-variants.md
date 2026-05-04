---
next:
  text: 'Choose an Installation Method!'
  link: 'installation#choosing-a-method-of-installation'
---

> [!DANGER]
> NOTE: You **CAN** infact install it "permanently" by having a device externally or internally(as a modchip) to boot linux on boot if youre firmware is beetween 9.00 and 11.00 but the process is very hard to document so i suggest looking at [MODDED_WAREFARE's](https://www.youtube.com/@MODDEDWARFARE) channel

# Let's install!
Installing Linux on the PS4 is unsurprisingly difficult.

::: details Internal vs External: The Finale - GOTY Limited Edition (rant)
As I've mentioned beforehand, you can't install Linux on the internal PS4's HDD on Baikal systems. Technically you can but the system is very broken and borderline unusable so its **HIGHLY** not recommended.
To give you an explanation, it took Dionkill 30 MINUTES to update his CachyOS installation (1500MBs) and the system was so unresponsive that he could watch entire anime episodes in between clicks.

Using an external SATA-USB adapter with a Samsung 870 EVO 500GB, the time it took shrinked to less than 5 minutes, same when using it as the internal drive.

Therefore, to clear some misinformation here:
- The PS4's internal HDD is a repurposed laptop 5400RPM drive. Please, do NOT use this. Even the PS4's own menus lag because of how slow it is.
- The PS4 internal drive uses UFS encryption so it slows down significantly, even if you swap in an SSD.
- You CAN clone your PS4 HDD into an SSD, if internal installation is a must for you.
- The PS4 doesn't support TRIM, so a possible internal SSD swap would be a lot slower in writing data (a quality cached SSD with a garbage collector would be a bit better though).
- PS4 Phat and Slim are limited to SATA-II, which is 3Gbps in speed (roughly 375MB/s), which people online say it's not enough (it's enough for a PS4). On the other hand, the PS4 Pro runs at SATA-III, which is 6Gbps (up to 750MB/s), so that can saturate every SATA SSD on the market.
	- External SSD, on my 500GB Samsung 870 EVO, is 350MB/s-ish. So you'd get the same performance as an internal drive (theoretically) even on a Slim/Phat console.
	- Internal SSD performance is similar to external, because both of them use the USB bus, however encryption will slow down I/O access.

An internal SSD is going to be much faster and probably more reliable than a USB drive (which constantly disconnects, too), so it's recommended, just remember to get a good quality one as the PS4 doesn't support TRIM.
:::

> [!TIP]
> TL;DR:
> 
> Internal HDD is only for Aeolia/Belize, not recommended (unless you have switched to an SSD).
> Every console supports external, which is recommend with an SSD via an adapter.
## Preparing the installation
1. Boot your PS4 and launch GoldHen.
2. Take the initramfs.zip file, open it, and choose your installation method (mind the Southbridge)
	- Put it somewhere like on your desktop as we'll need it
3. Choose your kernel of choice
4. Choose your distro and and rename it `psxitarch.tar.xz/gz` depending on the original file type

## Choosing a method of installation 
> [!WARNING]
> Choose ONLY ONE method of installation.
> 
> Installing on both the internal and external drives can cause problems! If you did, remove one of the previous installations!

Here you will choose a method of installation.

Again, choose only one method and stick with it, and remember that Baikal can't currently install to internal reliably.

::: tip Internal Installation
This method installs Linux on the internal PS4 HDD, by creating a partition as big as you want. It will not overwrite anything on the drive.

[Internal Installation section.](/internal-installation)
:::

::: tip External Installation
For external installation, there are two methods: the first one involving a script on the PS4 (faster to configure), and another one with manual partitioning (higher success rate).

What does "higher success rate" mean, basically the installation can fail for various reasons like bad kernel, initramfs or just the distro itself and sometimes its just because the console felt like it.

The manual partitioning method is indeed preferred, but it involves the use of a Linux computer, virtual machine, or WSL2 on Windows.
You may choose the scripted method, however if any issues arise, try the other one.

[Scripted External Installation.](/external-installation-scripted)

[Manual External Installation.](/external-installation-manual)
:::
