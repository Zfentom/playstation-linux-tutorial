# Game testing and info on how to get it running
This page is dedicated to testing and reporting games running on PS4 Linux.

> [!CAUTION]
> Some of these games have worked perfectly fine in the past but could break in the future because of GPU drivers. If you see such an experience, make an issue on GitHub!
> - Also, UNREAL ENGINE 5 games are broken and **AUTOMATICALLY** unsupported. They will not be reported.

## Levels of stability and performance for PC games
There's multiple levels of stability:
- Broken
    - The game doesn't work at all
- Low
    - Major graphical glitches ruin the experience, or it just lags heavily
- Medium
    - Some issues here and there, you can still see frequent glitches
- High
    - Works for the most part, with the only issues being in specific places that don’t really affect the majority of the game
- Perfect
    - It works with no issues

> [!TIP]
> Freeing up as much RAM as possible to make some of these games launch is highly recommended. ZRAM won't help much if you have two browsers open!


::: details PC Games

| Game / Application | Stability | Performance / How It Runs | Requirements, Fixes & Notes | Online Support |
| :--- | :--- | :--- | :--- | :--- |
| **7 Days to Die** | High | Runs well at 1080p on lowest settings. | Tested on Manjaro 2022 with Mesa 22, Kernel 5.15.15 codewrench aeolia, and 2GB VRAM. | Supported |
| **Afterfall Insanity Extended Edition** | Perfect | Works with no issues. | None reported. | Not applicable |
| **Alien: Isolation** | Perfect | Works with no issues. | None reported. | Not applicable |
| **Alien Swarm** | Medium / High | Mid-40 FPS at max settings using WineD3D. | Requires Proton CachyOS and Sarek. Use `PROTON_USE_WINED3D=1` or textures render black. Delete shader cache after failed launches. Official Proton/GE builds do not work correctly. | Not applicable |
| **Aliens vs Predator (2010)** | High | Stable 50-60 FPS. | Minimal tweaks needed. | Not applicable |
| **Amnesia: The Dark Descent** | Perfect | Works with no issues. | None reported. | Not applicable |
| **Apex Legends** | Broken | Previously 40-50 FPS online. | EA Anticheat blocks Linux. Precompile shaders only reduces stutter. | Unsupported |
| **Assetto Corsa** | High | Stable 60 FPS+ racing. | Works well with Proton. | Untested |
| **Battlefield 1** | Low | 20-40 FPS with severe multiplayer lag. | Lower settings required. | Supported but limited |
| **Battlefield 3** | Medium | 45-60 FPS at 1080p on Low settings. | Some Wine-related instability. | Supported |
| **Battlefield 4 / Premium** | Medium | 30-50 FPS with battle-related drops. | Lower settings recommended. | Supported |
| **Battle.net App** | High | Functional. | Use WineHQ Staging builds. | Supported |
| **BeamNG.drive** | Medium | Poor default performance but tweakable. | Heavy CPU usage. Lower physics settings. | Not applicable |
| **Black Ops 2 Plutonium** | Medium | 40-60 FPS with multiplayer stutter. | Plutonium works under Linux. | Supported |
| **BlazBlue Cross Tag Battle** | Perfect | Stable 60 FPS. | No major issues. | Supported |
| **Borderlands 2 / GOTY** | Medium / High | 40-60 FPS depending on area and settings. | Use `PROTON_USE_D9VK=1` and disable Depth of Field for improved FPS. | Supported |
| **Call of Duty: World at War** | Medium | 30-50 FPS with Wine-related glitches. | Wine tweaks reduce glitches somewhat. | Untested |
| **Castlevania: Lords of Shadow** | High | 60+ FPS at 1080p. | Disable shadows to maintain stable FPS. | Not applicable |
| **Civilization V** | High | Stable 60 FPS early-game. Large matches can drop to 22-28 FPS. | Native Linux version works well overall. | Supported |
| **Command and Conquer 3** | Medium | Engine-locked 30 FPS. Heavy battles can dip to 19 FPS. | No major fixes required. | Untested |
| **Control** | Low | 20-40 FPS with graphical glitches. | Vulkan instability common. | Not applicable |
| **Counter-Strike: Global Offensive** | High | 40-50 FPS native online. | Use native Linux Steam build and standard FPS optimizations. | Supported |
| **Crimson Desert** | Inquiry | No performance data available yet. | Community testing pending. | Unknown |
| **Crusader Kings II** | Perfect | Stable 60 FPS. | Native Linux version works well. | Supported |
| **Dead Cells** | Perfect | Stable 60 FPS. | No tweaks required. | Not applicable |
| **Dead Island / Riptide** | High | 20-60 FPS with occasional stutters. | Native Linux builds preferred. | Supported |
| **Dead Space** | Medium | 30-50 FPS with glitches. | Wine issues possible. | Not applicable |
| **Detroit: Become Human** | Low | Frequent crashes and poor FPS. | Wine compatibility unstable. | Not applicable |
| **Diablo III** | Medium | Shader compilation causes drops. | Precompile shaders for improved consistency. | Supported |
| **Diablo IV** | Broken | Instant crash on launch. | No working solution reported. | Unsupported |
| **Doom (2016)** | Low | 22-32 FPS with heavy lag. | Lower settings required. | Not applicable |
| **Driver: San Francisco** | Broken | Ubisoft Connect issues make the game effectively unplayable. | No current fix across Linux hardware. | Not applicable |
| **Elden Ring** | Low | Around 30 FPS in small-window mode. | Performance heavily limited by hardware and drivers. | Likely functional |
| **F1 Race Stars** | High | Stable 60 FPS at 1080p. | Full Screen mode recommended. | Not applicable |
| **Fallout: New Vegas / TTW** | Medium | Playable with freezes and stutter. | Use FSR to maintain playable FPS. | Not applicable |
| **Far Cry 3** | High | Stable 50-60 FPS. | Minor drops only. | Not applicable |
| **Fighting EX Layer** | High | Stable 60 FPS at 720p. Drops to 40-50 FPS at 1080p. | Lower resolution recommended for consistency. | Supported |
| **Forza Horizon 4** | Medium | 40-60 FPS on Medium-Low settings. | Medium-Low preset recommended for stable performance. | Supported |
| **Geometry Dash** | Low / Medium | Difficulty maintaining stable 60 FPS. | Latest Mesa drivers recommended. | Supported |
| **God of War (2018)** | High | Confirmed working. | Mesa 24+ improves performance significantly. | Not applicable |
| **Grand Theft Auto IV (1.0.4.0)** | High | 20-50 FPS with no major graphical bugs reported. | Tested with Kernel 6.18.8 Strawberry and custom Mesa 26.1.0. | Not applicable |
| **Grand Theft Auto V** | High | Reports range from 20-40 FPS up to optimized 60 FPS. | Requires patched kernels, optimized Mesa drivers, Vulkan tuning, and MangoHUD FPS caps. | Works but performance-limited |
| **Grand Theft Auto: San Andreas** | Broken | Does not launch. | No known fix. | Not applicable |
| **GTA Online** | Medium | 30-50 FPS with stutters. | Lower settings recommended. | Supported but limited |
| **GRID 2** | Medium | 40-60 FPS at 1080p. | Medium preset recommended. | Untested |
| **Half-Life 2** | Perfect | 60-150 FPS on PS4 Pro. | Minor shader artifacting only. | Not applicable |
| **Honkai: Star Rail** | Broken | Breaks input/UI and may require reboot. | Custom launcher required. | Supported |
| **Hyperdimension Neptunia: Sisters vs Sisters** | Perfect | Performance similar to original OrbisOS release at 30 FPS. | Utilizes GPU almost fully. | Not applicable |
| **Just Cause 2** | High | 60+ FPS possible after overclocking. | Benchmarks better than gameplay sections. | Not applicable |
| **Kerbal Space Program** | High | Stable 50-60 FPS. | Native Linux build recommended. | Not applicable |
| **King of Fighters XV** | High / Perfect | Stable 60 FPS gameplay at 720p. | Enable hardware decoding. Minor texture flickering in videos possible. | Supported |
| **Left 4 Dead 2** | High | Stable 50-60 FPS. | Native Linux version performs well. | Supported |
| **Marvel's Spider-Man 2 (PC)** | Low | Extremely resource-intensive. | Requires aggressive optimization and latest Mesa builds. | Not applicable |
| **Metal Gear Rising: Revengeance** | High | 58-60 FPS at 720p. | Medium settings recommended. Minor cinematic stutter only. | Not applicable |
| **Minecraft** | High | Standard shaders break rendering. V-shader setup provides GTA V-style visuals. | Mesa 25.2+ recommended. Avoid standard shaders. | Supported |
| **Minecraft 1.12.2 (Optifine)** | Perfect | 100-300 FPS vanilla, stable. | Optifine recommended for older builds. | Supported |
| **Minecraft (Optimization Mods)** | Medium | 20-100+ FPS depending on hardware. | Use Simply Optimized modpack. Reduce mod count. | Supported |
| **MOTOGP 17** | Functional | Performance varies. | Delete the `Movies` folder if stuck on black screen. | Untested |
| **Outlast** | High | Stable 30-40 FPS on PS4 Pro. | Medium settings recommended. | Not applicable |
| **Overwatch 2** | Broken | Previously around 50 FPS. | BattlEye blocks Linux entirely. Shader caches only reduce stutter. | Unsupported |
| **Planet Base** | High | Stable 60 FPS at 1080p. | High settings + Vsync recommended. | Not applicable |
| **PlanetSide 2** | Medium | Heavy RAM usage and Steam overhead. | Mesa 25 and Proton CachyOS recommended to reduce stutter and RAM issues. | Supported |
| **Portal 2** | Perfect | 60-110 FPS under OpenGL. | SteamOS/OpenGL recommended. | Supported |
| **Resident Evil 0 HD Remaster** | High | Stable 60 FPS on highest settings. | Install `wmp11` in Wineprefix if stuck on black screen. | Not applicable |
| **Resident Evil 4 Remake** | Low | 10-20 FPS with Vulkan freezes. | Very unstable. | Not applicable |
| **Resident Evil Village** | Low | Frequent crashes and low FPS. | No reliable fix known. | Not applicable |
| **Resident Evil 7** | Low | Around 20 FPS with severe texture anomalies. | Lower settings required. | Not applicable |
| **Resident Evil 5** | Low | Black screens, crashes, and audio issues. | Compatibility highly inconsistent. | Not applicable |
| **Resident Evil HD Remaster** | Low | Texture issues and low FPS. | No major workaround known. | Not applicable |
| **Resident Evil: Revelations** | Low | Crashes and unstable performance. | No known stable fix. | Not applicable |
| **Rocket League** | High | Stable 50-60 FPS. | Runs well under Proton. | Supported |
| **Shadow of the Tomb Raider** | Low | 20-40 FPS with heavy lag. | Lower settings mandatory. | Not applicable |
| **Silent Hill: Homecoming** | Perfect | Stable 60 FPS max settings. | No major glitches. | Not applicable |
| **Skyrim Together Reborn** | Medium | 30-50 FPS with multiplayer stutter. | Multiplayer instability expected. | Supported |
| **SnowRunner** | High | Stable with no major crashes. | Requires significant RAM/VRAM. | Supported |
| **Sonic & Sega All-Stars Racing** | High | Stable 60 FPS with occasional drops. | Default settings generally fine. | Not applicable |
| **State of Decay 2** | Low | 25-30 FPS at 1080p. | Medium settings required for playability. | Supported but limited |
| **Steam Deck UI / GamepadUI** | Medium | Black screens and update instability possible. | Launch with `gamescope -e -h 1080 -f -- steam -gamepadui -noverifyfiles`. | Supported |
| **Street Fighter V: Champion Edition** | Medium / Perfect | 30-60 FPS depending on stage complexity. | Low Specs mode recommended. | Supported |
| **Stray** | High | Stable 50-60 FPS with minor drops. | Runs surprisingly well. | Not applicable |
| **Team Fortress 2** | High | Stable 50-60 FPS. | Native Linux build works well. | Supported |
| **Tekken 7** | Medium | Vulkan backend functional. | Requires Vulkan API and tweaks for Pro models. | Functional |
| **Teardown** | Medium | 30-50 FPS with stutters. | Physics-heavy scenes reduce FPS. | Not applicable |
| **The Forest** | Low | 20-40 FPS with severe lag. | Lower settings heavily recommended. | Supported but limited |
| **Touhou 12.3 Hisoutensoku** | High | Stable 60 FPS. | Proton upscaled from 640x480. | Not applicable |
| **Trackmania (2020)** | High | Stable 50-60 FPS. | Proton compatibility good. | Supported |
| **ULTRAKILL** | Perfect | Stable 60 FPS. | No major issues. | Not applicable |
| **Ultimate Marvel vs Capcom 3** | Perfect | Stable 60 FPS. | Excellent compatibility. | Supported |
| **Vampire Survivors** | Perfect | Stable 60 FPS. | No tweaks required. | Not applicable |
| **World of Warcraft** | Medium | 30-50 FPS depending on area load. | Performance drops in crowded zones. | Supported |
| **No Man's Sky** | Medium | Runs acceptably at 720p on lowest settings. | Requires a mandatory 4GB swap partition. Tested on Manjaro with Mesa 22 and Kernel 5.15.15 (codewrench aeolia). | Supported |
| **RealRTCW** | High | Stable 60-75+ FPS at 1080p max settings with occasional dips in heavy scenes. | Tested on SteamOS fork using PS4 Phat (Belize B0), Kernel 6.18.18, and Mesa 25. | Not applicable |
| **Resident Evil 2 Remake (DX12)** | Medium | 25-30 FPS at 1080p using mixed High/Medium settings with FXAA+TAA. | Tested on CachyOS with Kernel 6.18.18, Mesa 26, and VKD3D ACO. | Not applicable |
| **Resident Evil Requiem (DX12)** | Low | 20-30 FPS using low FSR Performance mode. | Requires a custom/private Mesa 26 build with VKD3D ACO on CachyOS (Kernel 6.18.18). Extremely difficult to run reliably. | Not applicable |
| **Silent Hill 2 Remake** | Low | Very poor performance at 15-18 FPS on Low settings at 720p. | Tested only in the starting area using CachyOS, Kernel 6.18.18, Mesa 26, and DXVK ACO. | Not applicable |
| **Slime Rancher 2** | Low | 13-30 FPS depending on scene complexity. | Likely CPU bottlenecked. Tested on PS4 Slim (FW 12.52) with Proton Sarek 10-29. | Not applicable |
| **Smash Legends** | Medium | Reaches 60 FPS but fluctuates heavily. | Capping to 30 FPS is recommended. UI menus stutter heavily and may require touchpad/mouse input. Tested with Proton GE/Sarek on CachyOS. | Supported |
| **Roblox (via Sober)** | Low | 10-30 FPS depending on game and graphics settings. | Tested on Base PS4 (Aeolia) using CachyOS, Kernel 6.18.18, Mesa 26, Vulkan ACO. | Supported |
| **Spec Ops: The Line** | High | Main menu and gameplay run at 50-60 FPS. | DXVK does not render correctly. Must use `PROTON_USE_WINED3D=1 %command%`. Steam version works up to Proton 9; GOG works on latest Proton. Tested on PS4 Pro Belize. | Not applicable |
| **Slime Rancher 2** | Low | Runs between 13-30 FPS depending on scene complexity. | Likely CPU bottlenecked. Tested on PS4 Slim (FW 12.52) using Proton Sarek 10-29. | Not applicable |
| **Smash Legends** | Medium | Can reach 60 FPS at max settings but fluctuates heavily. | 30 FPS cap recommended for consistency. UI menus stutter heavily and controller bugs may require touchpad/mouse input. Tested with Proton GE/Sarek on CachyOS. | Supported |
| **Roblox (via Sober)** | Low | Runs at 10-30 FPS depending on the Roblox experience and graphics settings. | Tested on CachyOS with Kernel 6.18.18, Mesa 26, and Vulkan (ACO) on Base PS4 (Aeolia). | Supported |
| **Spec Ops: The Line** | High | Main menu and gameplay perform at 50-60 FPS. | DXVK rendering is broken. Must use `PROTON_USE_WINED3D=1 %command%`. Steam version works up to Proton 9; GOG version works on latest Proton. Tested with Proton 8.26 GE on PS4 Pro Belize. | Not applicable |

