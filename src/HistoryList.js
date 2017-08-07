import { map } from 'lodash'
import { eq, flow, orderBy } from 'lodash/fp'
import { setField, setWith } from 'cape-lodash'
import { connect } from 'react-redux'
import { selectHistoryState } from 'redux-history-sync'
import HistoryList from './HistoryListEl'

const addIsActive = ({ activeKey, key }) =>
  map(key, setWith('isActive', 'id', eq(activeKey)))

const mapStateToProps = flow(
  selectHistoryState,
  setField('items', flow(addIsActive, orderBy('index', 'asc')))
)

export default connect(mapStateToProps)(HistoryList)
