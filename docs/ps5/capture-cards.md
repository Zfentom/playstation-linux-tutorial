# Caputure card support

> [!DANGER]
> It has been decided that this will not be updated until more info has been gathered because its hard to keep up with updating the info if nobody makes pr's


| Driver / Component Name | What it takes to make it work |
| :--- | :--- |
| **Internal Wi-Fi (Marvell 1b4b:2b56 / NXP)** | To enable the built-in wireless chip, you must clone the custom repository (`git clone https://github.com/ps5-linux/ps5-linux-mwifiex`), navigate into the folder, and run `sudo ./install.sh`. <br> *Note: While it functions, it is known to randomly crash after extended use, which might be caused by default Linux Active State Power Management (ASPM) conflict bugs.* |
| **Internal Wi-Fi (MediaTek MT7921 / Alternative Variants)** | Certain PS5 hardware revisions come equipped with a MediaTek wireless module instead of Marvell. These are technically documented differently and may have alternative native driver handling depending on your kernel tree. |
| **Internal Ethernet Controller (0x104d:0x9104)** | Currently an open development task (TODO). Native support for this integrated network interface ID is pending driver refinements. |
| **Internal Bluetooth Controller (0x104d:0x9108)** | Currently **not working out of the box**. Making it fully operational requires specific underlying adjustments to the kernel's XHCI USB controller driver stack. |
| **Devkit 10GbE LAN Interface** | Fully working for development hardware kits. It is natively handled by the `bnx2x` kernel module following community driver updates. |
| **M.2 NVMe SSD Expansion Slot** | Natively supported only on **firmware versions 4.00 through 6.02** (completely unsupported on 3.xx firmware streams). <br> To use it: <br>1. Format the drive within the stock PS5 OS first. <br>2. Boot into Linux via USB, open `ps5-linux-tools`, and run `sudo ./m2_init`. <br>3. Flash the operating system onto the drive using `sudo ./m2_install.sh` to achieve direct SSD booting. |
| **AMDGPU SMU (GPU Telemetry)** | While 3D graphics hardware acceleration functions, full telemetry logging (displaying the accurate current GPU core frequency and temperatures) is a work-in-progress task. |
| **HDMI Display Controller stack** | Natively pushes standard video and audio output configurations up to **4K@60Hz**. However, custom adjustments for HDR toggles, full RGB range scaling compatibility, and high-refresh 120Hz options remain under active development or display black screen faults on select monitors. |

