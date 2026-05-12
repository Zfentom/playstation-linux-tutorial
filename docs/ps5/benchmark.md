# Benchmark

There are multiple ways to benchmark hardware, but this section focuses on two main areas: ***Graphics performance***, which covers Vulkan and OpenGL, and ***FPS testing***, which evaluates real-world game performance.

# Graphics

## Basemark GPU

Measures combined GPU performance across Vulkan and OpenGL workloads. Useful for comparing overall GPU capability across drivers and systems.

Install it by running ``yay -S basemark --noconfirm`` and run with ``basemark-gpu``

## Furmark

A synthetic stress test that pushes the GPU to maximum thermal and power limits. Primarily used for stability and cooling checks, not real-world performance.

Install it by running ``yay -S furmark --noconfirm`` and run with ``furmark``

> [!DANGER]
> As it is a stress test, Furmark may itself cause system stability issues. While most modern GPUs will throttle themselves if approaching hardware thermal maximums, in rare cases - especially if a card has inadequate or faulty cooling - hardware damage may result.

## vkmark

A focused Vulkan benchmark suite that tests driver efficiency and Vulkan rendering performance under standardized scenes.

Install it by running ``sudo pacman -S vkmark --noconfirm`` and run with ``vkmark``


# Game Benchmarking/FPS testing

## Mangohud

Displays real-time performance metrics while gaming, including:

- FPS
- frametime
- CPU/GPU usage
- temperatures
- power draw

Install it by running ``sudo pacman -S mangohud --noconfirm``

>If you wanna use mangohud for 32bit games enable multilib repo and run ``yay -S lib32-mangohud --noconfirm``.

For running a game with mangohud outside launchers like steam is done by running:

```bash
mangohud *game*
```

> For running a game and combining mangohud and gamemode run ``mangohud gamemoderun *game*``

If you wanna run mangohud inside a steam game you can by using this launch flag:

```bash
mangohud %command%
```

> For running a game and combining mangohud and gamemode run ``mangohud gamemoderun %command%``


And for vulkan games you just do ``MANGOHUD=1 *game*``


## Steam Overlay

Steam overlay can be used as a alternative to mangohud and has uses like showing the difference beetween actual rendered frames and generated one.

You can turn on Steam overlay by going to ``Steam settings`` → ``"In-Game"`` and selecting your preferred corner position. The overlay will then appear in your chosen corner while playing games.