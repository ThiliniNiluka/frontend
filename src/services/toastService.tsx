interface toastServiceProps {
  title: string;
  subtitle: string;
  titleColor: string;
}

export default function toastService({
  title,
  subtitle,
  titleColor = "text-red-600",
}: toastServiceProps) {
  <div className="flex flex-col">
    <div className="text-8">{title}</div>
    <div className={`text-6 ${titleColor}`}>{subtitle}</div>
  </div>;
}
