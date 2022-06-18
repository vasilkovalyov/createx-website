import dayjs from 'dayjs'
import dateFormat from '../constants/date'


export const getBaseDateFormat = (dateStr: string): string | null => {
    if (!dateStr) return null
    return dayjs(dateStr).format(dateFormat.baseDateFormat)
}

export const getHistoryDate = (dateStr: string, presentMsg?: string): string | null => {
    if (!dateStr) return null
    if (presentMsg && presentMsg !== '') {
        if (dayjs(dateStr).month() === new Date().getMonth()) return presentMsg
    }
    return dayjs(dateStr).format(dateFormat.historyDate)
}