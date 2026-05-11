

        const files = [
            { name: "pycharm-2026.1", size: "2.4 MB", type: "📄", url: "/pycharm-2026.1.exe", downloads: 124, category: "Documents" },
        ];
           function view_n(){
                console.log("fahsjdfhas");
            }

        // Navigation functions
        function toggleMenu() {
            const navMenu = document.getElementById('navMenu');
            navMenu.classList.toggle('active');
        }

        function showSection(sectionId) {
            // Hide all sections
            const sections = document.querySelectorAll('.section');
            sections.forEach(section => {
                section.classList.remove('active');
            });

            // Remove active from all nav links
            const navLinks = document.querySelectorAll('.nav-link');
            navLinks.forEach(link => {
                link.classList.remove('active');
            });

            // Show selected section
            document.getElementById(sectionId).classList.add('active');
            
            // Add active to clicked link
            event.target.classList.add('active');
            
            // Close mobile menu
            document.getElementById('navMenu').classList.remove('active');
        }

        function renderFiles(filesToShow = files) {
            const grid = document.getElementById('filesGrid');
            const totalFiles = document.getElementById('totalFiles');
         
            
            grid.innerHTML = filesToShow.map(file => `
        
                
                <div class="file-card">
                    <div class="file-icon">${file.type}</div>
                    <div class="file-info">
                        <h3>${file.name}</h3>
                        <div class="file-size">${file.size} • ${file.downloads} downloads</div>
                        <button class="download-btn" onclick="view_n()">
                            ⬇️ View Now
                        </button>
                    </div>
                </div>
                 
            `).join('');
            
            totalFiles.textContent = files.length;
        }

        function searchFiles() {
            const query = document.getElementById('searchInput').value.toLowerCase();
            const filteredFiles = files.filter(file => 
                file.name.toLowerCase().includes(query)
            );
            renderFiles(filteredFiles);
        }
        function collagems(){
            window.open("https://www.w3schools.com");
        }
        function schoolms(){
            window.open("https://www.w3schools.com");
        }
        function trackDownload(fileName) {
            console.log(`Downloaded: ${fileName}`);
        }

        // Event listeners
        document.getElementById('searchInput').addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                searchFiles();
            }
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', function(event) {
            const navMenu = document.getElementById('navMenu');
            const navToggle = document.getElementById('navToggle');
            if (!navMenu.contains(event.target) && !navToggle.contains(event.target)) {
                navMenu.classList.remove('active');
            }
        });

        // Initial render
        renderFiles();