:::

## Levels of stability and performance for emulation
There's multiple levels of stability:
- Broken
    - The game doesn't work at all or GPU acceleration doesn't work
- Low
    - Major graphical glitches ruin the experience, or it just lags heavily
- Medium
    - Some issues here and there, you can still see frequent glitches
- High
    - Works for the most part, with the only issues being in specific places that don’t really affect the majority of the game
- Perfect
    - It works with no issues

---

::: details Emulated Games

| Game                               | Stability | Info                                                                 | Online Support Note                              |
|------------------------------------|-----------|----------------------------------------------------------------------|--------------------------------------------------|
| Mario Kart 8 Deluxe (Yuzu)         | Low       | 20 FPS, half speed on Vulkan, unstable on OpenGL. Emulator crashes.   | Online play likely limited by performance.       |
| Zelda: Breath of the Wild (Yuzu)   | Low       | 8-14 FPS, heavy lag.                                                 | No online component.                            |
| Kirby and the Forgotten Land (Yuzu)| Low       | 20 FPS, whiteness glitch in stages.                                  | Online play likely limited.                     |
| Pokemon Brilliant Diamond (Yuzu)   | Medium    | 30 FPS, frequent issues but playable.                                | Online play possible but not detailed.          |
| Super Mario 3D World (Cemu)        | High      | 50-55 FPS with Cheat Engine speedhack, tweaks needed.                | Online co-op likely functional.                 |
| General RPCS3/3DS Emu             | Low       | 20-30 FPS max, poor performance.                                     | Online play typically unsupported.              |
| Other (e.g., Yoshi's Crafted World, Xenoblade Chronicles X) | Low/Medium | 18-25 FPS, graphical issues.                        | Online play likely limited.                     |

:::

---

::: details Emulated Game Fixes and Workarounds

| Game                               | Fixes and Workarounds                                                                 |
|------------------------------------|--------------------------------------------------------------------------------------|
| Mario Kart 8 Deluxe (Yuzu)         | Use Vulkan for slightly better performance. No specific fixes for emulator crashes. |
| Zelda: Breath of the Wild (Yuzu)   | No specific fixes reported.                                                  |
| Kirby and the Forgotten Land (Yuzu)| No specific fixes reported.                                                  |
| Pokemon Brilliant Diamond (Yuzu)   | Adjust emulator settings to reduce issues. No specific fixes reported. |
| Super Mario 3D World (Cemu)       | Use Cheat Engine speedhack and tweak Cemu settings for better FPS. |
| General RPCS3/3DS Emu             | No specific fixes reported.                                                  |
| Other (e.g., Yoshi's Crafted World, Xenoblade Chronicles X) | No specific fixes reported.                                                  |

:::
