# Support for other hardware

> [!DANGER]
> It has been decided that this will not be updated until more info has been gathered because its hard to keep up with updating the info if nobody makes pr's

| Hardware Model / Name | What it takes to make it work |
| :--- | :--- |
| **Startech 10G2A1C25EPD-USB-HUB** | Works out of the box. The USB Type-C connector, 2x USB Type-A ports, and the 2.5GBe Ethernet port are all fully recognized and utilized by Linux. |
| **DELL WD19TBS Dock Station** | Confirmed working on the latest firmware (and likely other similar models) when connected via a **Baseus Mini OTG Adapter (USB 3.1 to Type-C)**. The Type-C connector, all USB Type-A ports, and the 1GBe Ethernet port are fully functional. |
| **Orico Type-C 6-in-1 Docking Station (PW11-6PR)** | Mostly working. The Gigabit Ethernet port and 3x USB-A ports work flawlessly. Note: The integrated HDMI port is currently untested. |
| **TP-Link Archer TX10UB Nano (AX900)** | Works perfectly out of the box. Both the Wi-Fi 6 and Bluetooth 5.3 functionalities run smoothly without any extra setup. |
| **ASUS USB BT540 Bluetooth Adapter** | Currently **not working**. Although it shows up in `lsusb` (ID `0b05:1bef`), the Bluetooth controller is not recognized or initialized by the Linux kernel. |
| **Bluetouch™ iOS App** | Confirmed **working** as an alternative utility to control a wireless keyboard and mouse configuration through a working Bluetooth adapter setup. |
| **FENVI 1800Mbps WiFi 6 USB Adapter** | Works completely out of the box via USB 3.0. Uses the **MT7921 chip** and requires absolutely no manual configuration. |
| **TP-LINK UB500 Bluetooth 5.0 Nano Adapter** | Works completely out of the box with no configuration or additional drivers needed. |
