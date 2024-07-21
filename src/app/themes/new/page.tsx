import { createTheme } from "@/app/actions";
import { colorCode } from "@/constants";
import type { CSSProperties } from "react";

export default async function Page() {
  return (
    <main>
      <form action={createTheme} style={baseStyle}>
        <label>
          Title
          <input type="text" name="title" />
        </label>
        <label>
          likeCount
          <input type="number" name="like_count" />
        </label>
        <label>
          postCount
          <input type="number" name="post_count" />
        </label>
        <button type="submit">Create</button>
      </form>
    </main>
  );
}

const baseStyle: CSSProperties = {
  alignItems: "center",
  backgroundColor: colorCode.lightGray,
  display: "flex",
  flexDirection: "column",
  gap: "8px",
};
