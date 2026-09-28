# Q2 — Post Box with a Character Counter

A React experiment implementing:

1. **Controlled textarea** for the post content (value bound to React state).
2. **Live character counter** below it, e.g. `45 / 100`.
3. **Red "Limit exceeded" message** when the text exceeds 100 characters.
4. **"Post" button disabled** when the text is empty or over the limit.

## How to run

### Easiest — no install needed
Open `index.html` in any modern browser. It loads React from a CDN and runs
the same component inline (via Babel standalone).

### As a React component
`PostBox.jsx` contains the standalone reusable component — drop it into any
React project (Vite, CRA, Next.js) and render `<PostBox />`.

## Key logic

```jsx
const [text, setText] = useState("");        // controlled input state

const overLimit = text.length > 100;         // limit check
const canPost = text.length > 0 && !overLimit; // button enable rule

<textarea value={text} onChange={(e) => setText(e.target.value)} />

<button disabled={!canPost}>Post</button>
```
