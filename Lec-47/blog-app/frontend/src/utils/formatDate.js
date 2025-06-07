function formatDate(oldDate) {
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

  let timeAgo = "";

  const isToday = now.toDateString() === postDate.toDateString();
  // console.log("isToday: ", isToday)

  // console.log(now.toDateString())
  // console.log(postDate.toDateString())
  // console.log(diffHrs)
  if(isToday) {
    if(diffHrs < 1){
      timeAgo = `${diffMin} min${diffMin !== 1 ? "s": ""} ago`
    }else{
      timeAgo = `${diffHrs} hour${diffHrs !== 1 ? "s": ""} ago`
    }
  } else {
    timeAgo = `${diffDays} day${diffDays !== 1 ? "s": ""} ago`
  }

  return `${monthDay} (${timeAgo})`
}

export default formatDate;
