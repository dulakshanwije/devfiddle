type PageTitleProps = {
  title: string;
  description?: string;
  className?: string;
};

const PageTitle = ({ title, description, className }: PageTitleProps) => {
  return (
    <div
      className={`flex flex-col justify-center items-center w-full my-12 ${className}`}
    >
      <h1 className="text-center font-bold text-4xl text-shadow-md/20 leading-12">
        {title}
      </h1>
      {description && (
        <p className="text-center max-w-3xl mt-4 text-mute text-base leading-6">
          {description}
        </p>
      )}
    </div>
  );
};

export default PageTitle;
