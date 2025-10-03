Zynvaded Combat Team Builder

A static single-page web app to build Combat Teams for the fictional Zynvaded game.

Features
- Faction tiles with hover descriptions
- Unit cards per faction showing name, slot, and artwork placeholder
- Select exactly 3 units to form a team: LEADER, SUPPORT, SCOUT
- Selected team displayed in a side panel
- Undo / Redo support (Ctrl+Z / Ctrl+Y)
- Responsive layout

How to run
Open `index.html` in any modern browser. No server required.

Notes
- Artwork is placeholder text; swap `.unit-art` contents with images if available.
- This is a minimal, self-contained implementation meant to be extended with real assets and persistence.
 - Switching factions will clear the current selection; the change is pushed to the undo stack so you can restore with Undo.
 - Keyboard: Ctrl+Z (Undo), Ctrl+Y (Redo). Use Enter to activate a focused faction tile.
