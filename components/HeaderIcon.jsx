const HeaderIcon = ({ title, Icon }) => {
  return (
    <div className="group flex flex-col items-center cursor-pointer hover:text-white w-12 sm:w-20">
      <Icon className="w-7 h-7 m-1 group-hover:animate-bounce" />
      <p className="opacity-0 uppercase tracking-widest group-hover:opacity-100 text-base transition-all ease-out duration-150">
        {title}
      </p>
    </div>
  );
};

export default HeaderIcon;
