const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex items-center gap-1 ${className}`}>
      {/* AI badge */}
      <span className="bg-primary text-primary-foreground text-xs font-bold px-1.5 py-0.5 rounded">
        AI
      </span>
      {/* Text */}
      <div className="flex flex-col leading-none">
        <span className="text-lg font-bold tracking-tight text-foreground">
          Nexus<span className="text-primary">Cloud</span>
        </span>
        <span className="text-[8px] tracking-[0.15em] text-muted-foreground uppercase">
          Uw partner in AI-transformatie
        </span>
      </div>
    </div>
  );
};

export default Logo;
