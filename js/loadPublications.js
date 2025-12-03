// Function to load publications content from publications-config.json
async function loadPublications() {
    try {
        // Determine the correct path to the config file based on the current page location
        let basePath = '';
        const response = await fetch(basePath + 'config/publications-config.json');
        const data = await response.json();
        const publicationsContainer = document.querySelector('.publication-list');

        if (publicationsContainer && data.publications) {
            // Generate publications HTML
            let publicationsHTML = data.publications.map(pub => {
                // Format authors list, highlighting the current user
                const formattedAuthors = pub.authors.map(author =>
                    author === "Suo Yuan" ? `<strong>${author}</strong>` : author
                ).join(', ');

                // Generate links with upload status check
                const linksHTML = pub.links.map(link => {
                    if (link.url === '#') {
                        return `<a href="#" class="btn disabled" onclick="showUploadAlert(event)">${link.text}</a>`;
                    } else {
                        return `<a href="${link.url}" class="btn" target="_blank">${link.text}</a>`;
                    }
                }).join('');

                return `
                    <div class="publication-item">
                        ${pub.img ? `<div class="publication-image"><img src="${basePath}${pub.img}" alt="${pub.title}"></div>` : ''}
                        <div class="publication-content">
                            <h3>${pub.title}</h3>
                            <p class="authors">${formattedAuthors}</p>
                            <p class="journal">${pub.journal}, ${pub.year}</p>
                            <div class="publication-links">
                                ${linksHTML}
                            </div>
                        </div>
                    </div>
                `;
            }).join('');

            // Add "Coming Soon" section with same styling as publication items
            const comingSoonHTML = `
            <div class="publication-item">
                <div class="publication-content">
                    <h2 style="width: 100%; margin-bottom: 20px;">Coming soon</h2>
                    <p>
                        Several research projects and manuscripts are currently in preparation. 
                        Our ongoing work focuses on <em>autonomous navigation strategies for lunar rovers</em>, 
                        with preprints and peer-reviewed publications expected shortly. 
                        Drafts are under internal review; they will be shared as soon as they become available.
                    </p>
                </div>
            </div>
        `;

            publicationsContainer.innerHTML = publicationsHTML + comingSoonHTML;
        }
    } catch (error) {
        console.error('Error loading publications:', error);
        const publicationsContainer = document.querySelector('.publication-list');
        if (publicationsContainer) {
            publicationsContainer.innerHTML = `<p>Error loading publications data.</p>`;
        }
    }
}

// Function to show alert for to-be-uploaded items
function showUploadAlert(event) {
    event.preventDefault();
    alert('To be uploaded');
}


// Load publications when DOM is loaded
// In SPA, this function may be called manually after content is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadPublications);
} else {
    // DOM is already loaded, call directly
    loadPublications();
}