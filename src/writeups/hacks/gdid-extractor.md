---
title: GDID Extractor
date: 2026-08-01
category: Hacks
summary: A Windows GDID extraction proof-of-concept with Rust, C, and BOF implementations for registry and firmware discovery.
tags:
  - Windows
  - GDID
  - Rust
  - C
  - BOF
  - Registry
slug: gdid-extractor
---

# GDID Extractor

This writeup covers a proof-of-concept tool for extracting the Windows GDID identifier from local system metadata and registry artifacts. The repository includes three implementations:

- `rust/` — native Rust GDID extractor
- `c/` — cross-platform C version for Windows
- `bof/` — Beacon Object File code for use in Cobalt Strike-style workflows

![GDID Extractor Screenshot](/images/writeups/hacks/gdid-extractor.png)

## Overview

GDID is a device identifier derived from Windows platform registry values and identity metadata. This project demonstrates how to locate the relevant IdentityCRL registry entries, parse the GUID-like `LID` value, and present the resulting GDID in a human-readable format.

The PoC shows how this identifier can be reconstructed from Windows internals and illustrates the differences between application-level discovery and low-level platform interrogation.

## Key components

- `c/get_gdid.c` parses Windows registry keys and prints the `LID`, PUID, and GDID values.
- `rust/src/main.rs` uses Windows APIs to inspect the same certificate and registry state from a Rust program.
- `bof/get_gdid.c` is a Beacon Object File implementation for loading directly in a post-exploitation framework.

## Notes

This writeup is intended for defensive research, incident response, and technical analysis. It is not an exploit itself; it demonstrates how to extract an existing identifier from a live Windows environment.

## References

- https://github.com/SmtimesIWndr/gdid-reversal
- https://oofhours.com/2022/08/01/connect-the-dots-from-hardware-hash-to-autopilot-profile
