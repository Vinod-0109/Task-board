export default function ActivityLog() {
  const logs = JSON.parse(localStorage.getItem("logs") || "[]");

  return (
    <div>
      <h3>Activity Log</h3>
      {logs.map((l, i) => (
        <p key={i}>{l.time} - {l.msg}</p>
      ))}
    </div>
  );
}
