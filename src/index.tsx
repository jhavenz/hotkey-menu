import { List, ActionPanel, Action } from "@raycast/api";
import { useState } from "react";
import os from "os";

type Profile = "unix" | "windows";

interface Hotkey {
  key: string;
  behavior: string;
  category: string;
}

export default function Command() {
  const [profile, setProfile] = useState<Profile>(
    os.platform() === "win32" ? "windows" : "unix",
  );

  const unixHotkeys: Hotkey[] = [
    { key: "Ctrl+A", behavior: "beginning of line", category: "Movement" },
    { key: "Ctrl+E", behavior: "end of line", category: "Movement" },
    { key: "Ctrl+B", behavior: "back char", category: "Movement" },
    { key: "Ctrl+F", behavior: "forward char", category: "Movement" },
    { key: "Alt+B", behavior: "back word", category: "Movement" },
    { key: "Alt+F", behavior: "forward word", category: "Movement" },
    {
      key: "Ctrl+D",
      behavior: "delete char at cursor",
      category: "Killing / Editing",
    },
    {
      key: "Ctrl+U",
      behavior: "kill back to start of line",
      category: "Killing / Editing",
    },
    {
      key: "Ctrl+K",
      behavior: "kill to end of line",
      category: "Killing / Editing",
    },
    {
      key: "Ctrl+W",
      behavior: "kill previous whitespace-delimited word",
      category: "Killing / Editing",
    },
    {
      key: "Alt+Backspace",
      behavior: "kill previous readline word",
      category: "Killing / Editing",
    },
    { key: "Alt+D", behavior: "kill next word", category: "Killing / Editing" },
    {
      key: "Ctrl+Y",
      behavior: "yank killed text",
      category: "Killing / Editing",
    },
    {
      key: "Alt+U",
      behavior: "uppercase to end of word",
      category: "Killing / Editing",
    },
    {
      key: "Alt+L",
      behavior: "lowercase to end of word",
      category: "Killing / Editing",
    },
    {
      key: "Alt+C",
      behavior: "capitalize current word",
      category: "Killing / Editing",
    },
    {
      key: "Ctrl+R",
      behavior: "reverse incremental history search",
      category: "System / Search",
    },
    {
      key: "Ctrl+_",
      behavior: "undo last editing command",
      category: "System / Search",
    },
    {
      key: "Ctrl+L",
      behavior: "clear/redraw screen",
      category: "System / Search",
    },
    {
      key: "Ctrl+G",
      behavior: "abort current search or editing",
      category: "System / Search",
    },
    {
      key: "Shift+Enter",
      behavior: "insert newline",
      category: "System / Search",
    },
  ];

  const windowsHotkeys: Hotkey[] = [
    {
      key: "Ctrl+Left / Ctrl+Right",
      behavior: "word movement",
      category: "Movement",
    },
    {
      key: "Shift+Left / Shift+Right",
      behavior: "select character",
      category: "Selection",
    },
    {
      key: "Ctrl+Shift+Left / Ctrl+Right",
      behavior: "select word",
      category: "Selection",
    },
    {
      key: "Shift+Home / End",
      behavior: "select to start/end of line",
      category: "Selection",
    },
    {
      key: "Ctrl+Home",
      behavior: "delete to start of input",
      category: "Killing / Editing",
    },
    {
      key: "Ctrl+End",
      behavior: "delete to end of input",
      category: "Killing / Editing",
    },
    { key: "Ctrl+A", behavior: "select all", category: "Selection" },
    {
      key: "Ctrl+X / Ctrl+C / Ctrl+V",
      behavior: "cut, copy, paste",
      category: "Killing / Editing",
    },
    { key: "Ctrl+Z / Ctrl+Y", behavior: "undo/redo", category: "System" },
    { key: "Shift+Enter", behavior: "add line", category: "System" },
    {
      key: "Ctrl+R",
      behavior: "reverse history search",
      category: "System",
    },
    {
      key: "Shift+Tab",
      behavior: "completion previous",
      category: "System",
    },
  ];

  const hotkeys = profile === "unix" ? unixHotkeys : windowsHotkeys;
  const categories = [...new Set(hotkeys.map((h) => h.category))];

  return (
    <List
      searchBarPlaceholder={`Search ${profile === "unix" ? "Unix" : "Windows"} HarnessKeys...`}
      navigationTitle={`HarnessKeys - ${profile === "unix" ? "Unix/Emacs" : "Windows/PSReadLine"}`}
      actions={
        <ActionPanel>
          <Action
            title={`Switch to ${profile === "unix" ? "Windows" : "Unix"} Profile`}
            onAction={() => setProfile(profile === "unix" ? "windows" : "unix")}
            shortcut={{ modifiers: ["cmd"], key: "t" }}
          />
        </ActionPanel>
      }
    >
      {categories.map((category) => (
        <List.Section title={category} key={category}>
          {hotkeys
            .filter((h) => h.category === category)
            .map((hotkey) => (
              <List.Item
                key={hotkey.key}
                title={hotkey.key}
                subtitle={hotkey.behavior}
                accessories={[{ text: category }]}
                actions={
                  <ActionPanel>
                    <Action.CopyToClipboard
                      title="Copy Shortcut"
                      content={hotkey.key}
                    />
                    <Action
                      title={`Switch to ${profile === "unix" ? "Windows" : "Unix"} Profile`}
                      onAction={() =>
                        setProfile(profile === "unix" ? "windows" : "unix")
                      }
                      shortcut={{ modifiers: ["cmd"], key: "t" }}
                    />
                  </ActionPanel>
                }
              />
            ))}
        </List.Section>
      ))}
    </List>
  );
}
