const Fullpage = ({ children }) => {
  return (
    <div>
      <div className="absolute translate-x-[-50%] translate-y-[-50%] top-1/2 left-1/2">
        {children}
      </div>
    </div>
  );
};

export default Fullpage;
