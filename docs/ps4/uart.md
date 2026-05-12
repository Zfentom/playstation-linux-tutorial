# UART on Jailbroken consoles

## Credits to [this repo by meerzulee](https://github.com/meerzulee/ps4-uart)

Capture and monitor UART serial output from a jailbroken PS4 using an Arduino CH340 as a USB-to-serial passthrough.

# Requirements

 -  Jailbreakable PlayStation 4
 -  Arduino with CH340 USB-to-serial chip
 -  Soldering iron + wires
 -  A device with Python 3 and pyserial

# Setup

## 1. Solder UART on PS4

Follow the soldering guide for your PS4 model - credit to [repair.wiki page](Follow the soldering guide for your PS4 model).

<img src="/screenshots/UART-pinouts.webp" loading="lazy" >

- Connect tx to rx on adapter

## 2. Load the UART Payload

You can load the payload using either the [Payload Guest from Al-Azif](https://github.com/Al-Azif/ps4-payload-guest/releases/tag/v0.98) or by using exploit hosts from Echo Stretch or Kairo. You can also self-host your own exploit host.

For manually loading the payload you can get the payload from this repo [here](https://github.com/ArabPixel/PSFree-Enhanced/tree/main/includes/payloads/Bins)

## 3. Connect Arduino CH340

Wire the Arduino as a USB-to-serial passthrough:

| From | To |
|------|----|
| PS4 TX |	Arduino TX (pin 1) |
| PS4 GND |	Arduino GND |
| Arduino RST |	Arduino GND |

> Grounding RST disables the ATmega chip, making the CH340 act as a direct USB-to-serial converter.

Plug the Arduino into your Device via USB.

## 4. Run the Script

```python

python3 ps4uart.py start    # start capturing in background
python3 ps4uart.py live     # watch output in real-time

```

## Commands

| Command | Description |
|------|-------------------------------------------------------------|
| python3 ps4uart.py start |	Start capturing UART in the background |
| python3 ps4uart.py stop  |	Stop the capture |
| python3 ps4uart.py live  |	Tail the log in real-time (Ctrl+C to stop watching) |
| python3 ps4uart.py status |	Check if capture is running and show stats |
| python3 ps4uart.py dump  |	Print the full current log |
| python3 ps4uart.py list  |	List all saved log files |
| python3 ps4uart.py clean |	Remove all log files |

Logs are saved to ``logs/`` with timestamps. The logger auto-reconnects if the serial connection drops.
