function handlePathChange() {
  const path = document.getElementById("path").value;
  document.getElementById("job-section").style.display = path === "job" ? "block" : "none";
  document.getElementById("study-section").style.display = path === "higher-studies" ? "block" : "none";
  document.getElementById("role-section").style.display = "none"; // Hide role section initially
}

function submitForm() {
  const path = document.getElementById("path").value;

  if (path === "job") {
    const resume = document.getElementById("resume").files[0];
    const jobDesc = document.getElementById("job-desc").value.trim().toLowerCase();

    if (!resume || resume.type !== "application/pdf") {
      alert("Please upload a valid PDF resume.");
      return;
    }

    if (!jobDesc) {
      alert("Please enter a job description.");
      return;
    }

    let videoLinks = "";

    // Keyword-based video recommendations
    if (jobDesc.includes("data science")) {
      videoLinks = `
        <div class="yt-recommendations">
          <p>🎥 Recommended Data Science Videos:</p>
          <ul>
            <li><a href="https://www.youtube.com/watch?v=ua-CiDNNj30" target="_blank"><b>Data Science Full Course - freeCodeCamp</b></a></li>
            <li><a href="https://www.youtube.com/watch?v=LHBE6Q9XlzI" target="_blank"><b>Python for Data Science - Corey Schafer</b></a></li>
            <li><a href="https://www.youtube.com/watch?v=8q5OQZ5yY8g" target="_blank"><b>Data Science Projects - Krish Naik</b></a></li>
          </ul>
        </div>
      `;
    } else if (jobDesc.includes("aiml") || jobDesc.includes("artificial intelligence") || jobDesc.includes("machine learning")) {
      videoLinks = `
        <div class="yt-recommendations">
          <p>🎥 Recommended AI/ML Videos:</p>
          <ul>
            <li><a href="https://www.youtube.com/watch?v=YQ3Prc7sYjc" target="_blank"><b>Machine Learning Course - Andrew Ng</b></a></li>
            <li><a href="https://www.youtube.com/watch?v=GwIo3gDZCVQ" target="_blank"><b>AI Full Course - freeCodeCamp</b></a></li>
          </ul>
        </div>
      `;
    } else {
      videoLinks = `<p>No specific video recommendations. Resume uploaded for <strong>${jobDesc}</strong>.</p>`;
    }

    // Save recommendations to localStorage
    localStorage.setItem("ytRecommendations", videoLinks);

    // Open new page
    window.open("recommendations.html", "_blank");

  } else if (path === "higher-studies") {
    const field = document.getElementById("field").value.trim().toLowerCase();

    if (!field) {
      alert("Please enter your field of study.");
      return;
    }

    if (field === "computer science") {
      document.getElementById("role-section").style.display = "block";
      alert("Please enter your role to generate roadmap.");
    } else {
      alert(`Preparing roadmap for higher studies in ${field}...`);
    }
  } else {
    alert("Please select a path.");
  }
}
