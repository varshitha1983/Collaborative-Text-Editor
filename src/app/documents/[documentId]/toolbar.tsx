"use client";

import { 
    LucideIcon,
    Undo2Icon,
    Redo2Icon,
    PrinterIcon,
    SpellCheckIcon,
    BoldIcon,
    ItalicIcon,
    UnderlineIcon,
    MessageSquarePlusIcon,
    ListTodoIcon,
    RemoveFormattingIcon
    } from "lucide-react";
import {cn} from "@/lib/utils";
import { useEditorStore } from "@/store/use-editor-store";
import { Separator } from "@/components/ui/separator";


interface ToolbarButtonProps {
    onClick?: () => void;
    isActive?: boolean;
    icon: LucideIcon;
};

const ToolbarButton = ({
    onClick,
    isActive,
    icon : Icon,
} : ToolbarButtonProps) => {
    return(
        <button 
        onClick={onClick}
        className={cn(
            "text-sm h-7 min-w-7 flex item-center justify-center rounded-sm hover:bg-neutral-200/80",
            isActive && "bg-neutral-200/80"
        )}
        >
            <Icon className="size-4"/>
        </button>
    );
}

export const Toolbar = () =>{ 

    const{ editor } = useEditorStore();
    console.log({editor});
    const sections: {
        label: string; 
        icon: LucideIcon;
        onClick: () => void;
        isActive?: boolean;
    }[][] = [
        [
            {
                label: "Undo",
                icon: Undo2Icon,
                onClick: () => editor?.chain().focus().undo().run(),
            },
            {
                label: "Redo",
                icon: Redo2Icon,
                onClick: () => editor?.chain().focus().redo().run(),
            },
            {
                label: "Print",
                icon: PrinterIcon,
                onClick: () => window.print(),
            },
            {
                label: "Spell Check",
                icon: SpellCheckIcon,
                onClick: () => {
                    const current = editor?.view.dom.getAttribute("spellcheck");
                    editor?.view.dom.setAttribute("spellcheck", current === "false" ? "true" : "false");
                },
            }
        ],
        [
            {
                label: "Bold",
                icon: BoldIcon,
                isActive: editor?.isActive("bold"),
                onClick: () => editor?.chain().focus().toggleBold().run(),
            },
            {
                label: "Italic",
                icon: ItalicIcon,
                isActive: editor?.isActive("italic"),
                onClick: () => editor?.chain().focus().toggleItalic().run(),
            },
            {
                label: "Underline",
                icon: UnderlineIcon,
                isActive: editor?.isActive("underline"),
                onClick: () => editor?.chain().focus().toggleUnderline().run(),
            },
            
        ],
        [
            {
                label: "Comment",
                icon: MessageSquarePlusIcon,
                isActive: false,//TODO: Enable this later
                onClick: () => console.log("TODO:COmment"),
            },
            // {/* TODO: Link */}
            // {/* TODO: Comment */}
            // {/* TODO: Insert Image */}
        ],
        [
            {
                label: "Todo List",
                icon: ListTodoIcon,
                isActive: editor?.isActive("tasklist"),//TODO: Enable this later
                onClick: () => editor?.chain().focus().toggleTaskList().run(),
            },
            {
                label: "Clear Formatting",
                icon: RemoveFormattingIcon,
                // isActive: editor?.isActive("tasklist"),//TODO: Enable this later
                onClick: () => editor?.chain().focus().unsetAllMarks().run(),
            },
        ],
    ];

    return(
        <div className="bg-[#F1F4F9] px-2.5 py-0.5 rounded-[24px] min-h-[40px] flex items-center gap-x-0.5 overflow-x-auto">
            {sections[0].map((item) => ( 
                <ToolbarButton key={item.label} {...item} />
            ))}
            <Separator orientation="vertical" className="h-6 bg-neutral-300" />
            {/* TODO: Font Family */}
            <Separator orientation="vertical" className="h-6 bg-neutral-300" />
            {/* TODO: Heading*/}
            <Separator orientation="vertical" className="h-6 bg-neutral-300" />
            {/* TODO: Font Size */}
            <Separator orientation="vertical" className="h-6 bg-neutral-300" />
            {sections[1].map((item) => (
                <ToolbarButton key={item.label} {...item} />
            ))}
            {/* TODO: Text COlor */}
            {/* TODO: Highlight Color */}
            <Separator orientation="vertical" className="h-6 bg-neutral-300" />
            {/* TODO: Link */}
            {/* TODO: Comment */}
            {/* TODO: Insert Image */}
            {sections[2].map((item) => (
                <ToolbarButton key={item.label} {...item} />
            ))}
            <Separator orientation="vertical" className="h-6 bg-neutral-300" />
            {/* TODO: Align & Indent */}
            {/* TODO: Line Spacing */}
            {/* TODO: --done TODO List */}
            {/* TODO: Bulletted List */}
            {/* TODO: Numbered List */}
            {/* TODO: Decrease Indent */}
            {/* TODO: Increase Indent */}
            {/* TODO: --done Clear formatting*/}
            {sections[3].map((item) => (
                <ToolbarButton key={item.label} {...item} />
            ))}

        </div>
    );
};