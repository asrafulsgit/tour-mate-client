
const SectionHeader = ({title,subTitle} : {title : string, subTitle : string}) => {
  return (
    <div>
      <h2 className="heading text-3xl sm:text-4xl font-bold text-foreground mb-1 sm:mb-2">
        {title}
      </h2>
      <p className="text-muted-foreground">
        {subTitle}
      </p>
    </div>
  );
};

export default SectionHeader;
