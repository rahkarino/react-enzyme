import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ListItem extends Component {
    render() {
        return (
            <div data-test="listItemComponent">test</div>
        )
    }
}

ListItem.propTypes = {
    title: PropTypes.string,
    desc: PropTypes.string
};

export default ListItem