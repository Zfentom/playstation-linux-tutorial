# Internal M.2 Installation

You can use a M.2 SSD exclusively for Linux (which means you cannot use it for PS5 game storage).

 - 1.  Attach the M.SSD and format it on your PS5.
 - 2.  Boot Linux on your PS5 and run these commands to initialize your M.2:

```bash
cd ps5-linux-tools
sudo ./m2_init
```
 - 3.  Reboot via ``sudo reboot``. If your PS5 asks you to format your M.2 again, please report this issue to us in our [Discord server](https://discord.com/invite/PeMGVB7BAm) and provide your M.2 model and storage size.
 - 4.  Relaunch Linux on your PS5.
 - 5.  Copy the ``ps5-ubuntu2604.img`` image that you built during installation or rebuild it on your PS5. Then, install it onto your M.2:

```bash
cd ps5-linux-tools
chmod +x ./m2_install.sh
sudo ./m2_install.sh --install $PATH_TO_YOUR_IMG
```

Now, you can boot into Linux on your M.2 via:

```bash
cd ps5-linux-tools
chmod +x ./m2_exec.sh
sudo ./m2_exec.sh
```

Then follow the same instructions again as the previous section.

In order to always boot Linux from your M.2, you can edit the label at ``/boot/efi/cmdline.txt`` from ``root=LABEL=ubuntu2604`` to ``root=LABEL=ubuntu2604-m2``.