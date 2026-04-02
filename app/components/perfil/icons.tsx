import { Archive, MessageCircleQuestionMark, SquarePen } from "lucide-react";

type IconProps = {
  className?: string;
};

export function EditSquareIcon({ className }: IconProps) {
  return (
    <SquarePen />
  );
}

export function ClipboardIcon({ className }: IconProps) {
  return (
    <Archive />
  );
}

export function HelpCircleIcon({ className }: IconProps) {
  return (
    <MessageCircleQuestionMark />
  );
}

export function PencilBadgeIcon({ className }: IconProps) {
  return (
   <SquarePen size={18}/>
  );
}
