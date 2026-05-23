# Post installation things 

## Fan & boost control

We provide a simple tool that allows you to boost your CPU to 3500Mhz and GPU to 2230MHz as well as changing the fan curve:

```bash
cd ps5-linux-tools
sudo ./ps5_control --fan on
sudo ./ps5_control --boost on
```
Always turn on fan when your turn on boost, as this is what the official PS5 OS does.

## Tips and tricks

 -   You can adjust the kernel cmdline in ``cmdline.txt`` in the FAT32 partition.
 -   You can adjust the VRAM size in ``vram.txt`` in the FAT32 partition. By default, it uses 512MB (0x20000000) which enables [Dynamic VRAM allocation](https://elektricm.github.io/amd-bc250-docs/bios/flashing/#why-flash-the-bios).
 -   Monitor hotswap may work, but it will not change resolution automatically.
 -   Some monitors have a black screen if a video=DP-1: parameter is set in ``cmdline.txt``. 

Many configurations, tips and tricks from the [AMD BC250 Documentation](https://elektricm.github.io/amd-bc250-docs/) also apply to PS5.
