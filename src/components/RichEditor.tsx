import { Link, RichTextEditor } from "@mantine/tiptap";
import {
  IconBold,
  IconItalic,
  IconUnderline,
  IconStrikethrough,
  IconClearFormatting,
  IconHighlight,
  IconCode,
  IconH1,
  IconH2,
  IconH3,
  IconH4,
  IconBlockquote,
  IconDots,
  IconList,
  IconListNumbers,
  IconSubscript,
  IconSuperscript,
} from "@tabler/icons-react";

// @ts-expect-error No error
import Highlight from "@tiptap/extension-highlight";
import Superscript from "@tiptap/extension-superscript";
import SubScript from "@tiptap/extension-subscript";
import TextAlign from "@tiptap/extension-text-align";
import Underline from "@tiptap/extension-underline";
import { useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";
import { useNoteEditor } from "../contexts/NoteEditorContext";

const content = "";

export default function RichEditor() {
  const { setContent } = useNoteEditor();
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Link,
      Superscript,
      SubScript,
      Highlight,
      TextAlign.configure({ types: ["heading", "paragraph"] }),
      Placeholder.configure({ placeholder: "What's on your mind?" }),
    ],
    onUpdate: ({ editor }) => {
      const html = editor.getHTML();
      setContent(html);
    },
    content,
  });
  return (
    <RichTextEditor editor={editor} mt={20}>
      <RichTextEditor.Toolbar sticky stickyOffset={60}>
        <RichTextEditor.ControlsGroup>
          <RichTextEditor.Bold icon={IconBold} />
          <RichTextEditor.Italic icon={IconItalic} />
          <RichTextEditor.Underline icon={IconUnderline} />
          <RichTextEditor.Strikethrough icon={IconStrikethrough} />
          <RichTextEditor.ClearFormatting icon={IconClearFormatting} />
          <RichTextEditor.Highlight icon={IconHighlight} />
          <RichTextEditor.Code icon={IconCode} />
        </RichTextEditor.ControlsGroup>

        <RichTextEditor.ControlsGroup>
          <RichTextEditor.H1 icon={IconH1} />
          <RichTextEditor.H2 icon={IconH2} />
          <RichTextEditor.H3 icon={IconH3} />
          <RichTextEditor.H4 icon={IconH4} />
        </RichTextEditor.ControlsGroup>

        <RichTextEditor.ControlsGroup>
          <RichTextEditor.Blockquote icon={IconBlockquote} />
          <RichTextEditor.Hr icon={IconDots} />
          <RichTextEditor.BulletList icon={IconList} />
          <RichTextEditor.OrderedList icon={IconListNumbers} />
          <RichTextEditor.Subscript icon={IconSubscript} />
          <RichTextEditor.Superscript icon={IconSuperscript} />
        </RichTextEditor.ControlsGroup>

        <RichTextEditor.ControlsGroup>
          <RichTextEditor.Link />
          <RichTextEditor.Unlink />
        </RichTextEditor.ControlsGroup>

        <RichTextEditor.ControlsGroup>
          <RichTextEditor.AlignLeft />
          <RichTextEditor.AlignCenter />
          <RichTextEditor.AlignJustify />
          <RichTextEditor.AlignRight />
        </RichTextEditor.ControlsGroup>

        <RichTextEditor.ControlsGroup>
          <RichTextEditor.Undo />
          <RichTextEditor.Redo />
        </RichTextEditor.ControlsGroup>
      </RichTextEditor.Toolbar>

      <RichTextEditor.Content />
    </RichTextEditor>
  );
}
