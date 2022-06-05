import Card from "../UI/Card";
// import User from "./User";
import styles from "./UsersList.module.css";
const UsersList = (props) => {
  return (
    <Card className={styles.users}>
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            {user.userName} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};
export default UsersList;
