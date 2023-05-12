type GoalCardProps = {
  icon: React.ReactNode;
  inViewPort: boolean;
  description: string;
};

const GoalCard = ({ icon, inViewPort, description }: GoalCardProps) => {
  return (
    <div className="group mx-auto flex max-w-md flex-1 flex-col items-center py-4 transition duration-300 hover:bg-white hover:text-babyblue-dark md:py-0">
      {icon}
      <div
        className={`px-2 text-center text-sm [transition:0.5s_transform_ease-out_,_0.5s_opacity_ease-out] ${
          inViewPort
            ? "md:translate-y-0 md:opacity-100"
            : "md:-translate-y-5 md:opacity-0"
        }`}
      >
        <p>{description}</p>
      </div>
    </div>
  );
};

export default GoalCard;
