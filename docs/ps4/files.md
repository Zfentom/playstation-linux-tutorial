# Getting the files

> [!WARNING]
> Some of the following links look sketchy, but the community is a divided mess for various reasons one of them being language barrier, stealing source, and not many people work on the ps4. Refer to the [Other Issues](/ps4/issues#other-issues) section more info.
## Kernels

This is the section for recommended kernels. There are both vanilla kernels and performance kernels. Ordered by newest to oldest, the top ones are the recommended ones.

[Credits for all of these kernels](/ps4/ending#credits).

### Kernel list
These are normal general-use kernels with additional patches to make them work properly on the PS4.

> [!tip]
> For 6.15.4 kernel get the `bzImage_Clang_thinLTO`, if available. Some consoles may require the use of the `no-built-in-fw` variant.

| Kernel Download                                                                                           | Compatible Southbridges | Source Code                                         | Extra info                                                                            |
| --------------------------------------------------------------------------------------------------------- | ----------------------- | --------------------------------------------------- | ------------------------------------------------------------------------------------- |
| [7.0-Clean](https://github.com/rmuxnet/ps4-linux-12xx)                                                     | Baikal          | [GitHub](https://github.com/rmuxnet/ps4-linux-12xx) | 7.0 work by rmux lives here.<br>Pick the branch or release you need from the repo.   |
| [6.18.21](https://github.com/rmuxnet/ps4-linux-12xx) <br> (Recommended)                                    | Aeolia, Belize          | [GitHub](https://github.com/rmuxnet/ps4-linux-12xx) | Prebuilts are in the repo releases even if they are not marked latest.                |
| [6.15.4](https://github.com/feeRnt/ps4-linux-12xx/releases/tag/v6.15.4__crashnt-4.7)                      | Aeolia, Belize          | [GitHub](https://github.com/feeRnt/ps4-linux-12xx/) | LTO and other improvements.<br>**ThinLTO** recommended.                               |
| [5.15.15](https://github.com/feeRnt/ps4-linux-12xx/releases/tag/v5.15.15__obsidianx-4.0) <br> Belize Ver. | Belize                  | [GitHub](https://github.com/feeRnt/ps4-linux-12xx/) | Same as above. Might provide better performance than 6.15.4.                          |
| [5.4.247](https://github.com/feeRnt/ps4-linux-12xx/releases/tag/v5.4.247__neocine-1.1)                    | Baikal                  | [GitHub](https://github.com/feeRnt/ps4-linux-12xx/) | Specific for Baikal systems. Don't use on any other console!                          |

### Server kernels
If you are using the PS4 as a server, use these instead of the normal desktop-oriented builds when available.

> [!TIP]
> Pair server kernels with the `128MB` server payload unless you have a specific reason not to.

| Kernel Download                                                                                           | Compatible Southbridges | Source Code                                         | Extra info                                                                                                  |
| --------------------------------------------------------------------------------------------------------- | ----------------------- | --------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| [6.18.21](https://github.com/rmuxnet/ps4-linux-12xx) <br> (Recommended)                                  | Aeolia, Belize          | [GitHub](https://github.com/rmuxnet/ps4-linux-12xx) | Contains the Strawberry server prebuilts in the repo releases.                        |
| [7.0-Clean](https://github.com/rmuxnet/ps4-linux-12xx)                                                    | Aeolia, Belize          | [GitHub](https://github.com/rmuxnet/ps4-linux-12xx) | Newer 7.0 server work by rmux.<br>Use the repo to pick the branch or release you want. |

If you have issues, remember to check the [Issues page](/ps4/issues). If you want more help, check out [Discord servers](/ps4/information#important-places).

## Initramfs
This is the rescue shell that boots your Linux installer/installation.

Download [this one](https://github.com/DionKill/ps4-linux-tutorial/blob/main/PS4%20Linux/initramfs.zip). [Source (not really)](https://bitbucket.org/piotrkarbowski/better-initramfs/src/master/).

::: details More details
There's another in-dev initramfs (probably not working), if you want to check out the source it's [here](https://github.com/ps4gentoo/initramfs).

Also, you may want to read [this post](https://ps4linux.com/forums/d/93-tutorial-for-building-a-custom-initramfs-research-development) on the PS4 Linux forums, it explains what an initramfs is and does in actuality.
:::
## Distros (that you should use)
There's tons of distros, tthe list of distros here are the ones that are recommended for you to use. 
> [!DANGER]
> If you have a Baikal console (many PS4 Pros are the Baikal variant) or are otherwise using the 5.4.x kernels, make sure your distro ships with Mesa version 25.1 or lower. Newer versions are not supported on this Linux version, and so GPU acceleration will not work. See this GitHub issue or this page to understand why.

::: details More about these distros
Each distro has it's own pros and cons. But most of the difference on PS4 comes down to drivers; each distro requires it's own version of them and it can be a pain in the ass to install.

**Arch based distros are recommended**, but not because you need to be part of the elite. They are the only ones that currently have automatic updates (meaning with the rest of the system) without breaking anything.

You can of course use other distros, but you do run the risk of breaking your distro or having to reinstall everything when something needs updating, unless you know what you are doing.
:::

| Distro                                                                                              | Compatible Southbridge & Mesa     | Port credits                                    | Info                                                                                                                                                       |
| --------------------------------------------------------------------------------------------------- | --------------------------------- | ----------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [CachyOS Light](https://ps4linux.com/forums/d/422-cachyos-light-lxqt-a-light-and-fast-distro)       | Aeolia, Belize<br>(Mesa 25.3.5)   | DionKill                                        | CachyOS, but without it running like crap. Automatic Mesa updates.<br>**Recommended.**                                                                     |
| [Arch](https://github.com/ErkkolaMaitohappo/arch-ps4-aur-smth-fork/releases/)                       | Aeolia, Belize<br>(Mesa 25.3.3)   | [Erkkola](https://github.com/ErkkolaMaitohappo) | An Arch install with different desktops: KDE, XFCE or even TempleOS!                                                                                       |
| [Artix from Froyo](https://github.com/VanilliteFroyo/Artix-PS4/releases/tag/Artix-v0.2)		      | Aeolia, Belize<br>(Mesa 26) 	  | [VanilliteFroyo](https://github.com/VanilliteFroyo) | Artix with dinit, not for linux beginners							      |
| [Artix](https://github.com/ErkkolaMaitohappo/ps4-arch-based-distros/releases/tag/artix-ps4-V1)                       | Aeolia, Belize<br>(Mesa 25.3.3)   | [Erkkola](https://github.com/ErkkolaMaitohappo) | artix dinit, openrc, runit or s6. not for linux beginners.                                                                                    |
| [Arch - Baikal Ed.](https://mega.nz/file/JNkUgZLY#q-XwRcz81SLyMBE_-RIpbtRZIi2pGaH-8xCc6-uFXRI)      | Baikal<br>(Mesa 25.1)             | [deeWaardt](https://github.com/deWaardt)        | Test distro. Use this if you have a Baikal system.<br>[More info](https://discord.com/channels/969774306928251030/969782998029459486/1480523958817394698). |
| [CachyOS "Strawberry" Server Edition](https://github.com/sony-jaguar-devs/distros/releases)         | Aeolia, Belize                    | [rmux](https://github.com/rmuxnet/)             | *For server use only*! It doesn't run any DE!                                                                                                              |
| [JaguarLinux](https://ps4linux.com/forums/d/265-jaguarlinux-a-ps4-linux-only-distro-beta-release/3) | Aeolia, Belize<br>(Mesa 26-devel) | [TigerClips1](https://github.com/TigerClips1/)  | A distro made from scratch for the PS4! Void-based & in development. Worth a mention.                                                                      |

>[!TIP]
>Want to add more distros? Make an issue and your wish shall be granted.
>
>Want to make your own? [Check this out!](/ps4/distrodiy)


