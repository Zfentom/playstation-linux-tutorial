# Monitor support

> [!DANGER]
> It has been decided that this will not be updated until more info has been gathered because its hard to keep up with updating the info if nobody makes pr's


| Monitor Model / Name | What it takes to make it work |
| :--- | :--- |
| **Dell U2515H** | To achieve **2560x1440@60Hz**, you must remove `video=DP-1:1920x1080@60` from the `cmdline.txt` file. Standard **1080p@60Hz** works via forced mode. |
| **HiSense 58A7100F (4K TV)** | Plug and play for **3840x2160@60Hz**, **2560x1440@60Hz**, and **1920x1080@60Hz**. No special configuration noted. |
| **Acer Predator X34 (Ultrawide)** | Supports **1920x1080@60Hz**. Note: Native **3440x1440p@60Hz** is currently unsupported/not working. |
| **Dell S3225QC** | Works at **3840x2160@60Hz**, **2560x1440@120Hz**, and **1920x1080@60Hz**. Note: **1920x1080@120Hz** is unsupported and does not work. |
| **LG 55" OLED55B4ELA** | Works perfectly with the **default cmdline.txt** after **enabling HDCP**. Previously reported as not working/no signal even when using `amdgpu.force_1080p=1`. |
| **Dell P2723D** | Native resolution is unsupported, but it works successfully via **forced 1080p**. |
| **Samsung QE77S90C (4K TV)** | Only works at **3840x2160@60Hz**. Other modes (**2560x1440**, **1920x1080**, and **1280x720**) at 60Hz are completely unsupported. |
| **LG C1 77"** | One user reported **no luck / not working** on this specific 77" variant. |
| **LG C1 OLED (General)** | Reported as **working** successfully by other users in the community. |
| **Gigabyte Aorus OLED** | Only achieves **1440p@60Hz**. It includes a 90Hz mode, but using it cuts out roughly 30% of the screen. |
| **Samsung QN800A (8K TV)** | Currently **not working**. |
| **LG UltraGear+ OLED** | Currently **not working**. |
| **Dell S2721DGF** | Currently **not working** (shares the same panel architecture as LG 27GL850, Lenovo Legion Y27q, and ViewSonic Elite XG270QG which face driver/panel compatibility issues). |
| **MSI MAG274Q QD E2 (27" 1440p)** | Currently **not working** (drops to a black screen, encountering the exact same panel-related limitations as the Dell S2721DGF). |
| **MSI Pro MP161 (Portable)** | **Working via HDMI**, but you must power the portable monitor using an external power source instead of drawing power from the PS5 USB ports, otherwise it will crash when resuming. |
| **Gigabyte M28U** | Works out of the box at **4K @ 60Hz** with HDMI audio properly routed to the internal monitor speakers. |
| **Onn 24" FHD Gaming Monitor** | Boots without `video=DP-1:1920x1080@60`. However, changing the resolution to anything else (even down to 720p) drops to a "no signal" black screen. Reverting back to 1080p also outputs a black screen. Adding `video=DP-1:1920x1080@120` results in a black screen at the login window. Note: The monitor's HDMI ports likely do not support HDMI 2.1 features since the PS5 video settings do not expose 120Hz. |
| **LG C8 (2018)** | Confirmed **working with Ubuntu**, but does not work with CachyOS yet. |
