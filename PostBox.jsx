import { useState } from "react";

const MAX_CHARS = 100;

/**
 * Q2 — Post Box with a Character Counter
 *
 * 1. Controlled textarea for the post content.
 * 2. Live counter below it, e.g. "45 / 100".
 * 3. Red "Limit exceeded" message when text exceeds 100 characters.
 * 4. "Post" button disabled when text is empty or over the limit.
 */
export default function PostBox() {
  const [text, setText] = useState("");

  const length = text.length;
  const overLimit = length > MAX_CHARS;
  const canPost = length > 0 && !overLimit;

  const handlePost = () => {
    if (!canPost) return;
    alert("Posted: " + text);
    setText("");
  };

  return (
    <div className="card">
      <h1>Create a post</h1>

      {/* 1. Controlled textarea */}
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Write your post here..."
        rows={4}
      />

      {/* 2. Live counter + 3. limit-exceeded message */}
      <div className="meta">
        <span className={overLimit ? "error" : ""}>
          {length} / {MAX_CHARS}
        </span>
        {overLimit && <span className="error">Limit exceeded</span>}
      </div>

      {/* 4. Disabled when empty or over the limit */}
      <button className="post-btn" onClick={handlePost} disabled={!canPost}>
        Post
      </button>
    </div>
  );
}
