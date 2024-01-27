import React, { useState } from "react";

const ExpandableText = ({ children }) => {
  const [expanded, setExpanded] = useState(false);
  const limit = 300;

  if (!children) return null;

  if (children.length <= limit) return <p>{children}</p>;

  const summary = expanded ? children : children.substring(0, limit) + "...";

  return (
    <p className="object-fit-contain">
      {summary}
      <div
        className="btn btn-secondary btn-sm mx-4 mx-md-0"
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? "Less" : "More"}
      </div>
      <hr />
    </p>
  );
};

export default ExpandableText;
