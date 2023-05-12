type GoalCardProps = {
  icon: React.ReactNode;
  inViewPort: boolean;
  description: string;
};

const GoalCard = ({ icon, inViewPort, description }: GoalCardProps) => {
  return (
    <div className="group flex flex-1 flex-col items-center transition duration-300 hover:bg-white hover:text-babyblue-dark">
      {icon}
      <div
        className={`px-2 text-center text-sm [transition:0.5s_transform_ease-out_,_0.5s_opacity_ease-out] ${
          inViewPort ? "translate-y-0 opacity-100" : "-translate-y-5 opacity-0"
        }`}
      >
        <p>{description}</p>
      </div>
    </div>
  );
};

export default GoalCard;
