import React, {PropTypes} from 'react'
class CalendarHeader extends React.Component {
    constructor(props) {
        super(props)
        let date = new Date()
        this.state = {
            year: this.props.year,
            month: this.props.month
        }
    }
    handleRightClick() {
        let nextState = {}
        if (this.state.month === 12) {
            nextState = {
                year: this.state.year + 1,
                month: 1
            }
            this.setState(nextState)
        } else {
            nextState = {
                year:this.state.year,
                month: this.state.month + 1
            }
            this.setState(nextState)
        }
        this.props.updateFilter(nextState.year,nextState.month)
    }
    handleLeftClick() {
        let nextState = {}
        if (this.state.month === 1) {
            nextState = {
                year: this.state.year - 1,
                month: 12
            }
            this.setState(nextState)
        } else {
            nextState = {
                year:this.state.year,
                month: this.state.month - 1
            }
            this.setState(nextState)
        }
        this.props.updateFilter(nextState.year,nextState.month)
    }

    render() {
        return (
            <div className="calendar-header">
                <a className="header-btn" onClick={() => this.handleLeftClick()} >&larr;</a>
                <span className="header-text">{this.state.year + '-' + this.state.month}</span>
                <a className="header-btn" onClick={() => this.handleRightClick()} >&rarr;</a>
            </div>
        )
    }
}

export default CalendarHeader
