---
title: Download
scripts:
  - /assets/js/releases.js
---
MSFS Blind Assist is available in two builds, each distributed as a zip file. Extract it to a folder of your choice and run `MSFSBlindAssist.exe`.

## Stable release

The stable release is recommended for most pilots.

<p><a class="button download" href="https://github.com/oasis1701/msfs-blind-assist/releases/latest/download/MSFSBA.zip">Download MSFSBA.zip (latest release)</a></p>
<p id="release-version" hidden></p>

Release notes are on the [latest release page](https://github.com/oasis1701/msfs-blind-assist/releases/latest), and earlier versions are on the [Releases page](https://github.com/oasis1701/msfs-blind-assist/releases).

## Preview build

The preview is republished every time a change is merged into the project's main branch. It contains the newest work, reviewed and tested, but with far less flying time than a release, so bugs and stability problems are more likely. Choose the preview if you want new features early and are willing to report problems.

<p><a class="button" href="https://github.com/oasis1701/msfs-blind-assist/releases/download/preview/MSFSBA-preview.zip">Download MSFSBA-preview.zip (rolling preview)</a></p>
<p id="preview-version" hidden></p>

Changes in the preview since the last release are listed on the [preview release page](https://github.com/oasis1701/msfs-blind-assist/releases/tag/preview).

## System requirements

- Windows 10 or 11, 64-bit, with Microsoft Flight Simulator 2020 or 2024.
- The [.NET 10 Desktop Runtime (x64)](https://dotnet.microsoft.com/download/dotnet/10.0). If it is not installed, the app tells you at startup and directs you to the download.
- A screen reader. MSFS Blind Assist is designed for NVDA and JAWS.
- For the FlyByWire A32NX, the FlyByWire A380X, the Headwind A330-900neo and the Fenix A320: the free [MobiFlight WASM module](https://mobiflight.com/download/thank-you), placed in your MSFS Community folder. The app uses it to operate the cockpit controls on those aircraft. Without it, many of their controls will not respond, although readouts and announcements still work. The PMDG, iFly and HorizonSim aircraft do not need it.

## Installation and updates

1. Download the zip and extract it to a folder of your choice.
2. Run `MSFSBlindAssist.exe`.
3. With the simulator running, select your aircraft from the Aircraft menu.

The app checks GitHub for updates at startup and installs them for you. By default it offers release builds only; to receive previews as well, change the channel under Settings, then Updates. To update manually, close MSFS Blind Assist and extract the new zip over the same folder.

### Returning to a release build

Set the channel to Release builds under Settings, then Updates, and use Check for Updates in the Application menu. The current release is offered even though its version number is lower than the preview you are running. Alternatively, download the release zip above, close MSFS Blind Assist and extract it over your installation folder.
