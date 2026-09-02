function UserCard({ name, email, role }) {
  return (
    <div className="user-card">
      <div className="avatar">{name.charAt(0)}</div>
      <div>
        <h4>{name}</h4>
        <p>{email}</p>
        <span className="role">{role}</span>
      </div>
    </div>
  );
}

export default UserCard;