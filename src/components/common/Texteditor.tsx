"use client";

import Bold from "@tiptap/extension-bold";
import Italic from "@tiptap/extension-italic";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { useEffect } from "react";
import { Button } from "../ui/button";
import { BoldIcon, Code, ItalicIcon, StrikethroughIcon } from "lucide-react";

export default function TextEditor() {
  const editor = useEditor({
    extensions: [StarterKit, Bold, Italic],
    content: "<p>Hello, Tiptap!</p>",
  });

  useEffect(() => {
    if (editor) {
      console.log("Editor ready", editor);
    }
  }, [editor]);

  if (!editor) return null;

  return (
    <div className="prose max-w-none p-4 border rounded">
      {/* Toolbar */}
      <div className="flex gap-2">
        <Button
          variant="default"
          size="sm"
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={editor.isActive("bold") ? "bg-gray-200" : ""}
        >
          <BoldIcon />
          Bold
        </Button>
        <Button
          variant="default"
          size="sm"
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={editor.isActive("italic") ? "bg-gray-200" : ""}
        >
          <ItalicIcon />
          Italic
        </Button>
        <Button
          onClick={() => editor.chain().focus().toggleStrike().run()}
          disabled={!editor.can().chain().focus().toggleStrike().run()}
          className={editor.isActive("strike") ? "bg-gray-200" : ""}
        >
          <StrikethroughIcon />
          Strike
        </Button>
        {/* <Button
          onClick={() => editor.chain().focus().toggleCode().run()}
          disabled={!editor.can().chain().focus().toggleCode().run()}
          className={editor.isActive("code") ? "bg-gray-200" : ""}
        >
                  <Code /> Code
              </Button> */}
        <Button
          onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
          className={editor.isActive("heading", { level: 1 }) ? "bg-gray-200" : ""}
        >
          H1
        </Button>

        <Button
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
          className={editor.isActive("heading", { level: 2 }) ? "is-active" : ""}
        >
          H2
        </Button>
        <Button
          onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
          className={editor.isActive("heading", { level: 3 }) ? "is-active" : ""}
        >
          H3
        </Button>
      </div>
      <EditorContent editor={editor} />
    </div>
  );
}
