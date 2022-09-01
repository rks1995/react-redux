import { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchUser } from '../redux'

const UserContainer = ({ userData, fetchUsers }) => {
  useEffect(() => {
    fetchUsers()
    // eslint-disable-next-line
  }, [])

  return (
    <div>
      {userData.loading ? (
        'Loading....'
      ) : userData.error ? (
        <h2>{userData.error}</h2>
      ) : (
        <div>
          <h2>User List</h2>
          {userData &&
            userData.user &&
            userData.user.map((user) => <p key={user.id}>{user.name}</p>)}
        </div>
      )}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    userData: state.user,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUser()),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)
