import React, { PropTypes } from 'react'
import './styles.less'
import CalendarBody from './CalendarBody'
import CalendarHeader from './CalendarHeader'

class Calendar extends React.Component {
    constructor(props) {
        super(props)
        let date = new Date()
        this.state = {
            year:date.getFullYear(),
            month:date.getMonth()+1
        }
    }
    handleFilterUpdate(filterYear,filterMonth){
        this.setState({
            year:filterYear,
            month:filterMonth
        })
    }
    render () {
        return (
      <div className="calendar">
          <CalendarHeader
            year={this.state.year}
            month={this.state.month}
            updateFilter={(...props)=>this.handleFilterUpdate(...props)}
          />
        <CalendarBody year={this.state.year}
                      month={this.state.month}>  
        </CalendarBody>
      </div>
        )
    }
}

export default Calendar
