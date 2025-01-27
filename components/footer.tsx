export default function Footer() {
  return (
    <footer className="py-8 relative before:absolute before:-inset-x-32 before:top-0 before:h-px before:bg-[linear-gradient(to_right,theme(colors.border/.3),theme(colors.border)_200px,theme(colors.border)_calc(100%-200px),theme(colors.border/.3))]">
      <div
        className="before:absolute before:-left-12 before:-ml-px before:-top-px before:size-[3px] before:bg-ring before:z-10 after:absolute after:-right-12 after:-mr-px after:-top-px after:size-[3px] after:bg-ring after:z-10"
        aria-hidden="true"
      ></div>      
      <div className="flex max-sm:flex-col max-sm:text-center justify-between gap-2">
        <p className="text-sm text-muted-foreground">Copyright 2025 Origin UI.</p>
        <p className="text-sm text-muted-foreground">Built with ♥ by <a className="text-foreground font-medium underline decoration-border underline-offset-4 hover:no-underline" href="https://x.com/intent/follow?screen_name=pacovitiello" target="_blank" rel="noopener noreferrer">Pasquale</a> and <a className="text-foreground font-medium underline decoration-border underline-offset-4 hover:no-underline" href="https://x.com/intent/follow?screen_name=DavidePacilio" target="_blank" rel="noopener noreferrer">Davide</a>.</p>
      </div>
    </footer>
  );
}
