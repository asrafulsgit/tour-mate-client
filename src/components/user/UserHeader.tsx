 
const UserHeader = ({title,subTitle} :{title : string; subTitle ?: string}) => {
  return (
    <section className="bg-card border-b border-border py-4">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 ">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
          {title}
        </h1>
        {subTitle && <p className="text-muted-foreground">
          {subTitle}
        </p>}
      </div>
    </section>
  );
};

export default UserHeader;
