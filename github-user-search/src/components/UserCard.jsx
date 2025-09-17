export default function UserCard({ user }) {
  return (
    <div className="border rounded-xl p-4 shadow-md flex items-center gap-4">
      <img
        src={user.avatar_url}
        alt={user.login}
        className="w-16 h-16 rounded-full"
        loading="lazy"
      />
      <div>
        <h2 className="text-lg font-bold">{user.name || user.login}</h2>
        <p className="text-sm text-gray-600">
          {user.location || "Location not available"}
        </p>
        <p className="text-sm">
          Public Repos: {user.public_repos} | Followers: {user.followers}
        </p>
        <a
          href={user.html_url}
          target="_blank"
          rel="noreferrer"
          className="text-blue-500 underline text-sm"
        >
          View Profile
        </a>
      </div>
    </div>
  );
}
