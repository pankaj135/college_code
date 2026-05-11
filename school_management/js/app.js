// class SchoolManagementSystem {
//     constructor() {
//         this.init();
//     }

//     init() {
//         this.setupEventListeners();
//         this.setupSidebar();
//         this.loadDashboard();
//     }

//     setupEventListeners() {
//         // Sidebar toggle
//         document.getElementById('menuToggle').addEventListener('click', () => {
//             document.getElementById('sidebar').classList.toggle('active');
//         });

//         // Navigation
//         document.querySelectorAll('.sidebar-nav a').forEach(link => {
//             link.addEventListener('click', (e) => {
//                 e.preventDefault();
//                 this.handleNavigation(link.getAttribute('href'));
//             });
//         });

//         // Modal handling
//         document.querySelectorAll('.close').forEach(closeBtn => {
//             closeBtn.addEventListener('click', () => {
//                 this.closeModal();
//             });
//         });

//         // Quick action buttons
//         document.querySelectorAll('.action-btn').forEach(btn => {
//             btn.addEventListener('click', (e) => {
//                 this.handleQuickAction(e.target.textContent.trim());
//             });
//         });
//     }

//     setupSidebar() {
//         const toggleBtn = document.getElementById('toggleBtn');
//         const sidebar = document.getElementById('sidebar');
        
//         toggleBtn.addEventListener('click', () => {
//             sidebar.classList.toggle('collapsed');
//         });
//     }

//     handleNavigation(target) {
//         // Update active nav
//         document.querySelectorAll('.sidebar-nav a').forEach(link => {
//             link.classList.remove('active');
//         });
//         event.target.classList.add('active');

//         // Update page title
//         const titles = {
//             '#dashboard': 'Dashboard',
//             '#students': 'Students Management',
//             '#teachers': 'Teachers Management',
//             '#attendance': 'Attendance',
//             '#grades': 'Grades',
//             '#fees': 'Fee Management',
//             '#timetable': 'Timetable',
//             '#library': 'Library',
//             '#reports': 'Reports',
//             '#settings': 'Settings'
//         };

//         document.getElementById('pageTitle').textContent = titles[target] || 'Dashboard';
        
//         // Load content based on section
//         this.loadSectionContent(target);
//     }

//     loadSectionContent(section) {
//         const content = document.querySelector('.content');
//         const sections = {
//             '#students': this.generateStudentsTable(),
//             '#teachers': this.generateTeachersTable(),
//             '#attendance': this.generateAttendanceView(),
//             '#fees': this.generateFeesTable()
//         };

//         if (sections[section]) {
//             content.innerHTML = sections[section];
//         }
//     }

//     generateStudentsTable() {
//         return `
//             <div class="table-container">
//                 <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
//                     <h2>Students List</h2>
//                     <button class="action-btn primary"
