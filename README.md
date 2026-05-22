# Raycast Hotkey Menu Extension

A visual, searchable cheat sheet for global hotkeys, built for Raycast.

![Hotkey Menu Preview](./assets/detail-dialog.png)

## Overview

This extension provides a lightweight, searchable interface to quickly reference essential hotkeys for different operating systems and shell environments. It defaults to your current OS but allows instant toggling between Unix/Emacs and Windows/PSReadLine profiles.

## Features

- **🔍 Instant Search**: Filter hotkeys by key combination or behavior description.
- **🔄 Profile Toggling**: Switch between Unix (Bash/Readline) and Windows (PowerShell/PSReadLine) hotkey maps using `⌘ T`.
- **💻 Smart Defaults**: Automatically detects your OS (`darwin`, `linux`, or `win32`) to show the most relevant profile on startup.
- **📋 Copy to Clipboard**: Quickly copy any shortcut for reference.
- **🛠️ Categorized View**: Shortcuts are organized into logical groups: Movement, Killing / Editing, Selection, and System.

## Default Profiles

### Unix / Readline (Emacs Mode)
Comprehensive support for standard shell movement and editing commands:
- **Movement**: Start/End of line, Word movement, etc.
- **Killing / Editing**: Kill to start/end of line, Kill word, Undo, Case manipulation.
- **System**: Reverse Search, Abort, Redraw screen.

### Windows / PSReadLine (Windows Mode)
Targeted baseline for PowerShell and Windows-native editing:
- **Selection**: Shift-based character, word, and line selection.
- **Editing**: Standard Windows Cut/Copy/Paste, Undo/Redo, Delete to start/end of input.
- **System**: Reverse history search, Tab completion.

## Installation

1. **Clone the repository**:
   ```bash
   git clone git@github.com:jhavenz/hotkey-menu.git
   ```
2. **Install dependencies**:
   ```bash
   cd hotkey-menu
   bun install
   ```
3. **Run in Development Mode**:
   ```bash
   npm run dev
   ```
4. **Register with Raycast**:
   - While the dev server is running, Raycast will detect the extension.
   - Go to **Raycast Settings > Extensions > Hotkey Menu**.
   - Assign a global hotkey (e.g., `⌘ ⇧ H`) to the **Show Hotkeys** command.

## Tech Stack

- [Raycast API](https://developers.raycast.com/)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Bun](https://bun.sh/) (Package Manager)

---
Created by [havytech](https://github.com/havytech).
