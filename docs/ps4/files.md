# Getting the files

> [!WARNING]
> Some of the following links look sketchy, but the community is fragmented for various reasons including language barriers, source duplication, and low maintainer count. Refer to the [Other Issues](/ps4/issues#other-issues) section for more info.

## Kernels

Recommended kernel builds for PS4 Linux. Newest entries are generally preferred.

[Credits for all of these kernels](/ps4/ending#credits).

> [!TIP]
> For 6.15.4 kernel, use `bzImage_Clang_thinLTO` if available. Some consoles require `no-built-in-fw`.

| Kernel Download | Compatible Southbridges | Source Code | Extra info |
|----------------|------------------------|--------------|------------|
| [7.0-Clean](https://github.com/rmuxnet/ps4-linux-12xx) | Baikal | [GitHub](https://github.com/rmuxnet/ps4-linux-12xx) | 7.0 work by rmux. Select branch/release as needed. |
| [6.15.4](https://github.com/feeRnt/ps4-linux-12xx/releases/tag/v6.15.4__crashnt-4.7) | Aeolia, Belize | [GitHub](https://github.com/feeRnt/ps4-linux-12xx/) | LTO improvements. ThinLTO recommended. |
| [5.15.15](https://github.com/feeRnt/ps4-linux-12xx/releases/tag/v5.15.15__obsidianx-4.0) | Belize | [GitHub](https://github.com/feeRnt/ps4-linux-12xx/) | May perform better than 6.15.4. |
| [5.4.247](https://github.com/feeRnt/ps4-linux-12xx/releases/tag/v5.4.247__neocine-1.1) | Baikal | [GitHub](https://github.com/feeRnt/ps4-linux-12xx/) | Baikal-only. Do not use elsewhere. |

### Server kernels

Server-focused builds for headless or service usage.

> [!TIP]
> Pair with `128MB` server payload unless otherwise required.

| Kernel Download | Compatible Southbridges | Source Code | Extra info |
|----------------|------------------------|--------------|------------|
| [6.18.21](https://github.com/rmuxnet/ps4-linux-12xx) (Recommended) | Aeolia, Belize | [GitHub](https://github.com/rmuxnet/ps4-linux-12xx) | Includes server prebuilts. |
| [7.0-Clean](https://github.com/rmuxnet/ps4-linux-12xx) | Aeolia, Belize | [GitHub](https://github.com/rmuxnet/ps4-linux-12xx) | Use repo releases/branches. |

If issues occur, check the [Issues page](/ps4/issues). Community help is available via [Discord servers](/ps4/information#important-places).

---

## Initramfs

This is the rescue environment used to boot installers and handle installation stages.

Download [this one](https://github.com/DionKill/ps4-linux-tutorial/blob/main/PS4%20Linux/initramfs.zip).  
Source (reference): https://bitbucket.org/piotrkarbowski/better-initramfs/src/master/

::: details
There is also an experimental initramfs under development (may not function reliably):  
https://github.com/ps4gentoo/initramfs

Additional reference material:  
https://ps4linux.com/forums/d/93-tutorial-for-building-a-custom-initramfs-research-development
:::

---

## Distros

Recommended Linux distributions for PS4 systems.

> [!DANGER]
> On Baikal systems or 5.4.x kernels, ensure Mesa ≤ 25.1. Newer versions break GPU acceleration.

### Notes
Arch-based distributions are recommended due to smoother update behavior and driver handling. Other distros may require manual intervention during updates.

| Distro | Compatible Southbridge & Mesa | Port credits | Info |
|--------|------------------------------|--------------|------|
| [CachyOS Light](https://ps4linux.com/forums/d/422-cachyos-light-lxqt-a-light-and-fast-distro) | Aeolia, Belize (Mesa 25.3.5) | DionKill | Lightweight CachyOS build. Recommended. |
| [Arch](https://github.com/ErkkolaMaitohappo/arch-ps4-aur-smth-fork/releases/) | Aeolia, Belize (Mesa 25.3.3) | Erkkola | Multiple desktop options. |
| [Artix (Froyo)](https://github.com/VanilliteFroyo/Artix-PS4/releases/tag/Artix-v0.2) | Aeolia, Belize (Mesa 26) | VanilliteFroyo | dinit-based, advanced users. |
| [Artix](https://github.com/ErkkolaMaitohappo/ps4-arch-based-distros/releases/tag/artix-ps4-V1) | Aeolia, Belize (Mesa 25.3.3) | Erkkola | Multiple init systems. |
| [Arch - Baikal Edition](https://mega.nz/file/JNkUgZLY#q-XwRcz81SLyMBE_-RIpbtRZIi2pGaH-8xCc6-uFXRI) | Baikal (Mesa 25.1) | deWaardt | Experimental build. |
| [CachyOS Server Edition](https://github.com/sony-jaguar-devs/distros/releases) | Aeolia, Belize | rmux | Server-only, no desktop environment. |
| [JaguarLinux](https://ps4linux.com/forums/d/265-jaguarlinux-a-ps4-linux-only-distro-beta-release/3) | Aeolia, Belize (Mesa 26-devel) | TigerClips1 | Experimental PS4-native distro. |

::: details
Want to add or build distros?  
- Open an issue to request additions  
- See: /ps4/distrodiy
:::