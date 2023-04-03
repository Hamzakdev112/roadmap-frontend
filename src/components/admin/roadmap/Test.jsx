import React from "react";

const Test = ({ data }) => {
  const renderChildren = (children) => {
    if (!children) {
      return null;
    }

    return (
      <div className=" p-2 flex gap-10">
        {children.map((child, index) => (
          <div className="border-[1px] border-[black]" key={index}>
            <Test data={child} />
          </div>
        ))}
      </div>
    );
  };

  return (
    <>
      <div>{data.name}</div>
      {renderChildren(data.children)}
    </>
  );
};

export default Test;