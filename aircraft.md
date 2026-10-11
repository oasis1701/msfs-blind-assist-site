---
title: Supported aircraft
---
Every supported aircraft includes the core features: taxi guidance, the landing exit planner, hand-fly and visual landing guidance, the route viewer, gate and runway teleport, METAR reports, location information and the text-based map. Each aircraft also adds support for its own systems.

## FlyByWire Airbus A320neo (A32NX)

Full support for the free FlyByWire A32NX.

- Panels across the overhead, glareshield, main instrument and pedestal sections, with status fields that list live system readouts.
- Every upper ECAM message, caution and memo readable and auto-announced, plus Flight Mode Annunciator announcements. The PFD, ND, ISIS and System Display pages are read through accessible status boxes.
- All FCU controls, with value-entry windows for speed, heading, altitude, vertical speed, autopilot and altimeter, and knob push and pull.
- The MCDU, through FlyByWire's SimBridge, for full FMS programming, and fuel, payload, weight and balance in full. In the [preview build]({{ '/download/' | relative_url }}#preview-build) the MCDU reads straight from the aircraft's own display, and SimBridge is only needed for printouts.
- The DCDU datalink window for CPDLC with Hoppie, SayIntentions or BeyondATC, spoken TCAS guidance, and the flyPad Electronic Flight Bag rendered as a browsable document.

## Headwind Airbus A330-900neo

