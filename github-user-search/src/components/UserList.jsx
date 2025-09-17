import UserCard from "./UserCard";

export default function UserList({ users }) {
  if (!users.length) return null;

  return (
    <div className="grid gap-4 mt-6">
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
}
