import {
  Brain,
  Layers,
  Shield,
  Compass,
  Sparkles,
  Server,
  Rocket,
  Gauge,
  Key,
  GitBranch,
  CodeXml,
  Palette,
  Bot,
  CloudUpload,
  Calendar,
  Zap,
  Lock,
  Eye,
  type LucideIcon,
} from "lucide-react";

const icons: Record<string, LucideIcon> = {
  brain: Brain,
  layers: Layers,
  shield: Shield,
  compass: Compass,
  sparkles: Sparkles,
  server: Server,
  rocket: Rocket,
  gauge: Gauge,
  key: Key,
  "git-branch": GitBranch,
  "code-xml": CodeXml,
  palette: Palette,
  bot: Bot,
  "cloud-upload": CloudUpload,
  calendar: Calendar,
  zap: Zap,
  lock: Lock,
  eye: Eye,
};

const sizes = {
  sm: "h-9 w-9 rounded-lg",
  md: "h-10 w-10 rounded-lg",
  security: "h-11 w-11 rounded-lg",
  lg: "h-12 w-12 rounded-xl",
};

const iconSizes = {
  sm: "h-4 w-4",
  md: "h-5 w-5",
  security: "h-5 w-5",
  lg: "h-6 w-6",
};

const colors = {
  sm: "text-red-400",
  md: "text-red-400",
  security: "text-red-400",
  lg: "text-red-500 dark:text-red-400",
};

export function IconMark({
  icon,
  size = "md",
  className = "",
}: {
  icon: string;
  size?: keyof typeof sizes;
  className?: string;
}) {
  const Icon = icons[icon];
  return (
    <div
      className={`flex shrink-0 items-center justify-center bg-red-500/10 ${colors[size]} ${sizes[size]} ${className}`}
    >
      <Icon className={iconSizes[size]} aria-hidden="true" />
    </div>
  );
}
