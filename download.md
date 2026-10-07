---
title: Download
scripts:
  - /assets/js/releases.js
---
MSFS Blind Assist comes in two builds. Both are a zip file: extract it to a folder of your choice and run `MSFSBlindAssist.exe`.

## Stable release

The release build is the one most pilots should use.

<p><a class="button download" href="https://github.com/oasis1701/msfs-blind-assist/releases/latest/download/MSFSBA.zip">Download MSFSBA.zip (latest release)</a></p>
<p id="release-version" hidden></p>

The release notes are on the [latest release page](https://github.com/oasis1701/msfs-blind-assist/releases/latest), and every earlier version is on the [Releases page](https://github.com/oasis1701/msfs-blind-assist/releases).

## Preview build

The preview is rebuilt every time a change lands on the project's main branch. It has the newest work, reviewed and tested, but with far less flying time than a release, so bugs and stability problems are more likely. If you want new features early and do not mind reporting problems, this is the build for you.

<p><a class="button" href="https://github.com/oasis1701/msfs-blind-assist/releases/download/preview/MSFSBA-preview.zip">Download MSFSBA-preview.zip (rolling preview)</a></p>
<p id="preview-version" hidden></p>

Everything the preview contains since the last release is listed on the [preview release page](https://github.com/oasis1701/msfs-blind-assist/releases/tag/preview).

## Requirements

- Windows 10 or 11, 64-bit, with Microsoft Flight Simulator 2020 or 2024.
- The [.NET 10 Desktop Runtime (x64)](https://dotnet.microsoft.com/download/dotnet/10.0). If it is missing, the app says so when you start it and points you to the download.
- A screen reader. MSFS Blind Assist is designed for NVDA and JAWS.
- For the FlyByWire A32NX, the FlyByWire A380X and the Fenix A320: the free [MobiFlight WASM module](https://mobiflight.com/download/thank-you), placed in your MSFS Community folder. The app uses it to set those aircraft's cockpit controls. Without it, many controls on those aircraft will not respond, though reading and announcements still work. The PMDG and HorizonSim aircraft do not need it.

## Installing and updating

1. Download the zip and extract it to a folder of your choice.
2. Run `MSFSBlindAssist.exe`.
3. With the simulator running, pick your aircraft from the Aircraft menu.

The app checks GitHub for updates when it starts and installs them for you. Release builds are offered by default. To be offered previews as well, switch the channel under Settings, then Updates. To update by hand, close MSFS Blind Assist and extract the new zip over the same folder.

### Going back from a preview to a release

Set the channel to Release builds under Settings, then Updates, and use Check for Updates in the Application menu. The current release is offered even though its version number is lower than the preview you are running. You can also download the release zip above, close MSFS Blind Assist and extract it over your installation folder.
