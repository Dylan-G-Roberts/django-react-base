import React, { Component } from "react";
import PropTypes from "prop-types";

class Note extends Component {
  render() {
    const { note } = this.props;
    return (
      <div>
        <p>{note.content}</p>
      </div>
    );
  }
}

Note.propTypes = {
  note: PropTypes.object.isRequired
};
export default Note;