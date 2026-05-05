# Driver support

> [!DANGER]
> It has been decided that this will not be updated until more info has been gathered because its hard to keep up with updating the info if nobody makes pr's


| Component / Driver | What it takes to make it work |
| :--- | :--- |
| **LAN / Wi-Fi Drivers** | No "off the shelf" functional drivers. Most require manual implementation. |
| **Marvell (mwifiex)** | In theory works with `mwifiex` but is known to crash after a short period of use. |
| **Mediatek** | Mentioned as an alternative for some models, but specific drivers are still in development/testing. |
| **PS5 Linux Boot** | **Important:** Disabling HDCP on the PS5 will cause a black screen when trying to load Linux. |