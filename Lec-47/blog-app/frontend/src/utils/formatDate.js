function formatDate(oldDate = "2025-05-25T06:00:15.920Z") {
  const now = new Date();
  const postDate = new Date(oldDate);

  const diffMs = now - postDate;
  const diffMin = Math.floor(diffMs / (1000 * 60));
  const diffHrs = Math.floor(diffMin / 60);
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  const monthDay = postDate.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  })




}

formatDate();

// export default formatDate;
