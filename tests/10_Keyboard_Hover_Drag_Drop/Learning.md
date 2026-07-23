# Playwright Keyboard, Mouse, Hover & Drag-Drop Reference

> **Folder:** `10_Keyboard_Hover_Drag_drop`  
> **Purpose:** Quick reference guide for all Playwright keyboard keys, mouse actions, hover, and drag-and-drop APIs.

---

## 1. Keyboard Actions (`page.keyboard`)

### 1.1 Key Methods

| Method | Description | Example |
|--------|-------------|---------|
| `keyboard.press(key)` | Press and release a key | `await page.keyboard.press('Enter')` |
| `keyboard.down(key)` | Hold a key down | `await page.keyboard.down('Shift')` |
| `keyboard.up(key)` | Release a held key | `await page.keyboard.up('Shift')` |
| `keyboard.type(text)` | Type a sequence of characters | `await page.keyboard.type('Hello World')` |
| `keyboard.insertText(text)` | Insert text (no key events, like paste) | `await page.keyboard.insertText('Hello')` |

### 1.2 Special / Modifier Keys

| Key Name | Description |
|----------|-------------|
| `Backspace` | Delete character before cursor |
| `Tab` | Tab key |
| `Enter` / `Return` | Enter/Return key |
| `Escape` / `Esc` | Escape key |
| `Space` | Spacebar |
| `ArrowUp` | Up arrow |
| `ArrowDown` | Down arrow |
| `ArrowLeft` | Left arrow |
| `ArrowRight` | Right arrow |
| `Home` | Home key |
| `End` | End key |
| `PageUp` | Page up |
| `PageDown` | Page down |
| `Delete` | Delete key |
| `Insert` | Insert key |
| `Shift` | Shift modifier |
| `Control` / `Ctrl` | Control modifier |
| `Alt` | Alt modifier |
| `Meta` / `Command` / `Cmd` | Meta/Command (Mac) |
| `CapsLock` | Caps lock |
| `NumLock` | Num lock |
| `ScrollLock` | Scroll lock |
| `PrintScreen` | Print screen |
| `Pause` | Pause key |
| `F1` - `F12` | Function keys |

### 1.3 Combining Keys

```typescript
// Shift + Click
await page.keyboard.down('Shift');
await page.click('#item');
await page.keyboard.up('Shift');

// Ctrl + A (Select All)
await page.keyboard.press('Control+a');

// Ctrl + C (Copy)
await page.keyboard.press('Control+c');

// Ctrl + V (Paste)
await page.keyboard.press('Control+v');

// Tab through form fields
await page.keyboard.press('Tab');
await page.keyboard.press('Tab');

// Arrow key navigation
await page.keyboard.press('ArrowDown');
await page.keyboard.press('ArrowRight');
```

### 1.4 Type vs InsertText

```typescript
// Type fires keydown, keypress, input, keyup events
await page.keyboard.type('Hello');

// insertText only fires input event (faster, no key events)
await page.keyboard.insertText('Hello');
```

---

## 2. Mouse Actions (`page.mouse`)

### 2.1 Mouse Methods

| Method | Description | Example |
|--------|-------------|---------|
| `mouse.click(x, y)` | Click at coordinates | `await page.mouse.click(100, 200)` |
| `mouse.dblclick(x, y)` | Double-click at coordinates | `await page.mouse.dblclick(100, 200)` |
| `mouse.down(options?)` | Press mouse button down | `await page.mouse.down()` |
| `mouse.up(options?)` | Release mouse button | `await page.mouse.up()` |
| `mouse.move(x, y, options?)` | Move mouse to coordinates | `await page.mouse.move(100, 200)` |
| `mouse.wheel(deltaX, deltaY)` | Scroll wheel | `await page.mouse.wheel(0, 100)` |

### 2.2 Mouse Button Options

```typescript
// Default is left button
await page.mouse.down();
await page.mouse.up();

// Right mouse button (Right-click hold)
await page.mouse.down({ button: 'right' });
await page.mouse.up({ button: 'right' });

// Middle mouse button
await page.mouse.down({ button: 'middle' });
await page.mouse.up({ button: 'middle' });
```

### 2.3 Click Options

```typescript
await page.click('#element', {
  button: 'left',      // 'left' | 'right' | 'middle'
  clickCount: 2,       // for double-click
  delay: 100,          // ms between mousedown and mouseup
  force: false,        // bypass actionability checks
  modifiers: ['Shift'], // press keys while clicking
  position: { x: 10, y: 20 }, // relative to element top-left
  timeout: 5000
});
```

### 2.4 Mouse Up / Down Examples

```typescript
// Drag with mouse down + move + up
await page.mouse.move(100, 100);
await page.mouse.down();
await page.mouse.move(300, 300);
await page.mouse.up();

// Right-click and hold
await page.mouse.move(200, 200);
await page.mouse.down({ button: 'right' });
// ... do something ...
await page.mouse.up({ button: 'right' });

// Custom drag selection
await page.mouse.click(100, 100); // start position
await page.mouse.down();
await page.mouse.move(400, 400, { steps: 10 }); // smooth drag
await page.mouse.up();
```

