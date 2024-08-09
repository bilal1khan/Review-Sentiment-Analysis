import React, { useState } from "react";
import Tooltip from "./Tooltip";

const getColor = (sentiment) => {
  switch (sentiment) {
    case "Positive":
      return "bg-[#D9F2DD]";
    case "Negative":
      return "bg-[#F2DBD9]";
    case "Mixed":
      return "bg-[#e8bd6d3d]";
    case "Neutral":
      return "bg-[#eaf09b6b]";
    default:
      return "";
  }
};

const ReviewHighlighter = ({ content, analytics }) => {
  const [tooltip, setTooltip] = useState({
    visible: false,
    text: "",
    top: 0,
    left: 0,
  });

  const showTooltip = (event, text) => {
    setTooltip({
      visible: true,
      text,
      top: event.clientY,
      left: event.clientX,
    });
  };

  const hideTooltip = () => {
    setTooltip({ ...tooltip, visible: false });
  };

  const getHighlightedContent = () => {
    let highlightedContent = [];
    let lastIndex = 0;

    analytics.forEach((item) => {
      item.highlight_indices.forEach(([start, end]) => {
        if (lastIndex < start) {
          highlightedContent.push(
            <span key={lastIndex}>{content.substring(lastIndex, start)}</span>,
          );
        }

        highlightedContent.push(
          <span
            key={start}
            className={`${getColor(item.sentiment)} cursor-pointer`}
            onMouseOver={(e) => showTooltip(e, item.topic)}
            onMouseOut={hideTooltip}
          >
            {content.substring(start, end)}
          </span>,
        );

        lastIndex = end;
      });
    });

    if (lastIndex < content.length) {
      highlightedContent.push(
        <span key={lastIndex}>{content.substring(lastIndex)}</span>,
      );
    }

    return highlightedContent;
  };

  return (
    <div>
      <div>{getHighlightedContent()}</div>
      {tooltip.visible && (
        <div
          style={{ top: tooltip.top, left: tooltip.left, position: "fixed" }}
        >
          <Tooltip text={tooltip.text} />
        </div>
      )}
    </div>
  );
};

export default ReviewHighlighter;
