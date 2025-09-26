export default function FeatureCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="card hover:shadow-sm transition-shadow">
      <h3 className="font-medium">{title}</h3>
      <p className="text-sm text-foreground/80 mt-1">{description}</p>
    </div>
  );
}
