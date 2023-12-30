type childrenType = {
  children: any;
};

const SlugLayout = ({ children }: childrenType) => {
  return (
    <div>
      <h2>This is a blog layout</h2>
      {children}
    </div>
  );
};

export default SlugLayout;
