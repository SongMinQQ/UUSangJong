"use client";

import Bold from "@tiptap/extension-bold";
import Italic from "@tiptap/extension-italic";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { useEffect } from "react";
import { Button } from "../ui/button";
import { BoldIcon, ItalicIcon, StrikethroughIcon } from "lucide-react";
import TextStyle from "@tiptap/extension-text-style";
import Color from "@tiptap/extension-color";
import "@/app/globals.css";

export default function TextEditor({
  value,
  onChange,
}: {
  value: string;
  onChange: (html: string) => void;
}) {
  console.debug(value);
  const editor = useEditor({
    extensions: [StarterKit, Bold, Italic, TextStyle, Color],
    content: value || "<p></p>", //null 보호를 위해
    onUpdate: ({ editor }) => {
      const html = editor.getHTML();
      const text = editor.getText();
      if (text.length > 1000) {
        // 500자 초과 시 편집 중단 (이전 상태로 롤백)
        const truncated = text.slice(0, 1000);
        editor.commands.setContent(truncated); // plain text 기준
        return;
      }
      onChange(html);
    },
    editorProps: {
      attributes: {
        class:
          "ProseMirror prose w-full h-full outline-none border-none p-0 m-0 focus:outline-none focus:border-none",
      },
    },
  });

  useEffect(() => {
    if (editor && value !== editor.getHTML()) {
      editor.commands.setContent(value || "<p></p>", false);
    }
  }, [editor, value]);

  if (!editor) return null;

  return (
    <div className="w-[1111px] h-[609px] border bg-white flex flex-col">
      {/* Toolbar */}
      <div className="flex gap-2 p-2">
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
        <Button
          onClick={() => {
            const isRed = editor.isActive("textStyle", { color: "#ff0000" });
            editor
              .chain()
              .focus()
              .setColor(isRed ? "#000000" : "#ff0000")
              .run();
          }}
          className={editor.isActive("textStyle", { color: "#ff0000" }) ? "bg-gray-200" : ""}
        >
          Red
        </Button>
      </div>
      <EditorContent editor={editor} className="flex-1 w-full h-full p-4" />
    </div>
  );
}
