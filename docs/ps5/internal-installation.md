# External Installation

>[!WARNING]
>This is slightly different from the PS4 internal install. You are installing it on an M.2 drive that you insert into your PS5. This is not only better because it is easier, but also faster, since there is no encryption that reduces performance.

# 1. Installation

## Linux/macOS(should also work if you use BSD based distros):

1. Get a linux image

```bash
sudo apt update
sudo apt install docker.io -y
sudo service docker start
sudo usermod -aG docker $USER
```
- Note if you're using a different distro you may need to use a different command. For example for arch-based distros you would run ``sudo pacman -S docker --noconfirm``. 

---

Restart the terminal(May require you to relog from you're current user).

```bash
git clone https://github.com/ps5-linux/ps5-linux-image
cd ps5-linux-image
chmod +x ./build_image.sh
./build_image.sh --distro ubuntu2604
```

## Windows (WSL2):

If WSL2 is not installed yet, run this in PowerShell or CMD as administrator, then restart:

```bash
wsl --install
```

Then open WSL and set up Docker:

```bash
sudo apt update
sudo apt install docker.io -y
sudo service docker start
sudo usermod -aG docker $USER
```

Restart WSL from PowerShell/CMD:

```bash
wsl --shutdown
```

## Then clone and build:

> [!NOTE]
>The finished image is written to ``output/ps5-ubuntu2604.img``.

```bash
cd ~/
git clone https://github.com/ps5-linux/ps5-linux-image
cd ps5-linux-image
chmod +x ./build_image.sh
./build_image.sh --distro ubuntu2604
```

# 2. Flash the image to USB

> [!TIP]
> Minimum drive size: 64 GB. An external SSD is strongly recommended.

## Linux/macOS(should also work if you use BSD based distros):

```bash
# check drive name with lsblk / diskutil list
sudo dd if=output/ps5-ubuntu2604.img of=/dev/sdX bs=4M status=progress conv=fsync
```


## Windows (Balena Etcher):

Download [Balena Etcher](https://etcher.balena.io/), select the .img file, select your USB drive, click Flash.

# 3. Plug the USB drive into your PS5

The following USB ports are supported for booting:

  - Front bottom Type-C port
  - Rear Type-A ports

The front top Type-A port is USB 2.0 which is slower and thus not recommended.

# 4. Run the jailbreak exploit

  - 1. Clone https://github.com/idlesauce/umtx2
  - 2. Configure fakedns via ``dns.conf`` to point ``manuals.playstation.net`` to your PCs IP address
  - 3. Run fake dns: ``python fakedns.py -c dns.conf``
  - 4. Run HTTPS server: ``python host.py``
  - 5. Go into PS5 advanced network settings and set primary DNS to your PCs IP address and leave secondary at ``0.0.0.0``
  - 6. Go to user manual in settings and accept untrusted certificate prompt, run.

# 5. Send the payload

Either download [ps5-linux-loader.elf](https://github.com/ps5-linux/ps5-linux-loader/releases/), or install [ps5-payload-sdk](https://github.com/ps5-payload-dev/sdk) and compile it yourself:

```bash
git clone https://github.com/ps5-linux/ps5-linux-loader
cd ps5-linux-loader
make
```

# Compiling on ARM64 Linux

Install the x86-64 cross-compilation tools before:

```bash
sudo apt install gcc-x86-64-linux-gnu binutils-x86-64-linux-gnu
```

Find your PS5 IP at ``Settings` → ``Network`` → ``View Connection Status``.

```bash
socat -t 99999999 - TCP:192.168.178.127:9021 < ps5-linux-loader.elf
```

If all is successful, the payload will automatically go into rest mode. Wait until the orange LED stops blinking and becomes static. Only then, press the power button again to boot your PS5 into Linux. If the boot is successful, the LED should turn white. If it boots back into PS5 OS, then it's because you pressed the power button too early. Or, you did not enable rest mode features as described above.

If the LED is white, but you still have a blackscreen then:

  - Try removing ``video=DP-1:1920x1080@60`` line in cmdline.txt.
  - Try different monitors or capture cards, ideally with different resolutions. Currently, some monitors have issues.
  - Try setting ``amdgpu.force_1080p=1`` in ``cmdline.txt`` in the FAT32 partition of the USB drive.

If none of this helps, please report the issue in their [Discord server](https://discord.com/invite/PeMGVB7BAm) and provide your EDID information.

# First Boot

Configure your system and memorize your login password.

Then, there are certain settings and commands we recommend doing:

   1. Disable screen saver, as it is currently buggy.

   2. Possibly, you have to disable and reenable your Wired/WLAN connection to get internet connection.

   3. Install Firefox(You have to use snap the first time but snaps in general are really bad so i recommend using a firefox deb file after installing with snap):

```bash
sudo snap install firefox
```

   4. Update mesa:
```bash
sudo snap refresh mesa-2404 --channel=latest/edge
```

   5. Clone our [ps5-linux-tools](https://github.com/ps5-linux/ps5-linux-tools):
```bash
sudo apt install zlib1g-dev
git clone https://github.com/ps5-linux/ps5-linux-tools
cd ps5-linux-tools
make
```