The Headwind A330-900neo is based on the FlyByWire A32NX, so everything in the [FlyByWire A32NX section](#flybywire-airbus-a320neo-a32nx) also applies: the same panels, the FCU windows with knob push and pull, ECAM and Flight Mode Annunciator announcements, the MCDU, the DCDU datalink window, spoken TCAS guidance and the flyPad Electronic Flight Bag. Like the FlyByWire aircraft, it requires the MobiFlight WASM module.

- Visual landing guidance is tuned for the heavier widebody and its higher approach speed, and taxi guidance times its turn calls for the longer airframe.
- Its own checklist and hotkey guide, and the Monitor Manager to silence any automatic announcement you do not want.

## FlyByWire Airbus A380X

Full support for the free FlyByWire A380X. No add-on or Developer Mode is needed: the app reads the real cockpit displays live through the simulator's display engine.

- The MFD, driven through the KCCU, presented as a flat list you arrow through: full FMS flight planning, SimBrief route load, departures and arrivals, performance and weights, airways and holds.
- ATC COM datalink, secondary flight plans and the surveillance pages, the flyPad, and a Radio Management Panel window that tunes radios as in the real aircraft.
- The live Electronic Checklist, fully interactive, with sensed items ticking themselves as you perform them.
- Panels for every system, the 16 System Display pages and the E/WD read aloud with the full Flight Warning System stream.
- Automatic announcements for Master Warning and Caution, the full FMA, approach capability, spoken TCAS guidance, runway overrun protection and Brake-To-Vacate rollout call-outs. Metric altitude and kilogram or pound weights follow the aircraft's own settings.
- A complete screen-reader-first manual ships with the app in its Guides folder.

## Fenix A320

- Control of over 300 switches and knobs across the overhead, main instrument, pedestal and glareshield sections.
- Hotkeys for FCU operations: pulling and pushing knobs, adjusting values and toggling autopilot controls.
- Monitoring of over 470 annunciators, gauges, electrical buses and switch states, announced as they change.
- The MCDU, accessible directly inside MSFS Blind Assist.
- AI-powered reading of the ECAM, ISIS, PFD and navigation displays, using your own free Google AI Studio key.
- A hotkey guide and a work-in-progress checklist viewer.

## PMDG Boeing 777

- Panels across the overhead, glareshield, main instrument and pedestal sections, including armrests, heaters, sun visors, windows, shades, doors and worktables.
- MCP autopilot controls with dialogs for speed, heading, altitude and vertical speed or flight path angle, plus live engaged-mode readouts.
- The Captain, First Officer and Observer CDUs for full FMC programming, and the Electronic Flight Bag: Dashboard, Preferences, Navdata, Performance, Ground Ops, Weights and Balance and Manuals.
- Radio and transponder tuning, Master Warning and Caution, and continuous monitoring of annunciators and system states.
- System Display synoptic read-outs organized like the real Display Select Panel pages, read live from the SDK with no display OCR, and AI display reading with your own Google AI Studio key.

## PMDG Boeing 737 NG3

Covers the 737-600, -700, -800 and -900.

- Panels across all systems: electrical, hydraulics, pressurization, APU, fuel, fire protection, anti-ice, lights and more.
- The full MCP button set with live engaged-state readouts and direct-set dialogs for speed, heading, altitude and vertical speed.
- The Captain and First Officer CDUs, NAV radio tuning, altimeter set and readout in hPa and inches, and EFIS minimums entry.
- Spoken flap and speed-brake positions, real stab-trim units, fire-handle operation, Master Warning and Caution recall, the Boris Audio Works sound-pack panel and the system test buttons.
- The Electronic Flight Bag across all four variants, and AI display reading with your own Google AI Studio key.

## iFly Boeing 737 MAX8

Connects through the official iFly SDK, so no add-on or module is required. The aircraft only needs to be loaded in the simulator.

- Panels across the overhead, glareshield, forward panel and pedestal sections: electrical, fuel, hydraulics, air systems, pressurization, anti-ice, engines and APU, lights and signs, oxygen, flight controls, IRS, landing gear, autobrake, GPWS, EFIS, fire protection, trim, the control stand and more. Annunciator lights announce as they come on or go off, and a Monitor Manager silences any announcement you do not want.
- MCP value windows for speed, heading, altitude, vertical speed and the altimeter, an autopilot window whose buttons show their live state, and every MCP mode button on the Glareshield panel with its Engaged or Off state spoken.
- The FMC in the same accessible window as the PMDG 737 CDU, with either CDU selectable and a scratchpad field, and an FMS Data panel that lists the FMC's V1, VR, V2 and VREF, take-off and landing flaps, cruise altitude and transition altitude. V1, Rotate and V2 are called on the take-off roll.
- Flap speeds for each flap setting calculated from the live gross weight, and distance and time to destination and to top of descent read from the FMC progress page.
- Radio, NAV and ADF tuning with typed frequencies, a typed squawk code with ident, and the audio control panel with mic selectors and receiver volumes for the Captain, First Officer and overhead units.
- The iFly EFB tablet in its own window, with performance, Navigraph and SimBrief, payload and balance, ground services including pushback, doors and failures; a normal-procedures checklist; and AI display reading of the PFD, ND, standby instrument and engine display with your own AI key.

In the [preview build]({{ '/download/' | relative_url }}#preview-build), the speed brake lever can also be moved from the Control Stand panel.

## HorizonSim Boeing 787-9

Compatible with both Microsoft Flight Simulator 2020 and 2024.

- The FMC read live with no add-on or Community-folder mod, with an alternate LSK key layout on F1 to F12.
- Panels for IRS with live alignment status, anti-ice, signs, lights, landing, pressurization, cooling, annunciators, APU, external power and ground services.
- A full EICAS window with per-engine readings, fuel, gross weight and live crew alerts, a live system synoptic display window, and optional AI read-outs of the ND, PFD and standby instrument.
- A Monitor Manager to silence any automatic announcement you do not want.
- Autopilot and autothrottle controls, altitude intervention, Mach input, baro set and announcements in hectopascals and inches, and TCAS gate lookup.

## In the next release: TFDi Design MD-11

The TFDi Design MD-11 is available now in the [preview build]({{ '/download/' | relative_url }}#preview-build) and will be included in the next release: cockpit panels with spoken state, the Flight Control Panel, all three MCDUs and the Electronic Flight Bag in their own windows, typed radios, squawk, altimeters and minimums, and V1, Rotate and V2 call-outs on the take-off roll.
