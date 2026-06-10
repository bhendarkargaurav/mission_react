const employees = [
  {
    id: 1,
    firstName: "Aarav",
    email: "employee1@example.com",
    password: "123",
    taskCounts: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1,
    },
    tasks: [
      {
        taskTitle: "Design Login Page",
        taskDescription: "Create responsive login UI using React.",
        taskDate: "2026-06-10",
        category: "Frontend",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Fix Navbar Bug",
        taskDescription: "Resolve mobile navbar collapse issue.",
        taskDate: "2026-06-05",
        category: "Frontend",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        taskTitle: "Implement Dark Mode",
        taskDescription: "Add dark/light theme toggle.",
        taskDate: "2026-06-12",
        category: "UI/UX",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
    ],
  },

  {
    id: 2,
    firstName: "Vivaan",
    email: "employee2@example.com",
    password: "123",
    taskCounts: {
      active: 2,
      newTask: 1,
      completed: 2,
      failed: 0,
    },
    tasks: [
      {
        taskTitle: "Create REST API",
        taskDescription: "Build CRUD APIs for products.",
        taskDate: "2026-06-11",
        category: "Backend",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Database Optimization",
        taskDescription: "Optimize MongoDB queries.",
        taskDate: "2026-06-03",
        category: "Database",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        taskTitle: "JWT Authentication",
        taskDescription: "Implement login authentication.",
        taskDate: "2026-06-07",
        category: "Security",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        taskTitle: "Payment Gateway",
        taskDescription: "Integrate Razorpay payments.",
        taskDate: "2026-06-15",
        category: "Backend",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
    ],
  },

  {
    id: 3,
    firstName: "Arjun",
    email: "employee3@example.com",
    password: "123",
    taskCounts: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1,
    },
    tasks: [
      {
        taskTitle: "Write Test Cases",
        taskDescription: "Create unit tests for APIs.",
        taskDate: "2026-06-08",
        category: "Testing",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "API Documentation",
        taskDescription: "Document backend endpoints.",
        taskDate: "2026-06-02",
        category: "Documentation",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        taskTitle: "Bug Verification",
        taskDescription: "Verify resolved issues.",
        taskDate: "2026-06-06",
        category: "Testing",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
    ],
  },

  {
    id: 4,
    firstName: "Aditya",
    email: "employee4@example.com",
    password: "123",
    taskCounts: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        taskTitle: "Setup CI/CD",
        taskDescription: "Configure GitHub Actions pipeline.",
        taskDate: "2026-06-09",
        category: "DevOps",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Dockerize App",
        taskDescription: "Create Docker configuration.",
        taskDate: "2026-06-04",
        category: "DevOps",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        taskTitle: "Server Monitoring",
        taskDescription: "Configure monitoring dashboard.",
        taskDate: "2026-06-13",
        category: "Infrastructure",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
    ],
  },

  {
    id: 5,
    firstName: "Krishna",
    email: "employee5@example.com",
    password: "123",
    taskCounts: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1,
    },
    tasks: [
      {
        taskTitle: "Prepare Sprint Report",
        taskDescription: "Generate team progress report.",
        taskDate: "2026-06-01",
        category: "Management",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        taskTitle: "Client Meeting",
        taskDescription: "Discuss requirements with client.",
        taskDate: "2026-06-10",
        category: "Communication",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Requirement Analysis",
        taskDescription: "Analyze new project scope.",
        taskDate: "2026-06-14",
        category: "Business",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Project Estimation",
        taskDescription: "Estimate development effort.",
        taskDate: "2026-06-07",
        category: "Planning",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
    ],
  },
];


const admin = {
  id: 101,
  email: "admin@example.com",
  password: "123"
};

export const setLocalStorage = () => {
    localStorage.setItem('employees', JSON.stringify(employees))
    localStorage.setItem('admin', JSON.stringify(admin))
}

export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))
    
    return {employees, admin}

}