---

## 3. Hover (`locator.hover()`)

### 3.1 Basic Hover

```typescript
await page.locator('#menu-item').hover();
```

### 3.2 Hover with Options

```typescript
await page.locator('#menu-item').hover({
  force: false,       // bypass actionability checks
  position: { x: 10, y: 10 }, // relative offset
  timeout: 5000,
  modifiers: ['Shift'], // hold Shift while hovering
  trial: false        // trial mode (only checks, no action)
});
```

### 3.3 Hover + Click Pattern

```typescript
await page.locator('.dropdown-trigger').hover();
await page.locator('.dropdown-menu-item').click();
```

---

## 4. Drag and Drop

### 4.1 Method 1: `dragTo()` (Recommended)

```typescript
// Simple drag and drop
const source = page.locator('#draggable');
const target = page.locator('#droppable');
await source.dragTo(target);
```

### 4.2 Method 2: Manual Mouse Actions

```typescript
// Get bounding boxes for precise control
const sourceBox = await page.locator('#draggable').boundingBox();
const targetBox = await page.locator('#droppable').boundingBox();

if (sourceBox && targetBox) {
  const startX = sourceBox.x + sourceBox.width / 2;
  const startY = sourceBox.y + sourceBox.height / 2;
  const endX = targetBox.x + targetBox.width / 2;
  const endY = targetBox.y + targetBox.height / 2;

  await page.mouse.move(startX, startY);
  await page.mouse.down();
  await page.mouse.move(endX, endY, { steps: 10 }); // smooth drag
  await page.mouse.up();
}
```

### 4.3 DragTo with Options

```typescript
await page.locator('#draggable').dragTo(
  page.locator('#droppable'),
  {
    sourcePosition: { x: 10, y: 10 },  // offset within source
    targetPosition: { x: 20, y: 20 },  // offset within target
    timeout: 5000,
    force: false,
    strict: true,
    trial: false
  }
);
```

### 4.4 Drag-and-Drop File Upload

```typescript
// Drag files onto a drop zone
await page.locator('#drop-zone').evaluate((el, files) => {
  // Custom drop event with DataTransfer
}, filePaths);
```

---

## 5. Combined Examples

### 5.1 Keyboard + Mouse Combo

```typescript
// Ctrl + Click to multi-select
await page.keyboard.down('Control');
await page.locator('#item1').click();
await page.locator('#item2').click();
await page.locator('#item3').click();
await page.keyboard.up('Control');
```

### 5.2 Drag Selection with Shift

```typescript
// Click first item
await page.locator('.list-item').first().click();

// Shift+click last item to select range
await page.keyboard.down('Shift');
await page.locator('.list-item').last().click();
await page.keyboard.up('Shift');
```

### 5.3 Context Menu (Right-Click)

```typescript
// Right-click context menu
await page.locator('#element').click({ button: 'right' });
// Or using mouse
await page.mouse.click(100, 200, { button: 'right' });
```

### 5.4 Scroll with Wheel

```typescript
// Scroll down
await page.mouse.wheel(0, 500);

// Scroll up
await page.mouse.wheel(0, -500);

// Scroll right
await page.mouse.wheel(500, 0);
```

---

## 6. Quick Reference Table

| Action | API | Notes |
|--------|-----|-------|
| Press key | `page.keyboard.press('Enter')` | Single key press |
| Type text | `page.keyboard.type('text')` | Simulates typing |
| Hold key | `page.keyboard.down('Shift')` | Must call `up()` later |
| Release key | `page.keyboard.up('Shift')` | Pairs with `down()` |
| Click | `page.click('#el')` | Element-based |
| Click (coords) | `page.mouse.click(x, y)` | Coordinate-based |
| Mouse down | `page.mouse.down({button:'left'})` | Hold mouse button |
| Mouse up | `page.mouse.up({button:'left'})` | Release mouse button |
| Move mouse | `page.mouse.move(x, y)` | Move to coordinates |
| Hover | `page.locator('#el').hover()` | Over an element |
| Drag to | `source.dragTo(target)` | Simple drag & drop |
| Scroll | `page.mouse.wheel(dx, dy)` | Mouse wheel scroll |
| Double-click | `page.dblclick('#el')` | Double click element |
| Right-click | `page.click('#el', {button:'right'})` | Context menu |

---

## 7. Best Practices

1. **Prefer locator methods** (`locator.click()`, `locator.hover()`) over raw `page.mouse` when possible — they handle actionability checks automatically.
2. **Always pair `down()` with `up()`** — forgetting to release a key or mouse button can leave the browser in an inconsistent state.
3. **Use `dragTo()` for simple drag-and-drop** — it handles all the mouse events correctly.
4. **Use `steps` in `mouse.move()`** for smooth drag animations that some apps require.
5. **Combine modifiers** like `Shift`, `Control`, `Alt` with clicks for multi-select or special actions.
6. **Use `insertText()` instead of `type()`** when you don't need individual key events (faster and more reliable).

---

*Happy Learning!*
