import {Link} from 'react-router-dom'
import styles from './NotFound.module.css'
const NotFound = () => {
  return (
    <div>
      <div className={styles.NotFound}> 404 NotFound</div>
      <p><Link className={styles.Return}to="/">Return to MainPage</Link></p>
      </div>
  )
}

export default NotFound