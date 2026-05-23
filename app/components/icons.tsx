import {
  Archive,
  ChevronLeft,
  ChevronRight,
  MessageCircleQuestionMark,
  SquarePen,
} from "lucide-react";

type IconProps = {
  className?: string;
};

export function EditSquareIcon({ className }: IconProps) {
  return <SquarePen />;
}

export function ClipboardIcon({ className }: IconProps) {
  return <Archive />;
}

export function HelpCircleIcon({ className }: IconProps) {
  return <MessageCircleQuestionMark />;
}

export function PencilBadgeIcon({ className }: IconProps) {
  return <SquarePen size={18} />;
}

export function ArrowLeftIcon(size: number) {
  return <ChevronLeft size={size} color="currentColor" />;
}

export function ArrowRightIcon(size: number) {
  return <ChevronRight size={size} color="currentColor" />;
}
