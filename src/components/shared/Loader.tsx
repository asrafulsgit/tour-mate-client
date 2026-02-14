const Loader = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="relative flex items-center justify-center">
        <div className="absolute w-16 h-16 bg-primary/30 rounded-full animate-ping"></div>
        <div className="absolute w-16 h-16 bg-primary/20 rounded-full animate-ping [animation-delay:300ms]"></div>

        <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
          <span className="text-primary-foreground font-bold text-xl">T</span>
        </div>
      </div>
    </div>
  );
};

export default Loader;
