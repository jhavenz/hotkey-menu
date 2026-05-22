"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => Command
});
module.exports = __toCommonJS(index_exports);
var import_api = require("@raycast/api");
var import_react = require("react");
var import_os = __toESM(require("os"));
var import_jsx_runtime = require("react/jsx-runtime");
function Command() {
  const [profile, setProfile] = (0, import_react.useState)(
    import_os.default.platform() === "win32" ? "windows" : "unix"
  );
  const unixHotkeys = [
    { key: "Ctrl+A", behavior: "beginning of line", category: "Movement" },
    { key: "Ctrl+E", behavior: "end of line", category: "Movement" },
    { key: "Ctrl+B", behavior: "back char", category: "Movement" },
    { key: "Ctrl+F", behavior: "forward char", category: "Movement" },
    { key: "Alt+B", behavior: "back word", category: "Movement" },
    { key: "Alt+F", behavior: "forward word", category: "Movement" },
    {
      key: "Ctrl+D",
      behavior: "delete char at cursor",
      category: "Killing / Editing"
    },
    {
      key: "Ctrl+U",
      behavior: "kill back to start of line",
      category: "Killing / Editing"
    },
    {
      key: "Ctrl+K",
      behavior: "kill to end of line",
      category: "Killing / Editing"
    },
    {
      key: "Ctrl+W",
      behavior: "kill previous whitespace-delimited word",
      category: "Killing / Editing"
    },
    {
      key: "Alt+Backspace",
      behavior: "kill previous readline word",
      category: "Killing / Editing"
    },
    { key: "Alt+D", behavior: "kill next word", category: "Killing / Editing" },
    {
      key: "Ctrl+Y",
      behavior: "yank killed text",
      category: "Killing / Editing"
    },
    {
      key: "Alt+U",
      behavior: "uppercase to end of word",
      category: "Killing / Editing"
    },
    {
      key: "Alt+L",
      behavior: "lowercase to end of word",
      category: "Killing / Editing"
    },
    {
      key: "Alt+C",
      behavior: "capitalize current word",
      category: "Killing / Editing"
    },
    {
      key: "Ctrl+R",
      behavior: "reverse incremental history search",
      category: "System / Search"
    },
    {
      key: "Ctrl+_",
      behavior: "undo last editing command",
      category: "System / Search"
    },
    {
      key: "Ctrl+L",
      behavior: "clear/redraw screen",
      category: "System / Search"
    },
    {
      key: "Ctrl+G",
      behavior: "abort current search or editing",
      category: "System / Search"
    },
    {
      key: "Shift+Enter",
      behavior: "insert newline",
      category: "System / Search"
    }
  ];
  const windowsHotkeys = [
    {
      key: "Ctrl+Left / Ctrl+Right",
      behavior: "word movement",
      category: "Movement"
    },
    {
      key: "Shift+Left / Shift+Right",
      behavior: "select character",
      category: "Selection"
    },
    {
      key: "Ctrl+Shift+Left / Ctrl+Right",
      behavior: "select word",
      category: "Selection"
    },
    {
      key: "Shift+Home / End",
      behavior: "select to start/end of line",
      category: "Selection"
    },
    {
      key: "Ctrl+Home",
      behavior: "delete to start of input",
      category: "Killing / Editing"
    },
    {
      key: "Ctrl+End",
      behavior: "delete to end of input",
      category: "Killing / Editing"
    },
    { key: "Ctrl+A", behavior: "select all", category: "Selection" },
    {
      key: "Ctrl+X / Ctrl+C / Ctrl+V",
      behavior: "cut, copy, paste",
      category: "Killing / Editing"
    },
    { key: "Ctrl+Z / Ctrl+Y", behavior: "undo/redo", category: "System" },
    { key: "Shift+Enter", behavior: "add line", category: "System" },
    {
      key: "Ctrl+R",
      behavior: "reverse history search (future)",
      category: "System"
    },
    {
      key: "Shift+Tab",
      behavior: "completion previous (future)",
      category: "System"
    }
  ];
  const hotkeys = profile === "unix" ? unixHotkeys : windowsHotkeys;
  const categories = [...new Set(hotkeys.map((h) => h.category))];
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_api.List,
    {
      searchBarPlaceholder: `Search ${profile === "unix" ? "Unix" : "Windows"} hotkeys...`,
      navigationTitle: `Hotkey Menu - ${profile === "unix" ? "Unix/Emacs" : "Windows/PSReadLine"}`,
      actions: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_api.ActionPanel, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        import_api.Action,
        {
          title: `Switch to ${profile === "unix" ? "Windows" : "Unix"} Profile`,
          onAction: () => setProfile(profile === "unix" ? "windows" : "unix"),
          shortcut: { modifiers: ["cmd"], key: "t" }
        }
      ) }),
      children: categories.map((category) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_api.List.Section, { title: category, children: hotkeys.filter((h) => h.category === category).map((hotkey) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        import_api.List.Item,
        {
          title: hotkey.key,
          subtitle: hotkey.behavior,
          accessories: [{ text: category }],
          actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_api.ActionPanel, { children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              import_api.Action.CopyToClipboard,
              {
                title: "Copy Shortcut",
                content: hotkey.key
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              import_api.Action,
              {
                title: `Switch to ${profile === "unix" ? "Windows" : "Unix"} Profile`,
                onAction: () => setProfile(profile === "unix" ? "windows" : "unix"),
                shortcut: { modifiers: ["cmd"], key: "t" }
              }
            )
          ] })
        },
        hotkey.key
      )) }, category))
    }
  );
}
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vc3JjL2luZGV4LnRzeCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHsgTGlzdCwgQWN0aW9uUGFuZWwsIEFjdGlvbiB9IGZyb20gXCJAcmF5Y2FzdC9hcGlcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgb3MgZnJvbSBcIm9zXCI7XG5cbnR5cGUgUHJvZmlsZSA9IFwidW5peFwiIHwgXCJ3aW5kb3dzXCI7XG5cbmludGVyZmFjZSBIb3RrZXkge1xuICBrZXk6IHN0cmluZztcbiAgYmVoYXZpb3I6IHN0cmluZztcbiAgY2F0ZWdvcnk6IHN0cmluZztcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29tbWFuZCgpIHtcbiAgY29uc3QgW3Byb2ZpbGUsIHNldFByb2ZpbGVdID0gdXNlU3RhdGU8UHJvZmlsZT4oXG4gICAgb3MucGxhdGZvcm0oKSA9PT0gXCJ3aW4zMlwiID8gXCJ3aW5kb3dzXCIgOiBcInVuaXhcIixcbiAgKTtcblxuICBjb25zdCB1bml4SG90a2V5czogSG90a2V5W10gPSBbXG4gICAgeyBrZXk6IFwiQ3RybCtBXCIsIGJlaGF2aW9yOiBcImJlZ2lubmluZyBvZiBsaW5lXCIsIGNhdGVnb3J5OiBcIk1vdmVtZW50XCIgfSxcbiAgICB7IGtleTogXCJDdHJsK0VcIiwgYmVoYXZpb3I6IFwiZW5kIG9mIGxpbmVcIiwgY2F0ZWdvcnk6IFwiTW92ZW1lbnRcIiB9LFxuICAgIHsga2V5OiBcIkN0cmwrQlwiLCBiZWhhdmlvcjogXCJiYWNrIGNoYXJcIiwgY2F0ZWdvcnk6IFwiTW92ZW1lbnRcIiB9LFxuICAgIHsga2V5OiBcIkN0cmwrRlwiLCBiZWhhdmlvcjogXCJmb3J3YXJkIGNoYXJcIiwgY2F0ZWdvcnk6IFwiTW92ZW1lbnRcIiB9LFxuICAgIHsga2V5OiBcIkFsdCtCXCIsIGJlaGF2aW9yOiBcImJhY2sgd29yZFwiLCBjYXRlZ29yeTogXCJNb3ZlbWVudFwiIH0sXG4gICAgeyBrZXk6IFwiQWx0K0ZcIiwgYmVoYXZpb3I6IFwiZm9yd2FyZCB3b3JkXCIsIGNhdGVnb3J5OiBcIk1vdmVtZW50XCIgfSxcbiAgICB7XG4gICAgICBrZXk6IFwiQ3RybCtEXCIsXG4gICAgICBiZWhhdmlvcjogXCJkZWxldGUgY2hhciBhdCBjdXJzb3JcIixcbiAgICAgIGNhdGVnb3J5OiBcIktpbGxpbmcgLyBFZGl0aW5nXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBrZXk6IFwiQ3RybCtVXCIsXG4gICAgICBiZWhhdmlvcjogXCJraWxsIGJhY2sgdG8gc3RhcnQgb2YgbGluZVwiLFxuICAgICAgY2F0ZWdvcnk6IFwiS2lsbGluZyAvIEVkaXRpbmdcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIGtleTogXCJDdHJsK0tcIixcbiAgICAgIGJlaGF2aW9yOiBcImtpbGwgdG8gZW5kIG9mIGxpbmVcIixcbiAgICAgIGNhdGVnb3J5OiBcIktpbGxpbmcgLyBFZGl0aW5nXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBrZXk6IFwiQ3RybCtXXCIsXG4gICAgICBiZWhhdmlvcjogXCJraWxsIHByZXZpb3VzIHdoaXRlc3BhY2UtZGVsaW1pdGVkIHdvcmRcIixcbiAgICAgIGNhdGVnb3J5OiBcIktpbGxpbmcgLyBFZGl0aW5nXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBrZXk6IFwiQWx0K0JhY2tzcGFjZVwiLFxuICAgICAgYmVoYXZpb3I6IFwia2lsbCBwcmV2aW91cyByZWFkbGluZSB3b3JkXCIsXG4gICAgICBjYXRlZ29yeTogXCJLaWxsaW5nIC8gRWRpdGluZ1wiLFxuICAgIH0sXG4gICAgeyBrZXk6IFwiQWx0K0RcIiwgYmVoYXZpb3I6IFwia2lsbCBuZXh0IHdvcmRcIiwgY2F0ZWdvcnk6IFwiS2lsbGluZyAvIEVkaXRpbmdcIiB9LFxuICAgIHtcbiAgICAgIGtleTogXCJDdHJsK1lcIixcbiAgICAgIGJlaGF2aW9yOiBcInlhbmsga2lsbGVkIHRleHRcIixcbiAgICAgIGNhdGVnb3J5OiBcIktpbGxpbmcgLyBFZGl0aW5nXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBrZXk6IFwiQWx0K1VcIixcbiAgICAgIGJlaGF2aW9yOiBcInVwcGVyY2FzZSB0byBlbmQgb2Ygd29yZFwiLFxuICAgICAgY2F0ZWdvcnk6IFwiS2lsbGluZyAvIEVkaXRpbmdcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIGtleTogXCJBbHQrTFwiLFxuICAgICAgYmVoYXZpb3I6IFwibG93ZXJjYXNlIHRvIGVuZCBvZiB3b3JkXCIsXG4gICAgICBjYXRlZ29yeTogXCJLaWxsaW5nIC8gRWRpdGluZ1wiLFxuICAgIH0sXG4gICAge1xuICAgICAga2V5OiBcIkFsdCtDXCIsXG4gICAgICBiZWhhdmlvcjogXCJjYXBpdGFsaXplIGN1cnJlbnQgd29yZFwiLFxuICAgICAgY2F0ZWdvcnk6IFwiS2lsbGluZyAvIEVkaXRpbmdcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIGtleTogXCJDdHJsK1JcIixcbiAgICAgIGJlaGF2aW9yOiBcInJldmVyc2UgaW5jcmVtZW50YWwgaGlzdG9yeSBzZWFyY2hcIixcbiAgICAgIGNhdGVnb3J5OiBcIlN5c3RlbSAvIFNlYXJjaFwiLFxuICAgIH0sXG4gICAge1xuICAgICAga2V5OiBcIkN0cmwrX1wiLFxuICAgICAgYmVoYXZpb3I6IFwidW5kbyBsYXN0IGVkaXRpbmcgY29tbWFuZFwiLFxuICAgICAgY2F0ZWdvcnk6IFwiU3lzdGVtIC8gU2VhcmNoXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBrZXk6IFwiQ3RybCtMXCIsXG4gICAgICBiZWhhdmlvcjogXCJjbGVhci9yZWRyYXcgc2NyZWVuXCIsXG4gICAgICBjYXRlZ29yeTogXCJTeXN0ZW0gLyBTZWFyY2hcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIGtleTogXCJDdHJsK0dcIixcbiAgICAgIGJlaGF2aW9yOiBcImFib3J0IGN1cnJlbnQgc2VhcmNoIG9yIGVkaXRpbmdcIixcbiAgICAgIGNhdGVnb3J5OiBcIlN5c3RlbSAvIFNlYXJjaFwiLFxuICAgIH0sXG4gICAge1xuICAgICAga2V5OiBcIlNoaWZ0K0VudGVyXCIsXG4gICAgICBiZWhhdmlvcjogXCJpbnNlcnQgbmV3bGluZVwiLFxuICAgICAgY2F0ZWdvcnk6IFwiU3lzdGVtIC8gU2VhcmNoXCIsXG4gICAgfSxcbiAgXTtcblxuICBjb25zdCB3aW5kb3dzSG90a2V5czogSG90a2V5W10gPSBbXG4gICAge1xuICAgICAga2V5OiBcIkN0cmwrTGVmdCAvIEN0cmwrUmlnaHRcIixcbiAgICAgIGJlaGF2aW9yOiBcIndvcmQgbW92ZW1lbnRcIixcbiAgICAgIGNhdGVnb3J5OiBcIk1vdmVtZW50XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBrZXk6IFwiU2hpZnQrTGVmdCAvIFNoaWZ0K1JpZ2h0XCIsXG4gICAgICBiZWhhdmlvcjogXCJzZWxlY3QgY2hhcmFjdGVyXCIsXG4gICAgICBjYXRlZ29yeTogXCJTZWxlY3Rpb25cIixcbiAgICB9LFxuICAgIHtcbiAgICAgIGtleTogXCJDdHJsK1NoaWZ0K0xlZnQgLyBDdHJsK1JpZ2h0XCIsXG4gICAgICBiZWhhdmlvcjogXCJzZWxlY3Qgd29yZFwiLFxuICAgICAgY2F0ZWdvcnk6IFwiU2VsZWN0aW9uXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBrZXk6IFwiU2hpZnQrSG9tZSAvIEVuZFwiLFxuICAgICAgYmVoYXZpb3I6IFwic2VsZWN0IHRvIHN0YXJ0L2VuZCBvZiBsaW5lXCIsXG4gICAgICBjYXRlZ29yeTogXCJTZWxlY3Rpb25cIixcbiAgICB9LFxuICAgIHtcbiAgICAgIGtleTogXCJDdHJsK0hvbWVcIixcbiAgICAgIGJlaGF2aW9yOiBcImRlbGV0ZSB0byBzdGFydCBvZiBpbnB1dFwiLFxuICAgICAgY2F0ZWdvcnk6IFwiS2lsbGluZyAvIEVkaXRpbmdcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIGtleTogXCJDdHJsK0VuZFwiLFxuICAgICAgYmVoYXZpb3I6IFwiZGVsZXRlIHRvIGVuZCBvZiBpbnB1dFwiLFxuICAgICAgY2F0ZWdvcnk6IFwiS2lsbGluZyAvIEVkaXRpbmdcIixcbiAgICB9LFxuICAgIHsga2V5OiBcIkN0cmwrQVwiLCBiZWhhdmlvcjogXCJzZWxlY3QgYWxsXCIsIGNhdGVnb3J5OiBcIlNlbGVjdGlvblwiIH0sXG4gICAge1xuICAgICAga2V5OiBcIkN0cmwrWCAvIEN0cmwrQyAvIEN0cmwrVlwiLFxuICAgICAgYmVoYXZpb3I6IFwiY3V0LCBjb3B5LCBwYXN0ZVwiLFxuICAgICAgY2F0ZWdvcnk6IFwiS2lsbGluZyAvIEVkaXRpbmdcIixcbiAgICB9LFxuICAgIHsga2V5OiBcIkN0cmwrWiAvIEN0cmwrWVwiLCBiZWhhdmlvcjogXCJ1bmRvL3JlZG9cIiwgY2F0ZWdvcnk6IFwiU3lzdGVtXCIgfSxcbiAgICB7IGtleTogXCJTaGlmdCtFbnRlclwiLCBiZWhhdmlvcjogXCJhZGQgbGluZVwiLCBjYXRlZ29yeTogXCJTeXN0ZW1cIiB9LFxuICAgIHtcbiAgICAgIGtleTogXCJDdHJsK1JcIixcbiAgICAgIGJlaGF2aW9yOiBcInJldmVyc2UgaGlzdG9yeSBzZWFyY2ggKGZ1dHVyZSlcIixcbiAgICAgIGNhdGVnb3J5OiBcIlN5c3RlbVwiLFxuICAgIH0sXG4gICAge1xuICAgICAga2V5OiBcIlNoaWZ0K1RhYlwiLFxuICAgICAgYmVoYXZpb3I6IFwiY29tcGxldGlvbiBwcmV2aW91cyAoZnV0dXJlKVwiLFxuICAgICAgY2F0ZWdvcnk6IFwiU3lzdGVtXCIsXG4gICAgfSxcbiAgXTtcblxuICBjb25zdCBob3RrZXlzID0gcHJvZmlsZSA9PT0gXCJ1bml4XCIgPyB1bml4SG90a2V5cyA6IHdpbmRvd3NIb3RrZXlzO1xuICBjb25zdCBjYXRlZ29yaWVzID0gWy4uLm5ldyBTZXQoaG90a2V5cy5tYXAoKGgpID0+IGguY2F0ZWdvcnkpKV07XG5cbiAgcmV0dXJuIChcbiAgICA8TGlzdFxuICAgICAgc2VhcmNoQmFyUGxhY2Vob2xkZXI9e2BTZWFyY2ggJHtwcm9maWxlID09PSBcInVuaXhcIiA/IFwiVW5peFwiIDogXCJXaW5kb3dzXCJ9IGhvdGtleXMuLi5gfVxuICAgICAgbmF2aWdhdGlvblRpdGxlPXtgSG90a2V5IE1lbnUgLSAke3Byb2ZpbGUgPT09IFwidW5peFwiID8gXCJVbml4L0VtYWNzXCIgOiBcIldpbmRvd3MvUFNSZWFkTGluZVwifWB9XG4gICAgICBhY3Rpb25zPXtcbiAgICAgICAgPEFjdGlvblBhbmVsPlxuICAgICAgICAgIDxBY3Rpb25cbiAgICAgICAgICAgIHRpdGxlPXtgU3dpdGNoIHRvICR7cHJvZmlsZSA9PT0gXCJ1bml4XCIgPyBcIldpbmRvd3NcIiA6IFwiVW5peFwifSBQcm9maWxlYH1cbiAgICAgICAgICAgIG9uQWN0aW9uPXsoKSA9PiBzZXRQcm9maWxlKHByb2ZpbGUgPT09IFwidW5peFwiID8gXCJ3aW5kb3dzXCIgOiBcInVuaXhcIil9XG4gICAgICAgICAgICBzaG9ydGN1dD17eyBtb2RpZmllcnM6IFtcImNtZFwiXSwga2V5OiBcInRcIiB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvQWN0aW9uUGFuZWw+XG4gICAgICB9XG4gICAgPlxuICAgICAge2NhdGVnb3JpZXMubWFwKChjYXRlZ29yeSkgPT4gKFxuICAgICAgICA8TGlzdC5TZWN0aW9uIHRpdGxlPXtjYXRlZ29yeX0ga2V5PXtjYXRlZ29yeX0+XG4gICAgICAgICAge2hvdGtleXNcbiAgICAgICAgICAgIC5maWx0ZXIoKGgpID0+IGguY2F0ZWdvcnkgPT09IGNhdGVnb3J5KVxuICAgICAgICAgICAgLm1hcCgoaG90a2V5KSA9PiAoXG4gICAgICAgICAgICAgIDxMaXN0Lkl0ZW1cbiAgICAgICAgICAgICAgICBrZXk9e2hvdGtleS5rZXl9XG4gICAgICAgICAgICAgICAgdGl0bGU9e2hvdGtleS5rZXl9XG4gICAgICAgICAgICAgICAgc3VidGl0bGU9e2hvdGtleS5iZWhhdmlvcn1cbiAgICAgICAgICAgICAgICBhY2Nlc3Nvcmllcz17W3sgdGV4dDogY2F0ZWdvcnkgfV19XG4gICAgICAgICAgICAgICAgYWN0aW9ucz17XG4gICAgICAgICAgICAgICAgICA8QWN0aW9uUGFuZWw+XG4gICAgICAgICAgICAgICAgICAgIDxBY3Rpb24uQ29weVRvQ2xpcGJvYXJkXG4gICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJDb3B5IFNob3J0Y3V0XCJcbiAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PXtob3RrZXkua2V5fVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8QWN0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e2BTd2l0Y2ggdG8gJHtwcm9maWxlID09PSBcInVuaXhcIiA/IFwiV2luZG93c1wiIDogXCJVbml4XCJ9IFByb2ZpbGVgfVxuICAgICAgICAgICAgICAgICAgICAgIG9uQWN0aW9uPXsoKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0UHJvZmlsZShwcm9maWxlID09PSBcInVuaXhcIiA/IFwid2luZG93c1wiIDogXCJ1bml4XCIpXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIHNob3J0Y3V0PXt7IG1vZGlmaWVyczogW1wiY21kXCJdLCBrZXk6IFwidFwiIH19XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L0FjdGlvblBhbmVsPlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICkpfVxuICAgICAgICA8L0xpc3QuU2VjdGlvbj5cbiAgICAgICkpfVxuICAgIDwvTGlzdD5cbiAgKTtcbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBMEM7QUFDMUMsbUJBQXlCO0FBQ3pCLGdCQUFlO0FBMkpMO0FBakpLLFNBQVIsVUFBMkI7QUFDaEMsUUFBTSxDQUFDLFNBQVMsVUFBVSxRQUFJO0FBQUEsSUFDNUIsVUFBQUEsUUFBRyxTQUFTLE1BQU0sVUFBVSxZQUFZO0FBQUEsRUFDMUM7QUFFQSxRQUFNLGNBQXdCO0FBQUEsSUFDNUIsRUFBRSxLQUFLLFVBQVUsVUFBVSxxQkFBcUIsVUFBVSxXQUFXO0FBQUEsSUFDckUsRUFBRSxLQUFLLFVBQVUsVUFBVSxlQUFlLFVBQVUsV0FBVztBQUFBLElBQy9ELEVBQUUsS0FBSyxVQUFVLFVBQVUsYUFBYSxVQUFVLFdBQVc7QUFBQSxJQUM3RCxFQUFFLEtBQUssVUFBVSxVQUFVLGdCQUFnQixVQUFVLFdBQVc7QUFBQSxJQUNoRSxFQUFFLEtBQUssU0FBUyxVQUFVLGFBQWEsVUFBVSxXQUFXO0FBQUEsSUFDNUQsRUFBRSxLQUFLLFNBQVMsVUFBVSxnQkFBZ0IsVUFBVSxXQUFXO0FBQUEsSUFDL0Q7QUFBQSxNQUNFLEtBQUs7QUFBQSxNQUNMLFVBQVU7QUFBQSxNQUNWLFVBQVU7QUFBQSxJQUNaO0FBQUEsSUFDQTtBQUFBLE1BQ0UsS0FBSztBQUFBLE1BQ0wsVUFBVTtBQUFBLE1BQ1YsVUFBVTtBQUFBLElBQ1o7QUFBQSxJQUNBO0FBQUEsTUFDRSxLQUFLO0FBQUEsTUFDTCxVQUFVO0FBQUEsTUFDVixVQUFVO0FBQUEsSUFDWjtBQUFBLElBQ0E7QUFBQSxNQUNFLEtBQUs7QUFBQSxNQUNMLFVBQVU7QUFBQSxNQUNWLFVBQVU7QUFBQSxJQUNaO0FBQUEsSUFDQTtBQUFBLE1BQ0UsS0FBSztBQUFBLE1BQ0wsVUFBVTtBQUFBLE1BQ1YsVUFBVTtBQUFBLElBQ1o7QUFBQSxJQUNBLEVBQUUsS0FBSyxTQUFTLFVBQVUsa0JBQWtCLFVBQVUsb0JBQW9CO0FBQUEsSUFDMUU7QUFBQSxNQUNFLEtBQUs7QUFBQSxNQUNMLFVBQVU7QUFBQSxNQUNWLFVBQVU7QUFBQSxJQUNaO0FBQUEsSUFDQTtBQUFBLE1BQ0UsS0FBSztBQUFBLE1BQ0wsVUFBVTtBQUFBLE1BQ1YsVUFBVTtBQUFBLElBQ1o7QUFBQSxJQUNBO0FBQUEsTUFDRSxLQUFLO0FBQUEsTUFDTCxVQUFVO0FBQUEsTUFDVixVQUFVO0FBQUEsSUFDWjtBQUFBLElBQ0E7QUFBQSxNQUNFLEtBQUs7QUFBQSxNQUNMLFVBQVU7QUFBQSxNQUNWLFVBQVU7QUFBQSxJQUNaO0FBQUEsSUFDQTtBQUFBLE1BQ0UsS0FBSztBQUFBLE1BQ0wsVUFBVTtBQUFBLE1BQ1YsVUFBVTtBQUFBLElBQ1o7QUFBQSxJQUNBO0FBQUEsTUFDRSxLQUFLO0FBQUEsTUFDTCxVQUFVO0FBQUEsTUFDVixVQUFVO0FBQUEsSUFDWjtBQUFBLElBQ0E7QUFBQSxNQUNFLEtBQUs7QUFBQSxNQUNMLFVBQVU7QUFBQSxNQUNWLFVBQVU7QUFBQSxJQUNaO0FBQUEsSUFDQTtBQUFBLE1BQ0UsS0FBSztBQUFBLE1BQ0wsVUFBVTtBQUFBLE1BQ1YsVUFBVTtBQUFBLElBQ1o7QUFBQSxJQUNBO0FBQUEsTUFDRSxLQUFLO0FBQUEsTUFDTCxVQUFVO0FBQUEsTUFDVixVQUFVO0FBQUEsSUFDWjtBQUFBLEVBQ0Y7QUFFQSxRQUFNLGlCQUEyQjtBQUFBLElBQy9CO0FBQUEsTUFDRSxLQUFLO0FBQUEsTUFDTCxVQUFVO0FBQUEsTUFDVixVQUFVO0FBQUEsSUFDWjtBQUFBLElBQ0E7QUFBQSxNQUNFLEtBQUs7QUFBQSxNQUNMLFVBQVU7QUFBQSxNQUNWLFVBQVU7QUFBQSxJQUNaO0FBQUEsSUFDQTtBQUFBLE1BQ0UsS0FBSztBQUFBLE1BQ0wsVUFBVTtBQUFBLE1BQ1YsVUFBVTtBQUFBLElBQ1o7QUFBQSxJQUNBO0FBQUEsTUFDRSxLQUFLO0FBQUEsTUFDTCxVQUFVO0FBQUEsTUFDVixVQUFVO0FBQUEsSUFDWjtBQUFBLElBQ0E7QUFBQSxNQUNFLEtBQUs7QUFBQSxNQUNMLFVBQVU7QUFBQSxNQUNWLFVBQVU7QUFBQSxJQUNaO0FBQUEsSUFDQTtBQUFBLE1BQ0UsS0FBSztBQUFBLE1BQ0wsVUFBVTtBQUFBLE1BQ1YsVUFBVTtBQUFBLElBQ1o7QUFBQSxJQUNBLEVBQUUsS0FBSyxVQUFVLFVBQVUsY0FBYyxVQUFVLFlBQVk7QUFBQSxJQUMvRDtBQUFBLE1BQ0UsS0FBSztBQUFBLE1BQ0wsVUFBVTtBQUFBLE1BQ1YsVUFBVTtBQUFBLElBQ1o7QUFBQSxJQUNBLEVBQUUsS0FBSyxtQkFBbUIsVUFBVSxhQUFhLFVBQVUsU0FBUztBQUFBLElBQ3BFLEVBQUUsS0FBSyxlQUFlLFVBQVUsWUFBWSxVQUFVLFNBQVM7QUFBQSxJQUMvRDtBQUFBLE1BQ0UsS0FBSztBQUFBLE1BQ0wsVUFBVTtBQUFBLE1BQ1YsVUFBVTtBQUFBLElBQ1o7QUFBQSxJQUNBO0FBQUEsTUFDRSxLQUFLO0FBQUEsTUFDTCxVQUFVO0FBQUEsTUFDVixVQUFVO0FBQUEsSUFDWjtBQUFBLEVBQ0Y7QUFFQSxRQUFNLFVBQVUsWUFBWSxTQUFTLGNBQWM7QUFDbkQsUUFBTSxhQUFhLENBQUMsR0FBRyxJQUFJLElBQUksUUFBUSxJQUFJLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0FBRTlELFNBQ0U7QUFBQSxJQUFDO0FBQUE7QUFBQSxNQUNDLHNCQUFzQixVQUFVLFlBQVksU0FBUyxTQUFTLFNBQVM7QUFBQSxNQUN2RSxpQkFBaUIsaUJBQWlCLFlBQVksU0FBUyxlQUFlLG9CQUFvQjtBQUFBLE1BQzFGLFNBQ0UsNENBQUMsMEJBQ0M7QUFBQSxRQUFDO0FBQUE7QUFBQSxVQUNDLE9BQU8sYUFBYSxZQUFZLFNBQVMsWUFBWSxNQUFNO0FBQUEsVUFDM0QsVUFBVSxNQUFNLFdBQVcsWUFBWSxTQUFTLFlBQVksTUFBTTtBQUFBLFVBQ2xFLFVBQVUsRUFBRSxXQUFXLENBQUMsS0FBSyxHQUFHLEtBQUssSUFBSTtBQUFBO0FBQUEsTUFDM0MsR0FDRjtBQUFBLE1BR0QscUJBQVcsSUFBSSxDQUFDLGFBQ2YsNENBQUMsZ0JBQUssU0FBTCxFQUFhLE9BQU8sVUFDbEIsa0JBQ0UsT0FBTyxDQUFDLE1BQU0sRUFBRSxhQUFhLFFBQVEsRUFDckMsSUFBSSxDQUFDLFdBQ0o7QUFBQSxRQUFDLGdCQUFLO0FBQUEsUUFBTDtBQUFBLFVBRUMsT0FBTyxPQUFPO0FBQUEsVUFDZCxVQUFVLE9BQU87QUFBQSxVQUNqQixhQUFhLENBQUMsRUFBRSxNQUFNLFNBQVMsQ0FBQztBQUFBLFVBQ2hDLFNBQ0UsNkNBQUMsMEJBQ0M7QUFBQTtBQUFBLGNBQUMsa0JBQU87QUFBQSxjQUFQO0FBQUEsZ0JBQ0MsT0FBTTtBQUFBLGdCQUNOLFNBQVMsT0FBTztBQUFBO0FBQUEsWUFDbEI7QUFBQSxZQUNBO0FBQUEsY0FBQztBQUFBO0FBQUEsZ0JBQ0MsT0FBTyxhQUFhLFlBQVksU0FBUyxZQUFZLE1BQU07QUFBQSxnQkFDM0QsVUFBVSxNQUNSLFdBQVcsWUFBWSxTQUFTLFlBQVksTUFBTTtBQUFBLGdCQUVwRCxVQUFVLEVBQUUsV0FBVyxDQUFDLEtBQUssR0FBRyxLQUFLLElBQUk7QUFBQTtBQUFBLFlBQzNDO0FBQUEsYUFDRjtBQUFBO0FBQUEsUUFqQkcsT0FBTztBQUFBLE1BbUJkLENBQ0QsS0F6QitCLFFBMEJwQyxDQUNEO0FBQUE7QUFBQSxFQUNIO0FBRUo7IiwKICAibmFtZXMiOiBbIm9zIl0KfQo=
