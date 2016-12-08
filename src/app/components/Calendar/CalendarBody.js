import React, {PropTypes} from 'react'
class CalendarBody extends React.Component {
    constructor(props) {
        super(props)
    }
    propTypes : {
        year: PropTypes.number.isRequired,
        month: PropTypes.number.isRequired
    }
    getFirstDayWeek() {
        let year = this.props.year,
            month = this.props.month
        let dt = new Date(year + '/' + month + '/1')
        let Weekdays = dt.getDay()
        return Weekdays
    }
    getMonthDays() {
        let year = this.props.year,
            month = this.props.month
        let temp = new Date(year, month, 0)
        return temp.getDate()
    }
    //上个月要显示几天
    getLastDayOfLastMonth() {
        let year = this.props.year,
            month = this.props.month
        if (this.props.month === 1) {
            year--
            month = 1
        } else {
            month++
        }
        let temp = new Date(year, month, 0)
        return temp.getDate()
    }
    render() {
        let arry1 = [],
            arry2 = [],
            arry3 = []
        let getDays = this.getMonthDays(),
            FirstDayWeek = this.getFirstDayWeek(),
            curday = this.props.day,
            lastDayOfLastMonth = this.getLastDayOfLastMonth(),
            restDays = 0
        for (let i = 0; i < FirstDayWeek; i++) {
            arry1[i] = {
                day: lastDayOfLastMonth,
                month: this.props.month === 1 ? 12 : this.props.month - 1,
                year : this.props.month === 1 ? this.props.year - 1 :  this.props.year
            }
            lastDayOfLastMonth--
        }
        for (let i = 0; i < getDays; i++) {
            arry2[i] = {
                day: i + 1,
                month:this.props.month,
                year:this.props.year
            }
        }
        //计算下个月要显示几天
        {
            let length = arry1.length + arry2.length
            let n = length % 7
            if (n > 0) {
                restDays = 7 - n
            }
        }
        for (let i = 0; i < restDays; i++) {
            arry3[i] = {
                day: i + 1,
                month: this.props.month === 12 ? 1 : this.props.month + 1,
                year : this.props.month === 12 ? this.props.year + 1 :  this.props.year
            }
        }
        let arry = arry1.reverse().concat(arry2, arry3)
        let node = arry.map((item, key) =>
            <li key={key}>
              {item.day}
            </li>)
        return (
            <div className='calendar-body box'>
                <div className='calendar-week'>
                    <ul>
                        <li>一</li>
                        <li>二</li>
                        <li>三</li>
                        <li>四</li>
                        <li>五</li>
                        <li>六</li>
                        <li>日</li>
                    </ul>
                </div>
                <div className='calendar-day'>
                    <ul>
                        {node}
                    </ul>
                </div>

            </div>
        )
    }
}

export default CalendarBody
