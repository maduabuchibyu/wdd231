
    // Responsive menu toggle
    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("show");
    });

    // Dynamic year and last modified
    document.getElementById("currentyear").textContent = new Date().getFullYear();
    document.getElementById("lastModified").textContent = document.lastModified;

    // Course data
    const courses = [
      { code: "CSE 110", name: "Introduction to Programming", credits: 2, type: "CSE", completed: true },
      { code: "CSE 111", name: "Programming with Functions", credits: 2, type: "CSE", completed: true },
      { code: "CSE 210", name: "Programming with Classes", credits: 2, type: "CSE", completed: true },
      { code: "WDD 130", name: "Web Fundamentals", credits: 2, type: "WDD", completed: true },
      { code: "WDD 131", name: "Dynamic Web Fundamentals", credits: 2, type: "WDD", completed: true },
      { code: "WDD 231", name: "Frontend Web Development I", credits: 2, type: "WDD", completed: true },
    ];

    const courseContainer = document.getElementById("course-container");
    const totalCreditsEl = document.getElementById("total-credits");

    function displayCourses(filteredCourses) {
      courseContainer.innerHTML = "";
      filteredCourses.forEach(course => {
        const card = document.createElement("div");
        card.classList.add("course-card");
        if (course.completed) card.classList.add("completed");

        card.innerHTML = `
          <h3>${course.code}</h3>
          <p>${course.name}</p>
          <p><strong>Credits:</strong> ${course.credits}</p>
        `;
        courseContainer.appendChild(card);
      });

      const total = filteredCourses.reduce((sum, c) => sum + c.credits, 0);
      totalCreditsEl.textContent = `Total Credits: ${total}`;
    }

    // Filter buttons
    document.getElementById("all-btn").addEventListener("click", () => displayCourses(courses));
    document.getElementById("wdd-btn").addEventListener("click", () => displayCourses(courses.filter(c => c.type === "WDD")));
    document.getElementById("cse-btn").addEventListener("click", () => displayCourses(courses.filter(c => c.type === "CSE")));

    // Default display
    displayCourses(courses);
  