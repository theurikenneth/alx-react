import React from "react";
import PropTypes from "prop-types";

const rowStyles = { backgroundColor: "#f5f5f5ab" };
const headerRowSTyles = { backgroundColor: "#deb5b545" };

function CourseListRow({ isHeader, textFirstCell, textSEcondCell }) {
  let element;

  if (isHeader === true) {
  } else if (isHeader === false) {
    element = (
      <>
        <td>{textFirstCell}</td>
        <td>{textSecondCell}</td>
      </>
    );
  }
  let isHeaderStyle;

  if (isHeader) isHeaderStyle = headerRowStyles;
  else isHeaderStyle = rowStyles;
  return <tr style={isHeaderStyle}>{element}</tr>;
}

CourseListRow.defaultProps = {
  isHeader: false,
  testSecondCell: null,
};

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default CourseListRow;
