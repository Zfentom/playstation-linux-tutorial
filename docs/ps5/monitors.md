# Monitor support

> [!DANGER]
> It has been decided that this will not be updated until more info has been gathered because its hard to keep up with updating the info if nobody makes pr's


| Monitor Model / Name | What it takes to make it work |
| :--- | :--- |
| **Dell U2515H** | To achieve **2560x1440@60Hz**, you must remove `video=DP-1:1920x1080@60` from the `cmdline.txt` file. Standard **1080p@60Hz** works via forced mode. |
| **HiSense 58A7100F (4K TV)** | Plug and play for **3840x2160@60Hz**, **2560x1440@60Hz**, and **1920x1080@60Hz**. No special configuration noted. |
| **Acer Predator X34 (Ultrawide)** | Supports **1920x1080@60Hz**. Note: Native **3440x1440p@60Hz** is currently unsupported/not working. |
| **Generic / Other Monitors** | Ensure `cmdline.txt` does not have hardcoded resolution overrides if you are trying to reach native high resolutions. |